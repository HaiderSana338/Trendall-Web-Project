// Import list of shapes data
import { shapes } from '../../../Data/Shapes.js';

// Function to group shapes by the first letter
function groupShapesByFirstLetter(shapes) {
  const groups = {};
  
  shapes.forEach(shape => {
    const firstLetter = shape.charAt(0).toUpperCase(); // Convert the first letter to uppercase

    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    
    groups[firstLetter].push(shape);
  });

  // Sort groups alphabetically
  const sortedGroups = {};
  Object.keys(groups).sort().forEach(key => {
    sortedGroups[key] = groups[key];
  });

  return sortedGroups;
}

// Use the function to group shapes by the first letter
const groupedShapes = groupShapesByFirstLetter(shapes);

// Convert object to an array of objects for rendering
const items = Object.entries(groupedShapes).map(([letter, values]) => ({
  letter,
  values: values.map(value => ({
    name: value,
    url: `testSearch.asp?searchBy=Shape&txtValue=${value}&exact=true`
  }))
}));

// Use the items array for rendering in the BasicSearch component
export default items;
