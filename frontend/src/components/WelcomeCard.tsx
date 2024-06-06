import logo from '../assets/Logo.svg'

const WelcomeCard = () => {
    return (
        <div className=' opacity-80 flex-col p-[24px] absolute left-[190px] top-[calc(50 % - 294px / 2 - 1px)] text-white max-w-[440px] max-h-[294px]'>
            <div className=' font-normal text-xs font-opensans'>WELCOME TO</div>
            <div className=' mt-[16px]'>
                <img src={logo} alt='logo' className=' ' />
            </div>
            <div className='mt-[32px]'>
                <p className=' text-[#9F9F9F] font-normal font-opensans text-base'>
                    We help you track your organisations metrics as per the ESG Guidelines
                </p>
            </div>
            <div className=' mt-[48px] flex gap-x-1  font-normal text-sm'>
                <p> Sounds Interesting? </p>
                <p className=' font-semibold text-[#4FA556]'> Get in touch!</p>
            </div>

        </div>
    )
}

export default WelcomeCard