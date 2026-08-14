import React, { useState } from "react";

function UserProfileCard() {
    const[flip,setFlip] = useState(false);
  return (

    <div className='ease-fade-in'>
        {
            flip ?(
            <div className="ease-scale-in">
                <h2>User Profile</h2>
                <p>Name :Steve Rogers</p>
                <p>Age :30</p>

                <button onClick={()=>setFlip(false)}>Back</button>

            </div>
            ):(
                <div className="ease-scale-in">

                <h2>Flip Card</h2>
                <p>Click the button to flip the card</p>
                <button   className="ease-hover-lift" onClick={()=>setFlip(true)}>Flip</button>

                </div>
            )
        }
      
    </div>
  )
}

export default UserProfileCard
