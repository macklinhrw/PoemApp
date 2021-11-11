import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormikContext } from "formik";
import {
  Box,
  TextArea,
  Button,
  VStack,
  Text,
  Input,
  HStack,
  Switch,
} from "native-base";
import React, { useEffect, useState } from "react";

interface NewPoemFormProps {}

export const NewPoemForm: React.FC<NewPoemFormProps> = ({}) => {
  interface FormValues {
    title: string;
    content: string;
    hasTitle: boolean;
    isDraft: boolean;
  }

  const { values, handleSubmit, handleChange, setFieldValue } =
    useFormikContext<FormValues>();
  const [poemPlaceholder, setPoemPlaceholder] = useState(
    "Beautiful poetry goes here!"
  );
  const [poemTitlePlaceholder, setPoemTitlePlaceholder] =
    useState("Enter a name here");

  const storeTempPoem = async (value: any) => {
    try {
      await AsyncStorage.setItem("@storage_PoemDraft", value);
    } catch (e) {
      // alert android
    }
  };

  const retrieveTempPoem = async () => {
    try {
      const poem: any = await AsyncStorage.getItem("@storage_PoemDraft");
      handleChange("content")(poem);
    } catch (e) {
      // alert android
    }
  };

  useEffect(() => {
    fetch(
      "https://poetrydb.org/author,random/Emily%20Dickinson;1/lines,title.json"
    )
      .then((response) => response.json())
      .then((data) => {
        var lines = data[0]["lines"];
        var title = data[0]["title"];
        var poem = lines.join("\n");
        if (title != lines[0]) setPoemTitlePlaceholder(title);
        setPoemPlaceholder(poem);
      })
      .catch((e) => {
        /* do error handling, send to server */
      });
  }, []);

  useEffect(() => {
    if (values.content !== "") {
      storeTempPoem(values.content);
    }
  }, [values.content]);

  return (
    <Box>
      <VStack space={4} m={4}>
        <TextArea
          minH={96}
          maxH={96}
          placeholder={poemPlaceholder}
          value={values.content}
          onChangeText={handleChange("content")}
          textAlignVertical="top"
          bg="white"
        />
        <Text>What is the name of your poem?</Text>
        <Input
          isDisabled={!values.hasTitle}
          value={values.title}
          onChangeText={handleChange("title")}
          bg="white"
          placeholder={poemTitlePlaceholder}
        />
        <HStack space={4}>
          <Switch
            isChecked={values.hasTitle}
            onToggle={() => setFieldValue("hasTitle", !values.hasTitle)}
          />
          {values.hasTitle ? (
            <Text>I want to name my poem</Text>
          ) : (
            <Text>My poem has no name</Text>
          )}
        </HStack>
        <HStack space={4}>
          <Switch
            isChecked={values.isDraft}
            onToggle={() => setFieldValue("isDraft", !values.isDraft)}
          />
          {!values.isDraft ? <Text>Publish</Text> : <Text>Save as draft</Text>}
        </HStack>
        <Button.Group variant="solid" space={4}>
          {/**@ts-ignore */}
          <Button onPress={handleSubmit}>Save poem</Button>
          <Button bgColor="red.800" onPress={retrieveTempPoem}>
            Recover poem
          </Button>
        </Button.Group>
      </VStack>
    </Box>
  );
};
