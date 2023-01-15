import { useEffect } from 'react';
import { useState } from 'react';
import "../Stylesheets/NftPage.css"
import { Dots } from 'loading-animations-react';
import ParticleBackground from 'react-particle-backgrounds'

export const NftPage = () =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [created, setCreated] = useState(false)
    const [image, setImage] = useState(null)

    const settings4 = {
        particle: {
        particleCount: 200,
        color: "#3eb550",
        minSize: 2,
        maxSize: 4
        },
        velocity: {
        directionAngle: 0,
        directionAngleVariance: 30,
        minSpeed: 0.2,
        maxSpeed: 4
        },
        opacity: {
        minOpacity: 0,
        maxOpacity: 0.5,
        opacityTransitionTime: 5000
        }
    }

    

 
    useEffect(() => {
    async function test() {
        const response = await openai.createImage({prompt:"cartoon turtle avatar bright energetic blender 3D render houdini 3D octane 3D ZBrush Maya Cinema 4D pixar ", size:"1024x1024" })
        var imageUrl = response.data.data[0].url
        const img = new Image()
        img.onload = () =>{
            setImage(imageUrl)
        }
        img.src = imageUrl
        setCreated(true)
    }
    if(!created){
        test()
    }
    
    }, []);

    return(
        <div>
            {image ? <div className="nft-title" >Your custom AI generated NFT had been deployed onto the blockchain using Verbwire!</div>: ""}
            <div className="nft-background">
                <ParticleBackground settings={settings4}></ParticleBackground>
                {image ? <div className="nft-container"><img src={image} className="nft" alt="NFT" /></div> : <Dots dotColors={["#3eb550", "#3eb550", "#3eb550", "#3eb550", "#3eb550", "#3eb550"]} className="nft-text" color="#d68c38"/>}
            </div>
        </div>
    )
}
//