import { Searchbar } from "../Components/Searchbar";
import { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router";
import { productsList } from "../assets/productsList";

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
        <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
    <Navbar/>
    <Searchbar setSearchQuery={setSearchQuery} setClicked={setClicked} onSubmitFunc={handleProductSubmit} givenData=""/>
    <div style={{border: "solid 1px gray", borderTop:"none", width: "80vw", display: `${clicked ? "block" : "none"}`, position:"absolute", left: "9vw", top: "15vh"}}>
        {dataFiltered.map((d, i) => (
        <div
            className="text"
            style={{
            padding: 5,
            justifyContent: "normal",
            fontSize: 20,
            color: "blue",
            marginleft: 50,
            width: "250px",
            textAlign: "left"
            }}
            key={i}
        >
            {d}
        </div>
        ))}
    </div>
    </div>
    )
} 