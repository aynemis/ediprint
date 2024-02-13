'use client';
import { useEffect } from 'react';
import Intro from '../../components/Intro';
import Description from '../../components/Description';
import Product from '../../components/Product';



export default function Home() {

  // useEffect( () => {
  //   (
  //     async () => {
  //         const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
     const locomotiveScroll = new locomotiveModule.default();
    })
  }, [])




  return (
      <main >
        <Intro />
        <Description />
        <Product />
      </main>
  )
}