import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import InputForm from '../InputForm/InputForm';
//import Grid from '@material-ui/core/Grid';

function App(){   
  
let [photoList, setPhotoList] = useState([]);
 //two variable for useState. first is the value, second is the function to change it.
 //function for get request 
  //get .data from /gallery and database and store it on the dom 
  const loadImage = () => {
    console.log('in loadImage');
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then(
      response => {
        console.log(response.data);
          setPhotoList(response.data);
        //use function to set photoList with the response (must be .data)
        })
      
      .catch(
      error => {
        console.log('error with axios get route', error );
        alert('Error. Check Console')
      }
    )
  }
useEffect(() => { 
  loadImage(); 
},[]) ;
  
  


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
       
        
        <div>
     
        <InputForm loadImage={loadImage} />    
                {/*loadImage= {loadImage} */} 

       <div id="display">
        
        <GalleryList photoList={photoList} loadImage = {loadImage} /> 
                    {/* same as above*/}
        </div>
      </div>
  </div>
   
    );
     
  }

export default App;
