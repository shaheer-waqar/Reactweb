import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className="container-xxl bg-dark px-5 py-5 mt-5">
        <div className="row">
            <div className="col-lg-3 text-white">
                <div><img src="/logo2.png" alt="" /></div>
                <p>There are course and event custom post types so you can easily create and manage course, events.</p>
                <div className={styles.contacts}>
                    <p><i className="ri-phone-line"></i> +(402) 762 441 83</p>
                    <p><i className="ri-mail-line"></i> info@echooling.com</p>
                </div>
            </div>
            <div className={`${styles.footerlist} col-lg-3 px-0  px-lg-5 `}>
              <h2 className='text-white'>About</h2>
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Events</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Become a Teacher</a></li>
                <li><a href="">Contacts</a></li>
              </ul>
            </div>

            <div className={`${styles.footerlist} col-lg-3 px-2 px-lg-4`}>
              <h2 className='text-white'>Useful Links</h2>
              <ul>
                <li><a href="">Browse Library</a></li>
                <li><a href="">Library</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">News & Blog</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="">Tutorials</a></li>
              </ul>
            </div>
            <div className={`${styles.footerlist} col-lg-3 text-white`}>
              <h2>Newsletter</h2>
              <div>
                <p>Get the latest Echooling news delivered to you inbox</p>
                <div className={styles.inpBox}>
                  <input type="text" placeholder='Enter Your Email' />
                  <div className={styles.inpArrow}>
                  <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>

              
            </div>
        </div>
    </div>
  )
}
