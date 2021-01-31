import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
//import './GalleryList.css';




   
    class GalleryList extends Component {

render(){    
    return(
            <div className="allPhotos">
                
                
                        {this.props.photoList.map(photo => 
                        <GalleryItem photo={photo} key={photo.id} loadImage = {this.props.loadImage}/>
                        )}
                   
           
            </div>
        )
    }
}

export default GalleryList;
