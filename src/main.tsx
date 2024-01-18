import App from './App.tsx';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
        <ToastContainer limit={5} />
    </React.StrictMode>
);
