import React,{
  useState, useEffect, useLayoutEffect
} from 'react';

import * as MenuStyles from './Menu.module.scss';
import { Link } from 'gatsby';

const menu:React.FC<any> = ({close,changeCloseToTrue}) => {
  
  
  return (
    <div 
      className={MenuStyles.menu}
      style={{
        "width":close?"0":"100%",
        "overflow":"hidden",
        "transition":"all .5s linear",
        "willChange":"width",
        "transform":"translateZ(0)"
      }}
    >
      <div className={MenuStyles.contents}>
        <p className={MenuStyles.p}>&nbsp;&nbsp;table_of_contents
        
        <i className={MenuStyles.icon} onClick={()=>{
          changeCloseToTrue();
        }}><b>&nbsp;&nbsp;&nbsp;&nbsp;x</b></i>
        </p>
        <p className="p_blog">
          <Link to="/blog" className={MenuStyles.p_blog_link} onClick={changeCloseToTrue}>
            Blog
          </Link>
        </p>
        <hr className={MenuStyles.p_blog_link_hr}/>
      </div>
    </div>
  )
}

export default menu;
