import React from "react";
import {
    Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    gridItem: {}
})

export default function Nav() {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                style={{
                    padding: "0.5rem"
                }}
            >
                <Box
                    component={Grid}
                    className={classes.gridItem}
                    item
                    display={{ xs: "none", sm: "block" }}>
                    <div><span className="copyright-text">&copy; 2021 Mohit Sharma <span className="middot">&#183;</span></span> <a href="https://github.com/mohits1005/portfoliov2"><span className="source-text">Source</span></a></div>
                </Box>
            </Grid>
        </>
    )
}