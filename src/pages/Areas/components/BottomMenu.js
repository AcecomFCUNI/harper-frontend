import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import FavoriteIcon from "@material-ui/icons/Favorite"
import "./BottomMenu.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getOneArea } from "../../../actions"

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
        icon: <FavoriteIcon />,
      }
    case 3:
      return {
        label: "SI",
        icon: <FavoriteIcon />,
      }
    case 4:
      return {
        label: "DV",
        icon: <FavoriteIcon />,
      }
    default:
      return {
        label: "NV",
        icon: <FavoriteIcon />,
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
