import React from 'react';

const SearchBox = (props) => {
	const {handleSearch} = props;

	return(
		<div className='pa2'>
			<input 
				className='pa2' 
				type='search' 
				placeholder='Search Robots...' 
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchBox;