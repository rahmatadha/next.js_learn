import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Carousel from '../components/carousel'



export default function Home() {
  const products =[
    {
       img: '../images/homepage/arrival1.png',
       icon: '../images/homepage/icon1.png',
       iconTitle: 'Original & Modern Motifs' 
    },
    {
        img: '../images/homepage/arrival2.png',
        icon: '../images/homepage/icon2.png',
       iconTitle: 'Fabric Innovation'  
     },
     {
        img: '../images/homepage/arrival3.png',
        icon: '../images/homepage/icon3.png',
       iconTitle: 'Sustainable'  
     },
     {
        img: '../images/homepage/arrival2.png',
        icon: '../images/homepage/icon4.png',
       iconTitle: 'High-quality Sourcing'  
     },
     {
        img: '../images/homepage/arrival1.png' 
     },
]
  return (
    <Layout >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex items-center flex-col">
      <div className="banner-1 mb-24">
          <a href="/">
            <img src="/images/homepage/Banner1.png" />
          </a>
        </div>

       
        {/* <Carousel>
       
          {products.map((x, i) => {
            return <div key={i} className="flex-1 text-center mb-6">
                <img src={x.icon} className="mx-auto"/>
                <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               {x.iconTitle}
               </h1>
            </div>
            </div>
           
        })}
       
          </Carousel> */}
        
       
       
       

        <div className="pancasila-bateeq lg:w-full flex mb-24 phone:flex-col">
         <div className="flex-1 text-center mx-6 phone:mb-6">
            <img src="/images/homepage/icon1.png" className="mx-auto" />
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6 phone:mb-6">
            <img src="/images/homepage/icon2.png" className="mx-auto"/>
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6 phone:mb-6">
            <img src="/images/homepage/icon3.png" className="mx-auto"/>
            <div className="info-pancasila text-center ">
               <h1 className={utilStyles.pancaTitle}>
               Original & Modern Motifs
               </h1>
            </div>
          </div>
          <div className="flex-1 justify-center mx-6 phone:mb-6">
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
          {products.map((x, i) => {
            return <div key={i} className="max-h-400px">
                <img src={x.img} className="mx-auto"/>
            </div>
        })}
          </Carousel>
       

        <div className="banner-4 flex mb-24 phone:flex-col">
        <div className="flex-1 mx-6 phone:mb-6">
            <img src="/images/homepage/Baneer4_1.png" className="mx-auto" />
            <div className="info-banner4 lg:max-w-500px mx-auto">
               <h1 className="font-normal text-left text-title mt-6 phone:mt-0">
               Designer's Pick
               </h1>
               <p className="text-lg text-left mt-3">Best pieces curated by our designer</p>
               <div className="text-left text-xl mt-10">
               <a href="/" className="uppercase underline text-2xl text-black">view & shop the style</a>
               </div>
            </div>
          </div>
          <div className="flex-1 text-center mx-6 phone:mb-6" >
            <img src="/images/homepage/Banner4_2.png" className="mx-auto" />
            <div className="info-banner4 lg:max-w-500px mx-auto">
               <h1 className="font-normal text-left text-title mt-6 phone:mt-0">
               For Your Precious One
               </h1>
               <p className="text-lg text-left mt-3">Your precious one’s favorite My Little Ponny Collection </p>
               <div className="text-left text-xl mt-10">
               <a href="/" className="uppercase underline text-2xl text-black">Discover Now</a>
               </div>
            </div>
          </div>
        </div>

        <div className="iframe-video w-full flex h-auto mb-24 items-center phone:flex-col tablet:px-4">
          <div className="flex-1 phone:pt-iframe pt-36% relative max-w-900px w-full overflow-hidden">
          <iframe className="w-full absolute h-full inset-0" src="https://www.youtube.com/embed/pKENLTKIm-o">
          </iframe>
          </div>
          <div className="flex-initial  ml-12 phone:ml-0 phone:text-center">
            <p className="text-lg md:text-left phone:mb-2">Discover our latest collection</p>
            <h1 className="md:text-left text-title mt-6 phone:mt-0 font-normal">
            F/W 2020 KASADA
               </h1>
          <div className="md:text-left text-xl mt-10 phone:mt-0">
               <a href="/" className="uppercase underline text-black text-2xl">VIEW THE COLLECTION</a>
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

