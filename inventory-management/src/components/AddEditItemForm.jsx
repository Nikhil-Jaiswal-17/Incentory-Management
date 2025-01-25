import React, { useState, useEffect } from 'react';

const AddEditItemForm = ({ addItem, updateItem, editItem, setEditItem }) => {
    const [item, setItem] = useState({ id: '', name: '', category: '', quantity: 0 });

    useEffect(() => {
        if (editItem) {
            setItem(editItem);
        }
    }, [editItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item._id) {
            updateItem(item);
        } else {
            addItem({ ...item, _id: Date.now().toString() });
        }
        setItem({ id: '', name: '', category: '', quantity: 0 });
        setEditItem(null);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group mt-4">
                <input type="text" className="form-control" name="name" value={item.name} onChange={handleChange} placeholder="Item Name" required />
            </div>
            <div className="form-group mt-4">
                <input type="text" className="form-control" name="category" value={item.category} onChange={handleChange} placeholder="Category" required />
            </div>
            <div className="form-group mt-4">
                <input type="number" className="form-control" name="quantity" value={item.quantity} onChange={handleChange} placeholder="Quantity" required />
            </div>
            <button type="submit" className="btn btn-success mt-4" style={{width:"150px", backgroundColor:"red"}}>{item._id ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default AddEditItemForm;
