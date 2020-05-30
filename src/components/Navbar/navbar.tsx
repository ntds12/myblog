import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import shortid from 'shortid';

import * as NavbarStyles from "./Navbar.module.scss";

import { randForHeading, rand, randDelay } from '../../utils/randomNumber';
import { sleep } from '../../utils/sleep';

import Lines from './lines';
import Menu from './Menu/menu';



const navbar = () => {
  let [arrayOfChars, setArrayOfChars]: any = useState([]);
  let [arrayOfBlackRects, setArrayOfBlackRects]: any = useState([]);
  let [triggerScroll, setTriggerScroll]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false as boolean);
  let [linesColor, setLinesColor]: any = useState(false);
  let [close, setClose] = useState(false);

  const changeCloseToTrue = () => {
    setClose((val: any) => true);
  }
  const changeCloseToFalse = (abbas: any) => {
    setClose((val: any) => false);
  }
  // const debounce = (fn: any, delay: any) => {
  //   let timeoutId: any;
  //   return function (...args: any) {
  //     if (timeoutId) {
  //       clearTimeout(timeoutId);
  //     }
  //     timeoutId = setTimeout(() => {
  //       fn(...args);
  //     }, delay);
  //   }
  // }

  window.addEventListener('scroll', async (e) => {
    if (window.scrollY >= 10) {
      setTriggerScroll((val: any) => val = true);

      setLinesColor((val: any) => val = true);

    } else {
      setTriggerScroll((val: any) => val = false);

      setLinesColor((val: any) => val = false);

    }
  });

  const arrayOfClassNames = [
    NavbarStyles.rect_n,
    NavbarStyles.rect_a,
    NavbarStyles.rect_r,
    NavbarStyles.rect_i,
    NavbarStyles.rect_nnn,
    NavbarStyles.rect_m,
    NavbarStyles.rect_aa,
    NavbarStyles.rect_nn,
  ];

  var randClass = arrayOfClassNames[randForHeading()];


  const changeGlitchPosition = () => {
    setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
      randClass = arrayOfClassNames[randForHeading()];
      return <h1 className={`${NavbarStyles.h1} ${randClass} `} key={shortid.generate() + shortid.generate()}>Nariman Talayi</h1>;
    }));
  }

  const clearArray = () => {
    setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
      randClass = arrayOfClassNames[randForHeading()];
      return <h1 className={`${NavbarStyles.h1}`} key={shortid.generate() + shortid.generate()}></h1>
    }));
  }

  const glitchMain = async () => {
    while (true) {
      for (let i = 0; i < 30; i++) {
        changeGlitchPosition();
        await sleep(randDelay());
      }
      await sleep(3000);
      clearArray();
      await sleep(8000);
    }
  }

  useEffect(() => {

    setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
      randClass = arrayOfClassNames[randForHeading()];
      return <h1 className={`${NavbarStyles.h1} ${randClass} `} key={shortid.generate() + shortid.generate()}>Nariman Talayi</h1>;
    }));

    setArrayOfBlackRects((arr: any) => arr = Array.from(Array(5)).map(el => {
      return <div className={NavbarStyles.black_rect_two} key={shortid.generate() + shortid.generate()}></div>;
    }))

    glitchMain();
    setLinesColor(false);

  }, []);



  return (
    <div className={triggerScroll ? `${NavbarStyles.triggered} ${NavbarStyles.div}` : `${NavbarStyles.div} ${NavbarStyles.untriggered}`}>
      < h1 className={NavbarStyles.h1}>Nariman Talayi</h1>
      <Lines linesColor={linesColor} setLinesColor={setLinesColor} changeCloseToFalse={changeCloseToFalse} />
      {
        arrayOfChars.map((el: any) => (
          el
        ))
      }
      <h1 ><a href="/blog" className={NavbarStyles.h1_blog}>blog</a></h1 >
      <Menu close={close} changeCloseToTrue={changeCloseToTrue} />
    </div >
  )
}

export default navbar;
