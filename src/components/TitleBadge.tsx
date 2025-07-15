import { createStyles, Text, TextProps } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing.xs,
    width: "fit-content",
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.secondary[7] // darker secondary shade for dark mode background
        : theme.colors.secondary[1], // lighter secondary shade for light mode
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 600,
    fontSize: theme.fontSizes.sm,
    lineHeight: 1.2,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    boxShadow:
      theme.colorScheme === "dark"
        ? "0 2px 8px rgba(0, 0, 0, 0.5)"
        : "0 2px 8px rgba(0, 0, 0, 0.05)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    transition: "all 0.3s ease",
  },
}));

interface IProps extends TextProps {
  title: string;
  icon?: React.ReactNode;
}

const TitleBadge = ({ title, icon, ...others }: IProps) => {
  const { classes } = useStyles();

  return (
    <Text className={classes.badge} mb="lg" {...others}>
      {icon && <span>{icon}</span>}
      {title}
    </Text>
  );
};

export default TitleBadge;
