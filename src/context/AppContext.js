import React from 'react';

export const AppContext = React.createContext(null);


export function AppContextProvider(props) {

    const [repetitionWordDictionary, setRepetitionDictionary] = React.useState({});
    const [exceptions, setExceptions] = React.useState([]);

    return (
        <AppContext.Provider
            value={{
                repetitionWordDictionary,
                setRepetitionDictionary,
                exceptions,
                setExceptions
            }}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}
