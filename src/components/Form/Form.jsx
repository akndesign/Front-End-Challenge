import React, { useRef } from 'react';
import { ReactComponent as FormSvg } from '../../send-02.svg';
import TextareaAutosize from 'react-textarea-autosize';
import "./Form.css";

//Note that the API Key is hidden away for security
const OpenAPIKey = process.env.REACT_APP_OPENAI_API_KEY;

const Form = (props) => {

    const handleSubmit = (usersPromptData) => {

        props.setIsLoading(true);

        console.log(usersPromptData.includes('Alexander Neumann'));

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

                props.setIsLoading(false)

                //AN: This cleans up the start of the OpenAPI Response using Regular Expressions (Regex)

                const aiResponse = response.choices[0].text.replace(
                    /((^.)(^,)(^())\r\n)/gm,
                    ""
                );


                props.updateValuesData(data => [...data, [`${usersPromptData}`, `${aiResponse}`]]);
                console.log(props.allValuesData)

                //const reversed = props.updateValuesData.reverse()
                //console.log(reversed);
            });

    };

    return (
        <><form onSubmit={(event) => { event.preventDefault(); event.target.reset(); handleSubmit(props.usersPromptData, props.updateValuesData, props.setIsLoading) }}>
            <TextareaAutosize placeholder="Type a message..." onChange={(event) => { event.preventDefault(); props.updateUsersPrompt(event.target.value) }} />
            <button className="Submit" type="submit" disabled={props.isLoading}><FormSvg /></button>
        </form>
        </>
    );
};

export default Form;


