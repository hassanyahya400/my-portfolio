import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import { ReactElement } from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface Props {
  activeSection: string;
}
const SectionModal = ({ isOpen, onClose, activeSection }: Props) => {
  const sections: { [key: string]: ReactElement } = {
    about_me: <AboutMe />,
    work_experience: <WorkExperience />,
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      motionPreset="scale"
      colorScheme=""
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="3px" />
      <ModalContent
        width="2xl"
        paddingBlock="12"
        paddingInline={{ base: "0", md: "2", lg: "5" }}
      >
        <ModalCloseButton />
        <ModalBody>{sections[activeSection]}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SectionModal;
