import { Button } from "@mantine/core";
import { IconPhotoSearch } from "@tabler/icons-react";
import React from "react";

import { Person } from "../page";

type TableRowProps = {
  element: Person;
  filteredNames: string[];
  setClickedPerson: (e: Person) => void;
  open: () => void;
};

const TableRow: React.FC<TableRowProps> = ({
  element,
  filteredNames,
  setClickedPerson,
  open,
}) => {
  return (
    <React.Fragment>
      {filteredNames.includes(element.name) && (
        <tr>
          <td>{element.time}</td>
          <td>{element.name}</td>
          <td>{element.mat}</td>
          <td>
            <Button
              variant="light"
              leftIcon={<IconPhotoSearch size="1rem" />}
              size="xs"
              onClick={() => {
                setClickedPerson(element);
                open();
              }}
            >
              {element.division}
            </Button>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};
export default TableRow;
