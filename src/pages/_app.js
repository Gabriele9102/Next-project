import '@/styles/globals.css'
import FirstLayout from './../layouts/firstLayout/FirstLayout';

export default function App({ Component, pageProps }) {
  return (
  <FirstLayout>

  <Component {...pageProps} />

  </FirstLayout>
)}
