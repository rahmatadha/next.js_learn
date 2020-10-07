import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'



export default function Layout({ children, cart}) {
  return (
    
    <div className="flex flex-col min-h-screen tracking-wide">
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>
      <Header />
    <div className="lg:container mx-auto phone:w-full tablet:w-full">
        {cart ? (
            <>
            <Head>
                <title>Cart</title>
            </Head>
            <div className="w-full my-24 phone:my-8 pl-100px phone:px-2 tablet:px-8">
                     <div className="title text-4xl text-left mb-6 w-full block">
                       <h1>My Bag</h1>
                   </div>
                   <div className="flex  phone:flex-col tablet:flex-col">
                       {children}
                    </div>
            </div>
            </>
      ):(
        <>
        <Head>
                <title>Checkout</title>
        </Head>
        <div className="w-full my-24 phone:my-8 pl-100px phone:px-2 tablet:px-8">
                <div className="flex">
                       {children}
                </div>
        </div>
        </>
      )}
    </div>
    <Footer />
    </div>
  )
}