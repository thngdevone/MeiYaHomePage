import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"75vh"}
      backgroundImage={
        "url(https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center bottom"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-t, blackAlpha.700, transparent)"}
      >
        <Stack
          maxW={"2xl"}
          align={"flex-start"}
          spacing={6}
          alignItems="center"
        >
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          >
            Your flooring solution starts with us!
          </Text>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "0.9rem", md: "1xl" })}
          >
            Are you looking to install new flooring? Floorida is here for you!
            We offer a great variety of flooring rich in both design and
            quality.
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              textAlign="center"
              as="a"
              href="#categories"
            >
              View Product Categories
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
