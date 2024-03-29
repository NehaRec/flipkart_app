import React from 'react'

export const SignupPage = () => {
  return (
    <div>
        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
            <header>
                <form>
                    <input type="email" className="email" /> 
                    <input type="password" className="password" /> 
                    <input type="phone" className="phone" /> 
                    <input type="name" className="name" /> 
                </form>
            </header>
        </div>
    </div>
  )
}

