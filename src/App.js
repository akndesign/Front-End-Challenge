import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Responses from './components/Responses/Responses'

const App = () => {

  const [usersPromptData, updateUsersPrompt] = useState([])
  const [allValuesData, updateValuesData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <main>
        <Header />
        <Responses
          allValuesData={allValuesData}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </main>
      <Form
        usersPromptData={usersPromptData}
        updateUsersPrompt={updateUsersPrompt}
        updateValuesData={updateValuesData}
        allValuesData={allValuesData}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
