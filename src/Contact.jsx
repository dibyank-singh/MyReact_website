import React,{useState} from 'react'
import axios from 'axios'

export const Contact = () => {

const [input , setInput] = useState({ 
    fullname:'',
    phone:'',
    email:'',
    msg:'',
})
   
  const textevent =(event)=>{
      const {name , value}= event.target;

      setInput((preval)=>{
        return{
            ...preval , [name]:value ,
        };
      })

  }

   const submitevents =(e)=>{
       e.preventDefault()
      const newdatabody={
        fullname:input.fullname,
        phone:input.phone,
        email:input.eamil,
        msg:input.msg,
      }
      
      axios.post("http://localhost:3001/Contact", newdatabody)
   };

    return (
        <>
            <div className="my-4">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <div className="container cont_sty">
                <div className="row">

                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submitevents} >
                            <div class="mb-2">
                                <label
                                    for="exampleFormControlInput1" class="form-label">FullName
                                </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                   name="fullname"
                                   value={input.fullname}
                                   onChange={textevent}
                                   placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-2">
                                <label
                                    for="exampleFormControlInput1" class="form-label"> Phone
                                </label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                   name="phone"
                                   value={input.phone}
                                   onChange={textevent}
                                   placeholder="Enter Your Phone No" />
                            </div>
                            <div class="mb-2">
                                <label
                                    for="exampleFormControlInput1" class="form-label">Email address
                                </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                   name="email"
                                   value={input.email}
                                   onChange={textevent}
                                   placeholder="Enter Your Email" />
                            </div>


                            <div class="mb-2 ">
                                <label for="exampleFormControlTextarea1" class="form-label">Write Here</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3 " name="msg"
                                   value={input.msg}
                                   onChange={textevent}>

                                </textarea>
                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary   my-2" type="submit">Submit form</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;