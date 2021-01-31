import { useState} from 'react';
import axios from 'axios';
import './InputForm.css';
import Button from '@material-ui/core/Button';


function InputForm({loadImage}) {

    
   
    const [url, setUrl]= useState('');
    const [description, setDescription]= useState('');
        //initialize the counter => to be used as id for new photo
        // counter: 10,
    
    
    //function to capture the input and change the value in the state respectively
   // handleChangeFor = (event) => {
      //  setState({
         //   [propertyName]: event.target.value,
      //  })
   // }

    //function to perform a post request to the data file on server 
    //and then reload the page
    const newImage = (e) => {
      e.preventDefault();
        axios({
            method: 'POST',
            url: '/gallery',
            //pass the data obj with the information input
            data: {
                // id: this.state.counter,
                url: url,
                description: description,
            }
        }).then(
            () => {
              
                    setUrl('');
                    setDescription('');
                
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
                <Button type="submit">Submit Image</Button>
            </form>
        )
    
}

export default InputForm;
