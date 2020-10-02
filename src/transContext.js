import React, { createContext, useReducer } from 'react';
import  TransactionReducer  from './transReducer';

const initalTransaction = [
    { desc: 'Cash', amount: 200 },
    { desc: 'hello', amount: -40 },
    { desc: 'Camera', amount: 120 }
]


export const TransactionContext = createContext(initalTransaction);




export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, initalTransaction)

    function addTransaction(transOb){
        dispatch({
            type: "ADD",
            payload:{
                desc: transOb.desc,
                amount: transOb.amount
            },
        })
    }


    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}