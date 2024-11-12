import React from 'react'
import { RestoCard } from './RestoCard'

export default function BodyIndex() {
  return (
    <div className='app_body'>
      <RestoCard name={"paradise"} cuisine={"Biryani"} rating= {4.5}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}  rating= {4.5}/>
      <RestoCard name={"Mhifil"} cuisine={"Biryani"}  rating= {4.5}/>
      <RestoCard name={"Bawarchi"} cuisine={"Biryani"}  rating= {4.5}/>
      <RestoCard name={"pecocok"} cuisine={"Biryani"}  rating= {4.5}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}  rating= {4.5}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"} rating= {4.5}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}/>
      <RestoCard name={"KFC"} cuisine={"Biryani"}/>
    </div>
  )
}
