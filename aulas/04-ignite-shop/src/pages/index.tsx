import { styled } from "@/styles";

const Button = styled("button", {
  backgroundColor: "$primary",
  borderRadius: "5px",
  color: "white",
  padding: "10px 20px",
  border: 0,

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
export default function Home() {
  return (
    <Button>
      <span>teste</span>Enviar
    </Button>
  );
}
