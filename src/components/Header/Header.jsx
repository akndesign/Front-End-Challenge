import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className='Header'>
        <div className='AIChatBubble fadeInBottom'>
            <h3><span id="hello">Howdy, I’m Curie! 👋 </span>
                I’m a AI Engine that can understand natural, English language.
                So tell me, what would you like to know?</h3>
        </div>
        <div className='AIChatBubble fadeInBottom delay-2'>
            <h3>If you’re stuck, try asking me something like, ‘write a poem about dinosaurs in the snow’. Or,
                ‘Tell me more about Alexander Neumann’. </h3>
        </div>

        <div className=' AIChatBubble  fadeInBottom delay-4 '>

            <h3><img src="warning.svg" alt="warning"></img><span id='warning'> Please note: Responses expressed are solely my own and do not express the views or opinions of my creator. They are not contextual. That's for the next update. </span><span>🤓</span></h3>
        </div>
    </div >
);

export default Header;