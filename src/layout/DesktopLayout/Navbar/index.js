import React from "react"
import { useHistory, useLocation } from "react-router-dom"

import { AppBar, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import InformativeBanner from "../../../components/InformativeBanner"
import routes from "../../../routes"

const navbarHeight = 40

const appbarButtonStyles = {
  height: navbarHeight,
  borderRadius: 0,
  color: "#222222",
  padding: "0 25px",
  fontSize: "14px",
  fontFamily: "Nunito Sans",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#000",
  },
}

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "#222222",
    zIndex: 200,
  },
  toolbar: {
    minHeight: 40,
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  appbarButton: {
    ...appbarButtonStyles,
  },
  pressedAppbarButton: {
    ...appbarButtonStyles,
    borderBottom: "1px solid #FFF",
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  return (
    <React.Fragment>
      <AppBar position='fixed' className={classes.appbar}>
        <InformativeBanner />
        <Toolbar className={classes.toolbar}>
          {routes.map(({ label, path }) => (
            <Button
              key={path}
              className={
                path === location.pathname
                  ? classes.pressedAppbarButton
                  : classes.appbarButton
              }
              variant='text'
              onClick={() => history.push(path)}
            >
              {label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar
