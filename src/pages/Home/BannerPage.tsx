import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import styled, { ThemeContext } from 'styled-components/macro'
import { AutoColumn } from 'components/Column'

const HomeWrapper = styled(AutoColumn)`
  width: 100%;
  height: 670px;
`
export default function BannerRotation() {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    useKeyboardArrows: true,
  }
  return (
    <HomeWrapper>
      <Carousel {...settings}>
        <div>
          <img
            src="https://img-qn-5.51miz.com/Element/00/81/09/05/d7fbd523_E810905_92312e74.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/320"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://img-qn-4.51miz.com/preview/element/00/01/12/78/E-1127811-A51975C8.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/320"
            alt=""
          />
        </div>
      </Carousel>
    </HomeWrapper>
  )
}
