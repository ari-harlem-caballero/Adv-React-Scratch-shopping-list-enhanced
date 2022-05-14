import React, { useReducer, useState } from 'react';

const initialItems = [
  { id: 1, name: 'happiness', bought: false },
  { id: 2, name: 'meaning to life', bought: false },
];

const listReducer = (state, action) => {

};

export default function ShoppingList() {
  const [items, dispatch] = useReducer(listReducer, initialItems);
  const [newItem, setNewItem] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: 'ADD_ITEM', payload: { name: newItem } });
  }

  return (
    <>
      <h1>Shopping List:</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='newItem'
          placeholder='add item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <button>Add item</button>
      </form>
    </>
  )
  // form/input
  // map items
}
