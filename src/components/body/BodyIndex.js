import React, { useEffect, useState } from 'react'
import { RestoCard } from './RestoCard'
import { reslist } from '../../utils/bodyConstants'
export default function BodyIndex() {
  let list = reslist;
  const [restLists, setRestList] = useState(reslist);
  useEffect(() => {
    fetchData();
  }, [])


  const filterRating = () => {
    let filteredList = restLists.filter((item) => item.rating >= 4);
    setRestList(filteredList);
  }

  const fetchData = async () => {

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': '+GTwHghlrF1yJ7qfluuke/nA4QtPAdByyzkD6k9xfUc='
      }
    };
    const data = await fetch('https://openapiv1.coinstats.app/coins?page=2&limit=20', options);
    const response = await data.json();
    console.log("data :",response,"\n result :",response.result);
    setRestList(response.result);
    // const url = 'https://ipl-api1.p.rapidapi.com/players';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': '89ef4da068msh478310797bd4e32p1a80dajsnce4a71675614',
    //     'x-rapidapi-host': 'ipl-api1.p.rapidapi.com'
    //   }
    
    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   console.log(result);
    //   setRestList(result);
    // } catch (error) {
    //   console.error(error);
    // }
    // const url = 'https://stockx-api.p.rapidapi.com/gtin?gtin=00022859283205%2C00022859283212%2C00022859283229';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': '89ef4da068msh478310797bd4e32p1a80dajsnce4a71675614',
    //     'x-rapidapi-host': 'stockx-api.p.rapidapi.com'
    //   }
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.text();
    //   console.log(result);
    // } catch (error) {
    //   console.error(error);
    // }

    // fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json()).then(allpokemon => console.log(allpokemon))
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setRestList(json))
  }
  return (
    <>
      <div className='rated-btn' onClick={filterRating} >Top Rated Restorent</div>
      <div className='app_body'>
        {
          restLists.map((item, index) => {
            return (
              <>
                <RestoCard name={item.name} image={item.icon} key={index} />
              </>)
          })
        }
      </div>
    </>
  )
}
