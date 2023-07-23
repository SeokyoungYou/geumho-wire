import {
  Accordion,
  ActionIcon,
  Avatar,
  Button,
  Center,
  CopyButton,
  Flex,
  Group,
  List,
  Popover,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";

export default function Competition() {
  return (
    <Accordion chevronPosition="right" variant="contained">
      <Accordion.Item value="competition">
        <Accordion.Control>
          <Group noWrap>
            <Avatar src="/street_jiujitsu.webp" radius="xl" size="lg" />
            <div>
              <Text weight={600}>스트릿 주짓수 서울 오픈</Text>
              <Text size="sm" color="dimmed" weight={400}>
                2023.07.30(일) 9:30 AM
              </Text>
              <Text size="sm" color="dimmed" weight={400}>
                SETEC 2전시장
              </Text>
            </div>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <List spacing="sm">
            <List.Item>
              <Flex align="center" gap="md">
                <Text size="sm">주소</Text>

                <CopyButton value="https://mantine.dev">
                  {({ copied, copy }) => (
                    <Popover
                      width={250}
                      position="bottom"
                      withArrow
                      shadow="sm"
                    >
                      <Popover.Target>
                        <button className={"flex  flex-col"} onClick={copy}>
                          <Text size="sm">
                            서울특별시 강남구 남부순환로 3104
                          </Text>
                          <Flex align="center" gap="xs">
                            <Text size="sm">SETEC 2전시장</Text>
                            <IconCopy size="1rem" color="skyblue" />
                          </Flex>
                        </button>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <Text size="sm">주소가 복사되었습니다.</Text>
                      </Popover.Dropdown>
                    </Popover>
                  )}
                </CopyButton>
              </Flex>
            </List.Item>
            <List.Item>
              <Flex align="center" gap="md">
                <Text size="sm">링크</Text>
                <Text
                  size="sm"
                  component="a"
                  href="https://www.street-jiujitsu.com/"
                  underline
                >
                  대회 상세 페이지로 이동하기
                </Text>
              </Flex>
            </List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
