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
      href: "/",
      items: [
        { title: "Umělé kamenivo EKOSTAB", href: "https://ekostabsystem.cz/", external: true },
        { title: "Dělicí příčky", href: "https://www.superpricky.cz/", external: true },
        { title: "Předsazené stěny", href: "https://www.superpricky.cz/", external: true },
        { title: "Suché podlahy", href: "/vyrobky/umele-kamenivo" },
        { title: "Ploché střechy", href: "/vyrobky/umele-kamenivo" },
      ],
    },
    { title: "Nakládání s odpady", href: "/nakladani-s-odpady" },
    { title: "Environment", href: "/environment" },
    {
      title: "Předsazené stěny",
      href: "https://www.recyclesound.info/",
      external: true,
      items: [
        { title: "Variabilní rampy", href: "https://www.smilesys.cz/variabilni-rampa/", external: true },
        { title: "Chytré hlásiče", href: "/nakladani-s-odpady/osvetove-hlasice" },
      ],
    },
    { title: "Dělicí příčky", href: "https://www.superpricky.cz/", external: true },
    { title: "Přírodní kámen", href: "https://www.krasnykamen.cz/", external: true },
  ]

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tight whitespace-nowrap">
            EKOSTAT a.s.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
                >
                  <span>{item.title}</span>
                  {item.items && <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180 motion-reduce:transition-none" />}
                </Link>
                {item.items && (
                  <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200 motion-reduce:transition-none">
                    <div className="rounded-xl border border-border bg-white p-1.5 text-foreground shadow-xl">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="block rounded-lg px-3 py-2.5 text-sm hover:bg-accent focus-visible:bg-accent focus-visible:outline-2 focus-visible:outline-primary transition-colors duration-200"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden rounded-lg p-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white transition-colors"
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-3 border-t border-white/15">
            {menuItems.map((item) => (
              <div key={item.title} className="mb-2">
                <Link
                  href={item.href || "#"}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between w-full rounded-lg px-3 py-2.5 font-medium hover:bg-white/10 transition-colors duration-200"
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
                  <div className="ml-5 mt-1 space-y-1 border-l border-white/20 pl-3">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="block rounded-lg px-3 py-2 text-sm hover:bg-white/10 transition-colors duration-200"
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
