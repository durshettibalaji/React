import React, { useEffect, useState } from 'react'
import { RestoCard } from './RestoCard'
import { reslist } from '../../utils/bodyConstants'
export default function BodyIndex() {
  let list = reslist;
  const [restLists, setRestList] = useState(reslist);
  useEffect(() => {
    // alert("use effect ");
    fetchData();
  }, [])
  const filterRating = () => {
    let filteredList = restLists.filter((item) => item.rating >= 4);
    setRestList(filteredList);
    // alert(" use state ");
  }
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.6856929&lng=76.9904825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    alert(data)
    const response = await data.json();
    console.log(response);
  }
  console.log("res  ", list);
  return (
    <>
      <div className='rated-btn' onClick={filterRating} >Top Rated Restorent</div>
      <div className='app_body'>
        {
          restLists.map((item, index) => {
            return (
              <>

                <RestoCard name={item.name} cuisine={item.cuisine} rating={item.rating} image={item.img} key={index} />
              </>)
          })
        }
      </div>
    </>
  )
}
