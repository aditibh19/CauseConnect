import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
} from '@mantine/core';
import { Helmet } from "react-helmet";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    minHeight: '100vh',
    backgroundColor: theme.colorScheme === 'dark' ? '#1A1B1E' : '#F9F9FC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 60,
  },

  paper: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    backgroundColor: theme.white,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    textAlign: 'center',
    fontSize: 30,
  },

  subtitle: {
    textAlign: 'center',
    color: theme.colors.gray[7],
    marginTop: 8,
    fontSize: theme.fontSizes.sm,
  },

  input: {
    fontSize: theme.fontSizes.sm,
  },

  button: {
    backgroundColor: theme.colors.indigo[6],
    ':hover': {
      backgroundColor: theme.colors.indigo[7],
    },
  },

  link: {
    color: theme.colors.indigo[6],
    fontWeight: 500,
    cursor: 'pointer',
  },
}));

const SignupPage = () => {
  const { classes } = useStyles();

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <div className={classes.container}>
        <Container size={420}>
          <Title className={classes.title}>Join the Cause</Title>
          <Text className={classes.subtitle}>
            Already have an account?{' '}
            <Anchor className={classes.link} component="button" type="button">
              Login
            </Anchor>
          </Text>

          <Paper className={classes.paper} mt="lg" withBorder>
            <Group grow mb="md">
              <Button
                radius="xl"
                variant="outline"
                color="blue"
                leftIcon={<IconBrandFacebook size={18} />}
              >
                Facebook
              </Button>
              <Button
                radius="xl"
                variant="outline"
                color="red"
                leftIcon={<IconBrandGoogle size={18} />}
              >
                Google
              </Button>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />

            <TextInput
              label="Name"
              placeholder="Your name"
              required
              classNames={{ input: classes.input }}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              required
              mt="md"
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
              Sign Up
            </Button>
          </Paper>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
