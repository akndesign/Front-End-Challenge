import React from "react";
import "./Form.css";

const OpenAPIKey = process.env.REACT_APP_OPENAI_API_KEY;

const Form = (props) => {

    const handleSubmit = (usersPromptData) => {

        const data = {
            prompt: `${usersPromptData}`,
            temperature: 1,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        console.log(data);

        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OpenAPIKey}`,
            },
            body: JSON.stringify(data),
        })
            .then(function (response) {
                console.log(response);
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then((response) => {
                const aiResponseTextwithRegex = response.choices[0].text;
                const aiResponseRegexRemoved = aiResponseTextwithRegex.replace(
                    /(^[.](^,)\r\n)/gm,
                    ""
                );
                props.updateAiResponse(aiResponseRegexRemoved);
                props.updateValuesData(data => [...data, [`${usersPromptData}`, `${aiResponseRegexRemoved}`]]);
            });
    };

    return (
        <form >
            <label>
                Enter prompt
                <br />
                <textarea
                    type="text"
                    //value={props.usersPromptData}
                    onChange={(event) => props.updateUsersPrompt(event.target.value)}
                />
            </label>
            <button onClick={(event) => { event.preventDefault(); handleSubmit(props.usersPromptData, props.updateValuesData); console.log(props.openAiResponseData) }}>Submit</button>
        </form >
    );
};

export default Form;


