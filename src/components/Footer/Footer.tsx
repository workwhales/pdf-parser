import { Box, Text, Link, Icon, Stack } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: React.VFC = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={4}
      color="gray.600"
      textAlign="center"
    >
      <Text fontSize="sm" mb={2}>
        &copy; {new Date().getFullYear()} OCR Demo. All rights reserved.
      </Text>
      <Stack direction="row" spacing={4} justify="center">
        <Link href="https://www.linkedin.com" isExternal aria-label="LinkedIn">
          <Icon as={AiFillLinkedin} boxSize="1.5rem" _hover={{ color: 'black' }} />
        </Link>
        <Link href="https://twitter.com" isExternal aria-label="Twitter">
          <Icon as={AiFillTwitterCircle} boxSize="1.5rem" _hover={{ color: 'black' }} />
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
