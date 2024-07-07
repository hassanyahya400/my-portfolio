import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const ProfileSummary = () => {
  return (
    <Box>
      <VStack
        maxWidth="4xl"
        marginInline="auto"
        marginBlock="10"
        alignItems="flex-start"
        gap="5"
      >
        <Heading size="3xl">Hello there!</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam
          nihil ut placeat cum consequuntur omnis impedit odio, quis illum est
          temporibus repudiandae distinctio quae voluptatibus explicabo maiores
          consectetur sed! At voluptatibus ullam aliquam aliquid atque itaque
          repellat autem iusto odio? Voluptatem ex laborum, qui itaque ab nulla
          unde error!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam
          nihil ut placeat cum consequuntur omnis impedit odio, quis illum est
          temporibus repudiandae distinctio quae voluptatibus explicabo maiores
          consectetur sed! At voluptatibus ullam aliquam aliquid atque itaque
          repellat autem iusto odio? Voluptatem ex laborum, qui itaque ab nulla
          unde error!
        </Text>

        <Text>I'm a rocket 🚀</Text>
      </VStack>
    </Box>
  );
};

export default ProfileSummary;
