import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const headerSocials = () => {
  return (
    <div className='header__socials'>

        <a href="https://linkedin.com" target="_blank" rel ="noopener noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel ="noopener noreferrer" ><FaGithub /></a>
       

    </div>
  )
}

export default headerSocials