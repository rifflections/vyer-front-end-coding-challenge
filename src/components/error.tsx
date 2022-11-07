import { Typography } from "@mui/material";

interface ErrorProps {
  message?: string;
}

export const ErrorWrapper = (props: ErrorProps) => (
  <Typography>{props.message || 'An error poped up...'}</Typography>
);