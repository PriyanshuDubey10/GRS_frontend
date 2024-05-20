import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <div className="footer">
         <div className="lol">
            <p className="footer-p">© 2024 KIT, KANPUR 208008 | Powered by Priyanshu Dubey</p>
         </div>
         <div className="icon-d">
            <Link to="https://www.facebook.com/priyanshu.dubey.96995/"><img src="facebook.png" className="icon" alt='fb-icon'/></Link>
            <Link to="https://www.instagram.com/priyan_hu_dubey/"><img src="instagram.png" className="icon" alt='insta-icon'/>
            </Link>
         </div>
      </div>
   )
};
export default Footer;