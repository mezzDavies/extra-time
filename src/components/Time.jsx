import { Typography } from "@mui/material";

export default function Time({ timeToLeave }) {
  return (
    <Typography
      mt={7}
      fontSize="1.5rem"
      fontWeight="bold"
      color="white"
      textAlign="center"
    >
      {timeToLeave}
    </Typography>
  );
}
