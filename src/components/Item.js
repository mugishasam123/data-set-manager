import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

const Item = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };
  const handleDelete = (id) => {
    props.deleteItem(id);
  };
  const handleEditing = (e) => {
    setIsEditable(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setIsEditable(false);
    }
  };

  const focusMode = {
    borderLeft: ' 16px solid #253E57',
    backgroundColor: 'white',

  };

  return (
    <li className="list-name" onMouseEnter={() => setIsHovered(true)} onDoubleClick={handleEditing} onMouseLeave={() => setIsHovered(false)} onClick={() => handleFocus()} style={isFocused ? focusMode : null}>
      <span className="name first" onKeyDown={handleUpdatedDone} contentEditable={isEditable}>{props.item.Name}</span>
      <span className="desc second" onKeyDown={handleUpdatedDone} contentEditable={isEditable}>{props.item.Description}</span>
      <span className="ida second" onKeyDown={handleUpdatedDone} contentEditable={isEditable}>{props.item.id}</span>
      {(isHovered || isFocused) && (<RiDeleteBinLine onClick={() => handleDelete(props.item.id)} />)}
    </li>

  );
};

export default Item;
