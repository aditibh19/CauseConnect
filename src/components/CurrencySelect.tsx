import { forwardRef } from 'react';
import { Group, Select, SelectItemProps, Text } from '@mantine/core';
import { ICurrency } from '../types';
import currencyData from '../data/Currencies.json';

// Custom dropdown item rendering
const CurrencySelectItem = forwardRef<HTMLDivElement, ICurrency & SelectItemProps>(
  ({ name, cc, ...others }: ICurrency, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Text size="sm">{name}</Text>
        <Text size="sm" opacity={0.65}>
          {cc}
        </Text>
      </Group>
    </div>
  )
);

// Currency dropdown select
const CurrencySelect = () => {
  return (
    <Select
      label="What currency do you want to raise money in?"
      placeholder="Select a currency"
      itemComponent={CurrencySelectItem}
      data={currencyData.data.map((c) => ({
        value: c.name,
        label: c.name,
        ...c,
      }))}
      searchable
      clearable
      maxDropdownHeight={300}
      nothingFound="No matching currency"
      filter={(value, item) =>
        item.name?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.cc?.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
};

export default CurrencySelect;
