import React, { useState } from "react"

import {
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Link,
} from "@material-ui/core"
import CloseRoundedIcon from "@material-ui/icons/CloseRounded"

const informativeBannerHeight = 30
const covidApp = "https://acecom-covid.netlify.app/"

const useStyles = makeStyles(() => ({
  informativeBanner: {
    backgroundColor: "#D9D9D9",
    height: `${informativeBannerHeight}px !important`,
    minHeight: `${informativeBannerHeight}px !important`,
  },
  title: {
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    textAlign: "center",
    width: "100%",
    fontSize: "12px",
    color: "#000",
  },
  linkTitle: {
    fontWeight: 600,
    color: "#AA263C",
  },
}))

const InformativeBanner = () => {
  const classes = useStyles()
  const [show, setShow] = useState(true)

  return (
    show && (
      <Toolbar className={classes.informativeBanner}>
        <IconButton size='small' onClick={() => setShow(false)}>
          <CloseRoundedIcon
            style={{ width: ".8em", height: ".8em", color: "#000" }}
          />
        </IconButton>
        <Typography className={classes.title}>
          Casos en tiempo real sobre{" "}
          <Link
            className={classes.linkTitle}
            href={covidApp}
            target='_blank'
            rel='noopener noreferrer'
          >
            COVID - 19
          </Link>
        </Typography>
      </Toolbar>
    )
  )
}

export default InformativeBanner
