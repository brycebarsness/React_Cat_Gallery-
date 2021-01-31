import React, {useState} from 'react';
import DeleteImage from '../DeleteImage/DeleteImage';
import './GalleryItem.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function GalleryItem({ loadImage, photo }) { /* function GalleryItem, const [showPhoto, setShowPhoto]= useState('true') */
    //create a showPhoto state property to indicate if it displays the photo (value = true)
    //or the description (value = false) on the DOM
   const [showPhoto, setShowPhoto]= useState('true');

    //function to toggle the showPhoto value
   const handleClickPhoto = () => {
        setShowPhoto(!showPhoto);
    }

  const  handleClickButton = () => {
        axios({
            method: 'PUT',
            url: '/gallery/like/' + photo.id,
        }).then(
            () => {
     
                loadImage();
            }
        ).catch(
            error => {
                console.log('error with axios put route', error);
            }
        )
    }

    
        return (
            <div className="individualPhoto">
                <Grid container >
                    <Grid item xs={12}>
       
                        {showPhoto ?
   
                            <img 
                                className="individualImage"
                                onClick={handleClickPhoto}
                                key={photo.id}
                                src={photo.url}
                                alt={photo.description} />
                            :
                  
                            <div height="200px" width="200px">
       
                                <p onClick={handleClickPhoto}>{photo.description}</p>
                            </div>
                        }
                        <br />
         
                        <Button variant="contained" color="primary" className="likeButton" onClick={handleClickButton} id={photo.id}>Love it!</Button>
                        <DeleteImage id={photo.id} loadImage={loadImage} />
                        <div>
                          
                            {photo.likes === 0 ?
                                <p className="numLikes">No people love this :(</p>
                                :
                                <p className="numLikes">{photo.likes} people like this!</p>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default GalleryItem;
