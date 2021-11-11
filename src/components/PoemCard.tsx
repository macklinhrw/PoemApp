import { VStack, Text, Box } from "native-base";
import React from "react";
import { GetAllPoemsQuery } from "../generated/graphql";

interface PoemCardProps {
  poem: {
    title: string;
    content: string;
  };
}

export const PoemCard: React.FC<PoemCardProps> = ({ poem }) => {
  return (
    <Box rounded="lg" bg="white" shadow={2} minW="90%">
      <VStack space={4} alignItems="center">
        <Text bold mt={4}>
          {poem.title}
        </Text>
        <Text mb={4}>{poem.content}</Text>
      </VStack>
    </Box>
  );
};
