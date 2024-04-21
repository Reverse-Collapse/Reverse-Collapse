import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Docs } from '../../docs/index';

import Head from 'next/head';
import Image from 'next/image';

import css from '@/styles/modules/article.module.css';

interface Doc {
    slug: number;
    title: string;
    desc?: string;
    poster: string | null;
    data: string;
}

interface DocProps {
    doc?: Doc;
}

export const getServerSideProps: GetServerSideProps<DocProps> = async ({ params }: GetServerSidePropsContext) => {
    const slug = params?.slug;

    const doc = Docs.find(doc => doc.slug === Number(slug));

    if (!doc) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            doc,
        },
    };
};

const DocPage: React.FC<DocProps> = ({ doc }) => {
    if (!doc) {
        return <div>Document not found</div>;
    }
    

    return (
        <>
            <Head>
                <title>{doc.title} - 역붕괴 한글 패치</title>
            </Head>
            <div className={css.articleDetail}>
                <div className={css.detailHeader}>
                    <div className={css.title}>{doc.title}</div>
                    <div className={css.desc}>{doc.desc}</div>
                    {doc.poster && (
                        <div className={css.banner}>
                            <Image src={`/images/ui/${doc.poster}`} fill={true} alt='banner' />
                        </div>
                    )}
                </div>
                <div className={css.detailBody} dangerouslySetInnerHTML={{ __html: doc.data }}></div>
            </div>
        </>
    )
};

export default DocPage;
