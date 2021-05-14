import React, { createContext, useReducer, UseReducer } from 'react';
import authInitState from './initialsStates/authInitState';
import contactsInitState from './initialsStates/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitState)
    const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitState)

    return <GlobalContext.Provider value={{
        authState, contactsInitState, authDispatch, contactsDispatch
    }}>
        {children}
    </GlobalContext.Provider>
}


export default GlobalProvider;