import create from 'zustand';
import { ethers } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import contractABI from '../artifacts/contracts/BeachVader.sol/BeachVader.json';
import { Store } from '../types';

function getContract(): Contract {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('No access to the Ethereum object');
    return;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    contractABI.abi,
    signer,
  );

  return contract;
}

export const useStore = create<Store>((set, get) => ({
  contract: typeof window !== 'undefined' && getContract(),
  minting: false,
  minted: false,
  mint: async () => {
    const contract = get().contract;
    await contract.mintNFT();
    set((state: any) => ({
      ...state,
      minting: true,
    }));
    contract.on('MintedNFT', async (creator, tokenId) => {
      set((state) => ({
        ...state,
        minting: false,
        minted: true,
        tokenId,
      }));
    });
  },
}));
