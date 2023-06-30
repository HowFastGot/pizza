import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { v4 as uuid } from 'uuid';

import { onClickOnFilterOption, onClickOnSelectBlock, onChangeFilterBy } from "../../redux/reducers-actions/filtersSlice";

const AppFilters = ({ filtersList }) => {

     const selectBlockRef = useRef();

     const dispath = useDispatch();

     const { selectIsOpen, activeFilter } = useSelector(({ filters }) => filters);

     useEffect(() => {

          const onDocumentClick = (e) => {
               // if (e.target === selectBlockRef.current) return;

               dispath(onClickOnSelectBlock(false));
          }

          document.addEventListener("click", onDocumentClick);

          return () => {
               document.removeEventListener("click", onDocumentClick)
          }


     });

     const selectClasses = classNames("filter-row__select-block select-block", {
          "active": selectIsOpen
     });


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
                         key={uuid()}
                    >
                         {item.name}
                    </button>
               )
          })
     };

     return (
          <>
               <div
                    role="button"
                    tabIndex={0}
                    className={selectClasses}
                    ref={selectBlockRef}
                    onClick={(e) => {
                         dispath(onClickOnSelectBlock(!selectIsOpen))
                    }
                    }
                    onKeyDown={(e) => {
                         if (e.code === "ENTER") {
                              dispath(onClickOnSelectBlock(!selectIsOpen));
                         }
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