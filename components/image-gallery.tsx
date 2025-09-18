interface ImageGalleryProps {
  images: string[]
  title: string
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} - obrázek ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
