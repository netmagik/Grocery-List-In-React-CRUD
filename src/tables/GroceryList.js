import React from 'react';

const GroceryList = (props) => {
 // const initialState = () => window.localStorage.getItem('products') || '';

    return (
    <table>
        <thead>
            <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.items.length > 0 ? (
                props.items.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button 
                            className="button muted-button"
                            onClick={() => {
                                props.editRow(item)
                            }}
                            >Edit
                            </button>
                            <button 
                            onClick={() => props.deleteItem(item.id)}
                            className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Items Found</td>
                </tr>
            )}
        </tbody>
    </table>
    );
}

export default GroceryList;