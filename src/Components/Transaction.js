import React, {useContext} from "react";
import {GlobalContext}  from "../OurContext/GlobalState";



export default transaction => { 
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? `+` : `-`

    return <li style={transaction.amount > 0 ? { borderRight: "5px green solid" }: { borderRight: "5px rgb(199, 6, 6) solid" }} >
 <button onClick={()=>  deleteTransaction(transaction.id)}>x</button>
<h5>{transaction.text}</h5>
<h5 className="amount">{sign}{Math.abs(transaction.amount)}/=</h5> 
{/* Math.abs helps to make any number absolute of its value. it removes negative signs  on numbers */}
</li>
}