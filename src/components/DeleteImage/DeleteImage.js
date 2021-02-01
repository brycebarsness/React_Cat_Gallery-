import axios from 'axios';
import Button from '@material-ui/core/Button';
import './DeleteImage.css';



function DeleteImage({id, loadImage})  {
  //function to delete, sent to server, after... reload the page
   const deletePhoto = () => {
          //get id of photo
        const idToDelete = id
        axios({
            method: 'DELETE',
            url: '/gallery/delete/' + idToDelete,
        }).then(
            () => {
                loadImage();
            }
        )};
    


    
        return(
            <>

                <Button  variant="contained" color="default"  className = "deleteButton" onClick={deletePhoto}>
                    Delete
            
                </Button>
            </>

        )
    
}

export default DeleteImage;
