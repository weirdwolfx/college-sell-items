import { useNavigate } from "react-router-dom"

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
                <form action={userLogin} className="login-form glass">
                    <div>
                        <label htmlFor="username">Username <em>(no spaces)</em> *</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="userName" 
                            pattern="\S*" 
                            placeholder="johndoe18" 
                            title="No spaces allowed"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="user-email">Email</label>
                        <input 
                            type="email" 
                            id="user-email" 
                            name="userEmail" 
                            placeholder="abc@gmail.com"
                            title="Email must include an '@'"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className="file-input">
                        <label 
                            htmlFor="user-pic" 
                            className="pointer-accessible" 
                            title="Upload an image file for profile picture"
                        >
                            <span className="material-symbols-outlined">upload</span>Upload profile pic
                        </label>
                        <input 
                            type="file" 
                            id="user-pic" 
                            name="userProfilePic" 
                            accept="image/*"
                            required
                        />
                    </div>

                    <button className="login-button pointer-accessible" >Log in</button>
                </form>
            </main>
        </>
    )
}