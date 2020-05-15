import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchMembersRequest } from "../../actions"
import ListOfMembers from "./components/ListOfMembers"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  membersContent: {
    width: "100vw",
    backgroundColor: "#182F49",
    overflowX: "hidden",
  },
}))

const Members = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMembersRequest())
  }, [dispatch])

  return (
    <div className={classes.membersContent}>
      <ListOfMembers />
    </div>
  )
}

export default Members
