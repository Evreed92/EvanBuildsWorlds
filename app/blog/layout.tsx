export default function BlogLayout({children}:{children:React.ReactNode}){
    return(
        <html>
            <body>
            <nav>
                <h1>Blog Navigation</h1>
            </nav>
                <main>{children}</main>
            </body>
            <footer>
                <h1>Contact Page</h1>
            </footer>
        </html>  
    )
}