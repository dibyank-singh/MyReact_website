import React from 'react'
import Commonfile from './Commonfile'
import aboutimg from '../src/images/img4.jpg'

const About = () => {
    return (
        <div>
           <Commonfile
            name="Know More About Us"
            imgsrc={aboutimg}
            sent="/contact"
            btnname="Contact Us"
           
           />
        </div>
    )
}

export default About;
