import { useState } from 'react';
import Item from '../components/Items/Item';
import { useItems } from '../context/ListProvider';


export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleDeleteItem, handleUpdateItem } = useItems();
  
  function handleSubmit(e) {
    e.preventDefault();
    handleAddItem({ name: newItem });
    setNewItem('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='newItem'
          placeholder='add item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          required
        />
        <button
          type='submit'
          title='Add item'
        >Add item</button>
      </form>
      <ul>
        {items.map((item, i) => (
          <li key={`${item.id} ${i}`}>
            <Item 
              item={item}
              onUpdate={handleUpdateItem}
              onDelete={handleDeleteItem}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
