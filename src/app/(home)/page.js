'use client';
import { useEffect } from 'react';
import Intro from '../../components/Intro';
import Description from '../../components/Description';
import Product from '../../components/Product';
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <main >
        <Intro />
        <Description />
        <Product />
      </main>
  )
}