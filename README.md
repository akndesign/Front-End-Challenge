# Shopify Front End Challenge: OpenAI API

**Howdy, Shopify Recruiter!** Thanks for stopping by.<br>

This document should provide an overview of this Front End challenge.<br>
This app was developed by Alexander Neumann using **React** ⚛️, **Node.JS** <img src="https://slackmojis.com/emojis/1776-nodejs/download" alt="drawing" width="30"/>, a splash of **custom CSS**🧑‍🎨 as well as the [Open AI API](https://openai.com/api/), as required.


## Demo

A live version of the challenge can be demoed here: https://shopify-akndesign.herokuapp.com
</br>

![Shopify Challenge Demo Gif](https://i.imgur.com/dqJN3Ye.gif)

## Design

![Shopify Challenge Design](https://i.imgur.com/X3RiKYT.png)

_The initial design created in Sketch, aligning with the final outcome. Note the chatbot image (Rosamund Pike as Marie Curie in 'Radioactive') and the selection of text engine have yet to be implemented_.

## Overview

This challenge was built in Node.JS and React, using **functional components** and **React Hooks** (useState, useRef). Additionally, the project was broken into **React components** (and thereby **props**), beginning with the `App` (parent) component. 

### App Component

The `App` component provides the overall structure of this app. The **React useState** hook was ulitised to cleanly and succinctly hold the relevant values required to pass the User's `prompt`, the `response`, and the `loader` state:

| UseState value                                              	| Description                                                       	|
|-------------------------------------------------------------	|-------------------------------------------------------------------	|
| `const [usersPromptData, updateUsersPrompt] = useState([])` 	| What the User types into the Form component, initially set as an empty array                       	|
| `const [allValuesData, updateValuesData] = useState([])`    	| The combined values of the User's prompt and the OpenAI's responses, also initially set as an empty array 	|
| `const [isLoading, setIsLoading] = useState(false);`        	| Setting the loader ('Please Wait'), by default, set to false          	|

Each UseState value was then passed as a props value, down to the `Form` and `Responses` components. </br>

![App Component](https://i.imgur.com/Sx0gSII.png)
<br>

Future versions would likely reduce the number of props passed down. 

### Header Component

The `Header` component is a set of hardcoded chat responses which guide the user and mimic the chat conversation between what the user types and the OpenAI responses (allowing the user to anticipate the functionality). Prompts are provided, directing the user to try the hardcoded, manual responses. 

### Form Component

The `Form` component is largely the brains of this challenge. Whilst on a User's perspective, the only visual aspect they see is `textarea` and `submit` button, this component is where the interaction with the OpenAI rests, and then handed off to the `Responses` component. 

Prior to hitting the OpenAI, two manual responses were baked into the app. These responses override OpenAI's responses. However, the code has to anticipate some ambiguity and/or upper or lowercase letters in the User's `prompt`. Thereby, we use: <br/>

    if ((props.usersPromptData).toLowerCase().includes("alexander neumann")) {
        let aiResponse = [
                <><AlexanderNeumann /></>
            ]

    props.updateValuesData(data => [...data, [`${usersPromptData}`, aiResponse]]);
    props.setIsLoading(false)

This sets the User's `prompt` to lowercase, and checks to see if the `prompt` includes the keywords _Alexander Neumann_. If true, this renders a `Form` subcomponent called `<AlexanderNeumann />`. This is then added to the `App` state value, and User's `prompt`. The loader is set to false. A duplicate logic is applied for the keywords _challenge built_, rendering a `Form` subcomponent called `<TechStack/>`. If these keywords do not exist, the app continues through to load the OpenAI API. 
