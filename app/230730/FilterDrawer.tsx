import { Drawer, MultiSelect } from "@mantine/core";

type FilterDrawerProps = {
  burgerOpened: boolean;
  burgerClose: () => void;
  setFilteredNames: (e: string[]) => void;
  names: string[];
  label: string;
  filteredNames: string[];
};

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  burgerOpened,
  burgerClose,
  setFilteredNames,
  names,
  label,
  filteredNames,
}) => {
  return (
    <Drawer
      opened={burgerOpened}
      onClose={burgerClose}
      title="Filter"
      size="xs"
      position="right"
      transitionProps={{ transition: "slide-left" }}
    >
      <MultiSelect
        onChange={(e) => setFilteredNames(e)}
        data={names}
        label={label}
        placeholder="Select Names"
        defaultValue={filteredNames}
        size="md"
      />
    </Drawer>
  );
};
export default FilterDrawer;
