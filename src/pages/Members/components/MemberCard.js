import React from "react"
import { useDispatch } from "react-redux"
import {
  makeStyles,
  Link,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

import { slideMoreInfo } from "../../../actions"

const photoSize = 150
const paddingCard = 16

const useStyles = makeStyles(() => ({
  card: {
    margin: 20,
    boxShadow: "20px 20px 60px #b8b8b8, -20px -20px 60px #fafafa",
    backgroundColor: "#d9d9d9",
    borderRadius: 12,
  },
  cardContent: {
    padding: `${paddingCard}px !important`,
    height: "auto",
    maxHeight: "350px",
  },
  name: {
    marginTop: "10px",
    padding: "5px",
    textAlign: "center",
    fontFamily: "Nunito Sans",
    fontSize: "22px",
  },
  photo: {
    display: "block",
    width: photoSize,
    height: photoSize,
    margin: "10px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  githubIcon: {
    color: "#222222",
  },
}))

export default function MediaCard({ name, photo, git }) {
  const dispatch = useDispatch()
  const classes = useStyles({ photo, name })

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            onClick={() => dispatch(slideMoreInfo())}
            alt={name}
            src={photo}
            className={classes.photo}
          />
        </div>
        <Typography variant='h3' className={classes.name}>
          {name}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {git !== "" ? (
            <Link href={git} target='_blank' rel='noopener noreferrer'>
              <GitHubIcon className={classes.githubIcon} />
            </Link>
          ) : (
            <div style={{ height: 28 }} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
