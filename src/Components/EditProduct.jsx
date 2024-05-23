import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Style/AdminEdit.css'
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    let [category, setCategory] = useState("")
    let [restaurant, setRestaurant] = useState("")
    let [name, setName] = useState("");
    let [price, setPrice] = useState("")
    let [quantity, setQuantity] = useState("")
    let [description, setDescription] = useState("")
    let [thumbnail, setThumbnail] = useState("")
    let [rating, setRating] = useState("")
    let [formSubmitted, setFormSubmitted] = useState(false);

    let parameter = useParams()
      console.log(parameter.id);
   

    useEffect(()=>{
      axios.get(`http://localhost:1000/Product/${parameter.id}`)
      .then((resp)=>{
        console.log(resp.data);
        setCategory(resp.data.category)
        setRestaurant(resp.data.restaurant)
        setName(resp.data.name)
        setPrice(resp.data.price)
        setQuantity(resp.data.quantity)
        setDescription(resp.data.description)
        setThumbnail(resp.data.thumbnail)
        setRating(resp.data.rating)
    })
    .catch((error)=>{
      console.log(error);
    })
    },[parameter.id])
  
    let data = {category, restaurant, name, price, quantity, description, thumbnail, rating}
    
    let editItem = (e)=>{
      e.preventDefault()
      axios.put(`http://localhost:1000/Product/${parameter.id}`,data)
      .then((resp)=>{
        alert("Data updtaed successfully")
        setFormSubmitted(true);
      })
      .catch((error)=>{
        alert("Error in updating data")
      })
    }
  return (
    <div className='editProduct'>
      <div className="cover">
        <h4>Edit Product</h4>
        <form onSubmit={editItem}>
          <label>
            Category: 
            <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
              <option>Starters</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Sea Food</option>
              <option>Breads</option>
              <option>Chinese</option>
              <option>Beverages</option>
              <option>Desserts</option>
            </select>
          </label><br/>
          
          <label>
            Restaurent Name: <input value={restaurant} onChange={(e)=>{setRestaurant(e.target.value)}} type="text" placeholder='Enter restaurent name' />
          </label><br />

          <label>
            Dish Name: <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Enter Dish Name' />
          </label><br />

          <label>
            Price: <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder='Enter the cost Price ' />
          </label><br />

          <label>
            Quantity: <input value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} type="number"/>
          </label><br />

          <label>
            Description:{' '} <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} cols="30" placeholder='Dish speciality' rows="2"></textarea>
          </label><br />

          <label>
            thumbnailUrl: <input value={thumbnail} onChange={(e)=>{setThumbnail(e.target.value)}} type="text" placeholder='Enter url' />
          </label><br />

          <label>
            Ratings: <input value={rating} onChange={(e)=>{setRating(e.target.value)}} type="number" />
          </label><br />

          <button type='submit' className='btn btn-success'>Edit Dish</button>
        </form>
      </div>
       
    </div>
  )
}

export default EditProduct
