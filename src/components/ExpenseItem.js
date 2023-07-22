import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

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
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <button
          onClick={(event) => increaseAllocation(props.name)}
          style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          +
        </button>
      </td>
      <td>
        <button
          onClick={(event) => decreaseAllocation(props.name)}
          style={{
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          -
        </button>
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense} />
      </td>
    </tr>
  );
};

export default ExpenseItem;
