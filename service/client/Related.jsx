import "./index.css";
import React from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Carousel from "./Caroussel.jsx";


class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      image: []

     };
  }

  componentDidMount() {
    this.productStyles()
  }
  relateItems() {
    axios.get('/products/11050/related').then((response) => {
      //res.send(response.data)
      console.log(response.data)
// const arrayPrrelproducts=[]
// forloop (response.data)
// arrayPrrelproducts.push(getPrioductbyId(id))
    })
  }
//  getPrioductbyId(id){

//  }
  allProducts() {
    axios.get('/products').then((response) => {
      //res.send(response.data)
      console.log(response)
    })
  }

  productStyles() {
    axios.get('/products/11020/styles').then((response) => {
      //res.send(response.data)
      console.log(response.data.results)
      this.setState({image: response.data.results})
    })
  }
  
  render() {
    return(
      

      
      
      // <div style={{ overflowX: 'auto', display:'flex'}} >
       <div  className="flex " > 
       <Carousel>
    {
           this.state.image.map((img) => {
             return(
               <div key={img.style_id} >
               {/* <img  src={img.photos[0].thumbnail_url}  alt="placeholder"/> */}
                <Card name={img.name} photo={img.photos[0].thumbnail_url} /> 
               
               </div>
             )
           })
         }
           </Carousel>
           <Carousel>
    {
           this.state.image.map((img) => {
             return(
               <div key={img.style_id} >
               {/* <img  src={img.photos[0].thumbnail_url}  alt="placeholder"/> */}
                <Card name={img.name} photo={img.photos[0].thumbnail_url} /> 
               
               </div>
             )
           })
         }
           </Carousel>

      </div>
      
    )
  
  }
}
export default Related;
