"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'

const About = () => {
    return (
        <div>
            <Header />
            <div className="w-full md:h-[300px] h-[150px] ">
                <img src="/About-Us-1.jpg" alt="" className='w-full h-full' />
            </div>

            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-end  gap-4  mt-6">
                        <div className='md:2/3 w-full flex flex-col justify-center gap-5'>
                            <h1 className='text-center mt-5 md:text-4xl text-2xl font-semibold'>Our Company</h1>
                            <p className='text-center  text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quos.</p>
                            <div >
                                <p className="text-gray-700">We are a team of passionate people who are dedicated to providing our customers with the best possible products and services. We believe that everyone deserves to have access to high-quality products at an affordable price. That's why we offer a wide range of products at competitive prices.</p>
                            </div>
                            <div >
                                <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquam excepturi a ullam quod veniam nesciunt incidunt mollitia omnis. Repellendus libero tempore delectus minus explicabo sed doloremque incidunt natus modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam cumque recusandae sit fugit nisi illo id eligendi asperiores minima tempora dolorem dolor ipsum quia temporibus quae placeat maxime maiores, accusamus explicabo. Facilis ipsum repellat, omnis, cupiditate deleniti sit impedit itaque eveniet, maiores voluptatem aliquid voluptas molestiae necessitatibus totam porro!</p>
                            </div>
                        </div>
                        <div className='w-1/3 hidden md:block '>
                            <img src='/Mask Group 156@2x.png' alt='' className='w-full' />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mt-6">
                        <div className="w-full md:w-1/3">
                            <h2 className="text-gray-900 font-bold text-xl">Our Mission</h2>
                            <p className="text-gray-700">Our mission is to provide our customers with the best possible products and services at an affordable price. We are committed to providing our customers with excellent customer service.</p>
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0">
                            <h2 className="text-gray-900 font-bold text-xl">Our Values</h2>
                            <ul className="list-disc ml-6 text-gray-700">
                                <li>Customer satisfaction</li>
                                <li>Quality products</li>
                                <li>Affordable prices</li>
                                <li>Excellent customer service</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mt-6 md:mt-0">
                            <h2 className="text-gray-900 font-bold text-xl">Our Team</h2>
                            <p className="text-gray-700">We have a team of dedicated and experienced professionals who are committed to providing our customers with the best possible products and services. We are always looking for new ways to improve our products and services, and we are always looking for new ways to serve our customers better.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About