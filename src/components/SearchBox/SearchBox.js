import React from 'react';

import './SearchBox.css';

const SearchBox = ( { value, placeholder, handleChange } ) => (
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        value={value}
        onChange={handleChange} 
    />
);

export default SearchBox;