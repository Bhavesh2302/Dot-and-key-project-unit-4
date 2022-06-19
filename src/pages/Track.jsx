
import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useDisclosure,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TrackShipment = () => {
    const { onClose } = useDisclosure();
    const hanldeChange = (e) => {};
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("hi");
    };
    const navigate = useNavigate();
    const linkHandler = (path) => {
      navigate(path);
      onClose();
    };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        color={"#50504b"}
        marginTop={"55px"}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          maxW={"lg"}
          py={12}
          px={6}
          paddingTop={"5px"}
          marginTop={"-150px"}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Track Shipment</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            p={8}
          >
            <Stack spacing={4}>
              
              <FormControl >
                <FormLabel><Text>ENTER ORDER ID</Text></FormLabel>
                <Input
                 
                  name="orderID"
                  type="text"
                  value=""
                  onChange={hanldeChange}
                  borderRadius="none"
                />
              </FormControl>

              <FormControl >
                <FormLabel>ENTER EMAIL ID</FormLabel>
                <Input
                 
                  name="email"
                  type="text"
                  value=""
                  onChange={hanldeChange}
                  borderRadius="none"
                />
              </FormControl>

              <Stack spacing={10}>
                <Button
                  type="submit"
                  width={"200px"}
                  bg={"#50504b"}
                  color={"white"}
                  borderRadius={"none"}
                  onClick={() => linkHandler("/login")}
                  cursor="pointer"
                  _hover={{
                    bg: "#50504b",
                  }}
                >
                  Track
                </Button>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to="/" color={"blue.400"}>
                    Cancel
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  </div>
  )
}

export default TrackShipment