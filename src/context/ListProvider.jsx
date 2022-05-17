// useContext: global state/children/provider

import { createContext, useContext, useReducer } from "react";

// useReducer: list state (add, edit, delete)
const initialItems = [
  { id: 1, name: 'happiness', bought: false },
  { id: 2, name: 'meaning to life', bought: false },
];

const listReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_ITEM':
      return [{ id: Date.now(), name: action.payload.name, bought: false}, ...state];
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE_ITEM':
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          // const { name, bought } = action.payload.item;

          return {
            ...item,
            name: action.payload.item.name,
            bought: action.payload.item.bought
          };
        }

        return item;
      });
    case 'DELETE_ALL':
      return [];
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [items, dispatch] = useReducer(listReducer, initialItems);

  const handleAddItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }

  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } })
  }

  const handleUpdateItem = (item) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  }

  const deleteAllItems = () => {
    dispatch({ type: 'DELETE_ALL' });
  }

  const totalItems = items.length;

  return (
  <ListContext.Provider 
    value={{
      items, 
      handleAddItem, 
      handleDeleteItem, 
      handleUpdateItem, 
      deleteAllItems,
      totalItems}} >
      {children}
  </ListContext.Provider>
  )
};

export const useItems = () => {
  const context = useContext(ListContext);

  if (context === undefined)
    throw new Error('useItems must be called from within a TodoProvider');

  return context;
}