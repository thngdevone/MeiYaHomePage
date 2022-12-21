import { Image, Center } from "@chakra-ui/react";

const Nav = () => {
  const logo =
    "https://thngstudios.youtrack.cloud/api/files/8-144?sign=MTY3MjI3MjAwMDAwMHwxLTN8OC0xNDR8akp5TmtVVWlYbEtmZ1Flb2IxUzVONzRfRm0yTURLZE4w%0D%0AY2V4TXZEc0ljRQ0K%0D%0A&updated=1671133303143";
  return (
    <Center padding="10px">
      <Image src={logo} alt="Logo" />
    </Center>
  );
};

export default Nav;
