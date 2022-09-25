import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Jerry Starkz</a>
      <ul className='permalinks'>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#potfolio">Potfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        

      </ul>
      <div className="footer_socials">
        <a href="http://facebook.com"><FaFacebookF/></a>
        <a href="http://instagram.com"><FiInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Jerry Starkz. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer