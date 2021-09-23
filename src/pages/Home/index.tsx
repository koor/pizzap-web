import { Trans } from '@lingui/macro'
import styled, { ThemeContext } from 'styled-components/macro'
import { AutoColumn, ColumnCenter } from 'components/Column'
import Commodity from 'components/Commodity'
import BannerRotation from 'components/Banner'

const HomeWrapper = styled(AutoColumn)`
  width: 100%;
`
const CarouselOption = styled(AutoColumn)`
  width: 100%;
  height: 670px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    height: 11.875rem
  `};
`

export default function Home() {
  console.log('home')
  return (
    <>
      <HomeWrapper gap={'md'}>
        <BannerRotation>
          <CarouselOption>
            <img
              src="https://img2.baidu.com/it/u=2371927661,1630248753&fm=253&fmt=auto&app=120&f=JPEG?w=906&h=500"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Flarge%2F0088S5QUly4gtvh83gqmzj30zk0k0n1l.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634978594&t=41fbf477171da8d60c1741bc627b233b"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://img1.baidu.com/it/u=882223627,3636612971&fm=253&fmt=auto&app=120&f=JPEG?w=899&h=500"
              alt=""
            />
          </CarouselOption>
          <CarouselOption>
            <img
              src="https://img2.baidu.com/it/u=2420616170,1211416176&fm=253&fmt=auto&app=120&f=PNG?w=513&h=316"
              alt=""
            />
            <img
              src="https://img1.baidu.com/it/u=2448931957,2683350737&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=303"
              alt=""
            />
          </CarouselOption>
        </BannerRotation>
        <Commodity />
      </HomeWrapper>
    </>
  )
}
