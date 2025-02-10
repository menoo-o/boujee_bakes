import React from 'react'
import Image from 'next/image'
import './hero.css'
import Link from 'next/link'


  export default function Hero() {
    
  return (
    <>
        <section className='hero-container'>
            <div className='hero-img'>
            <Image
                src='/herov1.jpeg' // Use fileId here
                fill
                priority={true}
                alt={'hero-image'}
                style={{ objectFit: 'cover' }} // Ensures the image covers the container
        />
            </div>
            {/*text & btn higher z-index place on the image */}
            <div className='hero-caption'>
                <h1>Get your boujee on with <br /><span>Boujee Bakes</span><br /></h1>
            </div>

            <div className='links'>
                <div className='link-baked-to-order'>
                    <Link href='/collections' className="btn btn-glass">Shop Brownies</Link>
                    <p>Get it in 48hrs</p>
                </div>
                <div className='link-order-now'>
                    <Link href='/collections' className="btn btn-glass order-now">Last Minute Order</Link>
                    <p>Get it in 24 Hrs+</p>
                </div>

            </div>
        </section> 
    </>
  )
}
