import logo from './logo.svg'
import './App.scss'
import Vimeo from '@u-wave/react-vimeo'
import { useEffect, useRef, useState } from 'react'
// import AirMax from './airMaxVideo.mp4'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import LocomotiveScroll from 'locomotive-scroll'
import nikeLogo from './assets/nike-swoosh-logo.svg'
import airMax97 from './assets/air-max-97.png'
function App() {
    const [paused, setPaused] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        new LocomotiveScroll({
            el: ref.current,
            smooth: true,
        })
    }, [])
    function handlePlayerPlay() {
        setPaused(true)
    }
    return (
        <div>
            <div className='scroll-container' ref={ref}>
                <div className='hero'>
                    <header className='header-1'>
                        <p className='tabs'>Brands</p>
                        <p className='tabs'>Shop</p>
                        <p className='tabs'>Contact Us</p>
                    </header>
                    <nav>
                        <div className='brand'>
                            <img src={nikeLogo} width={83} className='logo' />
                            {/* <h1 className='heading'>ANUBIX</h1> */}
                        </div>
                        <p className='intro'>Air max 97</p>
                        <p className='description'>
                            Reintroducing the classics of the good old times of
                            '97
                        </p>
                    </nav>
                    <div className='vimeo-wrapper'>
                        {' '}
                        {/* <iframe
                        src='https://player.vimeo.com/video/302326279?background=1&muted=1'
                        frameborder='0'
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                    ></iframe> */}
                        <Vimeo
                            video='302326279'
                            // autoplay
                            // background
                            muted
                            loop
                            paused={paused}
                            onReady={handlePlayerPlay}
                            controls={false}
                        />
                    </div>
                </div>
                <div className='section'>
                    <div className='section1'>
                        <p className='shoeName'>AIRMAX 97 ZIRMAX 97</p>
                        <div className='circle'>
                            <img src={airMax97} className='mainShow' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
