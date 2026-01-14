import {Navbar} from "@/components/Navbar";
import {Hero} from "@/components/Hero";
import {Philosophy} from "@/components/Philosophy";
import {TechnicalCapabilities} from "@/components/TechnicalCapabilities";
import {Certifications} from "@/components/Certifications";
import {LogoAnimation} from "@/components/LogoAnimation";
import {Experience} from "@/components/Experience";
import {Footer} from "@/components/Footer";
import {Contact} from "@/components/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Philosophy />
            <Experience />
            <TechnicalCapabilities />
            <Certifications />
            <LogoAnimation />
            <Contact />
            <Footer />
        </>
    );
}
