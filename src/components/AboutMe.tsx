import { Image, Text, VStack } from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";

const AboutMe = () => {
  return (
    <VStack gap="5" alignItems="flex-start">
      <SectionHeader label="About Me 👦" />
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        width="md"
      />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea earum quod
        qui digniimos natus ipsa tempora sed, expedita perferendis
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea earum quod
        qui dignissimos natus ipsa tempora sed, expedita perferendis inventore
        magni perspiciatis aut ullam eaque deleniti quia a! Tempora eum officiis
        ex voluptates quidem. A ipsa maxime hic tempora dolor. inventore magni
        perspiciatis aut ullam eaque deleniti quia a! Tempora eum officiis ex
        voluptates quidem. A ipsa maxime hic tempora dolor.
      </Text>
    </VStack>
  );
};

export default AboutMe;
