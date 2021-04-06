import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Cotrim</Text>
          <Text color="gray.300" fontSize="small">
            igorxuxicotrim@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Cotrim"
        src="https://github.com/igor-cotrim.png"
      />
    </Flex>
  );
}
