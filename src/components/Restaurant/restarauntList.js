import React,{useState,useEffect} from "react";
import Restaurant from './restaurant';
import {db} from '../../firebase/firebase';
import { Card} from 'reactstrap';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    db.collection('restaurants').onSnapshot(snapshot=>{
      setRestaurants(snapshot.docs.map(doc=> ({
        id: doc.id,
        restaurant: doc.data()})))
    })
  
  }, [])
  return (
    <Card className="col-12 col-md-4" style={{marginBottom:"20px"}} >
      {restaurants.map(({id,restaurant}) =>(
       <Restaurant  name={restaurant.name} description={restaurant.description} imgURL={restaurant.imgURL}  />
    
  ))} 
</Card>
);
}

export default RestaurantList;
