import React, { useState, useEffect, FC } from 'react';

import * as SkillStyles from "./Skills.module.scss";
import { sleep } from '../../utils/sleep';

const skills: FC<any> = () => {
  const [animations, setAnimations] = useState([
    SkillStyles.react_bar,
    SkillStyles.vue_bar,
    SkillStyles.php_bar,
    SkillStyles.wordpress_bar,
    SkillStyles.python_bar
  ])




  return (
    <div className={SkillStyles.div}>
      <h1 className={SkillStyles.h1}>My skills:</h1>
      <div className={SkillStyles.skill_wrap}>
        <div className={`${SkillStyles.react} ${SkillStyles.skill}`}>React</div>
        <div className={SkillStyles.bar_wrapper} >
          <div className={`${SkillStyles.bar} ${animations[0]}`}>80%</div>
        </div>

        <div className={`${SkillStyles.react} ${SkillStyles.skill}`} >Vue</div>
        <div className={SkillStyles.bar_wrapper} style={{ "animation": animations[1] }}>
          <div className={`${SkillStyles.bar} ${animations[1]}`}>50%</div>
        </div>

        <div className={`${SkillStyles.react} ${SkillStyles.skill}`}>php</div>
        <div className={SkillStyles.bar_wrapper} style={{ "animation": animations[2] }}>
          <div className={`${SkillStyles.bar} ${animations[2]}`}>40%</div>
        </div>

        <div className={`${SkillStyles.react} ${SkillStyles.skill}`}>wordpress</div>
        <div className={SkillStyles.bar_wrapper} style={{ "animation": animations[3] }}>
          <div className={`${SkillStyles.bar} ${animations[3]}`}>20%</div>
        </div>


        <div className={`${SkillStyles.react} ${SkillStyles.skill}`}>python</div>
        <div className={SkillStyles.bar_wrapper} style={{ "animation": animations[4] }}>
          <div className={`${SkillStyles.bar} ${animations[4]}`}>60%</div>
        </div>

      </div>
    </div>
  )
}

export default skills;