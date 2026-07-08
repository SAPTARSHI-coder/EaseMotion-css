import React, { useState } from "react";

function StarBarEffect() {

    const [rating, setRating] = useState(0);
 
  return (

    <div className='ease-fade-in'>

                {[1, 2, 3, 4, 5].map((star) => (
                    
                <span key={star} onClick={()=>setRating(star)}>

                    {star <= rating ? "⭐" : "☆"}

                </span>

            ))}

            <p>Selected Rating: {rating}</p>

    </div>

  )

}

export default StarBarEffect
