import SectionHeader from "./SectionHeader";
import { Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { workExperience } from "../data/workExperience";
import { FiExternalLink } from "react-icons/fi";

const WorkExperience = () => {
  return (
    <VStack gap="5" alignItems="flex-start">
      <SectionHeader label="Work Experience" />
      {workExperience.map((experience) => (
        <Stack gap="3" key={experience.id}>
          <Link
            href="https://chakra-ui.com"
            color="teal.400"
            isExternal
            display="flex"
          >
            <Heading as="h3" size="lg" marginRight="1">
              {experience.label}
            </Heading>

            <FiExternalLink size="16" />
          </Link>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
          <Text>{experience.description}</Text>
          <Stack gap="2" mt="2">
            <Text fontWeight="800">Achievements</Text>
            {experience.achievements.split("/").map((achievement) => (
              <Text key={achievement}> - {achievement}</Text>
            ))}
          </Stack>
        </Stack>
      ))}
    </VStack>
  );
};

export default WorkExperience;
