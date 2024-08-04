import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
                {""}
                This is Namaste React Live Course Chapter 7
            </p>
            <Outlet/>
            {/* <Profile/>  Both works the same  */}
        </div>
    );
};

export default About