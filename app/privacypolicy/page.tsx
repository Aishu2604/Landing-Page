"use client"
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className='text-center text-white md:text-4xl text-2xl bg bg-[#FF6A02]   p-6 shadow-lg  lg:mx-[4rem] mt-10'>
                Privacy And Policy
            </div>
            <main className="container mx-auto flex flex-wrap justify-around py-6">

                <div>
                    <div className="mb-6">
                        <h2 className="text-gray-900 font-bold text-2xl">What information do we collect?</h2>
                        <p className="text-gray-700">We collect the following information from you when you use our website:</p>
                        <ul className="list-disc ml-6">
                            <li>Your IP address</li>
                            <li>The browser and operating system you are using
                            </li>
                            <li>Any information you voluntarily submit to us, such as your name and email address</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-gray-900 font-bold text-2xl">How do we use your information?</h2>
                        <p className="text-gray-700">We use your information for the following purposes:</p>
                        <ul className="list-disc ml-6">
                            <li>To provide you with the services you request</li>
                            <li>To improve our website and services</li>
                            <li>To send you marketing and promotional emails (if you have opted in to receive them)</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-gray-900 font-bold text-2xl">How do we share your information?</h2>
                        <p className="text-gray-700">We do not share your information with any third parties, except as required by law.</p>
                    </div>
                </div>

                <div>
                    <div className="mb-6">
                        <h2 className="text-gray-900 font-bold text-2xl">How do we protect your information?</h2>
                        <p className="text-gray-700">We take the following steps to protect your information:</p>
                        <ul className="list-disc ml-6">
                            <li>We store your information in secure servers</li>
                            <li>We use encryption to protect your information</li>
                            <li>We only give access to your information to authorized personnel</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-gray-900 font-bold text-2xl">Your choices</h2>
                        <p className="text-gray-700">You have the following choices regarding your information:</p>
                        <ul className="list-disc ml-6">
                            <li>You can opt out of receiving marketing and promotional emails from us</li>
                            <li>You can request access to your information</li>
                            <li>You can request that we delete your information</li>
                        </ul>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default PrivacyPolicy