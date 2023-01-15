import { useParams } from "react-router-dom";
import { productData } from "../assets/productData";
import "../Stylesheets/SearchLanding.css"
import { Navbar } from "../Components/Navbar";
import { Searchbar } from "../Components/Searchbar";

import { productsList } from "../assets/productsList";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Height } from "@material-ui/icons";
import ParkIcon from '@mui/icons-material/Park';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';


// Company, Company logo, Option image, Option Description, Option Carbon emissions, Stages: primary, secondary, tertiary
export const SearchLanding = ({}) =>{

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


    const productName = useParams().product
    var productInfo = {}
    productData.forEach((product) =>{
        if(product.product === productName.toLocaleLowerCase()){
            productInfo = product
        }
    })
    
    return(<div>
        <Navbar />
        <Searchbar setSearchQuery={setSearchQuery} setClicked={setClicked} onSubmitFunc={handleProductSubmit} givenData={productName}/>
        <div style={{border: "solid 1px gray", backgroundColor: "white", borderTop:"none", width: "80vw", display: `${clicked ? "block" : "none"}`, position:"absolute", left: "9vw", top: "15vh"}}>
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
    <div className="options-contianer">
            {productInfo.options.map((option, i) =>{

                var stars = Math.min(Math.floor(option.optionCarbonEmissions / 3000), 5)
                console.log(stars)
                return(
                    <div className="option-wrapper">
                        <div style={{display: "flex"}}>
                            <div style={{borderRadius: "100%", backgroundColor:"red", width: "100px", height: "100px"}}/>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div style={{fontSize: "48px", border: "1px solid red", marginLeft: "2.5vw"}}>{option.company}</div>
                            </div>
                        </div>
                        <div style={{border: "1px solid red", width: "85vw", height: "40vh", marginTop: "2vh"}}>
                        </div>
                        <div className="carbon-emissions-main">
                            {option.optionCarbonEmissions}
                        </div>
                        <div className="emissions-rating-main">
                            {[...Array(stars)].map((n) =>{
                                return(<ParkIcon key={n} fontSize="large" className="star" />)
                            })}
                            {[...Array(5 - stars)].map((n) =>{
                                return(<ParkOutlinedIcon fontSize="large" key={n} className="star" />)
                            })}
                        </div>

                        <div style={{width: "85vw", marginTop: "2.5vh"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at convallis justo. Donec nulla justo, iaculis sit amet accumsan quis, sollicitudin vel nunc. Vivamus lobortis eu lorem non interdum. Suspendisse vitae felis id dui sagittis tempor. Etiam rhoncus pretium nisi, vel scelerisque mi laoreet non. Nulla facilisi. Vestibulum gravida fringilla ante, congue elementum sem porttitor vel. Praesent cursus nisi magna, et ullamcorper arcu ultrices ut. Proin in diam vulputate tellus cursus dignissim nec vel metus. Vivamus a ligula justo. Nulla in finibus felis
                        </div>
                    
                        <div className="stage-wrapper">
                            <div className="stage">
                                <div className="stage-icon"/>
                                {option.stages.primary}
                            </div>
                            <div className="stage-line-1"/>
                            <div className="stage">
                                <div className="stage-icon"/>
                                {option.stages.secondary}
                            </div>
                            <div className="stage-line-2"/>
                            <div className="stage">
                                <div className="stage-icon"/>
                                {option.stages.tertiary}
                            </div>
                        </div>
                        {i === productInfo.options.length - 1 ? "": <div className="divider"/>}
                    </div>
                )
            })}
        </div>
        </div>

    )
} 