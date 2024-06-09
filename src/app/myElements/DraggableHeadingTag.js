"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-page-maker';

const DraggableHeading = (props) => {
  const {
    dropzoneID,
    parentID,
    showBasicContent,
    showPreview,
    id,
    headingType,
    initialText,
    ...rest
  } = props;

  const [text, setText] = useState(initialText || 'Enter heading text');

  const handleTextChange = () => {
    const newText = window.prompt('Enter text for the heading', text);
    if (newText !== null) {
      setText(newText);
    }
  };

  const handleHeadingTypeChange = (e) => {
    // Handle the change of heading type
    const newHeadingType = e.target.value;
    // Call a function to update the heading type in the parent component
    // For example: props.onHeadingTypeChange(newHeadingType);
  };

  const getHeadingStyle = () => {
    switch (headingType) {
      case 'h1':
        return { fontSize: '24px' };
      case 'h2':
        return { fontSize: '20px' };
      case 'h3':
        return { fontSize: '18px'};
      case 'h4':
        return { fontSize: '14px'};
      case 'h5':
        return { fontSize: '12px'};
     
      case 'h5':
        return { fontSize: '10px'};
     
      default:
        return {fontSize:"1px"}; 
    }
  };

  if (showBasicContent) {
    return (
      <Draggable {...props} >
        <div>
          <select value={headingType} onChange={handleHeadingTypeChange}>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
          </select>
          <div style={getHeadingStyle()} onClick={handleTextChange}>{text}</div>
        </div>
      </Draggable>
    );
  }

  if (showPreview) {
    return (
      <div onClick={handleTextChange} style={getHeadingStyle()}>
        {text}
      </div>
    );
  }

  return (
    <Draggable {...props} >
      <div onClick={handleTextChange} style={getHeadingStyle()}>
        {text}
      </div>
    </Draggable>
  );
};

DraggableHeading.propTypes = {
  id: PropTypes.string.isRequired,
  headingType: PropTypes.string.isRequired,
  initialText: PropTypes.string,
  showBasicContent: PropTypes.bool,
  showPreview: PropTypes.bool,
};

DraggableHeading.defaultProps = {
  headingType: 'h1',
  initialText: 'Enter heading text',
  showBasicContent: false,
  showPreview: false,
};

export default DraggableHeading;
