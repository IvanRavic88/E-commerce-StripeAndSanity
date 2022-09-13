import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  card: {
    marginTop: "2rem",
  },
  icons: { padding: "1rem", color: "#2b3445", height: "5rem", width: "5rem" },
  [theme.breakpoints.down("sm")]: {
    featuredIcons: {
      "&&": {
        paddingLeft: "0px",
        maxWidth: "none",
      },
    },
  },
}));
