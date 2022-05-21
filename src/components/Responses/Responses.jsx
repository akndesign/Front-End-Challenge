import React, { useRef, useEffect } from 'react';
import './Responses.css';
import LoadingSpinner from '../Spinner/Spinner'

const Response = (props) => {

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current &&
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [props.allValuesData]);

    const renderChat = (
        [...props.allValuesData].map((PromptandResponses, index) => (
            <>
                <div key={`${PromptandResponses}-${index}`} className="HumanChatBubble fadeInBottom" >
                    {/* AN: I tried passing the Prompts and Responses as objects, but caused a headache, so arrays was the solution*/}
                    {/*<h3>{PromptandResponses[0]} </h3>*/}
                    <h3>{PromptandResponses[0]}</h3>
                </div>
                <div key={`${PromptandResponses}-${index - 'response'}`} >
                    <div className="AIChatBubble fadeInBottom">
                        <h3>{PromptandResponses[1]}</h3>
                    </div>
                </div>
            </>
        )));

    return (
        <>
            <div className="Response">
                {props.isLoading ? <LoadingSpinner /> : renderChat}
                <span ref={messagesEndRef}></span>
            </div >
        </>
    )
}

export default Response;