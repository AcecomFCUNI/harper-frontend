import React from "react"
import MemberCard from "./MemberCard"
import { useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core"
import Loader from "../../../components/Loader"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#D9D9D9",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "50px",
  },
  content: {
    width: "1200px",
    [theme.breakpoints.down("md")]: {
      width: "850px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  title: {
    position: "relative",
    zIndex: 100,
    fontFamily: "Nunito Sans",
    fontWeight: "600",
    fontSize: "60px",
    color: "#222222",
    padding: "100px 0 30px 0",
    borderBottom: "5px solid #222222",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10vw",
    },
  },
  grid: {
    marginTop: "30px",
    display: "grid",
    gridGap: "10px",
    gridTemplateColumns: "repeat(3, 1fr)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
    },
  },
}))

const ListOfMembers = () => {
  const {
    members: { loading, data: members },
  } = useSelector((state) => state)
  const classes = useStyles()

  return loading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div className={classes.title}>Junta Directiva</div>
          <div className={classes.grid}>
            {members.map(
              ({ name, photo, git, status }) =>
                status === "Junta Directiva" && (
                  <MemberCard key={name} name={name} photo={photo} git={git} />
                )
            )}
          </div>
          <div className={classes.title}>Miembros</div>
          <div className={classes.grid}>
            {members.map(
              ({ name, photo, git, status }) =>
                status !== "Junta Directiva" && (
                  <MemberCard key={name} name={name} photo={photo} git={git} />
                )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ListOfMembers
