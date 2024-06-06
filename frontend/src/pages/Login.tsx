import LoginComponent from "../components/LoginComponent"
import WelcomeCard from "../components/WelcomeCard"
import img from '../assets/globe.svg'


const imgStyles: React.CSSProperties = {
    "position": "absolute",
    "width": "156px",
    "height": "152px",
    "left": "972px",
    "top": "46px"
}

const Login = () => {
    return (
        <div className=" bg-[#21453C] w-screen h-screen flex justify-evenly items-center">
            <img src={img} alt='globe' style={imgStyles} />
            <WelcomeCard />
            <LoginComponent />
        </div>
    )
}

export default Login