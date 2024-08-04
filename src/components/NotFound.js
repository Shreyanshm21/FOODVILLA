
import Image from "../assests/img/Phot.png";


const NotFound = ({input}) =>{
    

    return(
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-medium mt-6">No match found for "<span className="font-bold">{input}</span>"</h3>
            <img className="w-1/5" src={Image}/>

        </div>
    )
}

export default NotFound;