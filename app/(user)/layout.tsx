import Header from "components/Header"
import Banner from "components/Banner"
import "../../src/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className='max-w-7xl mx-auto'>
                <Header />
                {children}
            </body>
        </html>
    )
}
