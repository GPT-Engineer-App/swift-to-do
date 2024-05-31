import { Box, Flex, VStack, HStack, Text, Input, Button, Link, Image } from "@chakra-ui/react";

const Login = () => {
  return (
    <Box bg="#F3FFF3" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Flex direction={{ base: "column", md: "row" }} p="40px" w="full" maxW="1200px" justify="space-between">
        {/* Left Section */}
        <VStack p="40px" align="center" justify="center" spacing="20px" flex="1">
          <Image src="/path/to/illustration.png" alt="Illustration" boxSize="300px" />
          <Text fontSize="24px" fontWeight="bold" color="#333333" textAlign="center">
            Welcome Back!
          </Text>
          <Text fontSize="16px" color="#666666" textAlign="center">
            Please login to your account
          </Text>
        </VStack>

        {/* Right Section */}
        <Box w="400px" p="40px" bg="#FFFFFF" borderRadius="8px" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)">
          <VStack spacing="20px" align="stretch">
            <Box>
              <Text fontSize="16px" color="#333333" mb="5px">Username or email</Text>
              <Input type="text" placeholder="Enter your username or email" h="50px" p="10px" fontSize="16px" border="1px solid #CCCCCC" borderRadius="4px" />
            </Box>
            <Box>
              <Text fontSize="16px" color="#333333" mb="5px">Password</Text>
              <Input type="password" placeholder="Enter your password" h="50px" p="10px" fontSize="16px" border="1px solid #CCCCCC" borderRadius="4px" />
            </Box>
            <Button h="50px" bg="#333333" color="#FFFFFF" fontSize="16px" fontWeight="bold" borderRadius="4px" _hover={{ cursor: "pointer" }}>
              Sign In
            </Button>
            <Link fontSize="14px" color="#666666" textDecoration="none" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
              Forgot password?
            </Link>
            <Button h="50px" bg="#FFFFFF" border="1px solid #DDDDDD" fontSize="16px" fontWeight="bold" color="#333333" borderRadius="4px" _hover={{ cursor: "pointer" }}>
              Sign in with Google
            </Button>
            <Link fontSize="14px" color="#00AA00" textDecoration="none" _hover={{ textDecoration: "underline", cursor: "pointer" }} textAlign="center">
              Are you new? Create an Account
            </Link>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;