import {
  Button,
  Container,
  createStyles,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import image from '../assets/img/404.png';
import { BackButton } from './index';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    marginBottom: theme.spacing.lg,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    textAlign: 'center',
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

const NotFound = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <Stack align="center" spacing="xl">
        <Image src={image} height={320} fit="contain" />
        <Title className={classes.title}>Something is not right...</Title>
        <Text color="dimmed" size="lg" className={classes.description}>
          The page you are looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
        </Text>
        <Group mt="xl">
          <Button
            variant="outline"
            size="md"
            className={classes.control}
            component="a"
            href="/"
          >
            Go to Home
          </Button>
          <BackButton
            variant="outline"
            size="md"
            className={classes.control}
          />
        </Group>
      </Stack>
    </Container>
  );
};

export default NotFound;
