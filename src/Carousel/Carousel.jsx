import React from 'react'
import styles from './Carousel.module.css'

export default function Hey() {
  return (
    <>
      <div className={styles.carousel}>
        <div className="container-xxl h-100 ">
            <div className="row h-100">
                <div className={`col-lg-1 d-none d-lg-flex justify-content-center align-items-center`}>
                    <div className={styles.arrow}><i className="ri-arrow-left-s-line"></i></div>
                </div>

                <div className={`${styles.admission} col-12 col-lg-7 d-flex flex-column px-lg-0 px-5 `}>
                  <h3 className=''>Great Quality Cocial life</h3>
                  <h1 className='text-white fs-sm-1 w-75 '>Dicover the world of possible universty.</h1>

                </div>

                <div className='col-lg-3 d-none d-lg-flex justify-content-center align-items-center gap-2'>
                  <div className={styles.videoBtn}><i className="ri-arrow-right-s-fill"></i></div>
                  <h4 className='text-white'>Watch Video Intro</h4>
                </div>

                <div className={`col-lg-1  d-none d-lg-flex justify-content-center align-items-center`}>
                    <div className={styles.arrow}><i className="ri-arrow-right-s-line"></i></div>
                </div>
            </div>
        </div>
      </div>   
    </>

)
}
