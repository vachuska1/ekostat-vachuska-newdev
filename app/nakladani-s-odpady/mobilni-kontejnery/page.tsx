import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Mobilní kontejnery",
  content: {
    text1:
      "Mobilní kontejnery poskytují maximální flexibilitu v odpadovém hospodářství obcí a měst. Řeší lokální ekonomiku, zaměstnávání obyvatel, odstraňují drahé svozy, dovolují pružně reagovat na zaplnění.",
    text2:
      "Mohou být využity pro směsný komunální odpad i všechny tříděné složky. Nabízí velký objem i komfort pro občany i obsluhu.",
    text3:
      'Veškeré podrobnosti najdete na: <a href="https://www.recyclesound.info/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-dark underline">Recyclesound.info</a>',
  },
  images: ["/Mobil1.jpg", "/Mobil2.jpg"],
}

export default function MobilniKontejneryPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="mobilni-kontejnery"
        title={productData.title}
        content={productData.content}
        images={productData.images}
      />

      <Footer />
    </div>
  )
}
