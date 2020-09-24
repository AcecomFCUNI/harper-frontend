import React from "react"
import { makeStyles, AppBar } from "@material-ui/core"
import FabMobile from "./FabMobile"
import FadeMenu from "./FadeMenu.js"

const useStyles = makeStyles(() => ({
  content: {
    position: "relative",
    zIndex: 100,
  },
}))

const MobileLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <FadeMenu />
      <FabMobile />
      <div className={classes.content}>
        <AppBar position='fixed' className={classes.appbar}></AppBar>
        {children}
      </div>
    </React.Fragment>
  )
}

export default MobileLayout
