import React, { useState } from 'react';
import './SearchBar.css'
const SearchBar = ({ onSearchInputChange }) => {
    const [search,setSearch]=useState('')
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setSearch(newValue)
      };
    const handleClick=()=>{
        onSearchInputChange(search)
    }
    
  return (
    <>
    <div className="container justify-content-center">
    
    <div className="row">

       <div className="col-md-8">
           
           <div className="input-group mb-3">
  <input type="text" className="form-control input-text" placeholder="Search by author" aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={handleInputChange}/>
  <div className="input-group-append">
    <button className="btn btn-outline-warning btn-lg" type="button" onClick={handleClick}><i className="fa fa-search"></i></button>
  </div>
</div>
           
       </div>        
        
    </div>
    
    
</div>
    </>
  );
};

export default SearchBar;
