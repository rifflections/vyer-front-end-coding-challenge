import { Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
}

export const LoadingWrapper = (props: LoadingProps) => (
  <Typography>{props.message || 'Loading...'}</Typography>
);