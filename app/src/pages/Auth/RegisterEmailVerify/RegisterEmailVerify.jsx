import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Center minH="100vh">
      <Card>
        <VStack spacing={6} alignItems="center">
          <Icon as={MdEmail} boxSize="48px" color="p.purple" />
          <Text textStyle="h4" fontWeight="medium" color="p.black">
            Email Verification
          </Text>
          <Text textAlign="center" textStyle="p2" color="black.60">
            We have sent you an email verification to{" "}
            <Box as="b" color="p.black">
              jenny.wilson@gmail.com
            </Box>
            . If you didn’t receive it, click the button below.
          </Text>
          <Button w="full" variant="outline">
            Re-send Email
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default RegisterEmailVerify;
