import SignupComponent from "../components/SignupComponent"
import WelcomeCard from "../components/WelcomeCard"
import img from '../assets/globe.svg'


const imgStyles: React.CSSProperties = {
    "position": "absolute",
    "width": "156px",
    "height": "152px",
    "left": "972px",
    "top": "16px"
}

const Signup = () => {
    return (
        <div className=" bg-[#21453C] w-screen h-screen flex justify-evenly items-center">
            <img src={img} alt='globe' style={imgStyles} />
            <WelcomeCard />
            <SignupComponent />
        </div>
    )
}

export default Signup