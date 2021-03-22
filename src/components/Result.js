import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>
              <strong>Company Name</strong>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>
              <strong>Domain</strong>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>
              <strong>Location</strong>
            </p>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>
              <strong>Language</strong>
            </p>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function FormResultRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>Rocket Factory AG</p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>
              Supply Chain Management
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>Augsburg</p>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p style={{ fontSize: "calc(1px + 2vmin)" }}>EN</p>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormResultRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormResultRow />
        </Grid>
      </Grid>
    </div>
  );
}
