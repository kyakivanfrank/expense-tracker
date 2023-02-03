import React, {useContext} from "react"
import {GlobalContext} from "../OurContext/GlobalState"
import Transaction from "./Transaction";


export default ()=> {

    const { transactions } = useContext(GlobalContext)

    return <section>
<h2>Transactions</h2>

<ul className="history-pieces sub-section">
 {transactions.map(transaction => <Transaction key={transaction.id} {...transaction}/> )}
</ul>


    </section>
}