import React from 'react'
import Cardservice from './Cardservice'
import Servicesdata from './Servicesdata'

const Service = () => {
    return (
        <div className="my-3">
            <h1 className="text-center mb-3" >Our Services</h1>
            <div className="Container-fluid mb-5">
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row gy-4">
                         {
                             Servicesdata.map((val , ind)=>{
                                 return <Cardservice
                                 
                                 imgsrc={val.imgsrc}
                                 title={val.title}
                                 
                                 />

                             })
                         }
                        </div>

                    </div>

                </div>

            </div>

        </div>
            
        
    )
}

export default Service;
