// Import React (Mandatory Step).
import React from 'react';

// Create our Button component as a functional component.
const Button = (props) => {
return (
	<input
	type="button"
	// eslint-disable-next-line react/prop-types
	value={props.label}
	/>
);
}

// Export our button component.
export default Button;
