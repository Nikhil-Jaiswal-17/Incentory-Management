import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing the edit and trash icons


const InventoryTable = ({ items, deleteItem, setEditItem }) => {
    return (
        <table className="table table-striped table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item._id} className={item.quantity < 10 ? 'table-danger' : ''}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <button className="btn btn-primary btn-sm mr-2" onClick={() => setEditItem(item)}>
                                    <FaEdit /> Edit
                                </button>
                                <button className="btn btn-danger btn-sm mr-2" onClick={() => deleteItem(item._id)}>
                                    <FaTrash /> Delete
                                </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default InventoryTable;
