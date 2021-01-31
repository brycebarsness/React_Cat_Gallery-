import React, {Component} from 'react'; // shouldn't need this
import GalleryItem from '../GalleryItem/GalleryItem';
//import './GalleryList.css';




   
    class GalleryList extends Component { 
//function / return
render(){    
    return(
            <div className="allPhotos">
                
                {/*photolsit.map/ loadImage={loadImage}*/}
                        {this.props.photoList.map(photo => 
                        <GalleryItem photo={photo} key={photo.id} loadImage = {this.props.loadImage}/>
                        )}
                   
           
            </div>
        )
    }
}

export default GalleryList;
