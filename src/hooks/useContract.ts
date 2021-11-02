import { Contract } from '@ethersproject/contracts'
import { getContract } from 'utils'
import { useActiveWeb3React } from './web3'

import IVO_STAKING_ABI from 'abis/IVOStaking.json'
import PI_TOKEN_ABI from 'abis/PIToken.json'

import { IVO_STAKING_ADDRESSES, PI_TOKEN_ADDRESSES } from 'constants/addresses'

import { useMemo } from 'react'
// returns null on errors
export function useContract<T extends Contract = Contract>(
  addressOrAddressMap: string | { [chainId: number]: string } | undefined,
  ABI: any,
  withSignerIfPossible = true
): T | null {
  const { library, account, chainId } = useActiveWeb3React()

  return useMemo(() => {
    if (!addressOrAddressMap || !ABI || !library || !chainId) return null
    let address: string | undefined
    if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
    else address = addressOrAddressMap[chainId]
    if (!address) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export function useIVOStaking(): Contract | null {
  return useContract(IVO_STAKING_ADDRESSES, IVO_STAKING_ABI, true)
}
export function usePNFTToken(): Contract | null {
  return useContract(PI_TOKEN_ADDRESSES, PI_TOKEN_ABI, true)
}
