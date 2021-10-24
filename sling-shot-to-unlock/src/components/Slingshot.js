import SlingShotImg from "../Assets/slingshot_frame_0001.png";




const Slingshot = ({onMouseDownFunc}) =>{
    
    return(
        <div className="SlingShot" onMouseDown={onMouseDownFunc}>
            <img src={SlingShotImg} className="SlingShot2"></img>
        </div>
    )
}

export default Slingshot;