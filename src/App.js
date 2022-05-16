import './App.css';
import React, { useState } from 'react';
import Form from './components/Form/Form'
import Responses from './components/Responses/Responses'
import { usePrevious } from './hooks/input-hook'

const App = () => {

  const [usersPromptData, setUsersPrompt] = useState([])
  const [openAiResponseData, setAiResponse] = useState([])

  /* const prevCount = usePrevious(usersPromptData);

  console.log(prevCount);

*/

  return (
    <div className="App">
      <div>
        <Form
          usersPromptData={usersPromptData}
          setUsersPrompt={setUsersPrompt}
          openAiResponseData={openAiResponseData}
          setAiResponse={setAiResponse}
        />
        <Responses openAiResponseData={openAiResponseData} usersPromptData={usersPromptData} />
      </div>
    </div>
  );
}

export default App;

/*

export default function App() => {



  const handleSubmit = (event) => {

    event.preventDefault();

    const data = {
      prompt: `${usersPromptData}`,
      temperature: 1,
      max_tokens: 200,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    console.log(data)

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OpenAPIKey}`,
      }, body: JSON.stringify(data)

    }).then(function (response) {
      console.log(response)
      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      } return response.json();
    }).then((response) => {

      const aiResponseTextwithRegex = response.choices[0].text;
      const aiResponseRegexRemoved = aiResponseTextwithRegex.replace(/(^[.],\r\n|^[.]|,|\n|\r)/gm, "");


      setUsersPrompt(usersPromptData)
      setAiResponse(aiResponseRegexRemoved)


      //props.aiResponseTextToList(aiResponseText)

      //setAiResponse(aiResponseText)
      //console.log(aiResponseText);

    })


    return (
      <>
        <Form

          usersPromptData={usersPromptData}
          handleSubmit={handleSubmit}
          setUsersPrompt={setUsersPrompt}


        />
        <Responses openAiResponseData={openAiResponseData} usersPromptData={usersPromptData} />
      </>
    );

  }
}

export default App;*/