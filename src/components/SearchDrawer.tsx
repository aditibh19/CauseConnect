import {
  Button,
  Center,
  Drawer,
  DrawerProps,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { CategorySelect, CountrySelect } from "./index";
import { useMediaQuery } from "@mantine/hooks";

type IProps = Pick<DrawerProps, 'opened' | 'onClose' | 'size'>;

const SearchDrawer = ({ ...others }: IProps) => {
  const matchesMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Drawer
      position="bottom"
      title=""
      size="100%"
      padding="xl"
      withCloseButton
      {...others}
    >
      <Center sx={{ minHeight: '80vh' }}>
        <Stack spacing="lg" sx={{ width: matchesMobile ? '85%' : '60%' }}>
          <Title order={2}>Search Causes</Title>
          <TextInput
            size={matchesMobile ? "sm" : "md"}
            icon={<IconSearch size={18} />}
            placeholder="Search campaigns, people, or hashtags"
          />
          <SimpleGrid cols={2} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            <CategorySelect />
            <CountrySelect />
          </SimpleGrid>
          <Button fullWidth size="md" mt="lg">
            Search Now
          </Button>
        </Stack>
      </Center>
    </Drawer>
  );
};

export default SearchDrawer;
