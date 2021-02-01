//import React from 'react'; // shouldn't need this
import GalleryItem from '../GalleryItem/GalleryItem';
//import './GalleryList.css';




   
function GalleryList({photoList, loadImage}) { 
//function / return
   
    return(
            <div className="allPhotos">
                 {/* pass each photo from the list to GalleryItem Component as prop */}
                {/*photolsit.map/ loadImage={loadImage}*/}
                        {photoList.map(photo => 
                        <GalleryItem photo={photo} key={photo.id} loadImage = {loadImage}/>
                        )}
                   
           
            </div>
        )
    
}

export default GalleryList;
