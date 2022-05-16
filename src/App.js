import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Responses from './components/Responses/Responses'

const App = () => {

  const [usersPromptData, updateUsersPrompt] = useState([])
  const [openAiResponseData, updateAiResponse] = useState([])
  const [allValuesData, updateValuesData] = useState([])

  return (
    <div className="App">
      <div>
        <Header />
        <Form
          usersPromptData={usersPromptData}
          updateUsersPrompt={updateUsersPrompt}
          openAiResponseData={openAiResponseData}
          updateAiResponse={updateAiResponse}
          updateValuesData={updateValuesData}
        />
        <Responses allValuesData={allValuesData} />
      </div>
    </div>
  );
}

export default App;
