"use client"
import React from 'react'
import Header from '../header'
import Footer from '@/components/footer'
import { IoMdArrowDropdownCircle } from 'react-icons/io'


const FAQ = () => {
    return (
        <>
            <Header />
            <div className='text-center text-white md:text-4xl text-2xl bg bg-[#FF6A02]   p-6 shadow-lg  lg:mx-[4rem] mt-10'>
                Frequently asked questions
            </div>
            <section
                className="bg-white px-2 md:px-10 pb-8 pt-10 rounded-lg "
            >
                <div className="">
                    <p className="text-xl font-semibold  text-center my-4">
                        Have Questions ? We're here to help
                    </p>
                </div>
                <div >
                    <details className="border border-slate-200 rounded relative open:shadow-lg mb-4 bg-none open:bg-white duration-300 p-5 "
                    >
                        <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7 "
                        >
                            <p className='md:text-[20px] text-sm'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, natus!</p>
                            <div className="absolute top-0 right-0  px-1 py-0.5 cursor-pointer visible open:invisible md:text-2xl text-xl">
                                <IoMdArrowDropdownCircle />

                            </div>
                        </summary>
                        <p className=" pt-3 text-[#484848] ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem accusantium libero aspernatur aliquam ipsam, sint obcaecati molestias dolores fugiat?
                        </p>
                    </details>
                    <details
                        className="border  mb-4 border-slate-200 rounded  relative open:shadow-lg  bg-none open:bg-white duration-300 p-5"
                    >
                        <summary
                            className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                        > <p className='md:text-[20px] text-sm'>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <div
                                className="absolute top-0 right-0  px-1 py-0.5 cursor-pointer visible open:invisible md:text-2xl text-xl"
                            >
                                <IoMdArrowDropdownCircle />

                            </div>
                        </summary>
                        <p className=" pt-3 text-[#484848]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem accusantium libero aspernatur aliquam ipsam, sint obcaecati molestias dolores fugiat?
                        </p>
                    </details>
                    <details
                        className="border border-slate-200 rounded  relative open:shadow-lg  mb-4 bg-none open:bg-white duration-300 p-5"
                    >
                        <summary
                            className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                        >  <p className='md:text-[20px] text-sm'>

                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                            <div
                                className="absolute top-0 right-0  px-1 py-0.5 cursor-pointer visible open:invisible md:text-2xl text-xl"
                            >
                                <IoMdArrowDropdownCircle />

                            </div>
                        </summary>
                        <p className=" pt-3 text-[#484848]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem accusantium libero aspernatur aliquam ipsam, sint obcaecati molestias dolores fugiat?
                        </p>
                    </details>
                    <details
                        className="border border-slate-200 rounded  relative open:shadow-lg  mb-4 bg-none open:bg-white duration-300 p-5"
                    >
                        <summary
                            className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                        >    <p className='md:text-[20px] text-sm'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                            <div
                                className="absolute top-0 right-0  px-1 py-0.5 cursor-pointer visible open:invisible md:text-2xl text-xl"
                            >
                                <IoMdArrowDropdownCircle />

                            </div>
                        </summary>
                        <p className=" pt-3 text-[#484848]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem accusantium libero aspernatur aliquam ipsam, sint obcaecati molestias dolores fugiat?
                        </p>
                    </details>
                    <details
                        className="border border-slate-200 rounded  relative open:shadow-lg  mb-4 bg-none open:bg-white duration-300 p-5"
                    >
                        <summary
                            className="list-none font-semibold relative text-sm cursor-pointer pr-7"
                        > <p className='md:text-[20px] text-sm'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                            <div
                                className="absolute top-0 right-0  px-1 py-0.5 cursor-pointer visible open:invisible md:text-2xl text-xl"
                            >
                                <IoMdArrowDropdownCircle />

                            </div>
                        </summary>
                        <p className=" pt-3 text-[#484848]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem accusantium libero aspernatur aliquam ipsam, sint obcaecati molestias dolores fugiat?
                        </p>
                    </details>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default FAQ