import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
//import Styles from "./styles.login.module.css";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Center } from "@chakra-ui/react";
import { signUp } from "../store/authAction";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  const linkHandler = (path) => {
    navigate(path);
    onClose();
  };
  const ref = useRef();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const hanldeChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hidc")
    console.log("form", form);
    localStorage.setItem("userData", JSON.stringify(form));
    const UserInfo = JSON.parse(localStorage.getItem("userData"));
    console.log("UserInfo", UserInfo);
    dispatch(signUp(UserInfo));
   navigate("/login")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          color={"#50504b"}
          bg={useColorModeValue("gray.50", "gray.800")}
          //   style={{ border: "1px solid red" }}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack
              align={"center"}
              // style={{ border: "1px solid red" }}
            >
              <Heading fontSize={"4xl"}>Create Account</Heading>

              <Center p={8} style={{ marginBottom: "-55px", width: "400px" }}>
                <Button
                  style={{
                    backgroundColor: "#4267B2",
                    borderRadius: "1px solid black",
                  }}
                  w={"full"}
                  maxW={"md"}
                  borderRadius={"none"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                >
                  <Center>
                    <Text style={{ color: "white" ,pointer:"curser"}}><a href="https://www.facebook.com/">Facebook Signup</a></Text>
                  </Center>
                </Button>
              </Center>

              <Center p={8} style={{ width: "400px" }}>
                <Button
                  style={{ backgroundColor: "#dd4b39" }}
                  w={"full"}
                  borderRadius={"none"}
                  maxW={"md"}
                  colorScheme={"facebook"}
                  leftIcon={<IoLogoGoogle />}
                >
                  <Center>
                    <Text style={{ color: "white" }}> <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">Google Signup</a></Text>
                  </Center>
                </Button>
              </Center>
            </Stack>
            <Box
              //   style={{ border: "1px solid red" }}
              rounded={"lg"}
              style={{ marginTop: "-15px" }}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="First_name">
                  <FormLabel fontSize={"small"} fontWeight={"bold"}>
                    FIRST NAME
                  </FormLabel>
                  <Input
                    name="FIRST_NAME"
                    ref={ref}
                    borderRadius="none"
                    type="text"
                    value={form.FIRST_NAME}
                    onChange={hanldeChange}
                  />
                </FormControl>
                <FormControl id="Last_name">
                  <FormLabel fontSize={"small"} fontWeight={"bold"}>
                    LAST NAME
                  </FormLabel>
                  <Input
                    name="LAST_NAME"
                    borderRadius="none"
                    type="text"
                    value={form.LAST_NAME}
                    onChange={hanldeChange}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel fontSize={"small"} fontWeight={"bold"}>
                    EMAIL
                  </FormLabel>
                  <Input
                    data-cy="login-email"
                    name="email"
                    borderRadius="none"
                    type="email"
                    value={form.EMAIL}
                    onChange={hanldeChange}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel fontSize={"small"} fontWeight={"bold"}>
                    PASSWORD
                  </FormLabel>
                  <Input
                    data-cy="login-password"
                    name="password"
                    borderRadius="none"
                    type="password"
                    value={form.PASSWORD}
                    onChange={hanldeChange}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    type="submit"
                    borderRadius={"none"}
                    bg={"#50504b"}
                    color={"white"}
                    //onClick={() => linkHandler("/login")}
                    cursor="pointer"
                    _hover={{ bg: "#50504b" }}
                  >
                    Create
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </div>
  );
};

export default SignUp;
