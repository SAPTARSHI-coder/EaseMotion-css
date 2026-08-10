import React, { useState, useEffect } from "react";

function AnalyticsMetricCard() {
    const [count, setCount] = useState(0);
    const target=1000
    useEffect(()=>{
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < target) {
                    return prevCount + 10;
                } else {
                    clearInterval(interval);
                    return target;
                }
            });
        }, 100);
        return () => clearInterval(interval);
    }, [target]);

  return (

    <div className="ease-fade-in">

      <div className="ease-scale-in">
        <h2>Analytics Metric</h2>
        <p>Current Count: {count}</p>
      </div>
    </div>
  )
}

export default AnalyticsMetricCard
