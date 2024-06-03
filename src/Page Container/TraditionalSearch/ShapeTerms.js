import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedShape } from '../../Redux/actions';
import Header from '../../Components/HomeScreen/Header';

// Import shape data
import { shapes } from '../../Data/Shapes';

// Component for displaying shape terms
function ShapeTerms() {
    // Redux hooks for dispatch and selector
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Correct path to selectedShape in Redux store
    const selectedShape = useSelector(state => state.search.selectedShape);

    // Effect hook to log selected shape changes
    useEffect(() => {
        console.log(selectedShape);
    }, [selectedShape]); // Include selectedShape in the dependency array to track changes

    // Function to handle shape click
    function handleShapeClick(shape) {
        // Dispatch action to set selected shape
        dispatch(setSelectedShape(shape));
        // Navigate to traditional search page
        navigate('/traditional-search');
    }
    const handleBack = (event) => {
        event.preventDefault();
        navigate(-1);
      };
    // Render the component
    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <div className="background--black-full">
                    <div className="grid-container">
                        <div className="white-text">
                            <div className="container__link navigation-section__link" onClick={handleBack}>
                                <i className="container__link-icon fa-solid fa-circle-arrow-left" style={{marginTop:'30px'}}></i>
                                Return to previous page
                            </div>
                            <div style={{marginLeft:'10px', width:'80%'}}>
                            <h1 style={{margin:'10px 0 30px 0'}}>Shape Terms</h1>
                            {/* Map through shapes array to display buttons */}
                            {shapes.map((shape, index) => (
                                <button key={index} onClick={() => handleShapeClick(shape)}>
                                    {shape}
                                </button>
                            ))}
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShapeTerms;
