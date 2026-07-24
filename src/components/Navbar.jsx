import { navLinks } from "../../index/index"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 1. Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {

    useGSAP(() => {
        // 2. Put the animation logic ENTIRELY inside useGSAP hook
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'top',
                scrub: true, // Smoothly ties animation progress to scroll depth
            }
        });

        navTween.fromTo('nav',
            {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)'
            },
            {
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Using standard rgba for clean color interpolation
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );
    });

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            {/* Explicitly enforce flex layout, full width, and space-between */}
            <div className="w-full flex items-center justify-between py-5 px-8 container mx-auto">

                {/* Left Side: Brand Logo */}
                <a href="#home" className='flex items-center gap-4'>
                    <img src="/images/logo.png" alt="logo" className="h-14 md:h-10" />
                    <p className="text-white font-bold">Velvet Pour</p>
                </a>

                {/* Right Side: Links */}
                <ul className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-white hover:text-gray-300">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    )
}

export default Navbar