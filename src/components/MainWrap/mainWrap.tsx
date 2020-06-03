import React, { useState, useEffect } from 'react';

import Main from "../Main/main";
import Skills from "../Skills/skills";

import * as St from "./MainWrap.module.scss";

const mainWrap = () => {

  return (
    <div className={St.div_wrap}>
      <Main />
      <Skills />
    </div>
  )
}

export default mainWrap;
