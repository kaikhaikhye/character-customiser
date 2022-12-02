import './App.css';
import React, { useState } from "react";
import nft_body from './nft-layers/nft_body.png';
import nft_eyes_1 from './nft-layers/nft_eyes-1.png';
import nft_eyes_2 from './nft-layers/nft_eyes-2.png';
import nft_eyes_3 from './nft-layers/nft_eyes-3.png';
import nft_hair_1 from './nft-layers/nft_hair-1.png';
import nft_hair_2 from './nft-layers/nft_hair-2.png';
import nft_hair_3 from './nft-layers/nft_hair-3.png';
import nft_mouth_1 from './nft-layers/nft_mouth-1.png';
import nft_mouth_2 from './nft-layers/nft_mouth-2.png';
import nft_mouth_3 from './nft-layers/nft_mouth-3.png';

function App() {
  const NFTeyes = [nft_eyes_1, nft_eyes_2, nft_eyes_3]
  const NFThair = [nft_hair_1, nft_hair_2, nft_hair_3]
  const NFTmouth = [nft_mouth_1, nft_mouth_2, nft_mouth_3]
  const [randomEyes, setRandomEyes] = useState(Math.floor(Math.random() * 3))
  const [randomMouth, setRandomMouth] = useState(Math.floor(Math.random() * 3))
  const [randomHair, setRandomHair] = useState(Math.floor(Math.random() * 3))

  const random = (e) => {
    e.preventDefault();
    setRandomEyes(Math.floor(Math.random() * 3))
    setRandomMouth(Math.floor(Math.random() * 3))
    setRandomHair(Math.floor(Math.random() * 3))
  }

  return (
    <div className="NFT">
      <div className='nft-eyes'>
        <img src={NFTeyes[randomEyes]} alt="eyes" />
      </div>
      <div className='nft-mouth'>
        <img src={NFTmouth[randomMouth]} alt="mouth" />
      </div>
      <div className='nft-hair'>
        <img src={NFThair[randomHair]} alt="hair" />
      </div>
      <div className='nft-body' >
        <img src={nft_body} alt="body" />
      </div>
      <div className="Button">
        <button className="Randomize" onClick={random}>Randomize</button>
      </div>
    </div>

  );
}

export default App;
