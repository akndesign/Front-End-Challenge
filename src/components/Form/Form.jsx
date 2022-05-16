import React from "react";
import "./Form.css";

//Note that the API Key is hidden away for security
const OpenAPIKey = process.env.REACT_APP_OPENAI_API_KEY;

const Form = (props) => {

    const handleSubmit = (usersPromptData) => {

        const datafromAPI = {
            //AN: Passes in what the user types in the text field as with a template literal
            prompt: `${usersPromptData}`,
            temperature: 1,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${OpenAPIKey}`,
            },
            body: JSON.stringify(datafromAPI),
        })
            .then((response) => {

                //AN: If there's any errors coming from the OpenAPI,
                //this is where the code tells us the status code

                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then((response) => {

                //AN: This cleans up the start of the OpenAPI Response using Regular Expressions (Regex)

                const aiResponse = response.choices[0].text.replace(
                    /(^[.](^,)(^())\r\n)/gm,
                    ""
                );
                props.updateValuesData(data => [...data, [`${usersPromptData}`, `${aiResponse}`]]);
            });
    };

    return (
        <form >
            <label>
                <h3>Enter prompt</h3>
                <textarea
                    type="text"
                    onChange={(event) => props.updateUsersPrompt(event.target.value)}
                />
            </label>
            <button onClick={(event) => { event.preventDefault(); handleSubmit(props.usersPromptData, props.updateValuesData); }}>Submit</button>
        </form >
    );
};

export default Form;


