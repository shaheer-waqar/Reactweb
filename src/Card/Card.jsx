import React from 'react'
import styles from './Card.module.css'


export default function Card() {
    const cardObj = [
        {
            src:"/card1.png",
            title:"Let's Talk Science"
        },
        {
            src:"/card2.png",
            title:"Innovative Course"
        },
        {
            src:"/card3.png",
            title:"Cloud Storage"
        },
        {
            src:"/card4.png",
            title:"Online Education"
        }
    ]

  return (
    <div className="container-fluid mt-5">
        <div className="row px-2 px-md-5 row-gap-5">
            {
                cardObj.map((e,i)=>{
                    return (
                        <div className={ `${styles.card} col-lg-3 col-12`} key={i}>
                            <div className='px-3'>
                                <div className={styles.imgDiv}>
                               <img src={e.src} alt="" />                                    
                               <div className={styles.overlay}></div>
                                </div>
                               <div className={styles.cardDetails}>
                                 <p>{e.title}</p>
                                 <p>Learn More</p>
                               </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
