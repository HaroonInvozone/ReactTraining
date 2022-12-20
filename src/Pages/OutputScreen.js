/* eslint-disable react/prop-types */
// Import React (Mandatory Step).
import React from 'react';
// Import Output Screen Row.
import OutputScreenRow from '../component/OutputScreenRow';

// Functional Component.
// Use to hold two Screen Rows.
const OutputScreen = () => {
return (
	<div className="screen">
	<OutputScreenRow />
	<OutputScreenRow />
	</div>
)
}

// Export Output Screen.
export default OutputScreen;
