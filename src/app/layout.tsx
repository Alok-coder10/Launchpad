import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/components/providers';
export const metadata: Metadata = { title: 'LaunchPad — Product feedback, together', description: 'Collect feedback, prioritize ideas and share your product roadmap.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><AppProvider>{children}</AppProvider></body></html>; }
