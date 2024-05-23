import React, { useEffect, useState } from 'react'
import '../Style/AdminView.css'
import axios from 'axios'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const AdminView = () => {
  let [data, setdata] = useState([])
  let [refresh, setRefresh] = useState(true)
  useEffect(()=>{
    axios.get('http://localhost:1000/Product')
    .then((resp)=>{
      console.log(resp.data);
      setdata(resp.data)
    })

    .catch((error)=>{
      console.log(error);
    })
  }, [data])

  let removeDish = (id, name) => {
    axios.delete(`http://localhost:1000/Product/${id}`)
      .then((resp) => {
        console.log(resp.data);
        alert(name + " remove successfull")
        setRefresh(!refresh);
      })
      .catch((error) => {
        console.log(error);
        alert("Item not found")
      });
    };

    let navigate = useNavigate()
    function editProduct(id){
      navigate(`/admindashboard/EditProduct/${id}`)
    }

  return (
      <div className='adminViewpage'>
        {data.map((x)=>{
          return(
            <div class='displayProducts'>
              <img src={x.thumbnail} alt="" />
              <div class="restaurant">
                <h4>{x.name}</h4>
                <b>{x.rating} <StarIcon id="star"/></b>
              </div>

              <div class="desc">
                <div class='info'>
                <p>{x.restaurant}</p>
                <span id='price'>₹ {x.price}</span>
                </div>
                <div>
                <button onClick={()=>{editProduct(x.id)}}>Edit</button>
                <button onClick={()=>{removeDish(x.id,x.name)}}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

export default AdminView
