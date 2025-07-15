import { ICampaign } from "../types";
import { Avatar, Group, Text } from "@mantine/core";
import campaignsData from "../data/Campaigns.json";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const formatINR = (value: number) =>
  value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

const CampaignsTable = () => {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(
    campaignsData.data.slice(0, PAGE_SIZE)
  );

  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(campaignsData.data.slice(from, to));
  }, [page]);

  return (
    <DataTable
      columns={[
        {
          accessor: "createdBy",
          title: "Created By",
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
        { accessor: "title", title: "Campaign Title" },
        { accessor: "category", title: "Category" },
        {
          accessor: "amountRaised",
          title: "Amount Raised",
          render: ({ amountRaised }: ICampaign) => (
            <Text fw={500}>{formatINR(Number(amountRaised))}</Text>
          ),
        },
        {
          accessor: "goal",
          title: "Goal",
          render: ({ goal }: ICampaign) => (
            <Text color="dimmed">{formatINR(Number(goal))}</Text>
          ),
        },
        {
          accessor: "contributors",
          title: "Donors",
        },
        { accessor: "country", title: "Location" },
      ]}
      records={records}
      totalRecords={campaignsData.data.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      highlightOnHover
      verticalSpacing="sm"
    />
  );
};

export default CampaignsTable;
