import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './DeleteImage.css';



class DeleteImage extends Component {
 
    deletePhoto = () => {
        
        const idToDelete = this.props.id
        axios({
            method: 'DELETE',
            url: '/gallery/delete/' + idToDelete,
        }).then(
            () => {
                this.props.loadImage();
            }
        )
    }


    render() {
        return(
            <>

                <Button  variant="contained" color="secondary"  className = "deleteButton" onClick={this.deletePhoto}>
                    Delete
                    {/* <DeleteIcon /> */}
                </Button>
            </>

        )
    }
}

export default DeleteImage;
