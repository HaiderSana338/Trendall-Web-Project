// Import list of proveniences data
import { provenience } from '../../../Data/Provenience.js';

function groupProvenienceByFirstLetter(provenience) {
  const groups = {};
  
  provenience.forEach(item => {
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

// Use the function to group provenience by the first letter
const groupedProvenience = groupProvenienceByFirstLetter(provenience);

// Convert object to an array of objects for rendering
const items = Object.entries(groupedProvenience).map(([letter, values]) => ({
  letter,
  values: values.map(value => ({
    name: value,
    url: `testSearch.asp?searchBy=Provenience&txtValue=${value}&exact=true`
  }))
}));

// Use the items array for rendering in the BasicSearch component
export default items;
