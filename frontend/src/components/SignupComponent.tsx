import React from 'react'
import SignupForm from './SignupForm'


const style: React.CSSProperties = {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "padding": "20px",
  "gap": "18px",
  "position": "absolute",
  "width": "380px",
  "left": "860px",
  "top": "147px",
  "background": "#235E4A",
  "borderRadius": "8px"
}

const SignupComponent = () => {
  return (
    <>

      <div className='' style={style}><SignupForm /></div>

    </>
  )
}

export default SignupComponent