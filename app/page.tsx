import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ImageGallery from "@/components/image-gallery"

export default function Home() {
  const technologieImages = ["/MP4.jpg", "/MP3.jpg", "/kamenivo3.jpg", "/kamenivo4.jpg"]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Technologie</h1>
            <div className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                Společnost EKOSTAT a.s. se zabývá využitím širokému okruhu odpadních materiálů. Největší pozornost
                věnujeme zpracování prašných anorganických odpadů, stavebních a demoličních odpadů a odpadních plastů.
              </p>
              <p>
                Stavíme na moderních řešeních, která vedou v průmyslu výroby stavebních hmot a zpracování odpadů ke
                snižování nákladů a zároveň ke snižování spotřeby přírodních neobnovitelných zdrojů.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 content-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageGallery images={technologieImages} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
