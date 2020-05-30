/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"

function SEO() {
  return (
    <Helmet>
        <title>Home page</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/58c378b9ed.js" crossorigin="anonymous"></script>
    </Helmet>
  )
}

export default SEO
