import React, {
  memo,
  useState,
  useEffect
} from 'react'

import * as NavbarStyles from './Navbar.module.scss';
import shortid from 'shortid';

const lines = (props: any) => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    setCount((val: any) => val + 1);
  }, [props.linesColor]);
  console.log('object')
  return (
    <div className={NavbarStyles.lines_wrapper} onClick={() => {
      console.log('hello lines');
      props.changeCloseToFalse();
    }}>

      {
        Array.from(Array(3)).map((el, ind) => (
          <div

            className={ind % 2 === 0 ?
              NavbarStyles.line__long + " " + NavbarStyles.line + " " + (count > 1 ? (props.linesColor ? NavbarStyles.trigger_lines : NavbarStyles.untrigger_lines) : "") :
              NavbarStyles.line__short + " " + NavbarStyles.line + " " + (count > 1 ? (props.linesColor ? NavbarStyles.trigger_lines : NavbarStyles.untrigger_lines) : "")}
            key={shortid.generate() + shortid.generate()}
          ></div>
        ))
      }
    </div>
  )
}

export default memo(lines);