import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
    return (
        <main className={inter.className}>
            <h1 className="text-white text-4xl">Home Page</h1>
        </main>
    );
}
