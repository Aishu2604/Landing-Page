"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { AiTwotoneHome } from 'react-icons/ai'
import { IoMdCall } from 'react-icons/io'
import { BiLogoGmail } from 'react-icons/bi'

import Footer from '@/components/footer'
import Header from '../header'






const ContactUs = () => {
    return (
        <>
            <Header />
            <div className='grid md:grid-cols-4 grid-cols-1 md:m-10 '>

                <div className='md:col-span-3  '>
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-2xl md:text-4xl  font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue?  Need details about our Business plan? Let us know.</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter your Email" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your name" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                                <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>

                            <Button className="w-[268px] mx-auto text-center" >Submit</Button>
                        </form>
                    </div>

                </div>
                <div className='md:col-span-1 w-full  md:mx-2 rounded-lg p-5 bg-[#00000012] flex flex-col items-center justify-arround'>
                    <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                    <div className='flex flex-col gap-10 items-start justify-center mt-5 text-center  '>

                        <div>
                            <div className='flex items-center gap-2'>
                                <AiTwotoneHome />
                                <strong className='text-2xl' >Address</strong>
                            </div>
                            <p>Block 1, street 1 xyz india</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <IoMdCall />
                                <strong className='text-2xl' >Call Us</strong>
                            </div>
                            <p>12345678</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <BiLogoGmail />
                                <strong className='text-2xl' >Email</strong>
                            </div>
                            <p>xyz@gmail.com</p>
                        </div>
                    </div>


                </div>


            </div>
            <Footer />
        </>

    )
}

export default ContactUs