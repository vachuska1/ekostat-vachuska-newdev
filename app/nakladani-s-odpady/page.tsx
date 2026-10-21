import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"

export default function NakladaniSOdpadyPage() {
  const wasteManagementImages = ["/smart2.png", "/smart1.png", "/variabilni1.png", "/variabilni2.png"]

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Nakládání s odpady</h1>
            <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-balance">Variabilní modulární rampy pro sběrné dvory</h2>
              <p>
                Společnost EKOSTAT a.s. se v oblasti nakládání s odpady specializuje na variabilní modulární rampy
                pro sběrné dvory a specializované firmy zabývající se zpracováním odpadů. Naše konstrukční řešení
                vychází z vlastního užitného vzoru a usnadňuje a zrychluje třídění i manipulaci s odpady.
              </p>
              <p>
                Modulární provedení umožňuje přizpůsobit uspořádání ramp konkrétnímu prostoru a potřebám provozovatele.
                Pomáháme tak zjednodušit každodenní provoz sběrných dvorů a usnadnit občanům i firmám odevzdávání
                vytříděných odpadů.
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
