import React, {useContext} from "react"
import { GlobalContext } from "../OurContext/GlobalState";


export default  ()=> {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.filter( amount => amount > 0)
    .reduce((currentAmount, newAmount) => (currentAmount += newAmount)
    ,0)

    const expense = amounts.filter( amount => amount < 0)
    .reduce((currentAmount, newAmount) => (currentAmount += newAmount)
    ,0)



    return <section>
    <div className="side2side"> 
        <div className="income-div"><h5>INCOME</h5><p>+{income}/=</p></div>
        <div className="expense-div"><h5>EXPENSES</h5><p>{expense}/=</p></div>
    </div>
    </section>
}