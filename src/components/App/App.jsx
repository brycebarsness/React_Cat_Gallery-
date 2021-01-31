import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import InputForm from '../InputForm/InputForm';
//import Grid from '@material-ui/core/Grid';

class App extends Component {   //let [photoList, setPhotoList] = useState('');
  state = ({
    photoList: [],  
  });

  loadImage = () => {
    console.log('in loadImage');
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then(
      response => {
        console.log(response.data);
          this.setState({// setPhotoList(response.data);
          photoList: response.data
        })
      })
      .catch(
      error => {
        console.log('error with axios get route', error );
        alert('Error. Check Console')
      }
    )
  }
  componentDidMount() { //useEffect(() => { loadImage()}; [] ) ;
    this.loadImage();
  }
  
  

render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
       
        
        <div>
     
        <InputForm loadImage={this.loadImage} />    
                {/*loadImage= {loadImage} */} 

       
        
        <GalleryList photoList={this.state.photoList} loadImage = {this.loadImage} /> 
                    {/* same as above*/}
    
      </div>
  </div>
   
    );
    } 
  }

export default App;
