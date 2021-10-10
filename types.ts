import { Contract } from '@ethersproject/contracts';

type AsyncRequest = {
  loading?: boolean;
  added?: boolean;
  error?: string | null;
};

export type Store = {
  contract: Contract;
  tokenId?: number;
  minting?: boolean;
  mint: () => void;
};
