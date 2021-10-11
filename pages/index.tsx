import ConnectWallet from '../components/ConnectWallet';
import Layout from '../components/Layout';
import MintNFT from '../components/MintNFT';
import useAddress from '../hooks/use-address';

export default function Index() {
  const { address, connect, canConnect } = useAddress();

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
