'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Index() {

    const background = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=400px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(10%)`})
    }, [])

    return (
        <div className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={background}>
                <Image 
                    src={'/images/papers.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro} >
            <div data-scroll data-scroll-speed="0.8" className={styles.introImage}>
                        <Image
                            src={'/images/logo2.png'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.2">EDIPRINT</h1>
             </div>
        </div>
    )
}