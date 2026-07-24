import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const gsapTimeline = () => {

    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
    });

    useGSAP(() => {
        timeline.to("#box", {
            x: 300,
            duration: 1,
            ease: "power1.out",
            borderRadius: 100,
        })
        timeline.to("#box", {
            y: 300,
            duration: 1,
            ease: "power1.out",
            borderRadius: 0,
        })
        timeline.to("#box", {
            x: 600,
            duration: 1,
            ease: "power1.out",
            borderRadius: 100,
        })
        timeline.to("#box", {
            y: -20,
            duration: 1,
            ease: "power1.out",
            borderRadius: 0,
        })
    })

    return (
        <div>
            <div className='Section1'>
                <div className="h-screen bg-black w-full text-white">section 1
                    <div id="box" className="ml-[55px] h-[200px] w-[200px] bg-amber-300"></div>
                    <div>
                        <button className="border-amber-50" onClick={()=>{
                            if(timeline.paused()){
                                timeline.play()
                            }
                            else{
                                timeline.pause()
                            }
                        }}>PLAY/PAUSE</button>
                    </div>
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

export default gsapTimeline
