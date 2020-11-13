import React, { useState, Fragment, useEffect } from 'react';
import GroceryList from './tables/GroceryList';
import AddItemForm from './forms/AddItemForm';
import EditItemForm from './forms/EditItemForm';
import sampleProducts from './sample-products';

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

  const [items, setItems] = useState(initialFormState);
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
    setItems([...items, item])
  }


  // Delete Item
  const deleteItem = (id) => {
    setEditing(false)
    setItems(items.filter((item) => item.id !== id))
  }

  // Load Products
  const loadSampleProducts = () => {
    // const newItems = items.concat(sampleProducts)
    setItems(sampleProducts);
  }

  // useEffect(() => {
  //   window.localStorage.setItem('products', JSON.stringify(items))
  //   setItems(JSON.parse(localStorage.getItem(items)))
  // }, 
  // []);

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
          <button onClick={() => {loadSampleProducts(items)}}>
            Load Sample Products
            </button>
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
