import './App.css'
import About from './components/About'
import Choose from './components/Choose'
import Home from './components/Home'
import Menu from './components/Menu'
import Mobile from './components/Mobile'
import Testimonial from './components/Testimonial'
import {useCycle, motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import {Link, animateScroll} from 'react-scroll'
import OrderModal from './components/OrderModal'
const bar1Variants = {
    initial: {
        width: 30,
        height: 2,
        backgroundColor: '#c72830'

    },
    showMenu: {
        rotate: -45,
        y: 6
    },
    hideMenu: {        
        rotate: 0,
        y: 0
    }
}

const bar2Variants = {
    initial: {
        width: 30,
        height: 2,
        backgroundColor: '#c72830',
        marginTop: 3
    },
    showMenu: {
        opacity: 0,
        transition: {
            delay: -5
        }
    },
    hideMenu: {        
        opacity: 1
    }
}
const bar3Variants = {
    initial: {
        width: 30,
        height: 2,
        backgroundColor: '#c72830',
        marginTop: 3
    },
    showMenu: {
        rotate: 45,
        y: -3
    },
    hideMenu: {        
        rotate: 0,
        y: 0
    }
}

const navVariants = {
    initial: {
        y: '-100vh'
    },
    animate: {
        y: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            duration: 1
        }
    }
}
const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [bar1Cycle, togglebar1] = useCycle('hideMenu', 'showMenu')
    const [bar2Cycle, togglebar2] = useCycle('hideMenu', 'showMenu')
    const [bar3Cycle, togglebar3] = useCycle('hideMenu', 'showMenu')

    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu)
        togglebar1()
        togglebar2()
        togglebar3()
    }


    
    
  return (
    <div>
    <header className="header " >
        <h1 style={{fontWeight: 'bold', fontSize: '1.5rem', color: '#c72830'}}>A&Z Bistro</h1>
        <div className='menuBar' onClick={toggleMenu}>
            <motion.div
                variants={bar1Variants}
                initial='initial'
                animate={bar1Cycle}
            ></motion.div>
            <motion.div
                variants={bar2Variants}
                initial='initial'
                animate={bar2Cycle}
            ></motion.div>
            <motion.div
                variants={bar3Variants}
                initial='initial'
                animate={bar3Cycle}
            ></motion.div>
        </div>
    </header>
   <AnimatePresence>
    {showMenu &&  <motion.nav
                variants={navVariants}
                initial='initial'
                animate='animate'
                exit='exit'
    >
                <Link onClick={animateScroll.scrollToTop}
                    smooth={true}
                    spy={true}
                    delay={100}
                    // duration={2000}
                >Home</Link>
                <Link to='choose'
                    smooth={true}
                    delay={100}
                    // spy={true}
                    duration={1000}
                >Why Choose Us</Link>
                <Link to='menu'
                    smooth={true}
                    delay={100}
                    duration={1000}
                >Our Menu</Link>
                <Link to='about'
                    smooth={true}
                    delay={100}
                    duration={1000}
                >About Us</Link>
                <Link to='testimonial'
                    smooth={true}
                    delay={100}
                    duration={1000}
                >Testimoials</Link>
        </motion.nav>}
   </AnimatePresence>
    <div className="wrap">
        <Home />
        <div className="demacate"></div>
        <Choose />
        <div className="demacate"></div>
        <Menu/>
        <div className="demacate"></div>
        <About />
        <div className="demacate"></div>
        <Mobile />
        <div className="demacate"></div>
        <Testimonial />
    </div>
        <footer>
            {/* Socials, Newsletter, Feedback */}
            {/* Feedback */}
            <div>
                <h1 style={{marginBottom: '10px', fontWeight: 'bold'}}>Send us a feedback</h1>
                <textarea name="" id="" cols="30"></textarea>
                <button style={{display: 'block',
                                backgroundColor: '#c72830', color: 'white', 
                                width: '100px', border: 'none',
                                padding: '5px', borderRadius: '5px', marginTop: '5px'
                                }}>Submit</button>
            </div>
            {/* Socials */}
            <h1 style={{fontWeight: 'bold',margin: '20px 0 5px 0'}}>Connect with us</h1>
            <div style={{display: 'flex', width: '100px', justifyContent: 'space-between'}}>
                <a href="" className='socials'><i className="fa-brands fa-facebook"></i></a>
                <a href="" className='socials'><i className="fa-brands fa-square-instagram"></i></a>
                <a href="" className='socials'><i className="fa-brands fa-twitter"></i></a>
            </div>
        </footer>
    </div>
  )
}
export default App