import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  TextArea,
  Text,
  Switch,
  HStack,
  Input,
} from "native-base";
import { ScrollView, TextInput, View, Button } from "react-native";
import { Form, Formik, useFormik, useFormikContext } from "formik";
import { useCreatePoemMutation } from "../generated/graphql";
import { NewPoemForm } from "../components/NewPoemForm";

interface NewPoemProps {}

export const NewPoem: React.FC<NewPoemProps> = ({}) => {
  const [createPoem] = useCreatePoemMutation();

  return (
    <Formik
      initialValues={{ title: "", content: "", hasTitle: true, isDraft: true }}
      onSubmit={(values) =>
        createPoem({
          variables: {
            createPoemContent: values.content,
            createPoemTitle: values.title,
            createPoemHasTitle: values.hasTitle,
            createPoemIsDraft: values.isDraft,
          },
        })
      }
    >
      {() => (
        <ScrollView>
          <NewPoemForm />
        </ScrollView>
      )}
    </Formik>
  );
};
