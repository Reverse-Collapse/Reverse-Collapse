import type { AppProps } from "next/app";
import { Noto_Sans_KR } from 'next/font/google';

import "@/styles/globals.css";

import ContentBody from "@/components/UI/ContentBody"

const notosans = Noto_Sans_KR({ subsets: ['latin'] });
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div className={notosans.className}>
            <ContentBody>
                <Component {...pageProps} />
            </ContentBody>
        </div>
    );
}

export default App