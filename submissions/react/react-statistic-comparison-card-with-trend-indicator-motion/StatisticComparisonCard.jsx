import React,{useState} from 'react'

function StatisticComparisonCard() {

    const [current]=useState(250)
    const [previous]=useState(200)

    const increase=current>previous;
    const percentage = (((current - previous) / previous) * 100).toFixed(1);
   const difference = Math.abs(current - previous);
  return (

    <div className='ease-fade-in'>

        <div className='ease-scale-in'>

                     <h2>Statistics Comparison </h2>
                    <p>Current :{current}</p>
                    <p>Previous :{previous}</p>
                    <p>Difference: {difference}</p>

                        <p>{increase ? "📈 Trending Up" : "📉 Trending Down"}</p>
                    {
                        increase ?(
                            <p>Increase: {percentage}%</p>
                        ) : (
                            <p>Decrease: {percentage}%</p>
                        )
                    }

                    <p>
                    {increase
                        ? "Performance has improved."
                        : "Performance has decreased."}
                    </p>

                    
                    <p>Last updated: Today</p>
        </div>
   
    </div>
  )
}

export default StatisticComparisonCard
