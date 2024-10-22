import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import store from './Redux/Store';

// Extend the theme to include global styles
const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        // Allow scrolling but hide the scrollbar
        overflowY: 'scroll',
        scrollbarWidth: 'none',  // For Firefox
        '-ms-overflow-style': 'none',  // For IE and Edge
      },
      'html::-webkit-scrollbar': {
        display: 'none',  // For Chrome, Safari, and Opera
      },
    },
  },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
