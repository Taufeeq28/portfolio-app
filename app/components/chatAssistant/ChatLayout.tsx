'use client';

import { Box } from '@chakra-ui/react';

interface ChatLayoutProps {
  children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <Box
      as="section"
      id="chat-assistant"
      py={20}
      bg="gray.50"
      minH="100vh"
      display="flex"
      alignItems="center"
    >
      {children}
    </Box>
  );
}