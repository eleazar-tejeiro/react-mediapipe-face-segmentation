import "./FaceSegmentation.css"
import React, { useState } from "react"
import { AlterBackground } from "../AlterBackground"
import { FaceFilter } from "../FaceFilter"

function FaceSegmentation() {
  const [isBgMode, setIsBgMode] = useState(false)

  return (
    <div className="container-face-segmentation">
      <h2>Using MediaPipe</h2>
      Switch to Mode: <button onClick={() => setIsBgMode(!isBgMode)}>
        {isBgMode? "Face Filter Effect" : "Background Manipulation and Blur Background"}
      </button><br/><br/>
      {isBgMode ? <AlterBackground/> : <FaceFilter/>}
    </div>
  )
}

export default FaceSegmentation;