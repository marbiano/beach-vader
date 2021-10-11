import { useEffect } from 'react';
import { Howl } from 'howler';

import ConnectWallet from '../components/ConnectWallet';
import Layout from '../components/Layout';
import MintNFT from '../components/MintNFT';
import useAddress from '../hooks/use-address';

export default function Index() {
  const { address, connect, canConnect } = useAddress();

  useEffect(() => {
    const sound = new Howl({
      src: ['/vader.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.5,
    });
    return () => {
      sound.stop();
    };
  }, []);

  return (
    <Layout>
      {address && <MintNFT />}
      {!address && (
        <ConnectWallet onConnect={connect} canConnect={canConnect}>
          Connect to mint Beach Vader
        </ConnectWallet>
      )}
      {/* <OpenSeaCollection /> */}
    </Layout>
  );
}
