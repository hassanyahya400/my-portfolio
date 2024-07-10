import {
  Image,
  VStack,
  Stack,
  Link,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <VStack gap="5" alignItems="flex-start">
      <SectionHeader label="Work Experience" />
      {projects.map((project) => (
        <Stack gap="3" key={project.id}>
          <Heading as="h3" size="lg" color="teal.400">
            {project.label}
          </Heading>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
          <HStack justifyContent="center" alignItems="center" gap="5">
            <Link
              href="https://chakra-ui.com"
              _hover={{ color: "teal.400" }}
              isExternal
            >
              <FaGithub size="24" />
            </Link>
            <Link
              href="https://chakra-ui.com"
              _hover={{ color: "teal.400" }}
              isExternal
            >
              <FaGlobe size="24" />
            </Link>
          </HStack>
          <Text>{project.description}</Text>
          <Text>
            <strong>Skills: </strong>
            {project.techSkills}
          </Text>
        </Stack>
      ))}
    </VStack>
  );
};

export default Projects;
