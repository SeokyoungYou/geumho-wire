import { ActionIcon, Popover, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

type PopoverInformationProps = {
  title: string;
  popoverText: string;
  width?: number;
};

const PopoverInformation: React.FC<PopoverInformationProps> = ({
  title,
  popoverText,
  width = 250,
}) => {
  return (
    <Popover width={width} position="bottom" withArrow shadow="sm">
      <Popover.Target>
        <span className="flex items-center">
          {title}
          <ActionIcon variant="transparent">
            <IconInfoCircle size="1rem" />
          </ActionIcon>
        </span>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">{popoverText}</Text>
      </Popover.Dropdown>
    </Popover>
  );
};
export default PopoverInformation;
