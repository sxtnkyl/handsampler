import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  MenuOpen,
  Divider,
  IconButton,
  makeStyles,
} from "../../utility/themeIndex";

const useStyles = makeStyles((theme) => ({
  menu: {
    color: theme.palette.secondary.contrastText,
    alignSelf: "flex-end",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const NavDrawer = (props) => {
  const classes = useStyles();
  const { drawer, drawerList, toggleDrawer, moveByIndex } = props;

  return (
    <Drawer variant="persistent" open={drawer} anchor="left">
      <IconButton className={classes.menu} onClick={toggleDrawer}>
        <MenuOpen />
      </IconButton>
      <Divider style={{ backgroundColor: "white" }} />
      <List>
        {drawerList.map((text, index) => (
          <ListItem button key={text} onClick={() => moveByIndex(index)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
