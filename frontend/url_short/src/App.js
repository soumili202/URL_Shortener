import logo from './logo.svg';

import React, { useEffect } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
function App() {
  const [url, setUrl] = React.useState('');
  const [shortUrl, setShortUrl] = React.useState('');
  const [customneeded, setCustomneeded] = React.useState(false);
  const [customstring, setCustomstring] = React.useState('');
  const [customUrl, setCustomUrl] = React.useState('');
  
  

  const handleShortUrl = async () =>{
    try{
      
    const response = await axios.post('http://localhost:8000/urls', {url: url});
    console.log('response', response);
    setShortUrl(response.data.shortID);
    }
    catch (error){
      console.log('error', error);
    }
    
       
    
    


    //setShortUrl('https://open.spotify.com/')
  }
  
  const handleCustomString=async()=>{

    try{
      
      const response = await axios.post('http://localhost:8000/url', {url: url , customstring: customstring});
      console.log('response', response);
      setCustomUrl(response.data.shortID);
      }
      catch (error){

        console.log('error', error);
        if (error.response && error.response.data && error.response.data.message) {          
          const errorMessage = error.response.data.message;       
          console.log('Backend error:', errorMessage);
          { setCustomUrl('') ;setUrl('');setShortUrl(''); setCustomneeded(false); setCustomstring('');}
          alert(errorMessage);
      }
         else{
          
            console.error('An unexpected error occurred:', error);
        
         }
    }
      
         
      
      
  
  
      //setShortUrl('https://open.spotify.com/')
    
  }
  return (
    <div className="App">
      <div className="Navbar w-full h-[10vh] bg-gray-500 flex justify-center items-center">
      <h1 className="font-mono text-black text-6xl">shortenIT</h1>
      </div>
      <div className= "form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Enter the URL: 
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} className="w-1/2 p-2 rounded-md border border-gray-500"/>

        </label>
        <button
          className="bg-blue-500 text-white text-4xl py-2 px-4 mb-4 rounded hover:bg-blue-700"
          onClick={() => { handleShortUrl(); setUrl(''); }}
        >
          Get Short URL
        </button>

      <button
        className="bg-green-500 text-white text-4xl py-2 px-4 ml-6 mb-4 rounded hover:bg-green-700"
        onClick={()=>{setCustomneeded(true); setShortUrl(''); }}
      >
        Get Custom URL
      </button> 
      <button
          className="bg-yellow-500 text-white text-4xl py-2 px-4 ml-6 mb-4 rounded hover:bg-blue-700"
          onClick={() => { setCustomUrl('') ;setUrl('');setShortUrl(''); setCustomneeded(false); setCustomstring('');}}
        >  Restart</button>
      
      </div>
      {shortUrl && (
        <div className="form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Short URL: 
        <a href={`http://localhost:8000/${shortUrl}`} target="_blank" className="text-blue-500 ml-10">{`http://localhost:8000/${shortUrl}`}</a>
        </label>
        
        </div>)}
      {customneeded && (
        <div className="form mt-10 ml-20 flex">
        <label className= "block mb-2 font-bold text-3xl">Enter the custom string: 
        <input type="text" value={customstring} onChange={(e)=>setCustomstring(e.target.value)} className="w-1/2 p-2 rounded-md border border-gray-500 "/> </label>
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
        <a href={`http://localhost:8000/${customUrl}`} target="_blank" className="text-blue-500 ml-10 ">{`http://localhost:8000/${customUrl}`}</a>
        </label>
        </div>)}
        
      
    
    </div>
  );
}


export default App;
