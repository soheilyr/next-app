import Link from "next/link";
import Head from "next/dist/shared/lib/head";
import Layout from "../../components/Layout/Layout";
const Blog = () => {
    return (
        <Layout>
            <Head>
                <title>
                    blog page index
                </title>
            </Head>
            <h1>
                Blog page !
            </h1>
            <Link href='/'>
                Back to Home
            </Link>
        </Layout>
    );
}

export default Blog;