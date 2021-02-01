//import React from 'react'; // shouldn't need this
import GalleryItem from '../GalleryItem/GalleryItem';
//import './GalleryList.css';




   
function GalleryList({photoList, loadImage}) { 
//function / return
   
    return(
            <div className="allPhotos">
                 {/* get each individual photo from the list and pass it to GalleryItem Component as a prop */}
                {/*photolsit.map/ loadImage={loadImage}*/}
                        {photoList.map(photo => 
                        <GalleryItem photo={photo} key={photo.id} loadImage = {loadImage}/>
                        )}
                   
           
            </div>
        )
    
}

export default GalleryList;
