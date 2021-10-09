import piLogoUrl from 'assets/svg/logo_pink.svg'

export enum SupportedChainId {
  MAINNET = 8007736,
  RINKEBY = 10067275,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MAINNET, SupportedChainId.RINKEBY]

export const L1_CHAIN_IDS = [SupportedChainId.MAINNET] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export const L2_CHAIN_IDS = [SupportedChainId.RINKEBY] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]

interface L1ChainInfo {
  readonly docs: string
  readonly explorer: string
  readonly infoLink: string
  readonly label: string
}
export interface L2ChainInfo extends L1ChainInfo {
  readonly bridge: string
  readonly logoUrl: string
}

type ChainInfo = { readonly [chainId: number]: L1ChainInfo | L2ChainInfo } & {
  readonly [chainId in SupportedL2ChainId]: L2ChainInfo
} & { readonly [chainId in SupportedL1ChainId]: L1ChainInfo }

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.MAINNET]: {
    docs: 'https://pliangroup.gitbook.io/',
    explorer: 'https://piscan.plian.org/child_0',
    infoLink: 'https://mainnet.plian.io/child_0',
    // label: 'Mainnet',
    label: 'Subchain1',
  },

  [SupportedChainId.RINKEBY]: {
    bridge: 'https://paiswap.io/',
    docs: 'https://pliangroup.gitbook.io/',
    explorer: 'https://testnet.plian.org/child_test',
    infoLink: 'https://testnet.plian.io/child_test',
    label: 'Testnet1',
    logoUrl: piLogoUrl,
    // label: 'Rinkeby',
  },
}
