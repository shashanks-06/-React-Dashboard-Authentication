import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const RegisterEmailVerify = () => {
  const toast = useToast();
  const { email } = useParams();

  if (email === "") {
    return (
      <Center h="100vh">
        <Card>Invalid Email</Card>
      </Center>
    );
  }

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationMail,

    onSettled: (data) => {
      console.log(data);
    },

    onError: (error) => {
      toast({
        title: "Signup Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

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
          <VStack spacing={6} alignItems="center">
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" fontWeight="medium" color="p.black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent you an email verification to{" "}
              <Box as="b" color="p.black">
                {email}
              </Box>
              . If you didn’t receive it, click the button below.
            </Text>
            <Button
              w="full"
              variant="outline"
              isLoading={isLoading}
              onClick={() => {
                mutate({ email });
              }}
            >
              Re-send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
