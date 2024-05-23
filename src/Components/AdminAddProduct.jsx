import React, { useState } from 'react'
import '../Style/AdminAddProduct.css'
import axios from 'axios';

const AdminAddProduct = () => {
  let [category, setCategory] = useState("")
  // console.log(category);
  let [restaurant, setRestaurant] = useState("")
  // console.log(resturent);
  let [name, setName] = useState("");
  let [price, setPrice] = useState("")
  let [quantity, setQuantity] = useState("")
  let [description, setDescription] = useState("")
  let [thumbnail, setThumbnail] = useState("")
  let [rating, setRating] = useState("")

  let data = {category,restaurant, name, price, quantity, description, thumbnail, rating}

  let addDish = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:1000/Product', data)
    .then((res)=>{
      console.log(res);
      alert("Item added successfylly")
    })
    .catch((error)=>{
      console.log(error);
      alert("Error adding Item")
    })

  }
  return (
      <div className='adminProduct'>
        <form onSubmit={addDish}>
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

          <button type='submit' className='btn btn-success'>Add Dish</button>
        </form>
      </div>
  )
}

export default AdminAddProduct
