import { styled, keyframes } from '../stitches.config';

import VaderSvg from '../assets/vader.svg';
import OpenSeaSvg from '../assets/open-sea.svg';
import { useStore } from '../stores/nft';

const Root = styled('div', {
  marginTop: '6rem',
  marginBottom: '6rem',
});

const blink = keyframes({
  '0%': { opacity: 'var(--opacity-start, 0.2)' },
  '40%': { opacity: 'var(--opacity-end, 1)' },
  '100%': { opacity: 'var(--opacity-end, 0.2)' },
});

const VaderIcon = styled(VaderSvg, {
  color: '$white',
  marginRight: '.75rem',
});

const OpenSeaIcon = styled(OpenSeaSvg, {
  color: '$white',
  maxWidth: '2rem',
  maxHeight: '2rem',
  marginRight: '.75rem',
});

const Button = styled('button', {
  background: '$orange',
  color: '$white90',
  fontFamily: '$sans',
  fontSize: '1.1rem',
  border: 0,
  borderRadius: '3em',
  padding: '1em 2em',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'background 200ms ease-out',
  textDecoration: 'none',

  [`&.is-minting ${VaderIcon}`]: {
    animation: `${blink} 1s infinite`,
  },

  '&:hover': {
    background: '$lightOrange',
    color: '$white',
  },

  '&:disabled': {
    background: '$orange75',
    color: '$white50',
    cursor: 'not-allowed',

    [`& ${VaderIcon}`]: {
      color: '$white50',
    },

    [`& ${VaderIcon}`]: {
      color: '$white50',
    },
  },
});

const SuccessButton = styled(Button, {
  background: '#2081E2',

  '&:hover': {
    background: '#2064E2',
  },

  '& span': {
    flex: 'auto',
  },
});

export default function MintNFT() {
  const mint = useStore((state) => state.mint);
  const tokenId = useStore((state) => state.tokenId);
  const minting = useStore((state) => state.minting);

  return (
    <Root>
      {tokenId ? (
        <SuccessButton
          as="a"
          href={`https://testnets.opensea.io/assets/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}/${tokenId}`}
        >
          <OpenSeaIcon />
          <span>View your NFT on OpenSea</span>
        </SuccessButton>
      ) : (
        <Button
          type="button"
          onClick={mint}
          className={minting ? 'is-minting' : ''}
        >
          <VaderIcon />
          Mint{minting ? 'ing' : ''} your Beach Vader NFT
        </Button>
      )}
    </Root>
  );
}
