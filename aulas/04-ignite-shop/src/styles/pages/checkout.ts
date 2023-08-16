import { styled } from "..";

export const CheckoutContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "656px",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: "560px",
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: "1.4",
  },

  a: {
    display: "block",
    fontSize: "$md",
    color: "$green500",
    marginTop: "5rem",
    textDecoration: "none",
    fontWeight: 'bold',

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "138px",
  height: "145px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  img: {
    objectFit: "cover",
  },
});
