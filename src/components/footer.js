import { Link } from "react-router-dom";
import "../stilos/style.css";
import Modals from "./Modals";
import CookiesBanner from "./cookies/cookiesbanner";

const Footer = () => {
  return (
    <>
      <footer className="foot" id="footer">
        <h2 className="form__input hp">Contact</h2>
        <Modals />
        <h3 className="footer__copyright">
          Derechos reservados &copy; Jenry sanchez
          <Link to="/cookies" style={{ color: "blue" }}>
            {" "}
            Privacidad cookies
          </Link>
        </h3>
      </footer>
      <CookiesBanner />
    </>
  );
};

export default Footer;
