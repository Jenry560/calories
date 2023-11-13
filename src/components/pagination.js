import React from "react";


const Pagination = ({onNext,next})=>{
   
    const handleNext = ()=>{
        onNext();
    }
    return(
        <nav>
            <ul className="pagination">  
              {next ?  <li className="page-item">
                    <button href="#main" className="page-link" onClick={handleNext}>Next</button>
                </li>:null}
        
            </ul>
        </nav>
    )
} 
export default Pagination