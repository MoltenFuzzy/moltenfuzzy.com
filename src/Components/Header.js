import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "} 
              <img src="https://c.tenor.com/c-5wsAjypmgAAAAi/pepe-pepe-the-frog.gif" width="40" height="40" alt="pepe-hi" /> 
              {/* <span role="img" aria-label="Emoji">
                👋
              </span> */}
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline}
              </h1>
            </div>
          </Fade>
          {/* <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade> */}
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "kentphan2000@gmail.com"
              }`}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
