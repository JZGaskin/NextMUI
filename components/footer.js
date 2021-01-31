import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    position: "fixed",
    bottom: 0,
    paddingTop: 10
  },
  copywrite: {
    textAlign: "center"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" justifyContent="center">
        <Button color="inherit">Top</Button>
        <Typography className={classes.copywrite} variant="body2">
          © {new Date().getFullYear()}, Title, llc
        </Typography>
      </AppBar>
    </div>
  );
}
