// src/components/LandingNavbar.tsx

import {
  Box,
  BoxProps,
  Burger,
  Button,
  ButtonProps,
  Center,
  Collapse,
  Container,
  createStyles,
  Divider,
  Drawer,
  Flex,
  getStylesRef,
  Group,
  Header,
  HoverCard,
  rem,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconAugmentedReality,
  IconCat,
  IconChevronDown,
  IconClipboardHeart,
  IconDeviceTv,
  IconFireHydrant,
  IconHeartHandshake,
  IconLeaf,
  IconReportMoney,
  IconSearch,
  IconSos,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { BrandName, SearchDrawer } from './index';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('md')]: {
      height: rem(42),
      width: '100%',
    },

    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      color: theme.white,
      fontWeight: 600,
      [`& .${getStylesRef('icon')}`]: {
        color: theme.white,
      },
    },
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colors.dark[5],
    }),

    '&:active': theme.activeStyles,
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.white,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },
}));

const mockdata = [
  { icon: IconClipboardHeart, title: 'Medical' },
  { icon: IconSos, title: 'Emergency' },
  { icon: IconLeaf, title: 'Environment' },
  { icon: IconHeartHandshake, title: 'Nonprofit' },
  { icon: IconReportMoney, title: 'Financial emergency' },
  { icon: IconCat, title: 'Animals' },
  { icon: IconFireHydrant, title: 'Crisis Relief' },
  { icon: IconAugmentedReality, title: 'Technology' },
  { icon: IconDeviceTv, title: 'Film & Videos' },
];

interface IProps extends BoxProps {
  compressed?: boolean;
}

const LandingNavbar = ({ compressed }: IProps) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [searchOpened, { toggle: toggleSearchDrawer, close: closeSearchDrawer }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [stickyClass, setStickyClass] = useState(false);
  const matchesMobile = useMediaQuery('(max-width: 768px)');

  const stickNavbar = () => {
    if (typeof window !== 'undefined') {
      setStickyClass(window.scrollY > 20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="center">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} stroke={1.5} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <Text size="sm" fw={500}>{item.title}</Text>
      </Group>
    </UnstyledButton>
  ));

  // ✅ Improved button styling
  const buttonProps: ButtonProps = {
    variant: 'light',
    color: 'violet',
    radius: matchesMobile ? 'sm' : 'xl',
    styles: {
      root: {
        fontWeight: 600,
        paddingInline: 16,
      },
    },
  };

  return (
    <Box sx={{ zIndex: 1000, position: 'fixed', top: 0, left: 0, right: 0 }}>
      <Header
        height={60}
        px="md"
        sx={{
          backgroundColor: stickyClass ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container size="lg" fluid={compressed} sx={{ height: '100%' }}>
          <Flex justify="space-between" align="center" sx={{ height: '100%' }}>
            <BrandName size={28} asLink />
            <Flex align="center" gap="xs" className={classes.hiddenMobile}>
              <Button component={Link} to="/how-it-works" className={classes.link} {...buttonProps}>
                How it works
              </Button>
              <Button component={Link} to="/campaigns" className={classes.link} {...buttonProps}>
                Campaigns
              </Button>
              <HoverCard width={700} position="bottom" radius="sm" shadow="md" withinPortal>
                <HoverCard.Target>
                  <UnstyledButton className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>Invest</Box>
                      <IconChevronDown size={18} className={classes.linkIcon} />
                    </Center>
                  </UnstyledButton>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Group position="apart" px="md">
                    <Text fw={500}>Categories</Text>
                    <Button variant="light" color="violet" radius="md">See all</Button>
                  </Group>
                  <Divider my="sm" />
                  <SimpleGrid cols={3} spacing={0}>{links}</SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <Button
                leftIcon={<IconSearch size={18} className={classes.linkIcon} />}
                onClick={toggleSearchDrawer}
                className={classes.link}
                {...buttonProps}
              >
                Search
              </Button>
              <Button component={Link} to="/create-campaign" className={classes.link} {...buttonProps}>
                Start a campaign
              </Button>
              <Button component={Link} to="/dashboard" className={classes.link} {...buttonProps}>
                My dashboard
              </Button>
            </Flex>
            <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
          </Flex>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(0)})`} mx="-md">
          <Divider my="sm" />
          <Button component={Link} to="/" className={classes.link} {...buttonProps}>Home</Button>
          <Button component={Link} to="/how-it-works" className={classes.link} {...buttonProps}>How it works</Button>
          <Button component={Link} to="/campaigns" className={classes.link} {...buttonProps}>Campaigns</Button>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>Invest</Box>
              <IconChevronDown size={16} className={classes.linkIcon} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Button component={Link} to="/create-campaign" className={classes.link} {...buttonProps}>Start a campaign</Button>
          <Button component={Link} to="/dashboard" className={classes.link} {...buttonProps}>My dashboard</Button>
          <Button
            leftIcon={<IconSearch size={18} />}
            onClick={() => {
              closeDrawer();
              toggleSearchDrawer();
            }}
            className={classes.link}
            {...buttonProps}
          >
            Search
          </Button>
        </ScrollArea>
      </Drawer>

      <SearchDrawer opened={searchOpened} onClose={closeSearchDrawer} />
    </Box>
  );
};

export default LandingNavbar;
