import React from 'react'
import { useItems } from '../../context/ListProvider'

export default function Header() {
  const { totalItems, deleteAllItems } = useItems();

  return (
    <>
      <h1>Shopping List:</h1>
      <p>Total Items: {totalItems} </p>
      <button onClick={deleteAllItems}>Delete All Items</button>
    </>
  )
  // total items
  // clear all items
}
