import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { AutoColumn, ColumnCenter } from 'components/Column'
import { CommItem } from './CommItem'
import Audio from 'assets/img/audio.png'
import Bg from 'assets/img/bg.png'
import Advertise from 'assets/img/37.png'

const AudioColumn = styled(ColumnCenter)`
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.bg3};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text1};
`

const AudioListWrapper = styled(AutoColumn)`
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 20px;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    overflow-x: hidden;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    overflow-x: scroll;
  `}
`

const More = styled.a`
  text-align: right;
  margin-right: 20px;
  color: hsla(0, 0%, 0%, 1);
`

const AdvertiseWapper = styled.img`
  width: 80%;
  margin: 0px auto;
`

export default function Commodity() {
  const obj = [
    {
      name: 'Project Name1',
      audioName: 'Audio Name1',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name2',
      audioName: 'Audio Name2',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name3',
      audioName: 'Audio Name3',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
    {
      name: 'Project Name4',
      audioName: 'Audio Name4',
      usdt: '99.99',
      author: 'Rowen',
      bg: Bg,
      audio: Audio,
    },
  ]
  return (
    <>
      <AudioColumn>
        <Trans>Digital Audio</Trans>
      </AudioColumn>
      <AudioListWrapper gap="sm" justify="center">
        {obj.map((item) => {
          return <CommItem key={item.audioName} {...item} />
        })}
      </AudioListWrapper>
      <More as={Link} to="/market">
        <Trans>More</Trans>
      </More>
      <AdvertiseWapper src={Advertise} />
    </>
  )
}
