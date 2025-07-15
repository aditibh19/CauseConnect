import { forwardRef } from 'react';
import { Group, Select, SelectItemProps, Text } from "@mantine/core";
import {
  IconAugmentedReality,
  IconCat,
  IconClipboardHeart,
  IconDeviceTv,
  IconFireHydrant,
  IconHeartHandshake,
  IconLeaf,
  IconReportMoney,
  IconSos,
  TablerIconsProps
} from "@tabler/icons-react";

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

interface ItemProps extends SelectItemProps {
  icon: (props: TablerIconsProps) => JSX.Element;
  title: string;
}

const CategorySelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ icon: Icon, title, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Icon size={18} />
        <Text size="sm">{title}</Text>
      </Group>
    </div>
  )
);

CategorySelectItem.displayName = 'CategorySelectItem';

const CategorySelect = () => {
  return (
    <Select
      label="Category"
      itemComponent={CategorySelectItem}
      data={mockdata.map((c) => ({
        value: c.title,
        label: c.title,
        title: c.title,
        icon: c.icon,
      }))}
      searchable
      clearable
      maxDropdownHeight={300}
      nothingFound="Nothing found"
      filter={(value, item) =>
        item?.title?.toLowerCase().includes(value?.toLowerCase().trim())
      }
    />
  );
};

export default CategorySelect;
