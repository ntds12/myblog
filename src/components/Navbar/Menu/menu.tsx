import React,{
  useState
} from 'react';

import * as MenuStyles from './Menu.module.scss';

const menu:React.FC<any> = ({close,changeCloseToTrue}) => {
  
  return (
    <div 
      className={MenuStyles.menu}
      style={{
        "display":close?"none":"block",
        "overflow":"hidden",
        "transition":"all .5s linear",
        "willChange":"display",
        "transform":"translateZ(0)"
      }}
    >
      <div className={MenuStyles.contents}>
        <p className={MenuStyles.p}>&nbsp;&nbsp;table_of_contents
        
        <i className={MenuStyles.icon} onClick={()=>{
          changeCloseToTrue();
          console.log(close);
        }}><b>&nbsp;&nbsp;&nbsp;&nbsp;x</b></i>
        </p>
        <p className={MenuStyles.p_blog}>blog</p>
      </div>
    </div>
  )
}

export default menu;
