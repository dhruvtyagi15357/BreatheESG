import React from 'react'
import LoginForm from './LoginForm'


const style: React.CSSProperties = {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "padding": "40px",
    "gap": "18px",
    "position": "absolute",
    "width": "380px",
    "left": "860px",
    "top": "177px",
  "background": "#235E4A",
    "borderRadius": "8px"
}

const LoginComponent = () => {
  return (
    <>
        
      <div className='' style={style}><LoginForm /></div>
    
    </>
  )
}

export default LoginComponent