import { Heading, ModalHeader } from "@chakra-ui/react";

interface Props {
  label?: string;
}
const SectionHeader = ({ label }: Props) => {
  return (
    <ModalHeader padding="0">
      <Heading
        as="h3"
        borderBottom="1px"
        paddingBottom="2"
        size="xl"
        marginBottom="2"
        textTransform="uppercase"
        color="teal.500"
      >
        {label ? label : "Section header"}
      </Heading>
    </ModalHeader>
  );
};

export default SectionHeader;
