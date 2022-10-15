import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../../resources/icons/Header/Logo.svg";

import "./appHeader.scss"

const AppHeader = ({ mainPage }) => {

     const { totalAmount, totalCount } = useSelector(({ cart }) => cart);

     const rightSideOfHeader = mainPage ? <div className="pizza-header__right-side">
          <div className="pizza-header__price">$ {totalAmount}</div>
          <Link to="./cart" style={{ display: "block" }} className="pizza-header__cart">{totalCount} pcs</Link>
     </div> : null;

     return (
          <header className="header">
               <div className="header__content _container">
                    <div className="header__pizza-row pizza-header">
                         <Link to="/" className="pizza-header__left-side">
                              <div className="pizza-header__logo">
                                   <img src={Logo} alt="Иконка логотипа" />
                              </div>
                              <div className="pizza-header__text">
                                   <h1 className="pizza-header__title">REACT PIZZA</h1>
                                   <h6 className="pizza-header__subtitle">Cамая вкусная пицца</h6>
                              </div>
                         </Link>
                         {rightSideOfHeader}
                    </div>
               </div>
          </header>
     );
}

export default AppHeader;