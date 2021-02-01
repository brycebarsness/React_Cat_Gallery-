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
//function to update the # of likes in the data file on server
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
        )//show photo in case of truthy
        //attach onClick event listener, handleClickButton
    }

    
        return (
            <div className="individualPhoto">
                <Grid container >
                    <Grid item xs={12}>
                            {/*show photo in case of truthy*/}
                        {showPhoto ?
   
                            <img 
                                className="individualImage"
                                onClick={handleClickPhoto}
                                key={photo.id}
                                src={photo.url}
                                alt={photo.description} />
                            :        //show description in case of falsy
                                <div height="200px" width="200px">
                                <p onClick={handleClickPhoto}>{photo.description}</p>
                                </div>
                            }
                        <br />
         
                        <Button variant="contained" className="likeButton" onClick={handleClickButton} id={photo.id}>Love it!</Button>
                        <DeleteImage class="deleteButton" id={photo.id} loadImage={loadImage} />
                        <div>
                          {/* ternary operator to display different sentences based on the value retrieved
                            from the photo props */}
                            {photo.likes === 0 ?
                                <p className="numLikes">No One Loves This Yet </p>
                                :
                                <p className="numLikes">{photo.likes} People Love This!</p>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default GalleryItem;
