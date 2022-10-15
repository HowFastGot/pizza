import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { onClickOnFilterOption, onClickOnSelectBlock, onChangeFilterBy } from "../../redux/reducers-actions/filtersSlice";

const AppFilters = ({ filtersList }) => {

     const selectBlockRef = useRef();

     const dispath = useDispatch();

     const { selectIsOpen, activeFilter } = useSelector(({ filters }) => filters);

     useEffect(() => {
          document.addEventListener("click", onDocumentClick);

          return () => {
               document.removeEventListener("click", onDocumentClick)
          }


     }, []);

     const selectClasses = classNames("filter-row__select-block select-block", {
          "active": selectIsOpen
     });

     const onDocumentClick = (e) => {

          if (e.path.includes(selectBlockRef.current)) return;

          dispath(onClickOnSelectBlock(false));
     }

     const renderFilters = (arr) => {
          return arr.map((item, i) => {
               const filterActive = classNames('select-block__popup-item', {
                    "active": i === activeFilter
               });

               return (
                    <button
                         className={filterActive}
                         onClick={() => {
                              dispath(onClickOnFilterOption(i));
                              dispath(onChangeFilterBy(item.filter, i))
                         }}
                    >
                         {item.name}
                    </button>
               )
          })
     };

     return (
          <>
               <div
                    className={selectClasses}
                    ref={selectBlockRef}
                    onClick={(e) => {
                         dispath(onClickOnSelectBlock(!selectIsOpen))
                    }
                    }>
                    <div className="select-block__parent">
                         <b>Сортировать по:</b>
                         <span>{` ${filtersList[activeFilter].name}`}</span>
                         <div className="select-block__popup-select">
                              <ul className="select-block__popup-list">
                                   {renderFilters(filtersList)}
                              </ul>
                         </div>
                    </div>
               </div>
          </>
     );
};
export default AppFilters;