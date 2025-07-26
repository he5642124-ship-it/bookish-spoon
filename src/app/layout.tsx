import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ToastProvider } from '@/components/hooks/use-toast';
import { inter, spaceGrotesk } from './fonts';
import { cn } from '@/components/lib/utils';

export const metadata: Metadata = {
  title: 'DigitalAccel | Ship your startup\'s digital foundation in 7 days',
  description: 'Stop wasting months on development. Get your MVP, mobile app, or website deployed and ready for customers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "font-body antialiased bg-background text-foreground",
        inter.variable,
        spaceGrotesk.variable
      )}>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  );
}
