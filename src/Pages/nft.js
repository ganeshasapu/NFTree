import { useEffect } from 'react';
import { useState } from 'react';
import "../Stylesheets/NftPage.css"
import { Waves } from 'loading-animations-react';

export const NftPage = () =>{
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [imageUrl, setImageUrl] = useState(null)

 
    useEffect(() => {
    async function test() {
        console.log("testing")
        const response = await openai.createImage({prompt:"cartoon turtle avatar bright energetic blender 3D render houdini 3D octane 3D ZBrush Maya Cinema 4D pixar ", size:"256x256" })
        console.log(response.data.data[0].url)
        setTimeout(setImageUrl(response.data.data[0].url), 2000)
    }
    test()
    
    }, []);

    return(
        <div id="body-container">
            {imageUrl ? <img src={imageUrl} className="nft" alt="NFT" /> : <div><Waves waveColor="black" backgroundColor="#fff" /></div>}
        </div>
    )
}