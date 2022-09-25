import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
            <div> <h4> HTML </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> CSS </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> Bootstrap </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> Javascript </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div>
               <h4> React </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>

        </div>

        {/* END OF FRONT END */}
        <div className="experience_Backend">

        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> PHP </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> MYSQL </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4>NodeJS </h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details-icons' />
             <div><h4> MongoDB </h4>
             <small className='text-light'>Experienced</small></div>
            </article>
            
          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience