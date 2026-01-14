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
    metadataBase: new URL('https://www.jakeedwards.one'),
    title: 'Jake Edwards | Technical Solutions & Engineering',
    description: 'Technical Solutions & Engineering professional specializing in full-stack systems—from hardware and network infrastructure to software and UI. Field engineer background with CompTIA A+, TestOut Network Pro & Security Pro certifications, pursuing CWNA. Service-first approach combining technical expertise with human connection.',
    keywords: 'field engineer, network engineer, IT support, technical solutions engineer, infrastructure engineer, CompTIA A+, CWNA, wireless networking, network infrastructure, full-stack systems, IT certifications, hardware troubleshooting, service-first engineer',
    authors: [{ name: 'Jake Edwards' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: 'Jake Edwards Portfolio',
        title: 'Jake Edwards | Technical Solutions & Engineering',
        description: 'Technical Solutions & Engineering professional with expertise in full-stack systems, networking, and infrastructure. CompTIA A+ certified, pursuing CWNA.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    themeColor: '#2DD4BF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning style={{ overflowX: 'hidden' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
