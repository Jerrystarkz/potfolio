import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j47zjvf', 'template_9f37bv1', form.current, 'Ptihfd5Rc1cEZo1mY')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>Jerrynuhu99@gmail.com</h5>
            <a href="mailto:Jerrynuhu99@gmail.com" target="-blank" rel="noopener noreferrer">Send a message</a>

          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Jerry Starkz Profiles</h5>
            <a href="https://m.me/jerry.nuhu" target="-blank" rel="noopener noreferrer">Send a message</a>

          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2348169495620</h5>
            <a href="https://api.whatsapp.com/send?phone+2348169495620" target="-blank" rel="noopener noreferrer">Send a message</a>

          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact