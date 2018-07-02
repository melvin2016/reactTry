import React from 'react';
import Prompt from 'react-router-dom/Prompt';
function Tweets(){
    return (
        <div>
            <Prompt when={true} message="are you a myran trying to get away ?"/>
            <h1>You have Reached Tweets Section.</h1>
        </div>
    );
}

export default Tweets;