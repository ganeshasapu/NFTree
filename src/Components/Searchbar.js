import { useState } from "react";
import { IconButton } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "../Stylesheets/SearchStyle.css"

export const Searchbar = ({setSearchQuery, setClicked, onSubmitFunc, givenData}) =>{
    

    return(
            <div>
                <TextField
                id="search-bar"
                className="search"
                onInput={(e) => {
                    setSearchQuery(e.target.value.toLowerCase());
                }}
                onFocus={(e)=>{
                    setClicked(true)
                }}
                onBlur={(e)=>{
                    setClicked(false)
                }}
                label="Enter Product"
                variant="outlined"
                placeholder="Search..."
                >
                    
                </TextField>
                <IconButton onClick={() =>{
                    onSubmitFunc(document.getElementById("search-bar").value)
                }}><Search style={{ fill: "blue"}} /></IconButton>
            </div>
            
        
        

    )
    

}