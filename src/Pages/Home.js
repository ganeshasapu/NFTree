import { Link } from "react-router-dom"
import { Navbar } from "../Components/Navbar"
import "../Stylesheets/Home.css"
import frogImage from "./background.jpg"
import ivy1 from "./ivy1.png"
import ivy2 from "./ivy2.png"
import Image1 from "./image1.jpg"
import Image2 from "./image2.jpg"
import Image3 from "./image3.jpg"
import { myFunc } from "./parallax"
import {useEffect} from 'react'
import climate_1 from "../assets/climate_images/climate_1.jpg"
import climate_2 from "../assets/climate_images/climate_2.jpg"
import climate_3 from "../assets/climate_images/climate_3.jpg"
import climate_4 from "../assets/climate_images/climate_4.jpg"
import climate_5 from "../assets/climate_images/climate_5.jpg"


export const Home = ({}) =>{
    useEffect(() => {
        myFunc();
    });
    return(
        <div>
            <Navbar />
            <div id="BackgroundImage">
                <img src={frogImage} alt="Background with Îa Frog" id="img1"/>
                <img src={ivy1} alt="Ivy Plant" id="ivy1"/>
                <img src={ivy2} alt="Ivy Plant" id="ivy2"/>
            </div>
            <div class="slider">
                <a href="#slide-1">1</a>
                <a href="#slide-2">2</a>
                <a href="#slide-3">3</a>
                <a href="#slide-4">4</a>
                <a href="#slide-5">5</a>

                <div class="slides">
                    <div id="slide-1">
                        <img src={climate_1}/>
                    </div>
                    <div id="slide-2">
                        <img src={climate_2}/>
                    </div>
                    <div id="slide-3">
                        <img src={climate_3}/>
                    </div>
                    <div id="slide-4">
                        <img src={climate_4}/>
                    </div>
                    <div id="slide-5">
                        <img src={climate_5}/>
                    </div>
                </div>Î
            </div>

            <div id="about-us">
               We create <span className="highlight">non-fungible tokens (NFTs)</span> that raise 
               awareness about climate change and the environment. These <span className="highlight">AI generated NFTs</span> can be collected by purchasing products at environmentally aware companies. 
               We aim to merge the immense popularity of NFTs with the <span className="highlight">crucial cause of climate change</span>.
            </div>
        </div>
)}