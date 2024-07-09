import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import SectionTab from "./SectionButtonGroup";

const ProfileSummary = () => {
  return (
    <Box paddingInline="8">
      <VStack
        maxWidth="4xl"
        marginInline="auto"
        marginBlock="10"
        alignItems="flex-start"
        gap="5"
      >
        <Heading size="3xl">Hello there!</Heading>
        <Text>
          Lorem ipsum <strong> dolor sit </strong> amet consectetur adipisicing
          elit. Error numquam nihil ut placeat cum consequuntur omnis impedit
          odio, quis illum est temporibus repudiandae distinctio quae
          voluptatibus.
        </Text>
        <Text>
          Error numquam nihil ut placeat cum consequuntur omnis impedit odio,
          quis illum est temporibus. At voluptatibus ullam aliquam aliquid atque
          itaque repellat autem iusto odio? Voluptatem ex laborum, qui itaque ab
          nulla unde error!
        </Text>

        <Text>I'm a rocket 🚀</Text>
      </VStack>
    </Box>
  );
};

export default ProfileSummary;
