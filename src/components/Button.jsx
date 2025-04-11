const Button = ({ children }) => {
  return (
    <button className="py-2 px-4 rounded-full border-1 border-white/5 bg-white/5 hover:border-white hover:text-black hover:bg-white transition-all ease-in duration-300">
      {children}
    </button>
  )
}

export default Button
