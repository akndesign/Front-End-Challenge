import React from 'react';
import './Responses.css';


const Response = (props) => {
    return (
        <div className="Response">
            <h1>Responses</h1>
            {props.allValuesData.map((item, index) => (
                <div key={`${item}-${index}`}>
                    <h3> {`Prompt: ${item[0]} Response: ${item[1]}`}</h3>
                </div>
            ))
            }
        </div >
    )
};

export default Response;