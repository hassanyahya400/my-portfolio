import { Button, Stack } from "@chakra-ui/react";
import { sections } from "../data/sections";

interface Props {
  activeSection: string | null;
  onSelectSection: (tab: string) => void;
}
const SectionButtonGroup = ({ activeSection, onSelectSection }: Props) => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing="4"
    >
      {sections.map((section) => (
        <Button
          colorScheme={section.label == activeSection ? "teal" : "gray"}
          variant="solid"
          rounded="18"
          paddingBlock="6"
          onClick={() => onSelectSection(section.slug)}
        >
          {section.label}
        </Button>
      ))}
    </Stack>
  );
};

export default SectionButtonGroup;
