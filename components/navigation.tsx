"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      title: "Výrobky",
      href: "/", // Updated to link to homepage instead of /vyrobky
      items: [
        { title: "Modulové ploty", href: "/vyrobky/modulove-ploty" },
        { title: "Umělé kamenivo", href: "/vyrobky/umele-kamenivo" },
      ],
    },
    {
      title: "Nakládání s odpady",
      href: "/nakladani-s-odpady", // Added direct link to main Nakládání s odpady page
      items: [
        { title: "Variabilní rampy", href: "https://www.smilesys.cz/variabilni-rampa/", external: true },
        { title: "Chytré kontejnery", href: "/nakladani-s-odpady/chytre-kontejnery" },
        { title: "Osvětové hlásiče", href: "/nakladani-s-odpady/osvetove-hlasice" },
        { title: "Mobilní kontejnery", href: "/nakladani-s-odpady/mobilni-kontejnery" },
      ],
    },
    { title: "Environment", href: "/environment" },
    { title: "Recyclesound", href: "https://www.recyclesound.info/", external: true },
    { title: "Protipožární příčky", href: "https://www.superpricky.cz/", external: true },
    { title: "Přírodní kámen", href: "https://www.krasnykamen.cz/", external: true },
  ]

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            EKOSTAT a.s.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-1 hover:text-primary-light transition-colors duration-200"
                >
                  <span>{item.title}</span>
                  {item.items && <ChevronDown className="w-4 h-4" />}
                </Link>
                {item.items && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white text-foreground rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="block px-4 py-2 hover:bg-accent transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary-light">
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                <Link
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between w-full py-2 hover:text-primary-light transition-colors duration-200"
                  onClick={() => {
                    if (!item.items) setIsOpen(false)
                    if (item.items) setActiveDropdown(activeDropdown === item.title ? null : item.title)
                  }}
                >
                  <span>{item.title}</span>
                  {item.items && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>
                {item.items && activeDropdown === item.title && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="block py-1 text-sm hover:text-primary-light transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
