import React from 'react';
import './Responses.css';

const Response = (props) => (
    <div className='Response'>
        {props.aiResponseData}
        {props.promptResponseData}
    </div>
);

export default Response;