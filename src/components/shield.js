import '../main.css';
import React from 'react';

function Shield(props) {
    return (
        <div id="shield">
            <img src={props.IntroDesktop} alt="Intro" id="image"/>
            <span>
                <hr/>
                <h1>Humanizing your insurance.</h1> 
                <p>
                    Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that's right for you. Ensure you 
                    and your loved ones are protected.
                </p> 
                <button>View plans</button> 
            </span>
        
            <img src={props.IntroLeftDesktop} alt="intro-left" className="background intro-left"/>
            <img src={props.IntroRightDesktop} alt="intro-right" className="background intro-right"/>
            {/* <img src={props.IntroDesktop} alt='intro-right' className='backgrounf intro-right'/> */}
        </div>
    );
}

export default Shield;