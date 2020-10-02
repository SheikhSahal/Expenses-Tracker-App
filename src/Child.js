import React, { useContext, useState } from 'react'
import { TransactionContext } from './transContext';

function Child() {
    const { transactions, addTransaction } = useContext(TransactionContext)
    const [newDesc, setDesc] = useState("")
    const [newamt, setnewamt] = useState(0)


    const handlecondition = (event) => {
        event.preventDefault();
        if (Number(newamt) === 0) {
            alert("Please Enter Valid Amount")
        }
        else {
            addTransaction({
                amount: Number(newamt),
                desc: newDesc
            })
            setDesc('')
            setnewamt(0)
        }
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }


    const getExpense = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                income += transactions[i].amount
        }
        return income;
    }

    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>

    <h3>Your Balance <br /> {getIncome() + getExpense()}</h3>
            <div className="expense-container">
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>EXPENSE <br /> {getExpense()}</h3>
            </div>

            <h3>Histroy</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((tranobj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{tranobj.desc}</span>
                            <span>{tranobj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add new Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handlecondition}>
                <label>
                    Enter Description <br />
                    <input type="text" required onChange={(e) => setDesc(e.target.value)} value={newDesc} />
                </label>


                <label>
                    Enter Amount <br />
                    <input type="number" required onChange={(e) => setnewamt(e.target.value)} value={newamt} />
                </label>

                <input type="submit" value="Add Transaction" />
            </form>


        </div>
    )
}

export default Child
