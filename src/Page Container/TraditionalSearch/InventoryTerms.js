import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedInventory } from '../../Redux/actions';

// Import inventory data
import { inventory } from '../../Data/Inventory';

// Component for displaying inventory terms
function InventoryTerms() {
    // Redux hooks for dispatch and selector
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Correct path to selectedInventory in Redux store
    const selectedInventory = useSelector(state => state.search.selectedInventory);

    // Effect hook to log selected inventory changes
    useEffect(() => {
        console.log(selectedInventory);
    }, [selectedInventory]); // Include selectedInventory in the dependency array to track changes

    // Function to handle inventory click
    function handleInventoryClick(inventory) {
        // Dispatch action to set selected inventory
        dispatch(setSelectedInventory(inventory));
        // Navigate to traditional search page
        navigate('/traditional-search');
    }

    // Render the component
    return (
        <div>
            <h1>Inventory Terms</h1>
            {/* Map through inventory array to display buttons */}
            {inventory.map((inventoryTerm, index) => (
                <button key={index} onClick={() => handleInventoryClick(inventoryTerm)}>
                    {inventoryTerm}
                </button>
            ))}
        </div>
    );
}

export default InventoryTerms;
