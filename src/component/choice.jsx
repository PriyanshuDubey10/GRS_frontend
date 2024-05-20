import { Link } from "react-router-dom";

const Choice = () => {
    return( 
        <div class="container">
        <div class="choice1">
            <div class="form-group">
                <Link to="/login"><img className="img" src="user.png" alt="Login Button" /><h2>User Login</h2></Link>
            </div>
            <div class="form-group">
                <Link to="/admin_login"><img className="img" src="admin.png" alt="Admin Login Button" /><h2>Admin Login</h2></Link>
            </div>
        </div>
    </div>
    )
}
export default Choice;