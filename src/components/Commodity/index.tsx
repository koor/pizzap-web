import { Trans } from '@lingui/macro'
import styled from 'styled-components/macro'
import React from 'react'
import { AutoColumn, ColumnCenter } from 'components/Column'
import BannerRotation from 'components/Banner'
import { CommItem } from './CommItem'
import Advertise from 'assets/img/37.png'

const BannerOption = styled.div`
  width: 80%;
  margin: 0px auto;
  margin-top: 20px;
`

const AdvertiseWapper = styled.img``

export default function Commodity() {
  return (
    <>
      <BannerRotation>
        <BannerOption>
          <AdvertiseWapper src={Advertise} />
        </BannerOption>
        <BannerOption>
          <AdvertiseWapper src={Advertise} />
        </BannerOption>
        <BannerOption>
          <AdvertiseWapper src={Advertise} />
        </BannerOption>
      </BannerRotation>
    </>
  )
}
