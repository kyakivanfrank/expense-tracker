import React, {useState, useContext} from "react"
import {GlobalContext} from "../OurContext/GlobalState"

export default ()=> {
    const {addTransaction} = useContext(GlobalContext)

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

const onSubmit = e => {
    e.preventDefault();

const newTransaction ={
    id: Math.floor(Math.random()*1000000),
    text,
    amount: +amount
}

addTransaction(newTransaction);

}

    return <section>
        <h2>Add a transaction</h2>

<div className="sub-section"> 
    <form onSubmit={onSubmit}>
        <div className="input-div" >
            <label htmlFor="Text">Add a new transaction</label>
            <input className="input" value={text} onChange={(event)=> setText(event.target.value)} type="text" placeholder="enter your Item"/>
        </div>
        <div className="input-div">
            <label htmlFor="amount">(negative - expense / positive - income)</label>
            <input className="input" value={amount} onChange={(event)=> setAmount(event.target.value)} type="number" placeholder="enter the amount"/>
        </div>
        <button className="add_button">Add transaction</button>
    </form>

</div>

    </section>
}