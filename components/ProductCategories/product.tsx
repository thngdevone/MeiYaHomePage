import {
  VStack,
  useBreakpointValue,
  Text,
  Flex,
  Stack, 
} from "@chakra-ui/react";
const Product = ({img, category}) =>{
  return(
    <Flex
      w={"100%"}
      h={"350px"}
      backgroundImage={img}
      backgroundSize={"cover"}
      backgroundPosition={"center bottom"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
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
            fontSize={useBreakpointValue({ base: "4xl", md: "4xl" })}
          >
            {category}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
export default Product;