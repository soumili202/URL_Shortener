import logo from './logo.svg';

import React from 'react';
import axios from 'axios';
function App() {
  const [url, setUrl] = React.useState('');
  const [shortUrl, setShortUrl] = React.useState('');
  const [customneeded, setCustomneeded] = React.useState(false);
  const [customstring, setCustomstring] = React.useState('');
  const [customUrl, setCustomUrl] = React.useState('');
  const handleShortUrl =()=>{

    setShortUrl('https://open.spotify.com/')
  }
  const handleCustomString=()=>{

    console.log ('custom string ', customstring);
    setCustomUrl(`http://localhost:8000/${customstring}`)
  }
  return (
    <div className="App">
      <div className="Navbar w-full h-[10vh] bg-blue-500 flex justify-center items-center">
      <h1 className="font-mono text-red-700 text-6xl">URL Shortener</h1>
      </div>
      <div className= "form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Enter the URL: 
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} className="w-1/2 p-2 rounded-md border border-gray-500"/>

        </label>
        <button
        className="bg-blue-500 text-white text-4xl py-2 px-4 mb-4 rounded hover:bg-blue-700"
        onClick={()=>{handleShortUrl(); setUrl('')}}
      >
        Get Short URL
      </button>

      <button
        className="bg-green-500 text-white text-4xl py-2 px-4 ml-6 mb-4 rounded hover:bg-green-700"
        onClick={()=>{setCustomneeded(true)}}
      >
        Get Custom URL
      </button> 
      </div>
      {shortUrl && (
        <div className="form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Short URL: 
        <a href={shortUrl} target="_blank" className="text-blue-500 ml-10">{shortUrl}</a>
        </label>
        
        </div>)}
      {customneeded && (
        <div className="form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Enter the custom string: 
        <input type="text" value={customstring} onChange={(e)=>setCustomstring(e.target.value)} className="w-1/2 p-2 rounded-md border border-gray-500"/> </label>
        <button
        className="bg-blue-500 text-white text-4xl py-2 px-4 mb-4 rounded hover:bg-blue-700"
        onClick={()=>{handleCustomString(); setUrl('')}}
      >
        Submit
      </button>


        
        </div>
      )}
      {customUrl && (
        <div className="form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Custom URL: 
        <a href={customUrl} target="_blank" className="text-blue-500 ml-10 ">{customUrl}</a>
        </label>
        </div>)}
      
    
    </div>
  );
}

export default App;
