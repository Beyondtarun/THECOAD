import './Home.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import right from "../images/right-arrows.png";



function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check the viewport width to determine if it's a mobile device
        const checkMobile = () => {
            if (window.innerWidth <= 768) { // Adjust the threshold as needed
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Add an event listener to check for window resize
        window.addEventListener('resize', checkMobile);

        // Call checkMobile when the component mounts
        checkMobile();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className='home'>
            {isMobile ? (<div id="mobile-message">
                <p>Using too much smartphone can make you dumb use PC.
                </p>
            </div>) :

                (<section>
                    <span></span>
                    <span><p style={{ color: 'black' }}>&chi;</p></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>&Sigma;</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>&omega;	</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <span><p>C</p></span>
                    <span><p>O</p></span>
                    <span><p>A</p></span>
                    <span><p>D</p></span>
                    <span><p>&#123;</p></span>
                    <span><p>n</p></span>
                    <span><p>log</p></span>
                    <span><p>n</p></span>
                    <span><p>&#125;</p></span> */}
                    <span><p>T</p></span>
                    <span><p>H</p></span>
                    <span><p>E</p></span>
                    <span><p></p></span>
                    <span><p>C</p></span>
                    <span><p>O</p></span>
                    <span><p>A</p></span>
                    <span><p>D</p></span>
                    <span><p></p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>Programming</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>DataStructures</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>Time</p></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>Complexity</p></span>
                    <span></span>
                    <span></span>
                    <span><p>B</p></span>
                    <span><p>C</p></span>
                    <span><p>I</p></span>
                    <span><p>I</p></span>
                    <span><p>T</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>Big</p></span>
                    <span><p style={{ color: 'black', textSize: '44px' }}>O</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black', textSize: '44px' }}>&Omega;</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ textIndent: '5em', color: 'black' }}>Coding</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className='flex justify-center items-center'><Link to="/main"><img className='nextImage' src={right} alt='next'></img></Link></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>&Delta;</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span><p style={{ color: 'black' }}>Algorithms</p></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </section>)}
        </div>
    );
}


export default Home;