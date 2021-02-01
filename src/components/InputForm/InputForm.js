import { useState} from 'react';
import axios from 'axios';
import './InputForm.css';
import Button from '@material-ui/core/Button';


function InputForm({loadImage}) {

    
   
    const [url, setUrl]= useState('');
    const [description, setDescription]= useState('');
       
    //two sets of inputs for useState, first variable is the value, second variable is the function to change value
  

    //function to perform a post request to the data file on server 
    const newImage = (e) => {
      e.preventDefault();
        axios({
            method: 'POST',
            url: '/gallery',
            //pass the data obj with the information input
            data: {
                
                url: url,
                description: description,
            }
        }).then(
            () => {//empty input fields
              
                    setUrl('');
                    setDescription('');
                    //and then reload the page
                    loadImage();

            }
        ).catch(
            error => {
                console.log('error with post request', error);
            }
        )
    }
    
    

        return (
            <form onSubmit={newImage} >
                <input onChange={(e) => setUrl (e.target.value)} value={url} id="urlInput" placeholder="Enter image url"></input>
                <input onChange={(e) => setDescription(e.target.value)} value={description} id="descriptionInput" placeholder="Enter image description"></input>
                <Button id="submitButton" type="submit">Submit Image</Button>
            </form>
        )
    
}

export default InputForm;
