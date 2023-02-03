import React, {createContext, useReducer} from "react"
import  AppReducer from "./AppReducer"

// this helps us to add state to our application through the context API

// in the context APi there is intial state that is used as state and then manipulated htorughout

// initial state 

const intialState = {
    transactions : [{id: 0, text: "start transactions", amount: 0}]
}

// creating the context
export const GlobalContext = createContext(intialState)

// creating the provider component

export const GlobalProvider = ({children})=> {

    const [state, dispatch] = useReducer(AppReducer, intialState)
// actions are inserted h in the the provider

    const deleteTransaction =(id)=> {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }

    const addTransaction =(transaction)=> {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction })
    }

    return ( <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>{children}</GlobalContext.Provider>)
}