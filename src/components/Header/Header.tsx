import Link from "next/link"

export const Header = () => {
    return <header>
        <div><Link href={"https://www.google.com"}>Google</Link></div>
        <div><Link href={"https://www.yahoo.co.jp"}>Yahoo</Link></div>
        <div><Link href={"https://www.nifty.com"}>nifty</Link></div>
    </header>
}