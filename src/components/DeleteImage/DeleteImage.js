import axios from 'axios';
import Button from '@material-ui/core/Button';
import './DeleteImage.css';



function DeleteImage({id, loadImage})  {
  //function to perform the delete request to server and then reload the page
   const deletePhoto = () => {
          //get the id of the photo
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
