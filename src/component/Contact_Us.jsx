const Contact_Us = () => {
    return (
        <div className="contact_page">
            <div className="detail">
            <h2 className="base">Contact Us</h2>
                <p className="intro">For any questions regarding the GRS program, 
                    please contact Priyanshu Dubey at dubeypriyanshu180@gmail.com</p>
                    <div className="group">
                        <div className="priyanshu">
                            <img className="pic" src="./admin.png" alt="CEO_Picture" />
                            <h2 className="base">CEO</h2>  <p>Padri Bazar, Mirzapur 231001</p>
                    <p>Phone : +91-9118144449</p>
                    <p>Email : <a>dubeypriyanshu180@gmail.com</a></p></div>
                        <div className="harshit"><img  className="pic" src="./admin.png" alt="head" />
                        <h2 className="base">Manager</h2>
                        <p>Padri Bazar, Mirzapur 231001</p>
                    <p>Phone : +91-9876541230</p>
                    <p>Email : <a>harshitagrahri561@gmail.com</a></p></div>
                            <div className="shobhit"> <img className="pic" src="./admin.png" alt="head"/><h2 className="base">Head</h2> <p>Nubasta,kanpur 208005</p>
                    <p>Phone : +91-8647213902</p>
                    <p>Email : <a>Lyfer48754@gmail.com</a></p></div>
                    </div>
                   
            </div>
        </div>
    )
}
export default Contact_Us;