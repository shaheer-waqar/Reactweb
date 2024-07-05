import React from 'react'
import styles from './Review.module.css'
import Heading from '../Heading/Heading'

export default function Review() {
  return (
    <div className={`container-fluid px-4 px-md-5 py-5 `}>
        <div className="row">
            <div className="col-12 text-center">
                <Heading text="What our student saying"/>
            </div>
        </div>
        <div className={`row row-gap-5 ${styles.reviewContain} px-0 px-md-3 py-4 mt-5`}>
            <div className="col-12 col-lg-3 text-center text-lg-start">
                <div className='px-0 px-md-3'>
                    <img src="/Review.png"  />
                </div>
            </div>
            <div className="col-12 col-lg-7 d-flex flex-column gap-4 text-center text-lg-start">
                <div className={styles.Name}>
                  <h5>Justin Case</h5>
                  <span>Student</span>
                </div>
                <div className={styles.review}>
                    <p className='fs-5 '>Nulla porttitor accumsan tincidunt. vamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in.</p>
                </div>
                <div className={styles.Rating}>
                    <span className={styles.stars}><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-line"></i></span>
                    <span className='fw-bold'>4.9</span>
                    <span className='fw-sm'>(14 Reviews)</span>
                </div>
            </div>
        </div>
    </div>
  )
}
