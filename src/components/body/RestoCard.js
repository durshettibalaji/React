import React from "react";
export const RestoCard = (props) => {
    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsi310Hy35YEM8D-1QhcvR0Q6iMqA30TdlPA&s" className="dis_img" />
            <div className="card_dish">{props.name}</div>
            <div className="card_rating"> {props.rating}</div>
            <div className="card_rating"> {props.cuisine}</div>
        </div>
    )
} 