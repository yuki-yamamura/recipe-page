import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
  void import('@/mocks/server').then(({ server }) => server.listen());
}

const App = ({ Component, pageProps }: AppProps) => (
  <div className="pageContainer">
    <Component {...pageProps} />
  </div>
);

export default App;
