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
    return <div className="flex justify-center items-center flex-col">
      <Lottie lottieRef={loadingRef} animationData={animationData} className="h-32 justify-center mt-auto"></Lottie>
    </div>
  }
  return (

    <Router>
      <LazyMotion features={domAnimation}>
        <m.img src={bg} alt="" className='fixed object-fill w-full h-full -z-10 bg-blend-soft-light opacity-30' />
        <div className='pb-[90px] '>
          <Navbar />
        </div>
        <div className='items-center h-screen md:m-10 md:mx-32 m-5 justify-center'>
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
    </Router>
  )
}

export default App
