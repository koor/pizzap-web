import { Children, Component, ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'
import { animated, useTransition, useSpring } from 'react-spring'
import {
  Tabs,
  TabList as TabListComponent,
  Tab as TabComponent,
  TabPanels as TabPanelsComponent,
  TabPanel as TabPanelComponent,
} from '@reach/tabs'
import { useGesture } from 'react-use-gesture'

const StyledTabsOverlay = styled(Tabs)`
  &[data-reach-tabs] {
    background: transparent;
  }
`
export const TabList = styled(TabListComponent)`
  &[data-reach-tab-list] {
    display: flex;
    background: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.bg3};
  }
  &[data-reach-tab-list][aria-orientation='vertical'] {
    flex-direction: column;
  }
`
export const Tab = styled(TabComponent)`
  &[data-reach-tab] {
    display: inline-block;
    border: none;
    padding: 0.35em 1em;
    margin: 0;
    border-bottom: 1px solid transparent;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    &[data-selected] {
      color: ${({ theme }) => theme.primaryText1};
      border-bottom-color: currentColor;
      border-bottom-width: 2px;
    }
  }
`
export const TabPanels = styled(TabPanelsComponent)`
  padding: 48px 0;
`
export const TabPanel = styled(TabPanelComponent)``

interface TabsProps {
  as?: string | Component
  defaultIndex?: number
  children: ReactNode | ((props: { focusedIndex: number; id: string; selectedIndex: number }) => ReactNode)
  index?: number
  keyboardActivation?: 'auto' | 'manual'
  onChange?: () => void
  orientation?: 'horizontal' | 'vertical'
}

export default function Modal({
  //   as,
  //   defaultIndex,
  index,
  //   keyboardActivation,
  onChange,
  //   orientation,
  children,
}: TabsProps) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 210, friction: 20 } }))
  const bind = useGesture({
    onDrag: (state) => {
      set({
        y: state.down ? state.movement[1] : 0,
      })
    },
  })
  return (
    <StyledTabsOverlay onChange={onChange} index={index}>
      {children}
    </StyledTabsOverlay>
  )
}
