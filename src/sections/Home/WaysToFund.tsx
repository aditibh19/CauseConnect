import {
  Box,
  BoxProps,
  Card,
  Container,
  createStyles,
  Grid,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps
} from "@mantine/core";
import { TitleBadge } from "../../components";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  feature: {
    padding: theme.spacing.lg,
    backdropFilter: `blur(12px) saturate(180%)`,
    backgroundColor: theme.colorScheme === 'dark'
      ? `rgba(255, 255, 255, 0.1)`
      : `rgba(255, 255, 255, 0.75)`,
    transition: 'all 0.3s ease',
    border: '1px solid rgba(0,0,0,0.05)',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark'
        ? `rgba(255, 255, 255, 0.15)`
        : `rgba(255, 255, 255, 0.95)`,
      transform: 'translateY(-4px)',
      boxShadow: `0 8px 20px rgba(0, 0, 0, 0.1)`,
    },
  },

  cardImage: {
    height: 180,
    objectFit: 'cover',
  },

  section: {
    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    paddingTop: 64,
    paddingBottom: 64,
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const WaysToFundSection = ({ boxProps, subtitleProps }: IProps) => {
  const { classes, cx, theme } = useStyles();

  return (
    <Box className={classes.section} {...boxProps}>
      <Container>
        <Grid gutter="xl">
          <Grid.Col lg={4}>
            <Stack spacing="xs" justify="center" sx={{ height: '100%' }}>
              <TitleBadge title="Make your impact" />
              <Title order={2} fw={800} sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}>
                CauseConnect Gives You More
              </Title>
              <Text size="sm" color={theme.colorScheme === 'dark' ? theme.colors.gray[4] : 'dimmed'}>
                Supercharge your fundraising efforts with our powerful tools,
                inspiring stories, and a vibrant giving community. Join today and make your cause heard.
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col lg={8}>
            <SimpleGrid cols={3} spacing="lg" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              {[
                {
                  label: 'Yourself',
                  img: 'https://images.unsplash.com/photo-1518101645466-7795885ff8f8?auto=format&fit=crop&w=1170&q=80',
                },
                {
                  label: 'Friends & Family',
                  img: 'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?auto=format&fit=crop&w=1170&q=80',
                },
                {
                  label: 'Charity',
                  img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1170&q=80',
                },
              ].map((card) => (
                <Card
                  key={card.label}
                  className={cx(classes.feature, 'card')}
                  shadow="md"
                  radius="sm"
                  component={Link}
                  to="/create-campaign"
                >
                  <Card.Section>
                    <Image src={card.img} className={classes.cardImage} />
                  </Card.Section>
                  <Text
                    mt="md"
                    align="center"
                    fw={600}
                    size="lg"
                    sx={{ color: theme.colorScheme === 'dark' ? theme.white : theme.black }}
                    {...subtitleProps}
                  >
                    {card.label}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WaysToFundSection;
