import React from 'react';

const FilterSortControls = ({ setFilter, setSortOrder }) => {
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="mb-4">
            <div className="form-group mt-4">
                <input type="text" className="form-control" placeholder="Filter by category" onChange={handleFilterChange} />
            </div>
            <div className="form-group mt-4">
                <select className="form-control" onChange={handleSortChange}>
                    <option value="asc">Sort by Quantity (Asc)</option>
                    <option value="desc">Sort by Quantity (Desc)</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSortControls;
