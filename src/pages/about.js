import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby"/>
      <Link to="/contact/">Contact</Link>

      <Header headerText="It's pretty cool" />
          <p>Such wow. Very React.</p>

    <br></br>
    <a href="./">Link to another page.</a>
  </div>
)