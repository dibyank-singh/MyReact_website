import React from 'react'
import { NavLink } from 'react-router-dom';

import frontimg from '../src/images/img5.jpg'
import Commonfile from './Commonfile';


const Home = () => {
    return (
        <>
       <Commonfile
        name="Learn Mern Stack With"
        imgsrc={frontimg }
        sent="/Service"
        btnname="Get Started"
       
       />
        </>
    )
}

export default Home;
