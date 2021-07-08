import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './utils/ColorModeSwitcher';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <LandingPage />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
