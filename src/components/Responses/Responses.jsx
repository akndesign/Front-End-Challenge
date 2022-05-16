import React from 'react';
import './Responses.css';

const Response = (props) => (
    <div className='Response'>
        <h1>Reponses</h1>
        <div> 
            <h3>Prompt:</h3>
        {props.usersPromptData}
        </div>
        <div> 
        <h3>Response:</h3>
        {props.openAiResponseData}
        </div>
    </div>
);

export default Response;