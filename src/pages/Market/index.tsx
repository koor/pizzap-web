import Card, {
  LightCard,
  LightGreyCard,
  GreyCard,
  DarkGreyCard,
  DarkCard,
  OutlineCard,
  YellowCard,
  BlueCard,
} from 'components/Card'
import {
  ButtonPrimary,
  ButtonLight,
  ButtonGray,
  ButtonSecondary,
  ButtonOutlined,
  ButtonYellow,
  ButtonEmpty,
  ButtonText,
  ButtonConfirmed,
  ButtonError,
  ButtonDropdown,
  ButtonDropdownLight,
  ButtonRadioChecked,
} from 'components/Button'

import Styled from 'styled-components/macro'

const Wapper = Styled.div`
  button, div {
    width: 100%;
    margin-top: .625rem;
  }
`
export default function Market() {
  return (
    <Wapper>
      <h1>Card</h1>
      <Card>Card</Card>

      <LightCard>LightCard</LightCard>

      <LightGreyCard>LightGreyCard</LightGreyCard>

      <GreyCard>GreyCard</GreyCard>

      <DarkGreyCard>DarkGreyCard</DarkGreyCard>

      <DarkCard>DarkCard</DarkCard>

      <OutlineCard>OutlineCard</OutlineCard>

      <YellowCard>YellowCard</YellowCard>

      <BlueCard>BlueCard</BlueCard>
      <h1>Button</h1>
      <ButtonPrimary>ButtonPrimary</ButtonPrimary>
      <ButtonLight>ButtonLight</ButtonLight>
      <ButtonGray>ButtonGray</ButtonGray>
      <ButtonSecondary>ButtonSecondary</ButtonSecondary>
      <ButtonOutlined>ButtonOutlined</ButtonOutlined>
      <ButtonYellow>ButtonYellow</ButtonYellow>
      <ButtonEmpty>ButtonEmpty</ButtonEmpty>
      <ButtonText>ButtonText</ButtonText>
      <ButtonConfirmed>ButtonConfirmed</ButtonConfirmed>
      <ButtonError>ButtonError</ButtonError>
      <ButtonDropdown>ButtonDropdown</ButtonDropdown>
      <ButtonDropdownLight>ButtonDropdownLight</ButtonDropdownLight>
      <ButtonRadioChecked>ButtonRadioChecked</ButtonRadioChecked>
    </Wapper>
  )
}
