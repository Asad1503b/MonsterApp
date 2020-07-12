import React from 'react'
import './Search-box.css'
export const SearchBox = (props) => {
    <input
        className="search"
        type="search"
        placeholder="Enter To Search Monster"
        onchange={props.OnSearchChange}

    />
}