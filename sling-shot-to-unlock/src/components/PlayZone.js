import Slingshot from "./Slingshot"
import {useState} from 'react'
import Bird from "./Bird"

const PlayZone = () => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState(null)
    const [mouseY, setMouseY] = useState(null)
    
    function createBird(e){
        console.log(mouseX, mouseY)
        return(
            <div style={{left: mouseX -50 +'px', top: mouseY-50 +'px', position:"absolute"}}>
                <Bird id="1" />
            </div>)
    }

    function mouseDown(e){
        e.preventDefault();
        setIsMouseDown(true)
        console.log('mouse down')
        
    }

    function mouseRelease(e){
        e.preventDefault();
        setIsMouseDown(false)
        console.log('mouse released')
    }

    function mouseMove(e){
        if(isMouseDown){
            relativeCoords(e);
        }
    }

    function drawArrowPoint(){
        return(
            <div className="arrow-point" style={{right: mouseX - 5+'px', bottom: mouseY + 5+'px'}}>
                {/* <Bird/> */}
            </div>
        );
    }

    function relativeCoords ( event ) {
        var bounds = event.target.getBoundingClientRect();
        // console.log(bounds)
        setMouseX(event.clientX - bounds.left);
        setMouseY(event.clientY - bounds.top);
    }

    return (
        <div className="PlayZone">
            <div className = "PlayZone_Content"  onMouseUp={mouseRelease} onMouseMove={mouseMove}>
                <Slingshot onMouseDownFunc={mouseDown}>
                </Slingshot>
                {(isMouseDown ? drawArrowPoint() : <div></div>) }
                {(isMouseDown ? createBird() : <div></div>) }
            </div>
            
        </div>
    )
}

export default PlayZone