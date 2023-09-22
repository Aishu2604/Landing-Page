import Image from "next/image"
import { SwiperSlide } from "swiper/react"
import Slider from "./myComponent/carasouls/swiper"

import { categoriesList, informationLinks, siteLogos, usefulLinks } from './constants/footerLinkList/footerList'

import React from "react"
import Link from "next/link"





const Footer = () => {


    return <>
        <footer className="bg-white ">



            <div className="lg:mx-[4rem] ml-[1rem] pb-5 ">
                <div className='mt-28 text-center font-mono'>
                    <h1 className="lg:text-5xl mb-6 font-['Romelio_Sans']   text-xl  font-medium text-[#4C4C4C]">
                        You Can Also Find Us On
                    </h1>

                </div>

                <Slider
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 2,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {siteLogos?.map((x) => {
                        return <>
                            <SwiperSlide >
                                <Image src={x} width={200} height={70} className='lg:h-[70px] lg:w-[200px] ' alt={""}></Image>
                            </SwiperSlide>
                        </>
                    })}
                </Slider>

               
            </div>
            <div
                className="flex flex-col lg:items-center gap-4  bg-[#FF6A02] p-6 shadow-lg sm:flex-row sm:justify-between lg:mx-[4rem] relative lg:top-[60px]"
            >
                <div className="text-3xl lg:flex-col lg:space-x-0  space-x-2 flex font-['Romelio_Sans'] text-white sm:text-xl ">
                    <div className="lg:text-2xl text-xl font-['Romelio_Sans']">  Subscribe Our</div>
                    <div className="lg:text-5xl text-xl font-['Romelio_Sans']"> Newsletter</div>

                </div>

                <form className="mt-4">
                    <div
                        className="flex flex-col gap-4 sm:flex-row lg:flex lg:items-start"
                    >


                        <input
                            className="w-full h-full border-gray-200 px-6 pr-[150px] py-3 shadow-sm"
                            type="email"
                            placeholder="Your Mail Here"
                        />
                        <button
                            className="w-full bg-white h-full flex gap-4 border-gray-200 justify-center py-3 shadow-sm lg:w-full w-[160px] "


                        >
                            <span className="text-sm   text-[#FF6A02] font-medium">Subscribe Now  </span>

                            <svg
                                className="h-5  text-[#FF6A02] w-8 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#FF6A02"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>


                    </div>
                </form>


            </div>


            <div
                className="mx-auto lg:pt-[150px] space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-[4rem] bg-[#F3F3F3]"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-teal-600">
                            <img src='images.png' />

                        </div>

                        <p className="mt-4 max-w-xs text-sm text-black-500 ">
                            In today’s fast-paced world, convenience and comfort are paramount. Online shopping has revolutionized the way we purchase goods, offering a hassle-free
                        </p>
                        <p className="mt-4 max-w-xs  text-sm text-black-500 ">
                            In today’s fast-paced world, convenience and comfort are paramount. Online shopping has revolutionized the way we purchase goods, offering a hassle-free
                        </p>

                        <ul className="mt-8 flex gap-1">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-black-700  transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook </span>

                                    <Image src={'Group 636.svg'} alt="" width={59} height={59}></Image>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-black-700  transition hover:opacity-75"
                                >
                                    <span className="sr-only">Instagram </span>

                                    <Image src={'Group 637.svg'} alt="" width={59} height={59}></Image>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-black-700  transition hover:opacity-75"
                                >
                                    <span className="sr-only">Twitter </span>

                                    <Image src={'Group 638.svg'} alt="" width={59} height={59}></Image>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-black-700  transition hover:opacity-75"
                                >
                                    <span className="sr-only">GitHub </span>

                                    <Image src={'Group 639.svg'} alt="" width={59} height={59}></Image>
                                </a>
                            </li>


                        </ul>
                    </div>

                    <div
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"
                    >
                        <div>
                            <p className="text-3xl text-gray-900  font-['Romelio_Sans']">Categories</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                {categoriesList?.map((item, i) => (
                                    <li className='flex items-center space-x-1' key={item.title}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5.474" height="8.865" viewBox="0 0 5.474 8.865">
                                            <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,16.449l3.384-3.391L12.885,9.667l1.042-1.042,4.433,4.433L13.927,17.49Z" transform="translate(-12.885 -8.625)" fill="#ff6a02" />
                                        </svg>

                                        <Link href={item.path} target="_blank" className="text-black-700  transition hover:opacity-75">{item.title}</Link>
                                    </li>
                                ))}



                            </ul>
                        </div>

                        <div>
                            <p className="text-3xl text-gray-900  font-['Romelio_Sans']">Useful Links</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                {usefulLinks?.map((item) => (
                                    <li className='flex items-center space-x-1' key={item.title}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5.474" height="8.865" viewBox="0 0 5.474 8.865">
                                            <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,16.449l3.384-3.391L12.885,9.667l1.042-1.042,4.433,4.433L13.927,17.49Z" transform="translate(-12.885 -8.625)" fill="#ff6a02" />
                                        </svg>
                                        <Link href={item.path} target="_blank" className="text-black-700  transition hover:opacity-75">{item.title}</Link>
                                    </li>
                                ))}


                            </ul>
                        </div>

                        <div>
                            <p className="text-3xl text-gray-900  font-['Romelio_Sans']">Information</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                {informationLinks?.map((item) => (
                                    <li className='flex items-center space-x-1' key={item.title}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5.474" height="8.865" viewBox="0 0 5.474 8.865">
                                            <path id="Icon_material-keyboard-arrow-right" data-name="Icon material-keyboard-arrow-right" d="M12.885,16.449l3.384-3.391L12.885,9.667l1.042-1.042,4.433,4.433L13.927,17.49Z" transform="translate(-12.885 -8.625)" fill="#ff6a02" />
                                        </svg>

                                        <Link href={item.path} target="_blank" className="text-black-700  transition hover:opacity-75">{item.title}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>


                    </div>
                </div>


                <div className="">
                    <div className="flex flex-col md:flex-row justify-between items-center border-t text-white">

                        <div className="w-full text-center lg:mt-5   lg:mr-3 lg:h-[90px] lg:p-[10px] py-2 lg:py-0 lg:border-r-2 md:w-6/12">
                            <div className='text-black lg:pb-2 lg:text-xl text-left font-semibold'>We Available</div>
                            <div className="pt-2 flex items-center gap-x-3">

                                <div>

                                    <div className='text-gray-500 text-2xl font-bold '>
                                        <a
                                            href=""
                                            className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                                        >
                                            <img
                                                src="Mask Group 123.png"
                                                alt="App Store"
                                                className="w-36 "
                                                width="209"
                                                height="60"
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <div className='text-black text-left font-semibold'>

                                    </div>
                                    <div className='text-gray-500 text-2xl font-bold '>
                                        <a
                                            href=""
                                            className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                                        >
                                            <img
                                                src="Mask Group 124.png"
                                                alt="App Store"
                                                className="w-36 "
                                                width="209"
                                                height="60"
                                            />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-full text-center  lg:mt-5  lg:border-r-2 lg:h-[90px] lg:p-[10px] lg:mr-3 py-2 lg:py-0  md:w-6/12">
                            <div>
                                <div className='text-black lg:pb-2  lg:text-xl text-left font-semibold'>
                                    Customer Support
                                </div>
                                <div className='text-gray-500  text-2xl text-left lg:text-4xl font-bold '>
                                    <h1 >+91-82997-39945</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center  lg:mt-5  lg:p-[10px] lg:h-[90px] lg:mr-3 py-2 lg:py-0  md:w-6/12">
                            <div>
                                <div className='text-black lg:pb-2 lg:text-xl text-left font-semibold'>
                                    Email SUpport
                                </div>
                                <div className='text-gray-500  text-2xl text-left lg:text-4xl font-bold '>
                                    <h1>aishwary.nigam04@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className=" border-t  pt-6 sm:flex sm:items-center sm:justify-between hidden"
                >
                    <p className="text-center text-sm text-black-500 sm:text-left">
                        Copyrights 2023 |<span className="text-[#FF6A02] font-medium"> Aishwary Nigam | All Right reserved </span>
                    </p>

                    <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-teal-700 transition hover:text-teal-700/75"
                            >
                                <span className="sr-only">Facebook</span>
                                <Image src={'/Group 627.png'} alt="not found" width={574} height={35} />
                            </a>
                        </li>


                    </ul>
                </div>

                <div
                    className=" border-gray-100  sm:flex sm:items-center sm:justify-between md:hidden"
                >


                    <ul className=" flex justify-center gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <a
                                href="/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-teal-700 transition hover:text-teal-700/75"
                            >
                                <span className="sr-only">Facebook </span>
                                <Image src={'/Group 627.png'} alt="not found" width={574} height={35} />
                            </a>
                        </li>


                    </ul>
                    <div className="text-center text-sm text-black-500 sm:text-left pt-8">
                        Copyrights 2023 |<span className="text-[#FF6A02] font-bold"> Aishwary Nigam </span> |<div>All Right reserved</div>
                    </div>
                </div>
            </div>
        </footer>


    </>
}


export default Footer