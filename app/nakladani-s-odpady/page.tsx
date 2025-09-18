import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"

export default function NakladaniSOdpadyPage() {
  const wasteManagementImages = ["/smart2.png", "/smart1.png", "/variabilni1.png", "/variabilni2.png"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Nakládání s odpady</h1>
            <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                Navrhujeme přímé řešení sběru a likvidace odpadů a navrhujeme materiálové řešení uplatnění všech
                tříděných složek komunálního odpadů ve vztahu na budování lokální ekonomiky.
              </p>
              <p>
                Pro obce a města navrhujeme nejmodernější autonomní systémy nakládání s odpady. Nesoustředíme se pouze
                na analýzy produkce odpadů, navrhujeme spádově vhodné sběrné nádoby, sběrná místa i samotné sběrné
                dvory. Moderní způsob nakládání s odpady doplňujeme vzdělávacími a motivačními systémy tak, aby bylo
                nakládání s odpady efektivní, co nejméně nákladné a spravedlivé pro všechny, kdo se ho účastní.
              </p>
              <p>
                Naším cílem je motivovat občany a společnosti, aby mnohem více, a přitom přírozeným způsobem nakládali s
                odpadem, měli povědomí o jeho skutečných nákladech. Města a obce se snažíme motivovat k tomu, aby se
                snažily využívat svých možností a zájmu občanů a podnikatelských subjektů k podpoře snižování množství
                odpadů a jeho přímého zpracování, v rámci podpory lokální ekonomiky.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={wasteManagementImages} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
