import { useReducer, useState } from 'react';
import Item from '../components/Items/Item';

const initialItems = [
  { id: Date.now(), name: 'happiness', bought: false },
  { id: Date.now(), name: 'meaning to life', bought: false },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ id: Date.now(), name: action.payload.name, bought: false}, ...state];
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_ITEM':
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          const { name, bought } = action.payload.item;

          return {
            ...item,
            name,
            bought
          };
        }

        return item;
      });
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

export default function ShoppingList() {
  const [items, dispatch] = useReducer(listReducer, initialItems);
  const [newItem, setNewItem] = useState('');
  
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: { name: newItem } });
    setNewItem('');
  }

  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } })
  }

  const handleUpdateItem = (item) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  }

  return (
    <>
      <h1>Shopping List:</h1>
      <form onSubmit={handleAddItem}>
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
      <ul>
        {items.map((item) => {
          <li key={item.id}>
            <Item 
              item={item}
              onUpdate={handleUpdateItem}
              onDelete={handleDeleteItem}
            />
          </li>
        })}
      </ul>
    </>
  );
}
