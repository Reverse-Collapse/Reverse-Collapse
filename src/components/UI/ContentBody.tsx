import UI from '@/styles/modules/UI.module.css';
import Link from 'next/link';

import React, { useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Docs } from '../../../docs/index';

interface Props {
    children: ReactNode;
}

const ContentBody: React.FC<Props> = ({ children }) => {
    const [isActiveBar, setActiveBar] = useState(true);
    const [isPathname, setIsPathname] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        setIsPathname(window.location.pathname.substring(1));
    }, []);

    const SideBarOpen = () => {
        setActiveBar(!isActiveBar);
    };

    const ChangePage = (path: string) => {
        setIsPathname(path);
    }

    return (
        <>
            <div className={`${UI.contentContainer}${isActiveBar ? ` ${UI.isOpened}` : ``}`}>
                <div className={UI.sideBar}>
                    <div className={UI.head}>
                        <Link href={`/`} className={UI.branding} onClick={() => ChangePage(`null`)}>
                            역붕괴: 베이커리작전<br />한글 패치
                        </Link>
                    </div>
                    <div className={UI.body}>
                        {Docs.filter(doc => doc.tab === 1).map((doc, index) => (
                            <div className={UI.navMenu} key={index}>
                                <div className={UI.navTitle}>시작하기</div>
                                <div className={UI.navLinks}>
                                    <Link className={`${UI.linkItem}${router.pathname === `/` ? ` ${UI.active}` : ``}`} onClick={() => ChangePage(`null`)} href={`/`}>     
                                        <div className={UI.title}>개요</div>
                                    </Link>
                                    <Link className={`${UI.linkItem}${`${doc.slug}` === isPathname ? ` ${UI.active}` : ``}`} onClick={() => ChangePage(`${doc.slug}`)} href={`/${doc.slug}`}>
                                        <div className={UI.title}>{doc.title}</div>
                                    </Link>
                                    <Link className={`${UI.linkItem}`} target='_blank' href={`https://drive.google.com/file/d/1H9qGsUee5JUW3JbrLLPhEW9LcrNqnOZn/view`}>     
                                        <div className={UI.title}>다운로드</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17L17 7M7 7h10v10" fill="transparent" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {Docs.filter(doc => doc.tab === 2).map((doc, index) => (
                            <div className={UI.navMenu} key={index}>
                                <div className={UI.navTitle}>지원</div>
                                <div className={UI.navLinks}>
                                    <Link className={`${UI.linkItem}${`${doc.slug}` === isPathname ? ` ${UI.active}` : ``}`} onClick={() => ChangePage(`${doc.slug}`)} href={`/${doc.slug}`}>
                                        <div className={UI.title}>{doc.title}</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        {Docs.filter(doc => doc.tab === 3).map((doc, index) => (
                            <div className={UI.navMenu} key={index}>
                                <div className={UI.navTitle}>최신 소식</div>
                                <div className={UI.navLinks}>
                                    <Link className={`${UI.linkItem}${`${doc.slug}` === isPathname ? ` ${UI.active}` : ``}`} onClick={() => ChangePage(`${doc.slug}`)} href={`/${doc.slug}`}>
                                        <div className={UI.title}>{doc.title}</div>
                                    </Link>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
                <div className={UI.main}>
                    <button onClick={SideBarOpen}>열기/닫기</button>
                    {children}
                </div>
            </div>
        </>
    );
};

export default ContentBody;
