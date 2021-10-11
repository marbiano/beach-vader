import { styled } from '../stitches.config';

const Root = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export default function Layout({ children }) {
  return <Root>{children}</Root>;
}
