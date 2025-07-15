import {
  Box,
  BoxProps,
  Button,
  Card,
  createStyles,
  Image,
  PaperProps,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  Title,
  TitleProps,
  useMantineTheme,
} from '@mantine/core';
import { TitleBadge } from '../../components';

const useStyles = createStyles((theme) => ({
  feature: {
    padding: theme.spacing.lg,
    backdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: theme.colorScheme === 'dark'
      ? 'rgba(30, 30, 30, 0.6)'
      : 'rgba(255, 255, 255, 0.75)',
    border: `1px solid rgba(209, 213, 219, 0.3)`,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows.md,
    },
  },
}));

interface FeatureProps extends PaperProps {
  image: string;
  title: string;
  description: string;
  action: string;
}

const mockdata = [
  {
    image:
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1170&q=80',
    title: 'Community',
    description:
      'Together we are stronger. Discover your tribe and collaborate with purpose. Join our CauseConnect community events and forums.',
    action: `Explore communities`,
  },
  {
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1171&q=80',
    title: 'Education',
    description:
      'Turn your purpose into impact. Access CauseConnect programs to sharpen your skills, avoid pitfalls, and grow your social venture.',
    action: 'Browse learning programs',
  },
  {
    image:
      'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=1074&q=80',
    title: 'Crowdfunding',
    description:
      'Need funding for your mission? Run high-converting campaigns on CauseConnect. Get guidance, support, and resources to thrive.',
    action: 'Launch a campaign',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1170&q=80',
    title: 'Partnerships',
    description:
      'CauseConnect teams up with governments, NGOs, and brands to empower changemakers via accelerators, grants, and more.',
    action: 'Partner with us',
  },
];

function Feature({ image, title, description, action }: FeatureProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Card className={classes.feature} radius="sm" shadow="sm">
      <Card.Section>
        <Image src={image} height={220} fit="cover" radius="sm" />
      </Card.Section>
      <Stack spacing="xs" mt="md">
        <Title order={4} fw={700} color={theme.colorScheme === 'dark' ? 'gray.1' : 'gray.9'}>
          {title}
        </Title>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Button variant="light" color="blue" mt="xs">
          {action}
        </Button>
      </Stack>
    </Card>
  );
}

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const FeaturesSection = ({ boxProps, subtitleProps }: IProps) => {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Box {...boxProps}>
      <Box mb="lg">
        <TitleBadge title="What to Expect" />
        <Text
          {...subtitleProps}
          sx={(theme) => ({
            fontSize: 18,
            color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[7],
            fontWeight: 500,
            maxWidth: 750,
          })}
        >
          CauseConnect empowers change by supporting impactful ideas, creators, and community leaders. Start something meaningful today.
        </Text>
      </Box>

      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[
          { maxWidth: 'lg', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        ]}
      >
        {items}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
