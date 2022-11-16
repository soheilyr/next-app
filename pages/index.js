
import Head from 'next/head'
import utilStyles from "../components/Layout/utils.module.scss"
import Layout, { siteTitle } from '../components/Layout/Layout'
import { useEffect, useState } from 'react';
import Link from 'next/link'
export default function Home({ pageProps }) {
  const products = pageProps.res.products;


  //for client side rendering 
  // --------------------------------------------------
  // const [loading, setLoading] = useState(false)
  // const [csrProducts, setCsrProducts] = useState()
  // console.log("csrProducts:", csrProducts)
  // useEffect(() => {
  //   setLoading(true)
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(res => {
  //       setCsrProducts(res.products)
  //       setLoading(false)
  //     });
  // }, [])
  // --------------------------------------------------

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>SOHEIL YAZDANYAR</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Products</h2>
        <ul className={utilStyles.list}>

          {/* {!loading && csrProducts ? (

            csrProducts.map(({ price, description, title }, i) => (
              <li className={utilStyles.listItem} key={i}>
                <hr />
                {title}
                <br />
                {price} $
                <br />
                {description}
                <hr />
              </li>
            ))
          ) : (

            <p>loading ...</p>

          )} */}
          {products.map(({ price, description, title, id }, i) => (
            <li className={utilStyles.listItem} key={i}>
              <hr />
              {title}
              <br />
              {price} $
              <br />
              {description}
              <hr />
              <Link href={`blog/${id}`}>Read more</Link>
            </li>
          ))}

        </ul>
      </section>
    </Layout >
  )
}
// ssg rendering
// export async function getStaticProps() {
//   let req = await fetch('https://dummyjson.com/products')
//   let res = await req.json()
//   return {
//     props: {
//       res
//     }
//   }
// }
// ssr rendering 
export async function getServerSideProps() {
  let req = await fetch('https://dummyjson.com/products')
  let res = await req.json()
  return {
    props: {
      res
    }
  }
}
