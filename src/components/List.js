import React from 'react';
import Item from './Item';

const List = ({ items, deleteItem }) => (
  <ul>
    {
      items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))
    }
  </ul>

);

export default List;
