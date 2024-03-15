import { BrowserRouter as Router, Routes, Route }
  from "react-router-dom";
import './App.css'
import Navbar from './components/navigation/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Projects/Portfolio'
import Contact from './pages/Contact'
import animationData from './assets/lottieFiles/Animation-1707897135994.json'
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion"
import { LazyMotion, domAnimation } from "framer-motion"
import bg from './assets/images/Background 3.png';
function App() {
  const loadingRef = useRef<LottieRefCurrentProps>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  if (loading) {
    return <div className="flex justify-center items-center flex-col container2">
      <Lottie lottieRef={loadingRef} animationData={animationData} className="h-32 justify-center mt-auto"></Lottie>
    </div>
  }
  return (
    <div id={'home'}>
      <Router >
        <LazyMotion features={domAnimation}>
          <m.img src={bg} alt="" className='fixed object-fill w-full h-full z-0 bg-blend-soft-light opacity-30' />
          <div className='pb-[90px] '>
            <Navbar />
          </div>
          <div className='items-center h-screen md:m-10 md:mx-32  mx-20 m-5 justify-center ease-in-out 2'>
            <div className='md:pb-10 pb-5 '>
              <Routes>
                <Route path="/"
                  element={<Home />} />
                <Route path="/Portfolio"
                  element={<Portfolio />} />
                <Route path="Contact"
                  element={<Contact />} />
              </Routes>
            </div>
          </div>
        </LazyMotion>
      </Router></div>
  )
}

export default App
