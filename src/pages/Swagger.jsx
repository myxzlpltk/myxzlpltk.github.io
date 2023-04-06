import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const Swagger = () => {
  return (
    <SwaggerUI url="/swagger/bookstore_bangkit/index.yml" />
  )
}

export default Swagger;