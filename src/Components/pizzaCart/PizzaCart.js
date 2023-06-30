import { useState } from "react";
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

import { useSelector } from "react-redux";



const PizzaCart = ({ id, imageUrl, name, sizes, price, types, onClickAddPizza }) => {
     const [activeSize, setActiveSize] = useState(sizes[0]);
     const [activeType, setActiveType] = useState(types[0]);

     const { items } = useSelector(({ cart }) => cart)


     const avaliableTypes = ["тонкое", "традиционное"];
     const avaliableSizes = [26, 30, 40];

     const renderSizesDough = (sizzesArr) => {
          return sizzesArr.map((size) => {
               const sizesClass = classNames("cart__options-btn cart__options-btn_size", {
                    "active": size === activeSize,
                    "disabled": !sizes.includes(size)
               });

               return (
                    <button
                         className={sizesClass}
                         onClick={() => setActiveSize(size)}
                         key={uuid()}
                    >
                         {size}cм
                    </button>
               )

          })
     };

     const renderTypes = (typesArr) => {

          return typesArr.map((item, index) => {

               const activeOptionsClass = classNames("cart__options-btn", {
                    "active": index === activeType,
                    "disabled": !types.includes(index)
               });

               return (
                    <button
                         className={activeOptionsClass}
                         key={uuid()}
                         onClick={() => setActiveType(index)}
                    >
                         {item}
                    </button>
               );
          });
     }

     const handleAddPizza = () => {
          onClickAddPizza({
               id,
               imageUrl,
               name,
               size: activeSize,
               type: avaliableTypes[activeType],
               price
          });
     }

     const handleCountPizzaOnButton = (arrPizzas = []) => {
          return arrPizzas.filter(item => item.id === id).length;
     }

     return (
          <div
               className="grid-pizza__cart cart"
               key={uuid()}
          >
               <div className="cart__photo">
                    <img src={imageUrl} alt="Фото пиццы" />
               </div>
               <span className="cart__pizza-title">{name}</span>
               <div className="cart__options">
                    <div className="cart__options cart__options_dough">
                         {
                              renderTypes(avaliableTypes)
                         }
                    </div>
                    <div className="cart__options cart__options_size">
                         {

                              renderSizesDough(avaliableSizes)
                         }
                    </div>
               </div>
               <div className="cart__prise-add">
                    <div className="cart__price">$ {price}</div>
                    <button
                         className="cart__add-btn"
                         onClick={handleAddPizza}
                    >
                         <span>+</span>Добавить
                         {handleCountPizzaOnButton(items) > 0 ? <span className="cart__count-pizza">{handleCountPizzaOnButton(items)}</span> : null}
                    </button>
               </div>
          </div>
     );
};
export default PizzaCart;