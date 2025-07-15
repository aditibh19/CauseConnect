import {
  Button,
  ButtonProps,
  CopyButton,
  Drawer,
  Flex,
  Modal,
  Paper,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCheck,
  IconCode,
  IconCopy,
  IconMail,
} from "@tabler/icons-react";
import { ICampaign } from "../types";
import { useMediaQuery } from "@mantine/hooks";

interface IProps {
  campaign?: ICampaign;
  iconSize: number;
  opened: boolean;
  onClose: () => void;
}

const ShareModal = ({ campaign, iconSize, opened, onClose }: IProps) => {
  const matchesMobile = useMediaQuery("(max-width: 768px)");
  const shareUrl = `https://causeconnect.in/${campaign?.id}`;

  const buttonProps: ButtonProps = {
    variant: "light",
    color: "secondary",
  };

  const shareButtons = (
    <Paper>
      <Flex wrap="wrap" gap="xs">
        <Button leftIcon={<IconBrandFacebook size={iconSize} />} {...buttonProps}>
          Facebook
        </Button>
        <Button leftIcon={<IconBrandTwitter size={iconSize} />} {...buttonProps}>
          Twitter
        </Button>
        <Button leftIcon={<IconBrandInstagram size={iconSize} />} {...buttonProps}>
          Instagram
        </Button>
        <Button leftIcon={<IconBrandLinkedin size={iconSize} />} {...buttonProps}>
          LinkedIn
        </Button>
        <Button leftIcon={<IconMail size={iconSize} />} {...buttonProps}>
          Email
        </Button>
        <Button leftIcon={<IconCode size={iconSize} />} {...buttonProps}>
          Embed
        </Button>
      </Flex>
    </Paper>
  );

  const copyLinkSection = (
    <Paper>
      <Flex align="flex-end" gap="sm">
        <TextInput
          label="Copy Link"
          value={shareUrl}
          disabled
          sx={{ flex: "1 1 auto" }}
        />
        <CopyButton value={shareUrl} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="right">
              <Button
                color={copied ? "green" : "gray"}
                leftIcon={copied ? <IconCheck size="1rem" /> : <IconCopy size="1rem" />}
                onClick={copy}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>
    </Paper>
  );

  return matchesMobile ? (
    <Drawer title="Help by sharing" position="bottom" opened={opened} onClose={onClose}>
      <Stack>
        <Text>
          Campaigns shared on social networks raise up to <strong>5× more</strong>.
        </Text>
        {shareButtons}
        {copyLinkSection}
      </Stack>
    </Drawer>
  ) : (
    <Modal title="Help by sharing" centered size="md" opened={opened} onClose={onClose}>
      <Stack>
        <Text>
          Campaigns shared on social networks raise up to <strong>5× more</strong>.
        </Text>
        {shareButtons}
        {copyLinkSection}
      </Stack>
    </Modal>
  );
};

export default ShareModal;
