import axios from 'axios';
import Button from '@material-ui/core/Button';
import './DeleteImage.css';



function DeleteImage({id, loadImage})  {
 
   const deletePhoto = () => {
        
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

                <Button  variant="contained" color="secondary"  className = "deleteButton" onClick={deletePhoto}>
                    Delete
                    {/* <DeleteIcon /> */}
                </Button>
            </>

        )
    
}

export default DeleteImage;
