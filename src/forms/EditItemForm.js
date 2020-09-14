import React, { useState, useEffect } from 'react';

const EditItemForm = (props) => {
    const [item, setItem] = useState(props.currentItem);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
            setItem({...item, [name]: value})
    }

    useEffect(() => {
        setItem(props.currentItem)
    }, [props])


    return (
        <form
        onSubmit={event => {
            event.preventDefault()
            // edit item
            props.updateItem(item.id, item)
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
            <button>Edit Item</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button">
               Cancel
            </button>
        </form>
    )

}

export default EditItemForm;