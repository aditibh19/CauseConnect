import {
  Box,
  BoxProps,
  Button,
  Flex,
  Image,
  Stack,
  TextProps,
  Title,
  TitleProps,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import HandFlowerImg from "../../assets/img/lotus-flower.png";

interface IProps {
  boxProps: BoxProps;
  titleProps?: TitleProps;
  subtitleProps?: TextProps;
}

const useStyles = createStyles((theme) => ({
  button: {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  image: {
    filter: theme.colorScheme === 'dark' ? 'brightness(0.9)' : 'none',
  },
}));

const GetStartedSection = ({ boxProps, titleProps }: IProps) => {
  const matchesMobile = useMediaQuery("(max-width: 600px)");
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Box {...boxProps}>
      <Flex
        align="center"
        justify="space-between"
        gap={{ base: 'sm', sm: 'lg' }}
        direction={{ base: "column-reverse", sm: "row" }}
      >
        <Stack align={matchesMobile ? "center" : "stretch"} spacing="md">
          <Title
            {...titleProps}
            align={matchesMobile ? "center" : "start"}
            order={2}
            fw={800}
            sx={{
              color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
              maxWidth: 600,
              lineHeight: 1.3,
            }}
          >
            Ready to get started? <br /> Join thousands of others today.
          </Title>

          <Flex gap="md" justify={matchesMobile ? "center" : "start"} wrap="wrap">
            <Button
              size="lg"
              variant="filled"
              component={Link}
              to="/create-campaign"
              className={classes.button}
              color="blue"
              radius="md"
            >
              Start a Campaign
            </Button>
            <Button
              size="lg"
              variant="outline"
              component={Link}
              to="/how-it-works"
              className={classes.button}
              color="blue"
              radius="md"
            >
              How it Works
            </Button>
          </Flex>
        </Stack>

        <Image
          src={HandFlowerImg}
          height={240}
          width={240}
          fit="contain"
          className={classes.image}
          alt="Join CauseConnect"
        />
      </Flex>
    </Box>
  );
};

export default GetStartedSection;
