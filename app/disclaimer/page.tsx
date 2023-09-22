"use client"
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'

const Disclaimer = () => {
    return (
        <>
            <Header />
            <div className='text-center text-white md:text-4xl text-2xl  bg-[#FF6A02]   p-6 shadow-lg  lg:mx-[4rem] mt-10'>
                Disclaimer
            </div>
            <div className="container mx-auto py-12">
                <h1 className="text-gray-900 font-bold text-2xl">Disclaimer</h1>
                <p className="text-gray-700 mt-6">
                    This website is provided for informational purposes only and should not be construed as legal advice. The information on this website is not a substitute for professional legal advice. If you have any legal questions, you should consult with an attorney.
                </p>
                <p className="text-gray-700 mt-6">
                    The information on this website is subject to change without notice. We make no warranties or representations as to the accuracy or completeness of the information on this website.
                </p>
                <p className="text-gray-700 mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti unde nam reprehenderit? Aliquid unde dolorem atque asperiores velit voluptatibus? Ipsa enim sapiente placeat commodi, tenetur molestias aut illo fugiat?
                </p>
            </div>
            <Footer />
        </>
    )
}

export default Disclaimer