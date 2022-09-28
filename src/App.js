import React from 'react';

import Autofill from './components/Autofill';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div>
        <h1 className='main-header'>React Typeahead</h1>
        <Autofill />
      </div>
    </ChakraProvider>
  );
}

export default App;
