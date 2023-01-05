import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = (props) => {
    const { dispatch,budget,expenses,currency } = useContext(AppContext);

    const [curBudget, setBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const submitEvent = (newBuget) => {

            if(newBuget > 20000) {
                alert("The value cannot exceed  £ 20000");
                return;
            }
            if(newBuget <  totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending");
                return;
            }
            setBudget(newBuget);

            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(newBuget),
            });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.split(" ")[0]}
            <input
                        required='required'
                        type='number'
                        id='budget'
                        step={10}
                        value={curBudget}
                        style={{size: 10}}
                        onChange={(event) => submitEvent(event.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;