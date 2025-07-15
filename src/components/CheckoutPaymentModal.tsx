import {
  Accordion,
  Button,
  Checkbox,
  Group,
  Modal,
  ModalProps,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Title
} from "@mantine/core";
import { CampaignCard } from "./index";
import campaignsData from "../data/Campaigns.json";
import {
  IconApple,
  IconBrandGoogle,
  IconBrandPaypal,
  IconBrandStripe,
  IconCreditCard
} from "@tabler/icons-react";

type IProps = Pick<ModalProps, "opened" | "onClose">;

const CheckoutPaymentModal = ({ ...others }: IProps) => {
  return (
    <Modal title="Complete Your Donation" size="lg" {...others}>
      <Stack spacing="md">
        {/* Campaign Preview */}
        <CampaignCard data={campaignsData.data[0]} />

        {/* Donation Form */}
        <Paper withBorder p="md" radius="md">
          <Stack spacing="sm">
            <Title order={4}>Donation Details</Title>
            <TextInput label="Donation Amount (₹)" placeholder="Enter amount in INR" />
            <Checkbox label="Hide your donation amount on CauseConnect" />
            <Textarea label="Leave a comment (optional)" placeholder="Your message..." autosize minRows={2} />
          </Stack>
        </Paper>

        {/* Payment Methods */}
        <Paper withBorder p="md" radius="md">
          <Stack spacing="sm">
            <Title order={4}>Select Payment Method</Title>

            <Accordion variant="separated" defaultValue="credit-card">
              {/* Credit Card */}
              <Accordion.Item value="credit-card">
                <Accordion.Control icon={<IconCreditCard size={rem(18)} />}>
                  Credit Card
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack spacing="xs" mt="sm">
                    <TextInput label="Card Number" placeholder="1234 5678 9012 3456" />
                    <TextInput label="Cardholder Name" placeholder="Aditi Bhalla" />
                    <SimpleGrid cols={2}>
                      <TextInput label="Expiry (MM/YY)" placeholder="08/29" />
                      <TextInput label="CVV" placeholder="123" />
                    </SimpleGrid>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>

              {/* Paypal */}
              <Accordion.Item value="paypal">
                <Accordion.Control icon={<IconBrandPaypal size={rem(18)} />}>
                  PayPal
                </Accordion.Control>
                <Accordion.Panel>
                  <TextInput label="PayPal Email" placeholder="you@example.com" />
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Group grow mt="md">
              <Button variant="light" leftIcon={<IconBrandGoogle size={rem(18)} />}>
                Google Pay
              </Button>
              <Button variant="light" leftIcon={<IconApple size={rem(18)} />}>
                Apple Pay
              </Button>
              <Button variant="light" leftIcon={<IconBrandStripe size={rem(18)} />}>
                Stripe
              </Button>
            </Group>
          </Stack>
        </Paper>

        {/* Save Info */}
        <Paper withBorder p="md" radius="md">
          <Checkbox label="Save my information for future donations" />
        </Paper>
      </Stack>
    </Modal>
  );
};

export default CheckoutPaymentModal;
