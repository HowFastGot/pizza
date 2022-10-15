import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesChange } from '../../redux/reducers-actions/categoriesSlice';

import "./categories.scss";

const Categories = ({ categories }) => {

     const dispatch = useDispatch();

     const activeCategory = useSelector(state => state.categories.activeCategory);

     const renderItems = (arr) => {
          return arr.map((category, i) => {
               const liClass = classNames('filter-row__item', {
                    "active": i === activeCategory
               });

               return (
                    <>
                         <li
                              className={liClass}
                              key={uuid()}
                              onClick={(e) => {
                                   dispatch(categoriesChange(i))
                              }}
                         >
                              {category}
                         </li>
                    </>
               );
          });
     };

     return (
          <ul className="filter-row__list">
               {
                    renderItems(categories)
               }
          </ul>
     )
};

export default Categories;
