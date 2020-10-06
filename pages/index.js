import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Carousel from '../components/carousel'



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex items-center flex-col">
      <div className="banner-1 mb-24">
          <a href="/">
            <img src="/images/homepage/Banner1.png" />
          </a>
        </div>

        <div className="pancasila-bateeq flex mb-24 phone:flex-col">
         <div className="flex-1 text-center mx-6 phone">
            <img src="/images/homepage/icon1.png" className="mx-auto" />
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6">
            <img src="/images/homepage/icon2.png" className="mx-auto"/>
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6">
            <img src="/images/homepage/icon3.png" className="mx-auto"/>
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6">
            <img src="/images/homepage/icon4.png" className="mx-auto"/>
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
        </div>

        <div className="banner-2 mb-24">
          <a href="/">
            <img src="/images/homepage/Banner2.png" className="mx-auto"/>
          </a>
        </div>

        <div className="banner-3 mb-24">
          <a href="/">
            <img src="/images/homepage/Banner3.png" className="mx-auto"/>
          </a>
        </div>

      
          <Carousel >
          
          </Carousel>
       

        <div className="banner-4 flex mb-24 phone:flex-col">
        <div className="flex-1 mx-6">
            <img src="/images/homepage/Baneer4_1.png" className="mx-auto" />
            <div className="info-banner4 lg:max-w-500px mx-auto">
               <h1 className={utilStyles.Banner4Title}>
               Designer's Pick
               </h1>
               <p className="text-lg text-left mt-3">Best pieces curated by our designer</p>
               <div className="text-left text-xl mt-10">
               <a href="/" className="uppercase hover:underline text-2xl">view & shop the style</a>
               </div>
            </div>
          </div>
          <div className="flex-1 text-center mx-6">
            <img src="/images/homepage/Banner4_2.png" className="mx-auto" />
            <div className="info-banner4 lg:max-w-500px mx-auto">
               <h1 className={utilStyles.Banner4Title}>
               For Your Precious One
               </h1>
               <p className="text-lg text-left mt-3">Your precious one’s favorite My Little Ponny Collection </p>
               <div className="text-left text-xl mt-10">
               <a href="/" className="uppercase hover:underline text-2xl text-black">Discover Now</a>
               </div>
            </div>
          </div>
        </div>

        <div className="iframe-video w-full flex h-auto mb-24 items-center">
          <div className="flex-initial w-4/6">
          <iframe className="w-full h-500px" src="https://www.youtube.com/embed/pKENLTKIm-o">
          </iframe>
          </div>
          <div className="flex-initial  ml-12">
            <p className="text-lg text-left">Discover our latest collection</p>
            <h1 className={utilStyles.Banner4Title}>
            F/W 2020 KASADA
               </h1>
          <div className="text-left text-xl mt-10">
               <a href="/" className="uppercase hover:underline text-black text-2xl">VIEW THE COLLECTION</a>
               </div>     
          </div>

        </div>
    
        <div className="banner-6">
          <a href="/">
            <img src="/images/homepage/Banner6.png" />
          </a>
        </div>
        </div>
    </Layout>
  )
}

