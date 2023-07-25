import { Image, Modal } from "@mantine/core";

import { Person } from "../page";

type ClickedPerson = {
  opened: boolean;
  clickedPerson: Person | undefined;
  close: () => void;
};

const ClickedPerson: React.FC<ClickedPerson> = ({
  opened,
  clickedPerson,
  close,
}) => {
  if (!clickedPerson) return null;

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={`${clickedPerson.name}`}
      centered
    >
      <Image
        maw={330}
        mx="auto"
        radius="md"
        src={clickedPerson.leagueTable}
        alt="대진표이미지"
        withPlaceholder
      />
    </Modal>
  );
};
export default ClickedPerson;
