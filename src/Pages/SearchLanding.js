import { useParams } from "react-router-dom";
import { productData } from "../assets/productData";
import "../Stylesheets/SearchLanding.css"
import { Navbar } from "../Components/Navbar";
import { Searchbar } from "../Components/Searchbar";

import { productsList } from "../assets/productsList";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ParkIcon from '@mui/icons-material/Park';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import LinkIcon from '@mui/icons-material/Link';
import { Modal } from "@material-ui/core";
import ReactInputVerificationCode from "react-input-verification-code";



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
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState("")

    const [checkOpen, setCheckOpen] = useState(false)

    const correct_code = "11111111"

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

    function handlePurchaseClick(){
        setOpen(true)
    }


    function handleVerificationEntered(){
        if(code === correct_code){
            setCheckOpen(true)
            navigate("/nft")
        }
        else{
            console.log("Incorrect")
        }
    }

    console.log(checkOpen)
    
    return(
    <div id="body-container">
        <Navbar />
        <Searchbar setSearchQuery={setSearchQuery} setClicked={setClicked} onSubmitFunc={handleProductSubmit} givenData={productName}/>
        <div className="options-contianer">
            {productInfo.options.map((option, i) =>{
                var stars = Math.min(Math.floor(option.optionCarbonEmissions / 3000), 5)
                return(
                    <div className="option-wrapper">
                        <div style={{display: "flex"}}>
                            <div style={{borderRadius: "100%", width: "100px", height: "100px"}}>
                                <img className="company-logo" src={option.company_logo} />
                            </div>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div style={{fontSize: "48px", marginLeft: "2.5vw", color:"white"}}>{option.company}</div>
                            </div>
                        </div>
                        {
                            stars == 1 ? 
                        <div className={"image-wrapper option-good" }>
                            <img className="option-image" src={option.optionImage} alt="car_image" />
                        </div>
                         : stars <= 3 ? 
                        <div className={"image-wrapper option-ok" }>
                            <img className="option-image" src={option.optionImage} alt="car_image" />
                        </div>
                        : 
                        <div className={"image-wrapper option-bad" }>
                            <img className="option-image" src={option.optionImage} alt="car_image" />
                        </div>
                        
                        }
                        <div style={{display:"flex", width:"85vw"}}>
                            <div className="carbon-emissions-main">
                                {"Carbon Emissions (lbs): " + option.optionCarbonEmissions}
                            </div>
                            <div style={{textAlign:"right", flexGrow: 1}}>
                                <button className="button-unfill" onClick={() =>{
                                    handlePurchaseClick()
                                    window.open(option.productLink, "_blank")
                                }}>
                                <   LinkIcon style={{ color: 'white' }} fontSize="large" />
                                </button>
                            </div>
                        </div>
                        <div className="emissions-rating-main">
                            {[...Array(5 - stars)].map((n) =>{
                                return(<ParkIcon  style={{ color: 'green' }} key={n} fontSize="large" className="star" />)
                            })}
                            {[...Array(stars)].map((n) =>{
                                return(<ParkOutlinedIcon style={{ color: 'green' }} fontSize="large" key={n} className="star" />)
                            })}
                        </div>

                        <div style={{width: "85vw", marginTop: "2.5vh", color: "white"}}>
                            {option.optionDescription}
                        </div>
                    
                        <div className="stage-wrapper">
                            <div className="stage">
                                <div className="stage-icon"><div className="stage-number">1</div></div>
                                {option.stages.primary}
                            </div>
                            <div className="stage-line-1"/>
                            <div className="stage">
                                <div className="stage-icon"><div className="stage-number">2</div></div>
                                {option.stages.secondary}
                            </div>
                            <div className="stage-line-2"/>
                            <div className="stage">
                                <div className="stage-icon"><div className="stage-number">3</div></div>
                                {option.stages.tertiary}
                            </div>
                        </div>
                        {i === productInfo.options.length - 1 ? "": <hr className="divider"/>}
                    </div>
                )
            })}
        </div>
        <Modal
            open={open}
            onClose={() =>{
                setOpen(false)
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div id="test-id" className="modal">
                <div className="modal-header">Enter Verification Code: </div>
                <div className="custom-styles">
                    <ReactInputVerificationCode id="code-input" length={9} autoFocus={true} placeholder="" onChange={e =>{
                        setCode(e)
                    }} onCompleted={() =>{ 
                            handleVerificationEntered()
                        }} />
                </div>
            </div>
        </Modal>
        {checkOpen ? <div className="checkmark"/> : ""}
    </div>

    )
} 