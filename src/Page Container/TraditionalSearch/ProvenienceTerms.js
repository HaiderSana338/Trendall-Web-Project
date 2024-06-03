import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProvenience } from '../../Redux/actions';

// Import provenience data
import { provenience } from '../../Data/Provenience';

// Component for displaying provenience terms
function ProvenienceTerms() {
    // Redux hooks for dispatch and selector
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Correct path to selectedProvenience in Redux store
    const selectedProvenience = useSelector(state => state.search.selectedProvenience);

    // Effect hook to log selected provenience changes
    useEffect(() => {
        console.log(selectedProvenience);
    }, [selectedProvenience]); // Include selectedProvenience in the dependency array to track changes

    // Function to handle provenience click
    function handleProvenienceClick(prov) {
        // Dispatch action to set selected provenience
        dispatch(setSelectedProvenience(prov));
        // Navigate to traditional search page
        navigate('/traditional-search');
    }

    // Render the component
    return (
        <div>
            <h1>Provenience Terms</h1>
            {/* Map through provenience array to display buttons */}
            {provenience.map((prov, index) => (
                <button key={index} onClick={() => handleProvenienceClick(prov)}>
                    {prov}
                </button>
            ))}
        </div>
    );
}

export default ProvenienceTerms;
