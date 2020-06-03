import React, {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';
import shortid from 'shortid';
import FontFaceObserver from "fontfaceobserver";

import * as NavbarStyles from "./Navbar.module.scss";

import { randForHeading, rand, randDelay } from '../../utils/randomNumber';
import { sleep } from '../../utils/sleep';

import Lines from './lines';
import Menu from './Menu/menu';
import { Link } from 'gatsby';


const navbar = () => {
  let [arrayOfChars, setArrayOfChars]: any = useState([]);
  let [arrayOfBlackRects, setArrayOfBlackRects]: any = useState([]);
  let [triggerScroll, setTriggerScroll]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false as boolean);
  let [linesColor, setLinesColor]: any = useState(false);
  let [close, setClose] = useState(true);
  let navRef: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | any = useRef();

  let mounted: any = useRef(false);

  const changeCloseToTrue = () => {
    if (mounted.current) setClose((val: any) => true);
  }
  const changeCloseToFalse = () => {
    if (mounted.current) setClose((val: any) => false);
  }



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
    if (mounted.current) {
      setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
        randClass = arrayOfClassNames[randForHeading()];
        return <h1 className={`${NavbarStyles.h1} ${randClass} `} key={shortid.generate() + shortid.generate()}>Nariman Talayi</h1>;
      }));
    }
  }

  const clearArray = () => {
    if (mounted.current) {
      setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
        randClass = arrayOfClassNames[randForHeading()];
        return <h1 className={`${NavbarStyles.h1}`} key={shortid.generate() + shortid.generate()}></h1>
      }));
    }
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

  useEffect((): any => {
    mounted.current = true;

    if (mounted.current) {
      setArrayOfChars((arr: any) => arr = Array.from(Array(arrayOfClassNames.length + 3)).map(el => {
        randClass = arrayOfClassNames[randForHeading()];
        return <h1 className={`${NavbarStyles.h1} ${randClass} `} key={shortid.generate() + shortid.generate()}>Nariman Talayi</h1>;
      }));

      setArrayOfBlackRects((arr: any) => arr = Array.from(Array(5)).map(el => {
        return <div className={NavbarStyles.black_rect_two} key={shortid.generate() + shortid.generate()}></div>;
      }))

      if (mounted.current) glitchMain();
      if (mounted.current) setLinesColor(false);

    }

    return () => mounted.current = false;
  }, []);

  useEffect(() => {
    typeof window !== 'undefined' && window.addEventListener('scroll', async () => {
      if (window.scrollY >= 10) {
        if (mounted.current) setTriggerScroll((val: any) => val = true);

        if (mounted.current) setLinesColor((val: any) => val = true);

      } else {
        if (mounted.current) setTriggerScroll((val: any) => val = false);

        if (mounted.current) setLinesColor((val: any) => val = false);
      }
    });
  });

  return (
    <div className={triggerScroll ? `${NavbarStyles.triggered} ${NavbarStyles.div}` : `${NavbarStyles.div} ${NavbarStyles.untriggered}`}
      ref={navRef}
    >

      <Link to="/" style={{
        textDecoration: "none",
        color: "silver",
        zIndex: 9999999
      }} className={NavbarStyles.h1}>
        <h1>Nariman Talayi</h1>
      </Link>
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
