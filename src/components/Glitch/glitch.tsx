import React, {
  useState,
  useEffect
} from 'react';

import glitchImage from './glich.jpg';

import * as GlitchStyles from './Glitch.module.scss';
import { sleep } from '../../utils/sleep';
import shortid from 'shortid';
import { randRect, randPick } from './glitchRandomUtil';

const glitch = () => {

  const [imgs, setImgs]: any = useState([]);
  const [update, setUpdate]: any = useState("");
  let valArr: any = [];

  const setImg = () => {
    setImgs((arr: any) => arr = Array.from(Array(5)).map(el => {
      return <img
        src={glitchImage as any}
        className={GlitchStyles.glitch_one} key={shortid.generate() + shortid.generate()}
        style={{
          "position": "absolute",
          "clip": `rect(${valArr[randPick()]}px,${valArr[randPick()]}px,${valArr[randPick()]}px,${valArr[randPick()]}px)`,
          "top": `${valArr[randPick()]}px`,
          "right": `${valArr[randPick()]}px`,
        }}
      />
    }));
  }


  const changeVars = async () => {


    while (true) {
      for (let k = 0; k < 10; k++) {
        valArr = [];
        for (let i = 0; i < 20; i++) {
          valArr.push(randRect());
        }

        setImg();

        setUpdate((val: any) => val = shortid.generate());
        await sleep(100);
      }
      setImgs([]);
      await sleep(5000);
    }
  }


  useEffect(() => {

    setImg();
    changeVars();
  }, []);

  return (
    <div>
      {
        imgs.map((el: any) => el)
      }
    </div>
  )
}

export default glitch;
