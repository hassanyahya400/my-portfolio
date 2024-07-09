import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const SectionModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut rerum dolore quidem mollitia ullam, corporis magnam perferendis earum dicta consequatur ipsa dolorum ratione, repudiandae vero laudantium laboriosam aspernatur necessitatibus quia obcaecati, pariatur fugiat quam exercitationem! Velit, numquam. Animi similique quos nobis, autem ratione quis dolorum omnis odio dolor amet minima qui, sint at porro nesciunt error esse debitis inventore! Ipsa enim quaerat ipsam numquam, consequatur dolores, veritatis labore placeat, earum iste quod cumque deleniti facilis libero eum moit quidem, ab, hic iste a provident laborum. Ducimus quia neque ab minus, facilis rem maxime nulla tenetur sapiente autem facere incidunt. Corrupti, molestias provident iusto, repellendus debitis hic sed omnis ullam autem vel velit. Architecto nihil, ad dolores quas rem cum pariatur impedit fuga totam in nesciunt inventore omnis labore qui ipsa sint incidunt nobis? Debit ea veniam sunt esse quidem quo vel voluptas voluptates temporibus delectus eveniet saepe?

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SectionModal;
