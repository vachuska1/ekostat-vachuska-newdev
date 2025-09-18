import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Lehké umělé kamenivo EKOSTAB",
  content: {
    nadpis1: "Cenově výhodné a ekologické řešení pro suché podlahy zásypy a vyrovnávací vrstvy",
    text1: "",
    text2: "Inovativní materiál pro efektivní a udržitelné podlahy",
    nadpis4: "Hlavní výhody kameniva EKOSTAB při realizaci suchých podlah",
    text4: "",
    nadpis5: "Nízká hmotnost",
    text5:
      "Umělé kamenivo EKOSTAB je lehké, se sypnou objemovou hmotností od 490 kg/m3. Použití lehkého umělého kameniva EKOSTAB zjednodušuje jeho manipulaci, urychluje budování suchých podlah, snižuje náklady na jejich výstavbu a zvyšuje jejich kvalitu a užitné vlastnosti.",
    nadpis6: "Cenová dostupnost",
    text6:
      "Ekonomická výhodnost použití lehkého umělého kameniva EKOSTAB činí tento materiál cenově nejvýhodnějším pro široké spektrum stavebních projektů.",
    nadpis7: "Ekologický a ekonomický přínos",
    text7:
      "Lehké umělé kamenivo EKOSTAB je ekologicky šetrné řešení, které přispívá k udržitelnosti a jeho efektivita při použití ve stavebnictví snižuje náklady na výstavbu.",
  },
  images: ["/kamenivo3.jpg", "/kamenivo4.jpg"],
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
