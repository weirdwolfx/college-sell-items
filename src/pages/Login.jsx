import { useNavigate } from "react-router-dom"

import LoginImg from "../assets/login-img.jpg"

export default function Login(props) {

    const navigate = useNavigate()

    function userLogin(formData) {
        const picfile = formData.get('userProfilePic')
        props.setUser({
            username: formData.get('userName'),
            email: formData.get('userEmail'),
            password: formData.get('password'),
            profilePic: URL.createObjectURL(picfile)
        })

        navigate('/browse')
    }

    return (
        <>
            <main className="login-page">
                <div className="login-img-container">
                    <img src={LoginImg} alt="" />
                </div>
                <form action={userLogin} className="login-form">
                    <div>
                        <label htmlFor="username">Username(*)</label>
                        <input type="text" id="username" name="userName" pattern="\S*" required/>
                    </div>

                    <div>
                        <label htmlFor="user-email">Email</label>
                        <input type="email" id="user-email" name="userEmail" value="abc@gmail.com" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className="file-input">
                        <label htmlFor="user-pic">Upload profile pic</label>
                        <input type="file" id="user-pic" name="userProfilePic" accept="image/*"/>
                    </div>

                    <button className="login-button" >Log in</button>
                </form>
            </main>
        </>
    )
}