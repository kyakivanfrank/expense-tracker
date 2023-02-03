import React from "react"
import  "./Styles/App.css"
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";

import {GlobalProvider} from "./OurContext/GlobalState"


export default ()=> {
    return <GlobalProvider>
    <div className="wholeApp">
        <Header/>
    
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
    
    </div>
    </GlobalProvider>
    
}