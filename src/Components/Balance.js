import React, {useContext} from "react"

import { GlobalContext} from "../OurContext/GlobalState"


export default ()=> {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((currentTotal, item)=> {
        return currentTotal + item
    })

    // console.log(total)
    return <section> <h5>YOUR BALANCE</h5><h1>{total}/=</h1> </section>
}