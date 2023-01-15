import { Searchbar } from "../Components/Searchbar";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router";
import { productsList } from "../assets/productsList";
import panda from "./panda.png"

export const Search = ({}) =>{
    const filterData = (query, data) => {
    if (!query) {
        return data;
    } else {
        return data.filter((d) => d.toLowerCase().includes(query));
    }
    };
    const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
    const dataFiltered = filterData(searchQuery, productsList);
    const [clicked, setClicked] = useState(false)

    function handleProductSubmit(product){
        navigate("/search/" + product)
    }

    return(
    <div id="body-container"
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#0d1116",
    }}
    >
        <Navbar style= {{top: "1%", left: "1%"}}/>
        <Searchbar setSearchQuery={setSearchQuery} setClicked={setClicked} onSubmitFunc={handleProductSubmit} givenData=""/>
        <img src={panda} alt="Panda" id="panda" style={{  
    width: "242px",
    position: "absolute",
    height: "auto",
    top: "56%",
    left: "44%",}}/>
    </div>
    )
} 