import React, { useState } from 'react';

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
        <p style={{ textDecoration: item.bought ? 'line-through' : null }}>
          {item.name}
        </p>
        <button
          type='button'
          aria-label={`Edit ${item.name}`}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    )
  }

  return (
    <div>
      <input 
        type='checkbox'
        aria-label={`${item.name} checkbox`}
        checked={item.bought}
        onChange={(e) => {
          onUpdate({
            ...item,
            bought: e.target.checked
          })
        }}
      />
      {content}
      <button
        type='button'
        aria-label={`Delete ${item.name}`}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </div>
  )
  // editing: form/input/button
  // non-edit: checkbox, line-thru
  // delete button
}
