import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Chytré kontejnery",
  content: {
    text1:
      "Představujeme inovativní řešení pro efektivní třídění odpadu v obcích a městech. Naše chytré kontejnery jsou vybaveny technologiemi pro sledování jejich naplnění, což umožňuje efektivní plánování svozu odpadu.",
    text2:
      "Systém zahrnuje senzory, které monitorují stav naplnění kontejnerů a tyto informace jsou dostupné v online rozhraní. To umožňuje optimalizovat trasování svozových vozů a snižovat náklady na odvoz odpadu.",
    text3:
      'Veškeré podrobnosti najdete na: <a href="https://www.recyclesound.info/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark underline">Recyclesound.info</a>',
  },
  images: ["/smart-waste-containers.jpg", "/iot-waste-management.jpg", "/digital-waste-monitoring.jpg"],
}

export default function ChytreKontejneryPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="chytre-kontejnery"
        title={productData.title}
        content={productData.content}
        images={productData.images}
      />

      <Footer />
    </div>
  )
}
