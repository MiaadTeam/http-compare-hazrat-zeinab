import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { Provider, useCreateStore } from "fr-state"

function CustomApp({ Component, pageProps }: AppProps) {
  const createStore: any = useCreateStore(pageProps.initialZustandState);

  return (
    <>
      <Provider createStore={createStore}>
        <Head>
          <title>Welcome to fr-rest!</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
}

export default CustomApp;
