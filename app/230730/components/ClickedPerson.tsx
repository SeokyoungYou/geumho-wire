import { Modal } from "@mantine/core";
import Image from "next/image";

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
      <div className="relative flex w-full items-center justify-center">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full"
          src={clickedPerson.leagueTable}
          alt="대진표이미지"
          priority
        />
      </div>
    </Modal>
  );
};
export default ClickedPerson;
