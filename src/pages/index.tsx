import css from '@/styles/modules/article.module.css';

import Head from 'next/head';
import Image from 'next/image';

const Main = () => {
    return (
        <>
            <Head>
                <title>개요 - 역붕괴 한글 패치</title>
            </Head>
            <div className={css.articleDetail}>
                <div className={css.detailHeader}>
                    <div className={css.title}>역붕괴 한글화</div>
                    <div className={css.banner}>
                        <Image src='/images/ui/GLmDJhlbYAAPOI0.png' fill={true} alt='banner' />
                    </div>
                </div>
                <div className={css.detailBody}>
                    <p>역붕괴: 베이커리작전 한글화 유저패치는 발번역을 하고 빠진 XD를 퇴치하고자 제작되었습니다.</p>
                </div>
            </div>
        </>
    )
}

export default Main