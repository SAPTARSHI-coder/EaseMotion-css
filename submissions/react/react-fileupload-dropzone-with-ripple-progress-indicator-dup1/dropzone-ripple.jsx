import React, { useState } from 'react'

function DropzoneRipple() {
    const[file,setfile]=useState(null)

    const [progress, setProgress] = useState(0);

    const [showRipple, setShowRipple] = useState(false);
    const handleFile=(e)=>{

        const selectedFile=e.target.files[0]

        if(!selectedFile) return;

        setfile(selectedFile)

        setProgress(0);

        let value=0;

        const interval=setInterval(()=>{

            value+=10;
            setProgress(value);
            if(value>=100){
                clearInterval(interval)
                setShowRipple(true);
                setTimeout(() => {
                                    setShowRipple(false);
                                }, 700);
            }
        }, 100);
    }
  return (
    <div  className="dropzone ease-fade-in">

       <p>Drag & Drop File</p>

        <input type="file" onChange={handleFile} />

     

       {file && (
  <>
    <div
      style={{
        width: "300px",
        height: "10px",
        background: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "#4f46e5",
          transition: "0.3s",
        }}
      ></div>
    </div>

    <p>{progress}%</p>
  </>
)}

                {showRipple && (
                <div
                    className="ease-scale-in"
                    style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "#4f46e5",
                    margin: "15px auto",
                    opacity: 0.4,
                    }}
                ></div>
                )}
           {progress===100 && (
             <div className="ease-scale-in ease-hover-lift">
                    
              ✅ Upload Complete

            </div>
           )}



    </div>
  )
}

export default DropzoneRipple
