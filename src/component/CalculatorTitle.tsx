/* eslint-disable react/prop-types */
import React from 'react';
  
// Create Functional Component.
// Takes title as props.value.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value } 
    </div>
  )
}
  
// Export Calculator Title.
export default CalculatorTitle;