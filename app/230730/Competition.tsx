import {
  Accordion,
  Avatar,
  CopyButton,
  Flex,
  Group,
  List,
  Popover,
  Text,
} from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";

type CompetitionProps = {
  data: {
    competitionTitle: string;
    competitionDate: string;
    competitionLocation: string;
    address: string;
    addressDetails: string;
    copiedAddress: string;
    link: string;
    linkDetails: string;
  };
};

export default function Competition({ data }: CompetitionProps) {
  return (
    <Accordion chevronPosition="right" variant="contained">
      <Accordion.Item value="competition">
        <Accordion.Control>
          <Group noWrap>
            <Avatar src="/street_jiujitsu.webp" radius="xl" size="lg" />
            <div>
              <Text size="sm" weight={600}>
                {data.competitionTitle}
              </Text>
              <Text size="sm" color="dimmed" weight={400}>
                {data.competitionDate}
              </Text>
              <Text size="sm" color="dimmed" weight={400}>
                {data.competitionLocation}
              </Text>
            </div>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <List spacing="sm">
            <List.Item>
              <Flex align="center" gap="sm">
                <Text size="sm">{data.address}</Text>

                <CopyButton value={data.addressDetails}>
                  {({ copied, copy }) => (
                    <button onClick={copy}>
                      <Text size="sm">{data.addressDetails}</Text>
                      <Flex align="center" gap="xs">
                        <Text size="sm">({data.competitionLocation})</Text>
                        <Text size="sm" color={copied ? "teal" : "blue"}>
                          {copied ? "Copied" : "Copy"}
                        </Text>
                      </Flex>
                    </button>
                  )}
                </CopyButton>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex align="center" gap="sm">
                <Text size="sm">{data.link}</Text>
                <Text
                  size="sm"
                  component="a"
                  href="https://www.street-jiujitsu.com/"
                  underline
                >
                  {data.linkDetails}
                </Text>
              </Flex>
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
