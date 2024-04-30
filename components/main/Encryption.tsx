"use client";
import React from "react";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      {/* Title */}
      <div className="absolute w-auto h-auto inset-0 top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Images */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="./LockTop.png"
            alt="Lock Top"
            width={100}
            height={100}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="./LockMain.png"
            alt="Lock Main"
            width={150}
            height={150}
            className="z-10"
          />
        </div>

      <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
        <h1 className="Welcome-text text-[12px] px-10"> Encryption</h1>
        </div>
    </div> 
      <div className="absolute z-[20] bottom-[5px] px-[5px]">
        <div className="cursive text-[30px] font-medium text-top text-gray-200">
          Secure your data with end-to-end encryption{" "}
        </div>
      </div>
        {/* Video */}
        <div className="w-full h-full flex items-start justify-center opacity-[0.7]">
          <video
            src="./encryption.webm"
            className="absolute inset-0 w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          />
        </div>
        </div>
    
  );
};

export default Encryption;
