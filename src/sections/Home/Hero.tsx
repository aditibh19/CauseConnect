import {
  Button,
  Container,
  createStyles,
  rem,
  Text,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(100),
    paddingBottom: rem(100),
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: rem(640),
    display: 'flex',
    alignItems: 'center',

    [theme.fn.smallerThan('md')]: {
      height: rem(560),
      paddingTop: rem(60),
      paddingBottom: rem(60),
    },

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingTop: rem(40),
      paddingBottom: rem(40),
    },
  },

  inner: {
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },

  title: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: 700,
    fontSize: rem(36),
    lineHeight: 1.4,
    color: '#fff',
    textAlign: 'left',
    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
    maxWidth: rem(800),
    marginBottom: rem(12),

    [theme.fn.smallerThan('md')]: {
      fontSize: rem(30),
    },
    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
      paddingLeft: rem(12),
      paddingRight: rem(12),
      textAlign: 'center',
    },
  },

  description: {
    fontSize: rem(18),
    fontWeight: 400,
    color: '#f1f1f1',
    maxWidth: rem(600),
    lineHeight: 1.6,
    textShadow: '0 1px 6px rgba(0, 0, 0, 0.7)',
    textAlign: 'left',
    marginBottom: rem(24),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(16),
      textAlign: 'center',
      paddingLeft: rem(12),
      paddingRight: rem(12),
    },
  },

  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: rem(16),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
    },
  },

  button: {
    fontFamily: 'Quicksand, sans-serif',
    fontSize: rem(14),
    fontWeight: 600,
    padding: '12px 28px',
    minWidth: rem(154),
    borderRadius: rem(30),
    border: 'none',
    backgroundColor: '#7E8AB8',
    color: '#fff',
    transition: 'all 0.3s ease',

    '&:hover': {
      backgroundColor: '#6c7ab0',
    },
  },
}));

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <Title className={classes.title}>
          Empowering Change, Connecting Causes, Building Futures
        </Title>
        <Text className={classes.description}>
          Join CauseConnect and be part of a movement that transforms lives and creates lasting social impact. Start your campaign today!
        </Text>
        <div className={classes.controls}>
          <Button
            className={classes.button}
            component={Link}
            to="/create-campaign"
          >
            Start a Campaign
          </Button>
          <Button
            className={classes.button}
            component={Link}
            to="/campaigns"
          >
            Explore Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
