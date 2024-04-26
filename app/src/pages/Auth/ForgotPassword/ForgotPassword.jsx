import {
  Box,
  Center,
  Icon,
  VStack,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string, ref } from "yup";

const ForgotPassword = () => {
  const forgotValidationSchema = object({
    email: string().email("Email is Invalid").required("Email is required"),
  });
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <Link to="/signin">
            <Icon as={FaArrowLeftLong} boxSize="6" />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter Your Email..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Link to="/reset-password">
                    <Button variant="outline" w="full">
                      Reset Account
                    </Button>
                  </Link>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
