import {
  createStyles,
  rem,
  Text,
  Title,
  TitleProps,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: 900,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? "#F3F2E7" : "#1A1A1A",

    [theme.fn.smallerThan("md")]: {
      fontWeight: 700,
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
      textAlign: "left",
    },

    display: "flex",
    alignItems: "center",
    gap: rem(4),
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },

  cause: {
    color: "#E29F72", // Your primary brand color
  },

  connect: {
    color: "#FFB200", // Your accent/secondary color
  },

  white: {
    textAlign: "center",
    fontWeight: 800,
    letterSpacing: -1,
    color: "#F3F2E7",

    [theme.fn.smallerThan("md")]: {
      fontWeight: 700,
    },

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
      textAlign: "left",
    },

    display: "flex",
    alignItems: "center",
    gap: rem(4),
  },
}));

interface IProps extends TitleProps {
  asLink?: boolean;
  variant?: "grayscale" | "default";
}

const Brand = ({ asLink, variant = "default", ...others }: IProps) => {
  const { classes } = useStyles();

  const className = variant === "grayscale" ? classes.white : classes.title;

  const content = (
    <Title className={className} {...others}>
      <Text component="span" className={classes.cause} inherit>
        Cause
      </Text>
      <Text component="span" className={classes.connect} inherit>
        Connect
      </Text>
    </Title>
  );

  return asLink ? (
    <UnstyledButton
      component={Link}
      to="/"
      aria-label="Go to homepage"
      sx={{ textDecoration: "none" }}
    >
      {content}
    </UnstyledButton>
  ) : (
    content
  );
};

export default Brand;
