import { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import { Trans } from '@lingui/macro'
/*Img Import*/
import BannerBg from '../../assets/img/banner111.png'
import { ReactComponent as IconDropdown } from '../../assets/images/dropdownColor.svg'
//  global text family
const Text = styled.p`
  font-family: AvenirNext-Medium, AvenirNext, sans-serif;
  margin: 0;
`
//  whole page
const PageWrapper = styled.div``
//  top banner
const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 12.69rem;
  background: #000000 url(${BannerBg}) center center / cover no-repeat;
`
const BannerWrapperText = styled(Text)`
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  width: 8.81rem;
  height: 2.06rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2.06rem;
`
//  element text
const TextTitle = styled(Text)`
  color: rgba(255, 255, 255, 0.4);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38rem;
  height: 2.55rem;
  padding: 0.64rem 0.94rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`
const PoolLabel = styled(Text)<{ primary?: boolean }>`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  color: ${({ primary }) => (primary ? '#ffffff' : 'rgba(255, 255, 255, 0.4)')};
`
const TextNum = styled(Text)<{ color?: string }>`
  margin-top: 0.25rem;
  font-weight: bold;
  color: ${({ color }) => color || '#fff'};
  span {
    &:last-child {
      line-height: 1.19rem;
      height: 1.19rem;
      font-size: 0.88rem;
    }
  }
`
const TextNumeric = (props: any) => (
  <TextNum {...props}>
    {Number(props.children)
      .toFixed(4)
      .split('.')
      .map((e, i) => (
        <span key={i}>{i === 0 ? e.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,') : '.' + e}</span>
      ))}
  </TextNum>
)
//  element button
const Button = styled.div`
  font-family: AvenirNext-Bold, AvenirNext, sans-serif;
  width: 7.56rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.38rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
`
const BtnAble = styled.div`
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(180deg, #cb83fe 0%, #fd6625 100%);
  &:hover,
  &:active {
    background: linear-gradient(180deg, #9739fe 0%, #f65611 100%);
  }
`
const BtnDisabled = styled.div`
  cursor: not-allowed;
  color: rgba(255, 255, 255, 0.4);
  background: linear-gradient(180deg, #7e7e7e 0%, #565656 100%);
  &:hover,
  &:active {
    background: linear-gradient(0deg, #7e7e7e 0%, #565656 100%);
  }
`
const BtnIcon = styled.div`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;

  width: 2.38rem;
  height: 2.38rem;
  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: #bfbfbf;
  background-image: linear-gradient(#1f1b1c, #1f1b1c),
    conic-gradient(#dd12fb, #ff7d10, #dd12fb, #f71313, #f71313, #dd12fb);
  background-clip: padding-box, border-box;
  background-origin: border-box;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(252, 129, 76, 0.3);
    transition: background-color ease-in-out 0.16s, color ease-in-out 0.1s;
  }

  &:hover {
    color: #ffffff;
    &:after {
      background-color: #fc814c;
    }
  }

  svg {
    width: 0.75rem;
    z-index: 2;
  }
`
//  IP-Pool Card
const IPTargetWrapper = styled.div`
  margin: 0 auto 3.5rem auto;
  width: 80%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.1);
`
const PoolCollapse = styled.div`
  padding: 1.25rem 0.94rem 0 0.94rem;
  border-bottom: 0.06rem solid #4f4f4f;
`
const StatsRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`
const StatsBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 0.75rem;
`
const OperateBlock = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  margin-bottom: 0.75rem;
`

/**
 * @description Mock data
 */
const MockList = new Array(2).fill(1).map((e, i) => ({
  id: i,
  ip_name: `IP Name-VESTING-${i}`,
  pools: [
    { key: 'vNFT', percent: 0.00002, claimed: 48997.1527, claimAble: 2.8473, state: true },
    { key: 'mNFT', percent: 0.00002, claimed: 48997.1527, claimAble: 2.8473, state: false },
    { key: 'Stake', percent: 0.00002, claimed: 48997.1527, claimAble: 2.8473, state: true },
  ],
}))

export default function Portfolio() {
  const theme = useContext(ThemeContext)

  const [list] = useState(MockList)

  return (
    <PageWrapper>
      <BannerWrapper>
        <BannerWrapperText>
          <Trans>Portfolio</Trans>
        </BannerWrapperText>
      </BannerWrapper>
      {list.map((item, i) => (
        <IPTargetWrapper key={i}>
          <TextTitle>{item.ip_name}</TextTitle>
          {item.pools.map((p, n) => (
            <PoolCollapse key={n}>
              <PoolLabel primary>{p.key}</PoolLabel>
              <StatsRow>
                <StatsBlock>
                  <TextNum>{p.percent}%</TextNum>
                  <PoolLabel>
                    <Trans>Percentage</Trans>
                  </PoolLabel>
                </StatsBlock>
                <StatsBlock>
                  <TextNum as={TextNumeric}>{p.claimed}</TextNum>
                  <PoolLabel>
                    <Trans>Claimed</Trans>
                  </PoolLabel>
                </StatsBlock>
                <StatsBlock>
                  <TextNum color="#FC814C" as={TextNumeric}>
                    {p.claimAble}
                  </TextNum>
                  <PoolLabel>
                    <Trans>Claimable</Trans>
                  </PoolLabel>
                </StatsBlock>
                <OperateBlock>
                  <Button as={!p.state ? BtnDisabled : BtnAble}>
                    <Trans>Claim</Trans>
                  </Button>
                  <BtnIcon>
                    <IconDropdown />
                  </BtnIcon>
                </OperateBlock>
              </StatsRow>
            </PoolCollapse>
          ))}
        </IPTargetWrapper>
      ))}
    </PageWrapper>
  )
}
