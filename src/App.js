import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Title from './components/Title/Title';
import Text from './components/Text/Text';
import Submit from './components/Submit/Submit';
import 'antd/dist/antd.css';
import RepeatedWords from './components/RepeatedWords/RepeatedWords';
import { AppContextProvider } from './context/AppContext';

function App() {


    return (
        <AppContextProvider>
            <div className="lyrics-counter__main">
                <Title />
                <Text />
                <RepeatedWords />
            </div>
        </AppContextProvider>
    );
}

export default App;
