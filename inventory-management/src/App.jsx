import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryTable from './components/InventoryTable';
import AddEditItemForm from './components/AddEditItemForm';
import FilterSortControls from './components/FilterSortControls';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editItem, setEditItem] = useState(null);
  

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items');
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  const addItem = async (item) => {
    try {
      const res = await axios.post('http://localhost:5000/api/items', item);
      setItems([...items, res.data]);
    } catch (err) {
      console.error('Error adding item:', err);
    }
  };

  const updateItem = async (updatedItem) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/items/${updatedItem._id}`, updatedItem);
      setItems(items.map(item => item._id === updatedItem._id ? res.data : item));
    } catch (err) {
      console.error('Error updating item:', err);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/items/${itemId}`);
      setItems(items.filter(item => item._id !== itemId));
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  // const filteredItems = items.filter(item => item.category.includes(filter));
  // const sortedItems = [...filteredItems].sort((a, b) => sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity);

  const filteredItems = items.filter(item => item.category.toLowerCase().includes(filter.toLowerCase()));
  const sortedItems = [...filteredItems].sort((a, b) => sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity);
  return (
    <div className="container">
      <h1 className="my-4">Inventory Management</h1>
      <AddEditItemForm addItem={addItem} updateItem={updateItem} editItem={editItem} setEditItem={setEditItem} />
      <FilterSortControls setFilter={setFilter} setSortOrder={setSortOrder} />
      <InventoryTable items={sortedItems} deleteItem={deleteItem} setEditItem={setEditItem} />
    </div>
  );
};

export default App;
