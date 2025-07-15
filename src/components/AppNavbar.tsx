// src/components/AppNavbar.tsx

import {
  ActionIcon,
  Avatar,
  Box,
  BoxProps,
  Burger,
  Button,
  ButtonProps,
  Container,
  Drawer,
  Group,
  Header,
  Menu,
  rem,
  ScrollArea,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import {
  IconBell,
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconSearch,
  IconSettings,
  IconStar,
} from '@tabler/icons-react';
import { useState } from 'react';
import { AppLinks, BrandName, SearchDrawer } from './index';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=255&q=80',
};

const ICON_SIZE = 18;

type IProps = BoxProps;

const AppNavbar = ({ ...others }: IProps) => {
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [searchOpened, { toggle: toggleSearchDrawer, close: closeSearchDrawer }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  // ✅ Better button styles
  const buttonProps: ButtonProps = {
    variant: 'gradient',
    gradient: { from: 'violet', to: 'indigo', deg: 45 },
    radius: 'md',
    size: 'sm',
    styles: {
      root: {
        fontWeight: 600,
        paddingInline: 16,
        color: 'white',
      },
    },
  };

  return (
    <Box {...others}>
      <Header height={{ base: 50, md: 70 }} className="glass-navbar">
        <Container fluid style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger opened={drawerOpened} onClick={toggleDrawer} color="gray" />

          <Group position="apart" style={{ width: '100%' }}>
            <Group>
              <BrandName size={24} ml={isMobile ? 'md' : 'xs'} asLink variant="grayscale" />
              <AppLinks style={{ display: isMobile ? 'none' : 'flex' }} />
            </Group>

            <Group spacing="xs">
              <ActionIcon variant="light" color="gray" onClick={toggleSearchDrawer}>
                <IconSearch size={ICON_SIZE} />
              </ActionIcon>

              <ActionIcon variant="light" color="gray">
                <IconBell size={ICON_SIZE} />
              </ActionIcon>

              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton>
                    <Group spacing={7}>
                      <Avatar src={user.image} alt={user.name} radius="xl" size={isMobile ? 18 : 20} />
                      {!isMobile && (
                        <>
                          <Text weight={500} size="sm" style={{ lineHeight: 1 }} mr={3}>
                            {user.name}
                          </Text>
                          <IconChevronDown size={rem(12)} stroke={1.5} />
                        </>
                      )}
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<IconHeart size="0.9rem" color="red" stroke={1.5} />}>Liked posts</Menu.Item>
                  <Menu.Item icon={<IconStar size="0.9rem" color="gold" stroke={1.5} />}>Saved posts</Menu.Item>
                  <Menu.Item icon={<IconMessage size="0.9rem" color="blue" stroke={1.5} />}>Your comments</Menu.Item>
                  <Menu.Label>Settings</Menu.Label>
                  <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>Account settings</Menu.Item>
                  <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Container>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        zIndex={1000000}
        styles={{
          header: {
            backgroundColor: '#1A1A1A',
            color: 'white',
          },
          close: {
            color: 'white',
          },
        }}
      >
        <ScrollArea
          h={`calc(100vh - ${rem(0)})`}
          mx="-md"
          sx={{
            backgroundColor: '#1A1A1A',
          }}
        >
          <AppLinks direction="column" />

          {/* Add buttons to drawer for mobile */}
          <Box mt="md" px="md">
            <Button fullWidth {...buttonProps}>
              Start a Campaign
            </Button>
            <Button fullWidth mt="xs" {...buttonProps}>
              My Dashboard
            </Button>
          </Box>
        </ScrollArea>
      </Drawer>

      {/* Search Overlay */}
      <SearchDrawer opened={searchOpened} onClose={closeSearchDrawer} />
    </Box>
  );
};

export default AppNavbar;
