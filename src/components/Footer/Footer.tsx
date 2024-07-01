import { Box, Text, Link, Icon, Stack } from '@chakra-ui/react';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: React.VFC = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={4}
      color="gray.300"
      textAlign="center"
    >
      <Text fontSize="sm" mb={2}>
        &copy; {new Date().getFullYear()}Demo OCR Functionality. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
