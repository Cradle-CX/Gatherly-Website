import './index.css'
import Header from './components/Header'
import Hero1 from './components/Hero1'
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Footer from './components/Footer.jsx'

import '@fontsource/crimson-pro/400.css'; // Regular
import '@fontsource/crimson-pro/700.css'; // Bold

function App() {

  return (
    <>
      <Header />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Footer />

    </>
  )
}

export default App
