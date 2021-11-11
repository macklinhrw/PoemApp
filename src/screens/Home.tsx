import { Box, Button, Fab, Icon, ScrollView, Text } from "native-base";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/core";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Poems } from "./Poems";
import { Drafts } from "./Drafts";
import { fontStyle } from "styled-system";
import { gql, useQuery } from "@apollo/client";

interface HomeProps {
  navigation?: any;
}

const Tab = createBottomTabNavigator();

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (
    <Box pos="relative" w="100%" h="100%">
      <Tab.Navigator>
        <Tab.Screen
          name="Poems"
          component={Poems}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Drafts"
          component={Drafts}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="fountain-pen-tip"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <Fab
        mb={12}
        renderInPortal={false}
        icon={<Icon color="white" as={<AntDesign name="plus" />} />}
        onPress={() => navigation.navigate("New Poem")}
      />
    </Box>
  );
};
