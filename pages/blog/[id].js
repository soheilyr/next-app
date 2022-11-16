import { getAllPostId, getPostData } from "../../libs/posts"
import Layout from "../../components/Layout/Layout";
import Head from "next/head";
export default function Post(pageProps) {
    let products = pageProps.pageProps.postData
    return <Layout>
        <Head>
            <title>
                {products.title}
            </title>
        </Head>
        <h1>{products.title}</h1>
        <p>{products.description}</p>
    </Layout>;
}

export async function getStaticPaths() {
    const paths = await getAllPostId()
    return {
        paths: paths
        ,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}