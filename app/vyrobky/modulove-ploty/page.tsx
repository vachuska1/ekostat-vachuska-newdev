import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Modulové ploty",
  content: {
    text1:
      "Nabízíme moderní řešení oplocení v podobě modulových plotů, které kombinují funkčnost s estetickým vzhledem. Naše modulové ploty se vyznačují rychlou a snadnou montáží, dlouhou životností a minimálními nároky na údržbu.",
    text2:
      "V nabídce máme různé typy výplní a barevných provedení, které umožňují přizpůsobit plot konkrétním požadavkům a stylu okolní architektury. K dispozici jsou také různé výšky a šířky panelů.",
    text3:
      "Naše modulové plotové systémy jsou vhodné pro rodinné domy, průmyslové areály, školní areály a další veřejné prostory. Zajišťují bezpečnost a soukromí, zároveň působí vzdušně a moderně.",
  },
  images: ["/MP4.jpg", "/MP3.jpg"],
}

export default function ModulovePlotyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="modulove-ploty"
        title={productData.title}
        content={productData.content}
        images={productData.images}
      />

      <Footer />
    </div>
  )
}
