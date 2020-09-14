import React, { useState, Fragment } from 'react';
import GroceryList from './tables/GroceryList';
import AddItemForm from './forms/AddItemForm';
import EditItemForm from './forms/EditItemForm';

const App = () => {
  const groceryData = [
    {id: 1, name: 'Bread', quantity: 2},
    {id: 2, name: 'Butter', quantity: 1},
    {id: 3, name: 'Milk', quantity: 1},
    {id: 4, name: 'Cheese', quantity: 1},
    {id: 5, name: 'Eggs', quantity: 1},
    {id: 6, name: 'Yogurt', quantity: 4},
    {id: 7, name: 'Granola', quantity: 1},

  ]

  const initialFormState = { id: null, name: '', quantity: ''};


  const [items, setItems] = useState(groceryData);
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem]= useState(initialFormState);

  // See and update what the current item being edited is:
  const editRow = (item) => {
    setEditing(true)

    setCurrentItem({ id: item.id, name: item.name, quantity: item.quantity })
  }

  // Edit Item
  const updateItem = ( id, updateItem ) => {
    setEditing(false)

    setItems(items.map((item) => (item.id === id ? updateItem: item)))
  }

  // Add Item
  const addItem = (item) => {
    item.id = items.length + 1
    setItems([...items, item])
  }

  // Delete Item
  const deleteItem = (id) => {
    setEditing(false)
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD Grocery List with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit Item</h2>
                <EditItemForm
                setEditing={setEditing}
                editing={editing}
                currentItem={currentItem}
                updateItem={updateItem} />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add Item</h2>
                  <AddItemForm addItem={addItem}/>
              </Fragment>
             )}
             </div>
          <div className="flex-large">
            <h2>View List</h2>
            <GroceryList 
              items={items} 
              deleteItem={deleteItem}
              editRow={editRow}
              />
          </div>
       </div>
    </div>
  );
}

export default App;
