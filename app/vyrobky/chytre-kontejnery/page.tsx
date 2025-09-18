import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const productData = {
  title: "Chytré kontejnery",
  content: {
    text1:
      "Nabízíme moderní řešení pro sběr a třídění odpadu v podobě chytrých kontejnerů. Tyto inteligentní systémy jsou vybaveny senzory pro monitorování naplněnosti a optimalizaci svozu odpadu.",
    text2:
      "Naše chytré kontejnery podporují efektivní třídění různých typů odpadu včetně skla, plastů a dalších materiálů. Systém umožňuje vzdálené monitorování a správu prostřednictvím mobilních aplikací.",
    text3:
      "Chytré kontejnery přispívají k udržitelnému nakládání s odpady, snižují náklady na svoz a zvyšují míru recyklace v obcích a městech.",
  },
  images: ["/smart1-new.png", "/smart2-new.png", "/sklo-new.webp", "/plast-new.webp"],
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Kontaktujte nás</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                Pro více informací o chytrých kontejnerech nás neváhejte kontaktovat:
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a
                  href="tel:+420602305209"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 text-lg font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +420 602 305 209
                </a>
                <a
                  href="mailto:vachuska@ekostat.cz"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 text-lg font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  vachuska@ekostat.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
