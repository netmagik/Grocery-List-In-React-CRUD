import React, { useState } from 'react';

const AddItemForm = (props) => {
    const intitialFormState = {id: `${Date.now()}`, name: '', quantity: ''}

    const [item, setItem] = useState(intitialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
            setItem({...item, [name]: value})
    }

    return(
        <form
        onSubmit={event => {
            event.preventDefault()
            // do not submit empty values - validation
            if (!item.name || !item.quantity) return
            // add item
            props.addItem(item)
            // reset the form to initial empty state after submission
            setItem(intitialFormState)
        }}
        >
            <label>Item</label>
            <input 
            type="text" 
            name="name" 
            value={item.name}
            onChange={handleInputChange}
            />
            <label>Quantity</label>
            <input 
            type="number" 
            name="quantity" 
            value={item.quantity}
            onChange={handleInputChange}
            />
            <button>Add New Item</button>
        </form>
    )
}


export default AddItemForm;