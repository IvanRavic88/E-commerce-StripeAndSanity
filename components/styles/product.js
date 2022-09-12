import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  productCard: {
    cursor: "pointer",
    transitionProperty: "transform",
    transition: `${
      (theme.transitions.create("transform"),
      { duration: theme.transitions.duration.standard })
    }`,
    transform: "scale(1, 1)",
    "&:hover": { transform: "scale(1.1,1.1)" },
  },

  productPaddingLeft: {
    paddingLeft: "1rem",
  },
  productCardImage: {
    width: "15rem",
    height: "15rem",
  },
}));
