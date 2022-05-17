import React from 'react';
import './Responses.css';

const Response = (props) => {

    console.log([...props.allValuesData].reverse())

    return (
        <div className="Response">
            <h1>Responses</h1>
            {/* AN: We shouldn't mutate React state directly, so using the spread operator clones the prop */}
            {[...props.allValuesData].reverse().map((PromptandResponses, index) => (
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