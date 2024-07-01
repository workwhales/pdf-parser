import { Box, Text, Link, Icon, Stack } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: React.VFC = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={4}
      backgroundColor="gray.800"
      color="gray.300"
      textAlign="center"
    >
      <Text fontSize="sm" mb={2}>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://www.linkedin.com/in/your-profile" isExternal aria-label="LinkedIn">
          <Icon as={AiFillLinkedin} boxSize="1.5rem" _hover={{ color: 'white' }} />
        </Link>
        <Link href="https://twitter.com/your-profile" isExternal aria-label="Twitter">
          <Icon as={AiFillTwitterCircle} boxSize="1.5rem" _hover={{ color: 'white' }} />
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
