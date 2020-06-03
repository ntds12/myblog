import React, {
  FC,
  useState,
  useEffect
} from 'react';
import Typed from 'react-typed';

import {
  hello,
  div1,
  div2,
  mainClass,
  spanz
} from "./Main.module.scss";
import shortid from 'shortid';

const main: FC<any> = () => {

  return (
    <main className={mainClass} >
      <div className={div1}>
        <div className={hello}>Hello!<br /></div>
          I'm Nariman, i'm a frontend developer <br />
          a JSX, Graphql and Web security enthusiast<br /><br />
          I create websites using<br />
        <Typed
          strings={['React', 'Vue', 'TS',]}
          loop
          typeSpeed={70}
          backSpeed={70}
        /><br />
      </div>
    </main>
  )
}

export default main;
