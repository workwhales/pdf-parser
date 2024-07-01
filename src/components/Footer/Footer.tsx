import { Box, Text, Link, Icon, Stack } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: React.VFC = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={6}
      px={{ base: 4, md: 8 }}
      backgroundColor="gray.800"
      color="gray.300"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 4, md: 8 }}
        align="center"
        justify="space-between"
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
        <Stack direction="row" spacing={6}>
          <Link href="https://www.linkedin.com/in/your-profile" isExternal aria-label="LinkedIn">
            <Icon as={AiFillLinkedin} boxSize="1.5rem" _hover={{ color: 'white' }} />
          </Link>
          <Link href="https://twitter.com/your-profile" isExternal aria-label="Twitter">
            <Icon as={AiFillTwitterCircle} boxSize="1.5rem" _hover={{ color: 'white' }} />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
