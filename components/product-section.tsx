import ImageGallery from "./image-gallery"

interface ProductSectionProps {
  id: string
  title: string
  content: {
    nadpis1?: string
    text1?: string
    nadpis2?: string
    text2?: string
    nadpis3?: string
    text3?: string
    nadpis4?: string
    text4?: string
    nadpis5?: string
    text5?: string
    nadpis6?: string
    text6?: string
    nadpis7?: string
    text7?: string
  }
  images?: string[]
}

const ProductSection = ({ id, title, content, images }: ProductSectionProps) => {
  return (
    <>
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{title}</h1>
          </div>
        </div>
      </section>

      <section id={id} className="py-16 content-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {content.nadpis1 && <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.nadpis1}</h3>}
            {content.text1 && <p className="content-text mb-6">{content.text1}</p>}

            {content.nadpis2 && <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.nadpis2}</h3>}
            {content.text2 && <p className="content-text mb-6">{content.text2}</p>}

            {content.nadpis3 && <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.nadpis3}</h3>}
            {content.text3 && <div className="content-text mb-6" dangerouslySetInnerHTML={{ __html: content.text3 }} />}

            {content.nadpis4 && <h3 className="text-2xl font-semibold text-gray-800 mb-4">{content.nadpis4}</h3>}
            {content.text4 && <p className="content-text mb-6">{content.text4}</p>}

            {content.nadpis5 && <h4 className="text-xl font-semibold text-gray-800 mb-3">{content.nadpis5}</h4>}
            {content.text5 && <p className="content-text mb-6">{content.text5}</p>}

            {content.nadpis6 && <h4 className="text-xl font-semibold text-gray-800 mb-3">{content.nadpis6}</h4>}
            {content.text6 && <p className="content-text mb-6">{content.text6}</p>}

            {content.nadpis7 && <h4 className="text-xl font-semibold text-gray-800 mb-3">{content.nadpis7}</h4>}
            {content.text7 && <p className="content-text mb-6">{content.text7}</p>}
          </div>

          {images && images.length > 0 && <ImageGallery images={images} title={title} />}
        </div>
      </section>
    </>
  )
}

export default ProductSection
