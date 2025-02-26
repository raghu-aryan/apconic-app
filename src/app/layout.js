import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { Roboto } from "next/font/google";
import { Box } from '@mui/material';
import { Container } from "@mui/material";
import theme from '@/theme';

import '../styles/globals.css';

import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: "Apconic",
  description: "Goodstrack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
              <Box sx={{ pt: 3 }}>
                <Navbar />
                <CssBaseline />
                {children}
                <Footer />
              </Box>
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}