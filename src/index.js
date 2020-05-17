import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import WebFont from "webfontloader"
import { MuiThemeProvider } from "@material-ui/core"
import theme from "./custom-theme"
import configureStore from "./store"

import App from "./App"
import "./index.css"

const store = configureStore()

WebFont.load({
  google: {
    families: ["Nunito:300,700", "Nunito Sans:300,600", "sans-serif"],
  },
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
)
