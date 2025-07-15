import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  createStyles,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.colorScheme === "dark" ? "#1A1B1E" : "#F9F9FC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 60,
  },

  paper: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    backgroundColor: theme.white,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    textAlign: "center",
    fontSize: 30,
  },

  subtitle: {
    textAlign: "center",
    color: theme.colors.gray[7],
    marginTop: 8,
    fontSize: theme.fontSizes.sm,
  },

  input: {
    fontSize: theme.fontSizes.sm,
  },

  button: {
    backgroundColor: theme.colors.indigo[6],
    ":hover": {
      backgroundColor: theme.colors.indigo[7],
    },
  },

  link: {
    color: theme.colors.indigo[6],
    fontWeight: 500,
    cursor: "pointer",
  },
}));

const LoginPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className={classes.container}>
        <Container size={420}>
          <Title className={classes.title}>Welcome back!</Title>
          <Text className={classes.subtitle}>
            Don’t have an account?{" "}
            <Anchor className={classes.link} component="button" type="button">
              Create account
            </Anchor>
          </Text>

          <Paper className={classes.paper} mt="lg" withBorder>
            <Group grow mb="md">
              <Button radius="xl" variant="outline" color="blue" leftIcon={<IconBrandFacebook size={18} />}>
                Facebook
              </Button>
              <Button radius="xl" variant="outline" color="red" leftIcon={<IconBrandGoogle size={18} />}>
                Google
              </Button>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <form>
              <TextInput
                label="Email"
                placeholder="you@example.com"
                required
                classNames={{ input: classes.input }}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                classNames={{ input: classes.input }}
              />

              <Group position="apart" mt="lg">
                <Checkbox label="Remember me" />
                <Anchor component="button" size="sm" className={classes.link} type="button">
                  Forgot password?
                </Anchor>
              </Group>

              <Button fullWidth mt="xl" className={classes.button} type="submit">
                Sign in
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
