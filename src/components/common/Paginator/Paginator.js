import React, {useState} from "react";
import styles from "./paginator.module.css";

let Paginator = ({totalItemsCount,pageSize,currentPage,onPageChanged,portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize) ;

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber -1) * portionSize +1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}

            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                return <span onClick={() => {
                    onPageChanged(p)
                }} className={currentPage === p ? styles.selectedPage : styles.page}>{p}{" "}</span>
            })}

        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}

        </div>
   }
export default Paginator;




