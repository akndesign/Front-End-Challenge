import React from 'react';
import { ReactComponent as FormSvg } from '../../send-02.svg';
import AlexanderNeumann from './AlexanderNeumann';
import TechStack from './TechStack';
import TextareaAutosize from 'react-textarea-autosize';
import "./Form.css";

//Note that the API Key is hidden away for security
const OpenAPIKey = process.env.REACT_APP_OPENAI_API_KEY;

const Form = (props) => {

    const handleSubmit = (usersPromptData) => {

        props.setIsLoading(true);

        //AN: These override the OpenAI responses, for recruiter specific info
        if ((props.usersPromptData).toLowerCase().includes("alexander neumann")) {
            let aiResponse = [
                <><AlexanderNeumann /></>
            ]
            props.updateValuesData(data => [...data, [`${usersPromptData}`, aiResponse]]);
            props.setIsLoading(false)

        } else if ((props.usersPromptData).toLowerCase().includes("challenge built")) {

            let aiResponse = [
                <><TechStack /></>
            ]
            props.updateValuesData(data => [...data, [`${usersPromptData}`, aiResponse]]);
            props.setIsLoading(false)

        } else {

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

                    if (!response.ok) {
                        throw new Error("HTTP status " + response.status);

                    }
                    return response.json();
                })
                .then((response) => {

                    console.log(response.choices[0].text)
                    props.setIsLoading(false)

                    //AN: This cleans up the start of the OpenAPI Response using Regular Expressions (Regex)

                    let aiResponse = response.choices[0].text.replace(
                        /((^.)(^,)(^())\r\n)/gm,
                        ""
                    );

                    aiResponse = aiResponse === "" || null ? "I'm sorry Dave, I'm afraid I can't do that" : aiResponse;

                    props.updateValuesData(data => [...data, [`${usersPromptData}`, `${aiResponse}`]]);
                    console.log(props.updateValuesData);

                });
        }
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

