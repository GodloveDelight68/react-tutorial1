import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#" className="footer__logo">
          Godlove
        </a>

        <ul className="permalinks">
          <li>
            <a href="#experience">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
          <a href="https://linkedin.com/in/delight-amarachukwu-84719926b/" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/DelightGodlove68" target="blank">
            <FaGithub />
          </a>
          <a href="https://facebook.com" target="blank">
            <FaFacebookF />
          </a>
         
        </div>

        <div className="copyRight">
            <h3> @ Godlove 2023</h3>
        </div>
      </div>
    );
}

export default Footer
