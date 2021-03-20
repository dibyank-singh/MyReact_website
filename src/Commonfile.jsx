import React from 'react'
import { NavLink } from 'react-router-dom';
import frontimg from '../src/images/img5.jpg'


const Commonfile = (props) => {
    return (
        <>
            <section id="sec_header" className=""  >

                <div className="Container-fluid nav-bg">
                    <div className='row'>
                        <div className='col-10  mx-auto mt-4 mt-lg-5 '>
                            <div className="row">
                                <div className="col-md-6 col-lg-0 pt-5 pt-lg-0 order-2 order-lg-1  
                                d-flex justify-content-center flex-column ">

                                    <h1> {props.name} <strong className="brnd_fnt">  Dibyank Singh</strong></h1>
                                    <h2 className="my-3 "> Join Us To Become Web Developer</h2>

                                    <div className="mt-3">
                                        <NavLink to={props.sent} className="btn btn-primary btn-rounded"> {props.btnname}</NavLink>
                                    </div>

                                </div>

                                <div className="col-lg-6 order-2 order-lg-1 mt-3 header-img">
                                    <img src={props.imgsrc} className="img-fluid img_animate  " alt="Home Page" />
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}

export default Commonfile;
