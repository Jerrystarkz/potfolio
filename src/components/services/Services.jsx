import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
     <h5> What i offer</h5>
     <h2> Services</h2>
     <div className="container services_container">
       <articles className="service">
         <div className="service_head">
           <h3>UI/UX Design</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
         </ul>
       </articles>
       {/* END OF UX/UI ARTICLE */}
       <articles className="service">
         <div className="service_head">
           <h3>Web Development</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
         </ul>
       </articles>
      {/* END OF WEB DEVELOPMENT */}

      <articles className="service">
         <div className="service_head">
           <h3>Content Creation</h3>
         </div>
         <ul className="service_list">
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
           <li>
             <BiCheck className='service_list-icon' />
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
           </li>
         </ul>
       </articles>
       {/* END OF CONTENT CREATION */}
     </div>
    </section>
  )
}

export default Services