import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"

const products = [
  { title: "Umělé kamenivo", label: "01 / Stavební materiály", image: "/kamenivo3.jpg", text: "Lehké umělé kamenivo RUGEN pro suché podlahy, zásypy a vyrovnávací vrstvy.", href: "/vyrobky/umele-kamenivo" },
  { title: "Modulové ploty", label: "02 / Stavební systémy", image: "/plot1.jpg", text: "Prohlédněte si naše modulové ploty a možnosti jejich využití.", href: "/vyrobky/modulove-ploty" },
  { title: "Variabilní rampy", label: "03 / Nakládání s odpady", image: "/variabilni1.png", text: "Modulární řešení pro sběrné dvory, které usnadňuje třídění i manipulaci s odpady.", href: "/nakladani-s-odpady" },
  { title: "Chytré kontejnery", label: "04 / Sběr odpadů", image: "/smart1.png", text: "Seznamte se s řešením chytrých kontejnerů pro nakládání s odpady.", href: "/nakladani-s-odpady/chytre-kontejnery" },
  { title: "Mobilní kontejnery", label: "05 / Mobilní řešení", image: "/Mobil1.jpg", text: "Prohlédněte si mobilní kontejnery a jejich využití při sběru odpadů.", href: "/nakladani-s-odpady/mobilni-kontejnery" },
  { title: "Osvětové hlásiče", label: "06 / Informace a osvěta", image: "/Hlasic1.png", text: "Technologie pro komunikaci a osvětu v oblasti nakládání s odpady.", href: "/nakladani-s-odpady/osvetove-hlasice" },
]
const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main id="obsah">
        <section className="home-hero">
          <img src="/kamenivo4.jpg" alt="Materiálové využití odpadů – kamenivo EKOSTAT" width={1600} height={1000} fetchPriority="high" />
          <div className={`${container} hero-inner`}>
            <p className="eyebrow">EKOSTAT a.s. / Materiály · Technologie · Využití odpadů</p>
            <h1>Dáváme materiálům<br /><span>novou hodnotu.</span></h1>
            <p>Proměňujeme odpadní materiály v příležitosti pro stavebnictví. S důrazem na účelné využití zdrojů a praktická řešení.</p>
            <div className="flex flex-wrap gap-4 mt-9">
              <a href="#vyrobky" className="action">Naše výrobky a technologie <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="#kontakt" className="action action-outline">Kontaktujte nás <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className={`${container} section-space intro-grid`}>
          <div><p className="eyebrow text-primary mb-5">O společnosti</p><h2 className="section-title">Technologie s přínosem.<br />Materiály s budoucností.</h2></div>
          <div className="intro-copy space-y-5">
            <p>Společnost EKOSTAT a.s. se zabývá využitím širokého okruhu odpadních materiálů. Největší pozornost věnujeme zpracování prašných anorganických odpadů, stavebních a demoličních odpadů a odpadních plastů.</p>
            <p>Stavíme na moderních řešeních, která vedou v průmyslu výroby stavebních hmot a zpracování odpadů ke snižování nákladů a zároveň ke snižování spotřeby přírodních neobnovitelných zdrojů.</p>
            <Link href="/environment" className="inline-flex items-center gap-4 text-primary font-semibold">Náš přístup <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </section>

        <section id="vyrobky" className="section-space bg-[#f3f5f0]">
          <div className={container}>
            <p className="eyebrow text-primary mb-5">Výrobky a technologie</p>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12"><h2 className="section-title">Řešení pro praxi.</h2><p className="text-muted-foreground max-w-sm leading-relaxed">Od stavebních materiálů po technologie pro efektivní nakládání s odpady.</p></div>
            <div className="products-grid">
              {products.map((product) => <article className="product-card" key={product.href}>
                <img src={product.image} alt={product.title} width={640} height={420} loading="lazy" decoding="async" />
                <div><span className="eyebrow text-primary">{product.label}</span><h3>{product.title}</h3><p>{product.text}</p><Link href={product.href}>Prohlédnout řešení <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className={`${container} section-space`}>
          <div className="material-panel">
            <img src="/kamenivo3.jpg" alt="Kamenivo jako výsledek materiálového využití odpadů" width={800} height={800} loading="lazy" />
            <div><p className="eyebrow text-[#b8dca9]">Materiálové využití odpadů</p><h2 className="section-title mt-6">Další život<br />pro cenné zdroje.</h2><p>Opíráme se o vlastní, více jak 20leté zkušenosti v oblasti zpracování vybraných odpadů a jejich praktické využití. Spolupracujeme s výrobci stavebních hmot a municipalitami s cílem přispívat k udržitelné výrobě.</p><Link href="/environment" className="action">Více o našem přístupu <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section className={`${container} pb-16 md:pb-24`}>
          <p className="eyebrow text-primary mb-5">Proč EKOSTAT</p><h2 className="section-title">Zkušenosti, které mají smysl.</h2>
          <div className="benefit-grid">
            <article><span>01 / ZKUŠENOSTI</span><h3>Více než 20 let praxe</h3><p>Vlastní zkušenosti se zpracováním vybraných odpadů a jejich praktickým využitím.</p></article>
            <article><span>02 / EFEKTIVITA</span><h3>Účelné využití materiálů</h3><p>Řešení zaměřená na snižování nákladů a spotřeby přírodních neobnovitelných zdrojů.</p></article>
            <article><span>03 / SPOLUPRÁCE</span><h3>Pro průmysl i municipality</h3><p>Spolupráce s výrobci stavebních hmot a municipalitami, podpořená cílenou osvětou.</p></article>
          </div>
        </section>

        <section className={`${container} pb-16 md:pb-24`} aria-label="Fotografie technologií">
          <p className="eyebrow text-primary mb-5">Materiály a realizace</p><h2 className="section-title">Technologie v detailu.</h2>
          <ImageGallery title="Technologie EKOSTAT" images={["/plot1.jpg", "/plot2.jpg", "/plot3.jpg", "/plot4.jpg", "/kamenivo3.jpg", "/kamenivo4.jpg"]} />
        </section>

        <section className={`${container} pb-16 md:pb-24`}>
          <div className="contact-panel"><div><p className="eyebrow text-primary mb-5">Pojďme spolupracovat</p><h2 className="section-title">Hledáte vhodné řešení?</h2><p className="mt-5 text-muted-foreground">Napište nám o svém projektu. Rádi s vámi probereme možnosti.</p></div><a className="action action-green shrink-0" href="mailto:vachuska@ekostat.cz?subject=Popt%C3%A1vka%20%E2%80%93%20EKOSTAT">Odeslat poptávku e-mailem <ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
