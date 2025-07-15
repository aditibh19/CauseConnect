import { useEffect, useState } from "react";
import campaignsData from "../data/Campaigns.json";
import { DataTable } from "mantine-datatable";
import { ICampaign } from "../types";
import { Avatar, Group, Text } from "@mantine/core";

const PAGE_SIZE = 10;

// Simulated Indian donor names
const indianNames = [
  "Ananya Sharma", "Rahul Verma", "Priya Desai", "Arjun Mehta", "Sneha Kapoor",
  "Karan Malhotra", "Pooja Iyer", "Rohan Joshi", "Nikita Rao", "Aman Khurana",
  "Divya Bansal", "Rajeev Nair", "Meera Dubey", "Siddharth Jain", "Kavita Reddy",
  "Aditya Saxena", "Neha Bhatt", "Manish Sinha", "Swati Ghosh", "Tanmay Roy"
];

const DonatorsTable = () => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState<ICampaign[]>([]);

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    const pagedRecords = campaignsData.data.slice(from, to);

    // Replace donor names with Indian names for demo
    const updated = pagedRecords.map((record, index) => ({
      ...record,
      createdBy: indianNames[(from + index) % indianNames.length],
    }));

    setRecords(updated);
  }, [page]);

  return (
    <DataTable
      columns={[
        {
          accessor: "createdBy",
          title: "Donor",
          render: ({ createdBy, createdByImage }: ICampaign) => (
            <Group>
              <Avatar
                src={createdByImage}
                alt={`${createdBy} profile avatar`}
                size="sm"
                radius="xl"
              />
              <Text>{createdBy}</Text>
            </Group>
          ),
        },
        {
          accessor: "amountRaised",
          title: "Donated Amount",
          render: ({ amountRaised }: ICampaign) => (
            <Text fw={500}>
              {Number(amountRaised).toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </Text>
          ),
        },
        { accessor: "country" },
      ]}
      records={records}
      totalRecords={campaignsData.data.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={setPage}
      highlightOnHover
      verticalSpacing="sm"
      striped
    />
  );
};

export default DonatorsTable;
