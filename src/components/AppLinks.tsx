import { useState } from 'react';
import {
  Button,
  createStyles,
  Flex,
  FlexProps,
  getStylesRef,
  rem,
} from '@mantine/core';
import {
  IconFileDollar,
  IconFolderPlus,
  IconHeart,
  IconHome,
} from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.md,
    fontWeight: 500,
    transition: 'background 0.2s ease',

    '&:hover': {
      backgroundColor: theme.colors.secondary[6],
      color: theme.white,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.white,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colors.secondary[2],
    marginRight: theme.spacing.sm,
    transition: 'color 0.2s ease',
  },

  linkActive: {
    backgroundColor: theme.colors.primary[7],
    color: theme.white,

    [`& .${getStylesRef('icon')}`]: {
      color: theme.white,
    },
  },
}));

const NAV_ITEMS = [
  { link: '/create-campaign', label: 'Create New Campaign', icon: IconFolderPlus },
  { link: '/dashboard', label: 'My Dashboard', icon: IconHome },
  { link: '', label: 'Following Campaigns', icon: IconHeart },
  { link: '', label: 'Funded Campaigns', icon: IconFileDollar },
];

const ICON_SIZE = 18;

type IProps = FlexProps;

const AppLinks = ({ ...others }: IProps) => {
  const { classes, cx } = useStyles();
  const location = useLocation();

  const [active, setActive] = useState(
    NAV_ITEMS.find((item) => item.link && location.pathname.startsWith(item.link))?.label || ''
  );

  const links = NAV_ITEMS.map((item) => (
    <Button
      key={item.label}
      component={Link}
      to={item.link || '#'}
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      onClick={() => setActive(item.label)}
      variant="subtle"
      aria-label={item.label}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} size={ICON_SIZE} />
      {item.label}
    </Button>
  ));

  return (
    <Flex
      gap="xs"
      wrap="wrap"
      justify="flex-start"
      align="center"
      {...others}
    >
      {links}
    </Flex>
  );
};

export default AppLinks;
