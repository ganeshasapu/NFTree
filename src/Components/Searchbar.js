import { useState } from "react";
import { IconButton } from '@material-ui/core';
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import "../Stylesheets/SearchStyle.css"
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Searchbar = ({setSearchQuery, setClicked, onSubmitFunc, givenData}) =>{
    
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        navigate("/search/" + document.getElementById("search-bar").value)
        
    }

    useEffect(() => {
        // 👇️ call method in useEffect hook
        var ele = document.getElementById("form")
        console.log(ele)
        if(ele.addEventListener){
            ele.addEventListener("submit", handleSubmit, false); 
        }
    }, []);

    return(
            <form onSubmit={handleSubmit} id="form" style={{paddingTop: "5vh"}}>
                <TextField
                style={{backgroundColor: "#737373", color: "white", borderRadius: "15px"}}
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
                defaultValue={givenData}
                InputLabelProps={{ style: {
                    color: "#b3b3b3"
                }}}
                InputProps={{style: {
                    color: "#b3b3b3"
                }}}
                
                >
                    
                </TextField>

                <IconButton type="submit"><Search style={{ fill: "green"}} /></IconButton>
            </form>
            
        
        

    )
    

}