import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const gsapFrom = () => {
  useGSAP(() => {
        gsap.from('#box', {
            y: 300,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.out",
            borderRadius: 100,

        })
    }, []);

    useGSAP(() => {
        gsap.from('#box1', {
            y: 300,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.out",
            borderRadius: 100,

        })
    }, []);
  return (
    <div>
      <div className='Section1'>
        <div className="h-screen bg-black w-full text-white">section 1
          <div id="box" className="ml-[55px] h-[200px] w-[200px] bg-amber-300"></div>
        </div>
      </div>
      <div className="Section2">
        <div className="h-screen bg-black w-full text-white">section 2
          <div id="box1" className="ml-[55px] h-[200px] w-[200px] bg-purple-600"></div>
        </div>
      </div>
    </div>
  )
}

export default gsapFrom