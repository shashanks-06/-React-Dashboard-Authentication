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
import { IoShieldCheckmark } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyEmailAddressSignup } from "../../../api/query/userQuery";
import { useEffect } from "react";

const RegisterSuccess = () => {
  const toast = useToast();
  const { token } = useParams();
  const navigate = useNavigate();

  const { isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,
  });

  useEffect(() => {
    if (isError) {
      toast({
        title: "Signup error",
        description: error.message,
        status: "error",
      });

      navigate("/signup");
    }
  }, [isError]);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container>
      <Center minH="100vh">
        {isSuccess && (
          <Card
            p={{
              base: "4",
              md: "10",
            }}
            showCard={true}
          >
            <VStack spacing={6} alignItems="center">
              <Icon as={IoShieldCheckmark} boxSize="48px" color="#059669" />
              <Text textStyle="h4" fontWeight="medium" color="p.black">
                Successfully Registration
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
