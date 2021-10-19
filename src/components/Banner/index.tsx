import styled from 'styled-components/macro'
import { darken } from 'polished'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel, CarouselProps } from 'react-responsive-carousel'
import { ReactChild } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './index.css'
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

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
export function ModeCarousel({ children }: { children: ReactChild[] }) {
  return (
    <Swiper
      spaceBetween={20} // 间距
      slidesPerView={4} // 一行显示
      centeredSlides={true}
      className="mySwiper"
      parallax={true}
      onSwiper={(swiper) => {
        if (swiper.activeIndex == 0) {
          swiper.activeIndex = 1
          swiper.allowSlidePrev = false
        }
      }}
      onSlideChange={(swiper) => {
        console.log(swiper)
        if (swiper.activeIndex < swiper.slides.length) {
          swiper.allowSlideNext = true
          swiper.allowSlidePrev = true
        }
        if (swiper.activeIndex == 1) {
          swiper.allowSlideNext = true
          swiper.allowSlidePrev = false
        }
      }}
    >
      {children}
    </Swiper>
  )
}

const Prev = styled(ChevronLeft)`
  position: absolute;
  top: unset;
  height: unset;
  left: 50px;
  bottom: 1px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text6};
  margin-left: 1rem;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => darken(0.04, theme.text6)};
  }
`
const Next = styled(ChevronRight)`
  position: absolute;
  top: unset;
  height: unset;
  right: 50px;
  bottom: 1px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.text6};
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => darken(0.04, theme.text6)};
  }
`
export function PaginationCarousel({
  index,
  changeIndex,
  children,
}: {
  index?: number
  changeIndex: (i: number) => void
  children: ReactChild[]
}) {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
  }
  const navigation = {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  return (
    <Swiper
      autoplay={true}
      initialSlide={index ? index : 0}
      pagination={pagination}
      navigation={navigation}
      className="customSwiper"
      onSlideChangeTransitionEnd={(swiper) => {
        if (swiper) {
          changeIndex(swiper.activeIndex)
        }
      }}
    >
      {children}
      <Prev className="swiper-button-prev" />
      <Next className="swiper-button-next" />
    </Swiper>
  )
}
export { SwiperSlide }
