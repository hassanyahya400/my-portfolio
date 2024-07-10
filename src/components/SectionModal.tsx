import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

import AboutMe from "./AboutMe";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SectionModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      motionPreset="scale"
      colorScheme=""
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
      <ModalContent width="2xl">
        <ModalCloseButton />
        <AboutMe />
      </ModalContent>
    </Modal>
  );
};

export default SectionModal;
