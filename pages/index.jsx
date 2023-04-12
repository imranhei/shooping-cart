import Head from 'next/head'
import Cards from '../Component/Cards'
import QuickView from '../Component/QuickView'
import { useState, createContext } from 'react'
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  
  return {
    props: {objectData}
  }
}

const Home = ({objectData}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [qData, setQData] = useState(null)
  
  const handleQuickView = (qData) => {
    setIsOpen(true)
    setQData(qData)
  }

  return (
    <>
      <Head>
        <title>Hei&apos;s Shop | Home</title>
      </Head>
      <div className="body">
        <h1 className='welcome'>WELCOME TO HEI&apos;S SHOPPING ZONE</h1>
        <Cards onQuickView={handleQuickView} data={objectData}/>
        <QuickView open={isOpen} data={qData} onClose={() => setIsOpen(false)}/>
        
        <style jsx>{`
          .body{
            margin: 4%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 1600px;
            margin: 0 auto 50px;
          }
          .welcome{
            font-size: 4vw;
            color: tomato;
            text-shadow: 0px 0px 5px rgba(0, 0, 0, .3);
            text-align: center;
          }
          @media (max-width: 500px) {
            .welcome{
              font-size: 1.2rem;
            }
          }
          `} 
        </style>
      </div>
    </>
  )
}

export default Home;
