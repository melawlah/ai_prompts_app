import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promtopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
                <div className=" flex items-center justify-center">
                    <div className="text-gray-400 text-center pb-10">
                        Web design by{" "}
                        <a
                        href="https://madewithlux.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:underline"
                        >
                        MadeWithLux
                        </a>
                    </div>
                </div>
            </Provider>
        </body>
       
        
    </html>
  )
}

export default RootLayout