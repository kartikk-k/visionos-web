"use client"

import Image from "next/image";
import BG from './bg.png';
import Link from "next/link";
import { useState } from "react";
import Draggable from "react-draggable";
import { motion } from 'framer-motion';

export default function Home() {

  const [isDragging, setIsDragging] = useState(false)
  

  return (
    <main className="h-screen">

      <Image
        src={BG}
        alt="bg-image"
        className="fixed top-0 left-0 h-screen object-cover"
      />


      {/* main component */}
      <div className="relative z-10 h-screen flex items-center justify-center flex-col p-5">

        <Draggable
          handle=".handle"
          bounds="parent"
          onStart={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          <div>
            <motion.div
              animate={{ scale: isDragging ? 0.95 : 1, }}
            >
              {/* query-response window */}
              <div
                className="w-[450px] h-[480p-x] overflow-hidden p-4 bg-[#808080] backdrop-blur-[100px] bg-opacity-20"
                style={{ borderRadius: 34 }}
              >

                {/* query */}
                <div className="bg-[#000] bg-opacity-50 p-4 rounded-[18px] backdrop-blur-[100px] flex">
                  Pull up top news from wwdc 24
                </div>

                {/* response */}
                <div className="mt-4 p-3 leading-7 space-y-4">
                  <p>Here are some of the top news from WWDC 24:</p>
                  <p>
                    1.	WWDC24 will spotlight the latest advancements in iOS, iPadOS, macOS, watchOS, tvOS, and visionOS.
                    <Link href={'/'} className="opacity-60 underline pl-1">Apple Developer</Link> <br />
                    2.	Apple introduced artificial intelligence updates during WWDC, including updates on AI products.
                    <Link href={'/'} className="opacity-60 underline pl-1">CNN</Link><br />
                    3.	WWDC24 keynote introduced Apple Intelligence, a personal intelligence designed to be helpful and relevant.
                    <Link href={'/'} className="opacity-60 underline pl-1">Apple - YouTube</Link>
                  </p>
                </div>

                {/* response-info */}
                <div className="flex justify-between opacity-50 px-3 text-sm mt-10">
                  <p>GPT-4o</p>
                  <p>1.2 sec</p>
                </div>

              </div>

              {/* navigation (next-previous) */}
              <div className="py-4 flex justify-between">

                {/* previous btn */}
                <button className="bg-[#808080] hover:bg-opacity-50 duration-200 bg-opacity-30 w-36 h-10 rounded-full backdrop-blur-[100px] flex justify-center items-center gap-1">
                  <svg width="25" height="24" className="size-[18px] opacity-70" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19.5L3.5 12M3.5 12L11 4.5M3.5 12H21.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span className="opacity-70">
                    Previous
                  </span>
                </button>

                {/* next btn */}
                <button className="bg-[#808080] hover:bg-opacity-50 duration-200 bg-opacity-30 w-36 h-10 rounded-full backdrop-blur-[100px] flex justify-center items-center gap-1">
                  <span className="opacity-70">
                    Next
                  </span>
                  <svg width="25" height="24" className="size-[18px] rotate-180 opacity-70" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19.5L3.5 12M3.5 12L11 4.5M3.5 12H21.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

              {/* input */}
              <div className="bg-[#fff] bg-opacity-10 p-4 py-3 justify-between rounded-[24px] backdrop-blur-[100px] flex">
                <p className="flex items-center">
                  More details on macOS |
                  <span className="pl-1 opacity-60">updates</span>
                </p>

                <button className="rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 duration-200 w-12 h-12 flex items-center justify-center">
                  <svg width="32" height="32" className="size-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 14L16 4M16 4L6 14M16 4L16 28" stroke="#F7F7F7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>

              </div>
            </motion.div>

            {/* draggable */}
            <div className="flex mt-5 justify-center">
              <button
                className="scale-75 handle opacity-30 active:opacity-65 duration-300"
              >
                <svg width="174" height="16" viewBox="0 0 174 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_15_8)">
                    <rect x="38" y="3" width="136" height="10" rx="5" fill="white" />
                  </g>
                  <g filter="url(#filter1_b_15_8)">
                    <rect y="1" width="14" height="14" rx="7" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_b_15_8" x="18" y="-17" width="176" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_8" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_8" result="shape" />
                    </filter>
                    <filter id="filter1_b_15_8" x="-20" y="-19" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_8" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_8" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>

          </div>
        </Draggable>




      </div>

    </main>
  );
}
