import React, { useState, useEffect, useLayoutEffect } from "react"

import * as MenuStyles from "./Menu.module.scss"
import { Link } from "gatsby"

const menu: React.FC<any> = ({ close, changeCloseToTrue }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    if (!close) {
      setCounter((val: any) => val + 1)
    }
  }, [close])

  return (
    <div
      className={MenuStyles.menu}
      style={{
        overflow: "hidden",
        width: "400px",
        willChange: "transform",
        transform: "translateX(-100vw)",
        animation:
          close
            ? `${counter > 0 ? "closeMenu" : ""} .4s ease forwards`
            : "openMenu .4s ease forwards"
      }}
    >
      <div className={MenuStyles.contents}>
        <p className={MenuStyles.p}>
          &nbsp;&nbsp;table_of_contents
          <i
            className={MenuStyles.icon}
            onClick={() => {
              changeCloseToTrue()
            }}
          >
            <b>&nbsp;&nbsp;&nbsp;&nbsp;x</b>
          </i>
        </p>
        <p className="p_blog">
          <Link
            to="/blog"
            className={MenuStyles.p_blog_link}
            onClick={changeCloseToTrue}
          >
            Blog
          </Link>
        </p>
        <hr className={MenuStyles.p_blog_link_hr} />
      </div>

    </div>
  )
}

export default menu
