LIBRARY
Chakra UI library is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

Installation# 

In this Vite React project, Chakra UI was installed by running either of the following:
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6

Provider Setup# After installing Chakra UI, ChakraProvider is needed to setup at the root of this application.
Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App:

import { ChakraProvider } from '@chakra-ui/react' import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root') ReactDOM.createRoot(rootElement).render( <React.StrictMode> </React.StrictMode>, )

Customizing theme (Optional)# If you intend to customise the default theme object to match your design requirements, you need to extend the theme.
Chakra UI provides an extendTheme function that deep merges the default theme with your customizations.

// 1. Import the extendTheme function import { extendTheme } from '@chakra-ui/react' import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc const colors = { brand: { 900: '#1a365d', 800: '#153e75', 700: '#2a69ac', }, }

const theme = extendTheme({ colors })

// 3. Pass the theme prop to the ChakraProvider

const rootElement = document.getElementById('root') ReactDOM.createRoot(rootElement).render( <React.StrictMode> </React.StrictMode>, ) ⚡Quick tip: In cases where hot reload doesn't work, first check to make sure you're using the latest version of Vite. If hot reload issue persists, use this workaround in your vite.config.js or vite.config.ts file:

server: { watch: { usePolling: true, }, Now, your vite.config.js or vite.config.ts should now look like this:

import { defineConfig } from 'vite' import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ export default defineConfig({ plugins: [react()], server: { watch: { usePolling: true, }, }, })