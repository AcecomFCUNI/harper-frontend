import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles, BottomNavigation, BottomNavigationAction } from "@material-ui/core"

import NotInterestedRoundedIcon from '@material-ui/icons/NotInterestedRounded'
import GamepadRoundedIcon from '@material-ui/icons/GamepadRounded'
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded'
import CodeRoundedIcon from '@material-ui/icons/CodeRounded'
import FavoriteIcon from '@material-ui/icons/Favorite';
import { getOneArea } from "../../../actions"
import "./BottomMenu.css"

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    zIndex: 200,
    backgroundColor: theme.fab.mainColor,
    bottom: 0,
    width: "100vw",
  },
  menuButton: {
    fontFamily: "Nunito Sans",
  },
}))

const getAbbrAndIcon = (code) => {
  switch (code) {
    case 1:
      return {
        label: "IA",
      icon: <FavoriteIcon />,
      }
    case 2:
      return {
        label: "DW",
        icon: <CodeRoundedIcon />,
      }
    case 3:
      return {
        label: "SI",
        icon: <SecurityRoundedIcon />,
      }
    case 4:
      return {
        label: "DV",
        icon: <GamepadRoundedIcon />,
      }
    default:
      return {
        label: "NV",
        icon: <NotInterestedRoundedIcon />,
      }
  }
}

const BottomMenu = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { data } = useSelector((state) => state.areas)
  const [value, setValue] = useState("Inteligencia Artificial")

  useEffect(() => {
    dispatch(getOneArea(value))
  }, [dispatch, value])

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(e, value) => {
        setValue(value)
      }}
      className={classes.menu}
    >
      {data.map(({ code, name }) => {
        const { label, icon } = getAbbrAndIcon(code)
        return (
          <BottomNavigationAction
            className={classes.menuButton}
            key={label}
            label={label}
            value={name}
            icon={icon}
          />
        )
      })}
    </BottomNavigation>
  )
}

export default BottomMenu
