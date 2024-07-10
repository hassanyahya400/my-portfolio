import { Heading, ModalHeader } from "@chakra-ui/react";

interface Props {
  label?: string;
}
const SectionHeader = ({ label }: Props) => {
  return (
    <ModalHeader padding="0">
      <Heading
        as="h2"
        borderBottom="1px"
        paddingBottom="2"
        size="lg"
        marginBottom="2"
        textTransform="uppercase"
      >
        {label ? label : "Section header"}
      </Heading>
    </ModalHeader>
  );
};

export default SectionHeader;
