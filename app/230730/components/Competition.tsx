import { Accordion, Avatar, Flex, Group, Space, Text } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  const [copied, setCopied] = useState(false);
  return (
    <Accordion chevronPosition="right" variant="contained">
      <Accordion.Item value="competition">
        <Accordion.Control>
          <Group noWrap>
            <Avatar
              className="z-0"
              src="/street_jiujitsu.webp"
              radius="xl"
              size="lg"
            />
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
          <Flex align="center" gap="sm">
            <Text size="sm">{data.address}</Text>
            <CopyToClipboard
              text={data.addressDetails}
              onCopy={() => setCopied(true)}
            >
              <button>
                <Text size="sm">{data.addressDetails}</Text>
                <Flex align="center" gap="xs">
                  <Text size="sm">({data.competitionLocation})</Text>
                  <Text size="sm" color={copied ? "teal" : "blue"}>
                    {copied ? "Copied" : "Copy"}
                  </Text>
                </Flex>
              </button>
            </CopyToClipboard>
          </Flex>
          <Space h="md" />
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
          <Space h="md" />
          <Flex align="center" gap="sm">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
              src="/230730/230730_timetable.png"
              alt="시간표"
              priority
            />
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
