import Button from "./Button"

const Navbar = () => {
  const menuItems = [
    { title: 'Inicio', href: '#' },
    { title: 'Sobre mi', href: '#' },
    { title: 'Servicios', href: '#' },
    { title: 'Proyectos', href: '#' },
    { title: 'Contacto', href: '#' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-[80px] backdrop-blur-sm ">
      <nav className="container m-auto flex items-center justify-between h-full">
        <a href="#" className="flex-1 text-2xl font-bold text-white">Portfolio</a>

        <ul className="flex gap-7 text-white text-lg">
          {menuItems.map(({ title, href }) => (
            <li key={title}>
              <a href={href} className="hover:text-blue-500 transition-all duration-300 ease">{title}</a>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex justify-end gap-4 text-white text-lg">
          <Button>Descargar CV</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
