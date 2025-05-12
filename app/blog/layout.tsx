import Link from 'next/link'

export default function BlogLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
            <nav>
                <Link href="/">EvanBuildsWorlds</Link>
                <Link href="blog">Home</Link>
            </nav>
            <main>{children}</main>
            <footer>
                <h1>Contact Zone</h1>
            </footer>
            </body>
        </html>  
    )
}