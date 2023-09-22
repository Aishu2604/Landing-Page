'use client'

import Link from "next/link";
import { useEffect, useState } from "react";



export default function BreadCrum(props: any) {




    return <>

        <nav className="flex border-b mx-auto px-4 sm:px-6 lg:px-12 py-4 " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-[#A3A3A3] ">
                <li className="inline-flex items-center">
                    <Link href={'/'} className="inline-flex items-center text-sm font-medium text-[#A3A3A3] hover:text-black dark:text-gray-400 dark:hover:text-white">

                        Home
                    </Link>
                </li>
                {props?.data?.map((x: any) => {
                    return <>
                        <li className="inline-flex items-center text-[#A3A3A3]">
                            <Link href={x?.link} className="inline-flex items-center text-sm font-medium text-[#A3A3A3] hover:text-black dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                {x?.name}
                            </Link>
                        </li>

                    </>
                })}


            </ol>
        </nav>



    </>

}