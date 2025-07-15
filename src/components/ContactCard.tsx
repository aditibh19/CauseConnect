import { Button, Card, CardProps, Code, Stack, Text, TextInput, Textarea, Title } from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";

type IProps = Omit<CardProps, 'children'>;

const ContactCard = ({ ...cardProps }: IProps) => {
  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 20 ? 'Message must have at least 20 characters' : null),
    },
  });

  return (
    <Card withBorder radius="md" shadow="sm" {...cardProps}>
      <Card.Section p="md">
        <Title order={4}>Contact Us</Title>
        <Text size="sm" color="dimmed">We’d love to hear from you. Send us a message.</Text>
      </Card.Section>

      <Card.Section p="md">
        <form onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your full name"
              required
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              {...form.getInputProps('email')}
            />
            <Textarea
              label="Message"
              placeholder="Type your message here..."
              minRows={4}
              required
              {...form.getInputProps('message')}
            />
            <Button type="submit">Send Message</Button>
          </Stack>
        </form>
        {submittedValues && (
          <Code block mt="md">
            {submittedValues}
          </Code>
        )}
      </Card.Section>
    </Card>
  );
};

export default ContactCard;
