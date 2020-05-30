import React from 'react';
import Typed from 'react-typed';

import {
  hello,
  div1,
  div2,
  mainClass,
  spanz
} from "./Main.module.scss";
import shortid from 'shortid';

const main = () => {
  return (
    <main className={mainClass} >
      <div className={div1}>
        <span className={hello}>Hello!<br /></span>
        I'm Nariman, i'm a frontend developer <br />
        a JSX, Graphql and Web security enthusiast<br /><br />
        I create websites using<br />
        <Typed
          strings={['React', 'Vue', 'TS',]}
          loop
          typeSpeed={70}
          backSpeed={70}
        /><br />
        {Array.from(Array(2)).map(e => (
          <br key={shortid.generate() + shortid.generate()} />
        ))}
      </div>
      <span className={spanz}>Contact me at:<br /> ntnirvana91@gmail.com</span>
    </main>
  )
}

export default main;
