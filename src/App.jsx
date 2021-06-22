import logo from './logo.svg'
import './App.css'
import Vimeo from '@u-wave/react-vimeo'
import AirMax from './airMaxVideo.mp4'

function App() {
    return (
        <div className='App'>
            {/* <div className='videoContainer'>
                <video autoPlay loop className='video'>
                    <source src={AirMax} type='video/MP4' />
                </video>
            </div> */}
            <div class='vimeo-wrapper'>
                {' '}
                <iframe
                    src='https://player.vimeo.com/video/302326279?background=1&muted=1'
                    frameborder='0'
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                ></iframe>
            </div>

            <header className='header-1'>
                <p className='tabs'>Brands</p>
                <p className='tabs'>Shop</p>
                <p className='tabs'>Contact Us</p>
            </header>
            <nav>
                <h1 className='heading'>ANUBIX</h1>
                <p className='subHeading'>
                    Catalog of the finest sneakers from the finest brands.
                </p>
            </nav>
            <p
                style={{
                    zIndex: 10,
                    position: 'absolute',
                    top: '97.5vh',
                    color: 'white',
                    width: '98vw',
                    backgroundColor: 'black',
                }}
            >
                Connecting to a Vimeo player If you think the player SDK is
                great now, just wait until you see it interacting with a video.
                All you need is an embedded Vimeo player: either an actual
                player that already exists on your page, or a placeholder
                element for a dynamically created player. This section shows you
                how to set up both. Using an existing player If your web page
                already contains an embedded Vimeo player, you can access the
                player through the SDK by passing the player element to the
                Vimeo.Player constructor.
            </p>
        </div>
    )
}

export default App
