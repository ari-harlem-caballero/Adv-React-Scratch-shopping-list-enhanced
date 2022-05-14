import React, { useState } from 'react'

export default function Item({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let content;

  if (isEditing) {
    content = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsEditing(false);
        }}
      >
        <input 
          value={item.name}
          onChange={(e) => {
            onUpdate({
              ...item,
              name: e.target.value
            })
          }}
          aria-label='Edit field'
        />
        <button type='submit' aria-label='Save changes'>
          Save
        </button>
      </form>
    );
  } else {
    content = (
      <>
      </>
    )
  }

  return (
    <div>Item</div>
  )
  // editing: form/input/button
  // non-edit: checkbox, line-thru
  // delete button
}
