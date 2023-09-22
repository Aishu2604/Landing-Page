"use client"
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'

const TermsAndCondition = () => {
    return (
        <>
            <Header />
            <div className='text-center text-white md:text-4xl text-2xl bg bg-[#FF6A02]   p-6 shadow-lg  lg:mx-[4rem] mt-10'>
                Terms & Condition
            </div>
            <main className="container mx-auto flex flex-col py-6">
                <section className="mb-6">
                    <h2 className="text-gray-900 font-bold text-2xl">Welcome to our Terms and Conditions</h2>
                    <p className="text-gray-700">These terms and conditions outline the rules and regulations for the use of our website.</p>
                    <p className="text-gray-700">By accessing our website, you agree to be bound by these terms and conditions. If you do not agree to any of these terms and conditions, please do not use our website.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-gray-900 font-bold text-2xl">Use of our website</h2>
                    <p className="text-gray-700">You are permitted to use our website for your personal and non-commercial use only. You are not permitted to use our website for any commercial purposes, including but not limited to selling products or services or advertising products or services.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-gray-900 font-bold text-2xl">Intellectual property</h2>
                    <p className="text-gray-700">All intellectual property rights in and to our website, including but not limited to copyrights, trademarks, and patents, are owned by us or our licensors.</p>
                    <p className="text-gray-700">You are not permitted to use any of our intellectual property without our prior written consent.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-gray-900 font-bold text-2xl">Limitation of liability</h2>
                    <p className="text-gray-700">To the fullest extent permitted by law, we exclude all liability for any loss or damage arising from your use of our website.</p>
                </section>
                <section className="mb-6">
                    <h2 className="text-gray-900 font-bold text-2xl">Governing law</h2>
                    <p className="text-gray-700">These terms and conditions are governed by and construed in accordance with the laws of India.</p>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default TermsAndCondition