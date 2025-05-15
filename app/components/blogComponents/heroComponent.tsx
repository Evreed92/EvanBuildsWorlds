import Image from 'next/image'

export default function HeroComponent(){
    return(
        <div>
            <h2>Hero Container</h2>
            <Image src="/globe.svg" alt="picture here" width={100} height={100}></Image>
            <p>About</p>
        </div>
    )
}