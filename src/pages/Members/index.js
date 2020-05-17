import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/core"

import ListOfMembers from "./components/ListOfMembers"
import { fetchMembersRequest } from "../../actions"

const useStyles = makeStyles(() => ({
  membersContent: {
    display: "block",
    height: "100%",
  },
}))

const Members = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const members = useSelector((state) => state.members.data)

  useEffect(() => {
    if (members.length === 0) dispatch(fetchMembersRequest())
  }, [dispatch, members.length])

  return (
    <div className={classes.membersContent}>
      <ListOfMembers />
    </div>
  )
}

export default Members
