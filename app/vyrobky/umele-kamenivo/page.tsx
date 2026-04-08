import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Lehké umělé kamenivo RUGEN",
  content: {
    nadpis1: "Cenově výhodné a ekologické řešení pro suché podlahy, zásypy a vyrovnávací vrstvy",
    text1: "",
    text2: "Inovativní materiál pro efektivní a udržitelné podlahové konstrukce, zásypy a vyrovnávací vrstvy",
    nadpis4: "Hlavní výhody lehkého umělého kameniva při realizaci suchých podlah",
    text4: "",
    nadpis5: "Nízká hmotnost",
    text5:
      "Lehké umělé kamenivo RUGEN se vyznačuje nízkou sypnou objemovou hmotností přibližně 650 kg/m³, což výrazně usnadňuje manipulaci a aplikaci. Nízká hmotnost přispívá ke snížení zatížení konstrukcí, urychluje realizaci suchých podlah a optimalizuje logistiku na stavbě.",
    nadpis6: "Cenová dostupnost",
    text6:
      "Použití lehkého umělého kameniva představuje ekonomicky efektivní variantu pro široké spektrum stavebních projektů, a to jak v novostavbách, tak při rekonstrukcích.",
    nadpis7: "Ekologický a ekonomický přínos",
    text7:
      "Materiál je navržen s důrazem na udržitelnost a efektivní využití zdrojů. Přispívá ke snižování environmentální zátěže a zároveň optimalizuje celkové náklady na realizaci stavebních konstrukcí.",
    nadpis8: "Technické parametry",
    text8:
      "sypná objemová hmotnost: cca 500 do 1.000 kg/m³\nvhodné pro: suché podlahy, zásypy, vyrovnávací vrstvy\ndobré tepelněizolační vlastnosti\nsnadná aplikace a zpracování\nPři výrobě kameniva lze získat různé frakce od 0 do 50 mm. Sypná objemová hmotnost se může podle parametrů vstupních surovin pohybovat od 500 do 1.000 kg/m³ s odporem při stlačování (pevností) od 0,5 do 10 MPa.",
    nadpis9: "Vývoj nového typu materiálu",
    text9:
      "Aktuálně probíhá vývoj dalšího nového druhu lehkého umělého kameniva s optimalizovanými vlastnostmi pro ještě širší využití ve stavebnictví.",
  },
  images: ["/kamenivo.png", "/kamenivo2.png"],
}

export default function UmeleKamenivoPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="umele-kamenivo"
        title={productData.title}
        content={productData.content}
        images={productData.images}
      />

      <Footer />
    </div>
  )
}
