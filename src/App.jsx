import logo from './logo.svg'
import './App.scss'
import Vimeo from '@u-wave/react-vimeo'
import { useEffect, useRef, useState } from 'react'
// import AirMax from './airMaxVideo.mp4'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import LocomotiveScroll from 'locomotive-scroll'
import nikeLogo from './assets/nike-swoosh-logo.svg'
import airMax97 from './assets/air-max-97.png'
import airMax97SE from './assets/air-max-97-se.png'
import { CustomCursor } from './CustomCursor'
import classNames from 'classnames'
function App() {
    const [paused, setPaused] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        new LocomotiveScroll({
            el: ref.current,
            smooth: true,
            repeat: true,
        })
    }, [])

    function handlePlayerPlay() {
        setPaused(true)
    }
    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    )
    console.log(vw, vh)
    return (
        <div>
            <CustomCursor />

            <div className='scroll-container' data-scroll-container ref={ref}>
                <div className='hero' data-scroll-section>
                    <header className='header-1'>
                        <a
                            href='https://www.nike.com/in/'
                            target='_blank'
                            className='tabs'
                        >
                            Brands
                        </a>
                        <a href='#' className='tabs'>
                            Shop
                        </a>
                        <a
                            href='mailto:shreyas42000@gmail.com'
                            target='_blank'
                            className='tabs'
                        >
                            Contact
                        </a>
                    </header>
                    <nav>
                        <div className='brand'>
                            <img src={nikeLogo} width={93} className='logo' />
                            {/* <h1 className='heading'>ANUBIX</h1> */}
                        </div>
                        <p className='intro' data-scroll data-scroll-speed={3}>
                            Air max 97
                        </p>
                        <p
                            className='description'
                            data-scroll
                            data-scroll-speed={2}
                        >
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
                            autoplay
                            background
                            muted
                            loop
                            // paused={paused}
                            onReady={handlePlayerPlay}
                            controls={false}
                        />
                    </div>
                </div>
                <div className='section' data-scroll-section>
                    <div className='section1'>
                        <p className='shoeName'>AIRMAX 97 AIRMAX 97</p>
                        <div
                            className='glassInfoBox'
                            data-scroll
                            data-scroll-speed={2}
                            ref={ref}
                        >
                            <p className='glassInfo' data-scroll>
                                Nike Air Max 97 shook up the running world with
                                og ripple design and crisp color accents
                            </p>
                        </div>
                        <div
                            className='circle'
                            data-scroll
                            data-scroll-speed={-1}
                        >
                            <img
                                src={airMax97}
                                className='mainShow'
                                data-scroll
                                // data-scroll-speed={2}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className='section'
                    style={{ background: '#A69682' }}
                    data-scroll-section
                >
                    <div className='section1' style={{ height: '100%' }}>
                        <p className='shoeName'>AIRMAX 97SE AIRMAX 97SE</p>
                        <div
                            className='glassInfoBox'
                            data-scroll
                            data-scroll-speed={2}
                            style={{
                                position: 'relative',
                                marginBottom: '170px',
                            }}
                        >
                            <p
                                className='glassInfo'
                                data-scroll
                                // data-scroll-speed={2}
                            >
                                Featuring the ripple design, Air Max 97 SE goes
                                a little wild with animal print accents for
                                women
                            </p>
                        </div>
                        <div
                            className='circle'
                            data-scroll
                            data-scroll-speed={-1}
                            style={{ background: 'white' }}
                        >
                            <img
                                src={airMax97SE}
                                className='mainShow'
                                data-scroll
                                // data-scroll-speed={2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
