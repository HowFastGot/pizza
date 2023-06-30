import { useDispatch } from "react-redux";
import { cartDeleteByID, cartAddToList, cartDecreaseCount } from "../../redux/reducers-actions/cartSlice";


const PizzaRowCart = ({ id, imageUrl, name, price, size, type, count }) => {
     const dispatch = useDispatch();

     function handleDelitingByID(id) {
          if (!window.confirm("Delete the pizza-block ?")) return;

          dispatch(cartDeleteByID(id))
     };

     const handeAddPizzaToList = (obj) => {
          dispatch(cartAddToList(obj))
     }

     return (
          <div className="product-component__component-block">
               <div className="product-component__info-block info-block">
                    <div className="info-block__icon">
                         <img src={imageUrl} alt="Иконка выбраной пиццы" />
                    </div>
                    <div className="info-block__text-block">
                         <div className="info-block__name">{name}</div>
                         <div className="info-block__dough">{`${size}cm ${type}`}</div>
                    </div>
               </div>
               <div className="product-component__counter counter-block">
                    <button
                         className="counter-block__btn"
                         onClick={() => dispatch(cartDecreaseCount(id))}
                    ></button>
                    <span className="counter-block__count">{count}</span>
                    <button
                         className="counter-block__btn"
                         onClick={() => handeAddPizzaToList({ id, imageUrl, name, price, size, type })}
                    >
                         +
                    </button>
               </div>
               <div className="product-component__total-prise">$ {price * count}</div>
               <button
                    className="product-component__close-btn"
                    onClick={() => handleDelitingByID(id)}
               >
               </button>
          </div>
     );
};

export default PizzaRowCart;