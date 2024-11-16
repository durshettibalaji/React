import React from "react";
export const RestoCard = (props) => {
    const {image,name,rating,cuisine} = props;
    return (
        <div className="card">
            <img src={image}  className="dis_img" />
            <div className="card_dish">{name}</div>
            <div className="card_rating"> {rating}</div>
            <div className="card_rating"> {cuisine}</div>
        </div>
    )
} 