"use client"
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'

const ReturnPolicy = () => {
    return (
        <>
            <Header />
            <div className='text-center text-white md:text-4xl text-2xl  bg-[#FF6A02]   p-6 shadow-lg  lg:mx-[4rem] mt-10'>
                Return and Refund Policy            </div>
            <div className="container mx-auto py-12">
                <h1 className="text-gray-900 font-bold text-2xl">Return and Refund Policy</h1>
                <p className="text-gray-700 mt-6">
                    We offer a 30-day return and refund policy. If you are not satisfied with your purchase for any reason, you can return it for a full refund.
                </p>
                <p className="text-gray-700 mt-6">
                    To return an item, please contact us at xyz@gmail.com and we will provide you with a return shipping label. All returns must be in their original packaging and must be in new and unused condition.
                </p>
                <p className="text-gray-700 mt-6">
                    Once we receive your return, we will process it within 3-5 business days. You will receive a full refund to your original payment method.
                </p>
                <h2 className="text-gray-900 font-bold text-xl mt-6">Non-Returnable Items</h2>
                <p className="text-gray-700 mt-6">
                    The following items are non-returnable:
                </p>
                <ul className="list-disc ml-6">
                    <li>Gift cards</li>
                    <li>Custom-made items</li>
                    <li>Items that have been used or damaged</li>
                </ul>
                <p className="text-gray-700 mt-6">
                    If you have any questions about our return and refund policy, please contact us at xyz@gmail.com
                </p>
            </div>
            <Footer />
        </>
    )
}

export default ReturnPolicy