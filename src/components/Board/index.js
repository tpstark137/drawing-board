import { useEffect, useRef } from "react";

const Board = () => {
    const canvasRef=useRef(null);

    useEffect(()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        //  for fixing the screen resolution 
        // fitting the drawing board to full screen
    },[])
    return ( 
        <canvas ref={canvasRef}></canvas>
     );
}
 
export default Board;