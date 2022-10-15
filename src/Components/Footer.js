import React from 'react';
import {FaCopyright} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='container footer mt-5   py-5'>
          <div className='d-flex justify-content-between'>
              <div><FaCopyright/> 
              <span>Tech Women Factory 2022</span></div>
              <div>
              <FaFacebook/>
              <FaTwitter/>
              <FaYoutube/>
              </div>
          </div>
    </div>
  )
}

export default Footer;