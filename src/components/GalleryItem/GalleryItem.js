import React, { Component } from 'react';
import DeleteImage from '../DeleteImage/DeleteImage';
import './GalleryItem.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class GalleryItem extends Component { /* function GalleryItem, const [showPhoto, setShowPhoto]= useState('true') */
    //create a showPhoto state property to indicate if it displays the photo (value = true)
    //or the description (value = false) on the DOM
    state = {
        showPhoto: true,
    }

    //function to toggle the showPhoto value
    handleClickPhoto = () => {
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }

    handleClickButton = () => {
        axios({
            method: 'PUT',
            url: '/gallery/like/' + this.props.photo.id,
        }).then(
            () => {
     
                this.props.loadImage();
            }
        ).catch(
            error => {
                console.log('error with axios put route', error);
            }
        )
    }

    render() {
        return (
            <div className="individualPhoto">
                <Grid container >
                    <Grid item xs={12}>
       
                        {this.state.showPhoto ?
   
                            <img 
                                className="individualImage"
                                onClick={this.handleClickPhoto}
                                key={this.props.photo.id}
                                src={this.props.photo.url}
                                alt={this.props.photo.description} />
                            :
                  
                            <div height="200px" width="200px">
       
                                <p onClick={this.handleClickPhoto}>{this.props.photo.description}</p>
                            </div>
                        }
                        <br />
         
                        <Button variant="contained" color="primary" className="likeButton" onClick={this.handleClickButton} id={this.props.photo.id}>Love it!</Button>
                        <DeleteImage id={this.props.photo.id} loadImage={this.props.loadImage} />
                        <div>
                          
                            {this.props.photo.likes === 0 ?
                                <p className="numLikes">No people love this :(</p>
                                :
                                <p className="numLikes">{this.props.photo.likes} people like this!</p>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default GalleryItem;
