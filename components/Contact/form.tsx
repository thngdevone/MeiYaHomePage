import {
  Box,
  Input,
  Textarea,
  InputLeftElement,
  InputGroup,
  Heading,
  Button
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
const Form = () => {
  return (
    <Box backgroundColor="#ded9d1" padding="20px">
      <Box
        marginTop="5%"
        backgroundColor="white"
        marginBottom="5%"
        marginLeft={{ sm: "10%", md: "15%", lg: "28%" }}
        marginRight={{ sm: "10%", md: "15%", lg: "28%" }}
        padding={{ sm: "20px", md: "30px", lg: "40px" }}
      >
        <Heading>Contact us</Heading>
        <form>
          <Box margin="20px">
            <Box
              display={{ sm: "inline-block" }}
              margin="10px"
              width={{ sm: "80%", md: "35%", lg: "35%" }}
            >
              <Input placeholder="Name" size="sm" />
            </Box>

            <InputGroup
              size="sm"
              margin="10px"
              width={{ sm: "80%", md: "35%", lg: "35%" }}
              display={{ sm: "inline-block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Phone" />
            </InputGroup>

            <InputGroup
              size="sm"
              margin="10px"
              width={{ sm: "80%", md: "71%", lg: "73.5%" }}
              display={{ sm: "inline-block" }}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input type="email" placeholder="Email" />
            </InputGroup>

            <Box
              display={{ sm: "inline-block" }}
              margin="10px"
              width={{ sm: "80%", md: "71%", lg: "73.5%" }}
            >
              <Textarea placeholder="Enter message here" size="sm" />
            </Box>
          </Box>
          <Button type="submit" fontWeight="normal" marginBottom="20px">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Form;
