import React from 'react';
import './Responses.css';

const Response = (props) => {
    return (
        <div className="Response">
            <h1>Responses</h1>
            {props.allValuesData.map((PromptandResponses, index) => (
                <div className="ResponseCard">
                    <div key={`${PromptandResponses}-${index}`}>
                        <h3>Prompt</h3>
                        {/* AN: I tried passing the Prompts and Responses as objects, but caused a headache, so arrays was the solution*/}
                        <h2>{PromptandResponses[0]}</h2>
                        <h3>Response</h3>
                        <h2>{PromptandResponses[1]}</h2>
                    </div>
                </div>
            ))
            }
        </div >
    )
};

export default Response;