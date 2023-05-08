import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const override = {
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};

const Loading = () => {
    
  return (
    <div>
       <PuffLoader 
            color='#36d7b7'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        /> 
    </div>
  )
}

export default Loading