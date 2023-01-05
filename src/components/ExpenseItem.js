import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plus from '../images/plus1.png';
import reduce from '../images/reduce1.png';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency.split(" ")[0]} {props.cost}</td>
        <style></style>
        <td>  <button style={{border:"0px",backgroundColor:'transparent',}}onClick={event=> increaseAllocation(props.name)}><img src={plus} alt="reduce" style={{width:"30px",height:"30px"}}/></button></td>
        <td>  <button style={{border:"0px",backgroundColor:'transparent',}}onClick={event=> decreaseAllocation(props.name)}><img src={reduce} alt="reduce" style={{width:"30px",height:"30px"}}/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    ); 
};

export default ExpenseItem;
