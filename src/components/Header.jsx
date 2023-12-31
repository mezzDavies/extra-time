import { Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          mt: 2,
          textAlign: "center",
          color: "primary.main",
          letterSpacing: 3,
          fontWeight: "bold",
        }}
      >
        Extra Time
      </Typography>
      <Typography
        variant="h2"
        sx={{
          mt: 1,
          textAlign: "center",
          color: "secondary.main",
          letterSpacing: 0.5,
        }}
      >
        Get there before kick-off
      </Typography>
    </>
  );
}
