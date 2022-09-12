import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerBannerContainer: {
    display: "grid",
    alignItems: "center",
    height: "22rem",
    marginTop: "10rem",
    padding: "2rem",
    backgroundColor: "#222935",
    color: "white",

    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      height: "20rem",
      marginTop: "8rem",
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
      height: "18rem",
      marginTop: "8rem",
      marginBottom: "5rem",
    },
  },
  bannerDesc: {
    "& h3": {
      fontWeight: "900",
      marginBottom: "0.5rem",

      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    "& button": {
      padding: "1rem 1rem",
      color: "#d23f57",
      backgroundColor: "white",
      marginTop: "2rem",
      fontSize: "1.5rem",
      fontWeight: "500",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
        padding: "0.5rem 0.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },

      "&:hover": {
        backgroundColor: "#475569;",
      },
    },
    display: "flex",
    justifyContent: "space-between",
  },
  right: { textAlign: "right" },
}));
