import React from 'react'
import { useItems } from '../../context/ListProvider'

export default function Header() {
  const { totalItems } = useItems();

  return (
    <>
      <h1>Shopping List:</h1>
      <p>Total Items: {totalItems} </p>
    </>
  )
  // total items
  // clear all items
}
