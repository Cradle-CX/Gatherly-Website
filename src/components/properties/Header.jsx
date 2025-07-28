import logo from '../../assets/logos/gatherly-logo-with-text.png';



const Header = () => {
  return (
    <header className="bg-[#F1F4FC] px-6 py-4 flex justify-between mb-100 items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} className='w-36' />

      </div>

      <button className="btn btn-ghost bg-white text-[#3A4155] rounded-lg">Join as a partner</button>

    </header>
  )
}

export default Header
