import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
return(
    <>

<footer class="bg-dark text-center text-white mt-5">
  
  <div class="container p-4 mt-4">
 

    <section class="">
      <form action="">
        <div class="row d-flex justify-content-center">
          
          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for learn Web Development</strong>
            </p>
          </div>
          

          
          <div class="col-md-5 col-12 mt-1">
        
            <div class="form-outline form-white mb-4 ">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </div>
          

          
          <div class="col-auto">
            
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          
        </div>
        
      </form>
    </section>
  

    
    <section class="mb-4">
      <p>
       We are the group of best web developer , Join us to enhance your career growth 
      </p>
    </section>
   
    <section class="">
    
      <div class="row">
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="">Our Services</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <NavLink to="#" class="text-white text-decoration-none ">Mern Stack </NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Full Stack </NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">JavaScript</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Python</NavLink>
            </li>
          </ul>
        </div>
        
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="">About Us </h5>

          <ul class="list-unstyled mb-0">
            <li>
              <NavLink to="#" class="text-white text-decoration-none"> Who are we </NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Career</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Investor</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Terms of service</NavLink>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="">Contact Us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <NavLink to="#" class="text-white text-decoration-none " >Contact</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none " >Support</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none " >Stake Holder</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none " >SponsorShips</NavLink>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="">Social Media</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Facebook</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Linked In</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Instagram</NavLink>
            </li>
            <li>
              <NavLink to="#" class="text-white text-decoration-none">Twitter</NavLink>
            </li>
          </ul>
        </div>

      </div>
     
    </section>
   
  </div>
 
  <div class="text-center p-3" >
    © 2021 Copyright: All Rights Reserve | Dibyank Singh Mern Stack | Terms and Condition 
    
  </div>
 
</footer>

        </>
    )
}

export default Footer;
