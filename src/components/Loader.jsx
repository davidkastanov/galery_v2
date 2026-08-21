import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
    <ThreeDots color="#3f51b5" height={80} width={80} />
  </div>
);