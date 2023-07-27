import { Accordion, Button } from "@mantine/core";

import ConfirmModal from "@/components/ConfirmModal";
import useModal from "@/hooks/useModal";

const TestAccordion: React.FC = () => {
  const { isShowing, open, close } = useModal();
  return (
    <div>
      <Accordion className="mt-40" variant="contained">
        <Accordion.Item value="test">
          <Accordion.Control>Tests</Accordion.Control>
          <Accordion.Panel>
            <Button onClick={open}>Open Modal</Button>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      {isShowing && (
        <ConfirmModal
          onOk={() => {
            console.log("ok");
            close();
          }}
          onCancel={() => {
            console.log("cancel");
            close();
          }}
        />
      )}
    </div>
  );
};
export default TestAccordion;
