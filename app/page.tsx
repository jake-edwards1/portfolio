import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import {Stack} from "@/components/Stack";
import {LogoAnimation} from "@/components/LogoAnimation";
import {Portfolio} from "@/components/Portfolio";
import {Footer} from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stack />
            <LogoAnimation/>
            <Portfolio />
            <Footer />
        </>
    );
}
