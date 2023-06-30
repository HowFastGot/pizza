import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { AppHeader, PizzaRowCart } from "../../transponder";
import { cartClearIt } from "../../../redux/reducers-actions/cartSlice";
import { v4 as uuidv4 } from 'uuid';

import image from "../../../resources/empty-cart/1.jpg";

import "./cart.scss"

const Cart = () => {

     const { totalAmount, totalCount, items } = useSelector(({ cart }) => cart);

     const dispatch = useDispatch();

     const renderPizzaRowComponents = (itemsCarts) => {

          return itemsCarts.map((item, index) => {

               const similarItemsArr = itemsCarts.filter(similarItem => similarItem.id === item.id);
               const count = similarItemsArr.length;

               return <PizzaRowCart {...item} count={count} key={uuidv4()} />
          });
     }

     const clearCart = () => {

          if (!window.confirm("Do you want to clear the cart ?")) return;

          dispatch(cartClearIt());
     }

     const renderPageContent = () => {

          if (!!totalAmount) {
               return (
                    <main className="page">
                         <div className="page__container _container-cart ">
                              <div className="page__cart-row cart-row">
                                   <div className="cart-row__title page__title-pizza">Корзина</div>
                                   <button
                                        onClick={() => clearCart()}
                                        className="cart-row__clean-cart"
                                   >
                                        Очистить корзину
                                   </button>
                              </div>
                              <div className="page__product-component product-component">
                                   {renderPizzaRowComponents(items)}
                              </div>
                              <div className="page__payment-info payment-info">
                                   <div className="payment-info__total-goods">
                                        Всего пицц: <span id="count-goods">{totalCount} шт.</span>
                                   </div>
                                   <div className="payment-info__total-prise">
                                        Сумма заказа: <span id="count-goods">$ {totalAmount}</span>
                                   </div>
                              </div>
                              <div className="page__actions-btns action">
                                   <Link to="/" className="action__btn action__btn_go-back"> <span>&lt;</span> Вернуться назад</Link>
                                   <button className="action__btn action__btn_pay">Оплатить сейчас</button>
                              </div>
                         </div>
                    </main>
               )
          } else {
               return (
                    <div className="page__content-empty empty-content">
                         <h3 className="empty-content__title">Корзина пустая <span role="img" aria-label="sady emojy">😕</span></h3>
                         <div className="empty-content__text">
                              Вероятней всего, вы не заказывали ещё пиццу.
                              Для того, чтобы заказать пиццу, перейди на главную страницу.
                         </div>
                         <div className="empty-content__photo">
                              <img src={image} alt="Изображение человека толкаеющего тележку" />
                         </div>
                         <Link to="/" className="empty-content__action action__btn action__btn_go-back">Вернуться назад</Link>
                    </div>
               )
          }
     }

     return (
          <body>
               <AppHeader />
               {renderPageContent()}
          </body>
     );
};

export default Cart;