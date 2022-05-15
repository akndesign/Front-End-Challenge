import React, {Component, useState, useEffect} from 'react';
import Responses from './components/Responses/Responses'
import PromptInput from './components/PromptInput/PromptInput'
const { Configuration, OpenAIApi} = require("openai");

const OpenAPIKey = process.env.REACT_APP_OPENAI_API_KEY

const App = (props) => {

  const [usersPromptData, setUsersPrompt] = useState([])
  const [aiResponseData, setAiResponse] = useState([])
  
  const handleClick = (usersPrompt) => {

  console.log(usersPrompt);

  const data = {
        prompt: `${usersPrompt}`,
        temperature: 1,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        };

  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OpenAPIKey}`,
      }, body: JSON.stringify(data)
      
    }).then(function(response) {
      if (!response.ok) {
          throw new Error("HTTP status " + response.status);
      } return response.json();
    }).then((response) => {
        
        const aiResponseTextwithRegex = response.choices[0].text;
        const aiResponseRegexRemoved = aiResponseTextwithRegex.replace(/(^[.],\r\n|^[.]|,|\n|\r)/gm, "");

        setUsersPrompt(usersPrompt)
        setAiResponse(aiResponseRegexRemoved)
      
        
        //props.aiResponseTextToList(aiResponseText)

        //setAiResponse(aiResponseText)
        //console.log(aiResponseText);

    })

    
  }

  console.log(aiResponseData)

  return (

    //create a form 
    //HandleSubmitHandler
    //React Forms 
    //accessing previous state in Google

    <div>
    <form onSubmit={() => handleClick(usersPromptData)}>
    <h1>Good morning, Dave. I'm HAL 3000</h1>
    <label>
      Enter prompt 
      <textarea type="text" value={usersPromptData} onChange={
                    (event) => setUsersPrompt(event.target.value)
                } />
      <Responses aiResponseData={aiResponseData} promptResponseData={usersPromptData} />
    </label>
    <input type="submit" value="Submit" />
    
    </form>
     {/*<button onClick={() => handleClick(usersPromptData)} type="submit" value="Submit" > Submit Prompt </button>*/}
    </div>
  )
}

export default App;