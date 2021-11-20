import React from 'react'

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                {/*ERROR!*/}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"></input>
                </div>
            </div>
        </form>
    )
}

export default LoginForm