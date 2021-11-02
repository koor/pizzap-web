import { constructSameAddressMap } from '../utils/constructSameAddressMap'
// import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

/**
 * The IvoStaking address
 */
export const IVO_STAKING_ADDRESSES: AddressMap = constructSameAddressMap('0x93afb31FFdF60668f7FFA4F44076C1318512337D')

/**
 * The PNFT Token
 */
export const PI_TOKEN_ADDRESSES: AddressMap = constructSameAddressMap('0xD046766524c66B0b2a53B2A0c92b18B9593C7951')
