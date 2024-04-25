import { Card as ChakraCard } from "@chakra-ui/react";

const Card = ({ children }) => {
  return (
    <ChakraCard
      bg={{
        base: "transparent",
        md: "white",
      }}
      p={{
        base: "0",
        md: "6",
      }}
      w="456px"
      borderRadius={{
        base: "none",
        md: "1rem",
      }}
      boxShadow={{
        base: "none",
        md: "lg",
      }}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;
