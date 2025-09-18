import { Phone, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Korespondenční adresa */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary-light pb-2">
              Korespondenční adresa, kancelář a laboratoř
            </h3>
            <div className="space-y-2 text-sm">
              <p>Mayerova 1067</p>
              <p>341 01 Horažďovice</p>
              <div className="flex items-center space-x-2 mt-4">
                <Phone className="w-4 h-4" />
                <span>+420 602 305 209</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>vachuska@ekostat.cz</span>
              </div>
            </div>
          </div>

          {/* Sídlo společnosti */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary-light pb-2">Sídlo společnosti</h3>
            <div className="space-y-2 text-sm">
              <p>Ekostat a.s.</p>
              <p>Mánesova 459/46</p>
              <p>370 01 České Budějovice</p>
              <p>Česká republika</p>
            </div>
          </div>

          {/* Výrobní závod */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b border-primary-light pb-2">Výrobní závod</h3>
            <div className="space-y-2 text-sm">
              <p>Dubská ulice, areál POLDI Kladno</p>
              <p>272 01 Kladno</p>
              <div className="flex items-center space-x-2 mt-4">
                <Phone className="w-4 h-4" />
                <span>+420 602 305 209</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>vachuska@ekostat.cz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm">
          <p>© 2025 EKOSTAT a.s. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
