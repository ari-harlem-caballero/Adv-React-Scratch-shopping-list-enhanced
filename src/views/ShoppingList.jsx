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

  return (
    <h1>Shopping List:</h1>
  )
  // form/input
  // map items
}
