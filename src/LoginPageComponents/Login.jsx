import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  useDisclosure,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoLogoGoogle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../store/authAction";
import Styles from "./styles.login.module.css";

const Login = () => {
  const { onClose } = useDisclosure();
  const navigate = useNavigate();
  const linkHandler = (path) => {
    navigate(path);
    onClose();
  };
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  //const navigate = useNavigate();
  const Saved_data = JSON.parse(localStorage.getItem("userData"));
  //console.log(Saved_data.email)
  const [loginCreds, setLoginCreds] = useState({});

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(loginCreds.email);
    dispatch(loginAPI(loginCreds));
  };

  useEffect(() => {
    console.log(location);
  
    if (isAuth && Saved_data.email == loginCreds.email && Saved_data.password == loginCreds.password) 
    {
      return  navigate( "/", { replace: true });
    } 
  //  else if(isAuth || Saved_data.email !== loginCreds.email || Saved_data.password !== loginCreds.password)
    
  //   {
  //     console.log("false");
  //     document.getElementById("share").onclick=function show(event){
  //       event.preventDefault();
  //       document.getElementById("taskdiv2").style.visibility='visible';
  //    };
  //    }
  }, [isAuth, Saved_data, loginCreds, location, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex
          className={Styles.LoginFlex}
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          color={"#50504b"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} style={{textDecoration: "none"}}>Login</Heading>
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
                    <a href="https://www.facebook.com/login.php">
                      <Text style={{ color: "white",backgroundColor: "#4267B2" }}>
                        Continue with Facebook
                      </Text>
                    </a>
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
                    <a href="https://myaccount.google.com/">
                      <Text style={{ color: "white",backgroundColor: "#dd4b39"  }}>
                        Continue with Google
                      </Text>
                    </a>
                  </Center>
                </Button>
              </Center>
            </Stack>
            <Box rounded={"lg"} style={{ marginTop: "-15px" }} p={8}>
              <div className={Styles.error} id="taskdiv2" >
                <ul>Incorrect email or password.</ul>
              </div>

              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel fontSize={"small"} fontWeight={"bold"}>
                    EMAIL
                  </FormLabel>
                  <Input
                    data-cy="login-email"
                    name="email"
                    borderRadius="none"
                    type="email"
                    value={loginCreds.email}
                    onChange={hanldeChange}
                  />
                </FormControl>
                <FormControl id="password">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <FormLabel fontSize={"small"} fontWeight={"bold"}>
                      PASSWORD
                    </FormLabel>
                    <Link to="/forgetpassword" cursor="pointer">
                      Forgot?
                    </Link>
                  </div>
                  <Input
                    data-cy="login-password"
                    name="password"
                    borderRadius="none"
                    type="password"
                    value={loginCreds.password}
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
                    cursor="pointer"
                    id="share"
                    _hover={{ bg: "#50504b" }}
                  >
                    Sign in
                  </Button>
                  <Stack
                    style={{ textAlignLast: "left" }}
                    cursor="pointer"
                    onClick={() => linkHandler("/signup")}
                  >
                    <Text>Don't have an</Text>
                    <Text>account? Sign up here</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </div>
  );
};

export default Login;
