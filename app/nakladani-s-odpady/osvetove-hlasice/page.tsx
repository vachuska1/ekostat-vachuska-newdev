import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Osvětové hlásiče",
  content: {
    text1:
      "Moderní osvěta s umístěním designových hlásičů na veřejné prostranství, skrytě i do kontejnerů na tříděný odpad. Hlásiče jsou nástrojem pro operativní komunikaci informací, instrukcí a vzdělávání. Hlásiče je možné využívat v různých odvětvích, od veřejných prostor a institucí, školy, sportoviště, nemocnice až po průmyslové provozy s cílem vzdělávat, navigovat nebo instruovat.",
    text2:
      'Veškeré podrobnosti najdete na: <a href="https://www.recyclesound.info/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark underline">Recyclesound.info</a>',
  },
  images: ["/Hlasic1.png", "/Hlasic3.png"],
}

export default function OsvetoveHlasicePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="osvetove-hlasice"
        title={productData.title}
        content={productData.content}
        images={productData.images}
      />

      <Footer />
    </div>
  )
}
