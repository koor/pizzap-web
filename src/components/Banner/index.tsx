import React, { MouseEvent, KeyboardEvent, ReactNode } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel, CarouselProps } from 'react-responsive-carousel'

export default function BannerRotation({ children }: { children: CarouselProps | any }) {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    useKeyboardArrows: true,
    dynamicHeight: false,
    emulateTouch: true,
  }
  return <Carousel {...settings}>{children}</Carousel>
}
