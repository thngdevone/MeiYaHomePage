import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Maps from "./maps";

const Footer = () => {
  const logo =
    "https://thngstudios.youtrack.cloud/api/files/8-144?sign=MTY3MjI3MjAwMDAwMHwxLTN8OC0xNDR8akp5TmtVVWlYbEtmZ1Flb2IxUzVONzRfRm0yTURLZE4w%0D%0AY2V4TXZEc0ljRQ0K%0D%0A&updated=1671133303143";
  const storefront = "https://i.ibb.co/WFV9VR8/storefront.jpg";

  return (
    <Flex margin={{ base: "10%", lg: "5%" }}>
      <Box display="inline-block">
        <Image
          src={logo}
          alt="Logo"
          marginBottom={{ sm: "10px", md: "30px", lg: "50px" }}
        />
        <Box height="30%" width={{ base: "100%", lg: "300%" }}>
          <Image src={storefront} alt="storefront" />
        </Box>

        <Box
          marginTop={{ sm: "10px", md: "30px", lg: "50px" }}
          textAlign="left"
        >
          <Text fontWeight="bold">Contact us</Text>
          <Text>Phone: +1 (905)-415-3378</Text>
          <Text>400 Denison St,</Text>
          <Text>Markham, ON L3R 1B9</Text>
        </Box>
      </Box>
      <Box
        display="inline-block"
        width={{ base: "100%", sm: "80%", md: "70%", lg: "70%" }}
        height={{ sm: "260px", md: "300px", lg: "400px" }}
        marginLeft={{ base: "15px", sm: "50px", md: "100px", lg: "150px" }}
      >
        <Maps />
      </Box>
    </Flex>
  );
};

export default Footer;
