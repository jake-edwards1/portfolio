import "./globals.css";
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fira-code',
});

export const metadata = {
    title: 'Jake Edwards - Service-First Technical Solutions Engineer',
    description: 'Service-First Technical Solutions Engineer specializing in full-stack systems—from hardware and networks to software and UI. Driven by human connection and technical excellence. CompTIA A+, Network Pro, Security Pro certified.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
