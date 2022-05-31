This project is based on an assessment. Merics is a User-friendly all-in-one affiliate marketing web Application that enables setup, launch, automate and manage multi-affiliate campaigns in few minutes. This website contains highlights of campaigns allows users to track and optimize their campaigns.

LIBRARY#

Chakra UI library is a simple, modular and accessible component library that gives the building blocks needed to build React applications.

Installation#

In this Vite React project, Chakra UI was installed by running either of the following: 

npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^

                                    OR
                                 
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

Provider Setup# 

After installing Chakra UI, ChakraProvider is needed to setup at the root of this application. 

Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App:

import { ChakraProvider } from '@chakra-ui/react' import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root') ReactDOM.createRoot(rootElement).render( <React.StrictMode> </React.StrictMode>, )

DEPENDENCIES#

    "@chakra-ui/react": "^2.1.2",
    "@emotion/react": "^11.9.0",
    "@emotion/styled": "^11.8.1",
    "emotion-theming": "^10.3.0",
    "framer-motion": "^6.3.5",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.3.0"

