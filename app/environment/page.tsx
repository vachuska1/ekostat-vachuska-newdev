import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"

const environmentData = {
  title: "Environment",
  content: {
    text1:
      "Společnost EKOSTAT a.s. se zabývá využitím širokého okruhu odpadních materiálů. Největší pozornost věnujeme zpracování prašných anorganických odpadů, stavebních a demoličních odpadů a odpadních plastů.",
    text2:
      "Stavíme na moderních řešeních, která vedou v průmyslu výroby stavebních hmot a zpracování odpadů ke snižování nákladů a zároveň ke snižování spotřeby přírodních neobnovitelných zdrojů.",
    text3:
      "Opíráme se o vlastní, více jak 20leté zkušenosti v oblasti zpracování vybraných odpadů a jejich praktické využití. Naším cílem je přispívat k udržitelné výrobě stavebních hmot, a to nejenom efektivním využitím dostupných odpadních materiálů, spolupráci s výrobci stavebních hmot a municipalitami, ale také cílenou osvětou.",
  },
  images: [],
}

export default function EnvironmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductSection
        id="environment"
        title={environmentData.title}
        content={environmentData.content}
        images={environmentData.images}
      />

      <Footer />
    </div>
  )
}
