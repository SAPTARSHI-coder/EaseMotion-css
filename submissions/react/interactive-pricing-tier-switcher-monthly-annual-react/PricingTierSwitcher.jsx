import React,{useState}from 'react'

function PricingTierSwitcher() {
    const [plan,setPlan]=useState("monthly");

  return (

    <div className='ease-fade-in'>

        <h3>Pricing Plans</h3>

        <button onClick={() => setPlan("monthly")}>Monthly</button>
        <button onClick={() => setPlan("annual")}>Annual</button>


        <div className='ease-scale-in'>
            <h2>Basic</h2>

                     <p>{plan === "monthly" ? "$10/month" : "$100/year"}</p>
                        <p>✔ 1 Project</p>
                        <p>✔ Email Support</p>
                    </div>

                     <div className='ease-scale-in'>
                         <h2>Pro</h2>

                        <p>{plan === "monthly" ? "$20/month" : "$200/year"}</p>
                        <p>✔ 10 Project</p>
                        <p>✔ Priority Support</p>
                    </div>

                     <div className='ease-scale-in'>

                                <h2>Premium</h2>


                                        <p>{plan === "monthly" ? "$30/month" : "$300/year"}</p>
                            <p>✔ ✔ Unlimited Projects</p>
                            <p>✔ 24/7 Support</p>
                    </div>
       
    </div>
  )
}

export default PricingTierSwitcher
