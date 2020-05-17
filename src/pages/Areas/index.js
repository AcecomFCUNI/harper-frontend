import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAreasRequest } from "../../actions"

import ContentCards from "./components/ContentCards"
import { Hidden } from "@material-ui/core"
import ContentMenuAreas from "./components/ContentMenuAreas"

const Areas = () => {
  const dispatch = useDispatch()
  const areas = useSelector((state) => state.areas.data)

  useEffect(() => {
    if (areas.length === 0) dispatch(fetchAreasRequest())
  }, [dispatch, areas.length])

  return (
    <React.Fragment>
      <Hidden smDown>
        <ContentCards />
      </Hidden>
      <Hidden mdUp>
        <ContentMenuAreas />
      </Hidden>
    </React.Fragment>
  )
}

export default Areas
