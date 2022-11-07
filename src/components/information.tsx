import { Typography } from "@mui/material";

interface InformationProps {
  message?: string;
}

export const InformationWrapper = (props: InformationProps) => (
  <Typography>{props.message || 'Loading...'}</Typography>
);