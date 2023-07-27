import { Button } from "@mantine/core";
import { IconPhotoSearch } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

import { Person } from "../page";

type TableRowProps = {
  element: Person;
  filteredNames: string[];
};

const TableRow: React.FC<TableRowProps> = ({ element, filteredNames }) => {
  const [pictureOpen, setPictureOpen] = React.useState(false);

  const buttonRef = React.useRef(null);

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setPictureOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      {filteredNames.includes(element.name) && (
        <React.Fragment>
          <tr>
            <td>{element.time}</td>
            <td>{element.name}</td>
            <td>{element.mat}</td>
            <td>
              <Button
                ref={buttonRef}
                variant="light"
                leftIcon={<IconPhotoSearch size="1rem" />}
                size="xs"
                onClick={() => setPictureOpen((prev) => !prev)}
              >
                {element.division}
              </Button>
            </td>
          </tr>
          {pictureOpen && (
            <div className="absolute z-10  w-11/12">
              <div className="flex w-full items-center justify-center">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-auto w-full"
                  src={element.leagueTable}
                  alt="대진표이미지"
                  priority
                />
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
export default TableRow;
