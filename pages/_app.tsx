import '../styles/globals.css';

import React, {useState} from 'react';

import type { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header';
import {StateType} from '../types';

function MyApp({ Component, pageProps }: AppProps) {
  const [workflowState, setWorkflowState] = useState({
    page1_address:"",
    page1_tmin: "",
    page1_thigh: "",
    page1_pwropt: "",
    page1_pvmodule_make: "",
    page1_pvmodule_model: "",
    page2_dcstring_data: [{id: 0, size: 0}]
  });

  return (
    <>
      <Head>
        <title>Solara</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='main'>
          <Component {...pageProps} workflowState={workflowState} setWorkflowState={setWorkflowState}/>
      </main>
      <Footer/>
    </>
  )
}

export default MyApp;
