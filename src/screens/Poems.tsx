import { gql, useQuery } from "@apollo/client";
import { Box, Center, ScrollView, Text, VStack } from "native-base";
import React, { useEffect } from "react";
import { PoemCard } from "../components/PoemCard";
import { useGetAllPoemsQuery } from "../generated/graphql";

interface PoemsProps {}

export const Poems: React.FC<PoemsProps> = ({}) => {
  const { loading, error, data } = useGetAllPoemsQuery();

  // useEffect(() => {
  //   if (!loading && data?.getAllPoems !== null) {
  //     data?.getAllPoems?.reverse();
  //   }
  // }, [loading]);

  return (
    <ScrollView>
      <Box m={4}>
        {/* <Center>{data?.getAllPoems[0]?.content}</Center> */}
        <Center>
          <VStack space={4}>
            {!loading &&
              data?.getAllPoems?.map((poem, i: any) => {
                return (
                  <Box key={i}>
                    <PoemCard poem={poem} />
                  </Box>
                );
              })}
          </VStack>
        </Center>
        <Center>{error?.message}</Center>
      </Box>
    </ScrollView>
  );
};
