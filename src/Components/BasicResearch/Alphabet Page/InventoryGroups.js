// Import list of inventory data
import { inventory } from '../../../Data/Inventory.js';

function groupInventoryByFirstLetter(inventory) {
  const groups = {};
  
  inventory.forEach(item => {
    const firstLetter = item.charAt(0).toUpperCase(); // Convert the first letter to uppercase

    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    
    groups[firstLetter].push(item);
  });

  // Sort groups alphabetically
  const sortedGroups = {};
  Object.keys(groups).sort().forEach(key => {
    sortedGroups[key] = groups[key];
  });

  return sortedGroups;
}

const groupedInventory = groupInventoryByFirstLetter(inventory);

// Convert object to an array of objects for rendering
const items = Object.entries(groupedInventory).map(([letter, values]) => ({
  letter,
  values: values.map(value => ({
    name: value,
    url: `testSearch.asp?searchBy=Shape&txtValue=${value}&exact=true`
  }))
}));

// Use the items array for rendering in the BasicSearch component
export default items;
