import React from "react";
import Image from "next/image";




export const About = () => {
    return (
        <div className="flex justify-between min-w-7xl my-24 md:flex-row flex-col gap-y-10">
          <div className="mx-20">
            <Image
              src="/img/08.jpg"
              width={800}
              height={800}
              objectFit="cover"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:mr-20 mx-10">
            <h2 className="text-base text-red-500 font-semibold">About Us</h2>
            <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
            WHAT WE OFFER
            </p>
            <p className="md:text-base text-sm  text-gray-400">
    
              Here at Simbaa Corp we are assuring you of world-class services or your money back.
              As a token of appreciation to our customers, every Simbaa corp hosting package comes with a free domain and unlimited free SSL certificates.
            </p>
            <p className="md:text-base text-sm text-gray-400">
              All data across all servers are stored on RAID arrays, this protects client data from ever going offline due to a failed hard drive. Gone are the times of having to wait hours or even days for your website to be restored from backups due to a hard drive failure.
            </p>
    
          </div>
        </div>
      );
    };