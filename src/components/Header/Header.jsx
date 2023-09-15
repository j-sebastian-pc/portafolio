
import Nav from '../Nav/Nav'


export const Header = () => {
return (
    <header className='container mx-auto flex justify-around items-center bg-gray-900 text-white py-4 ' >
    <h1 className='text-2xl font-semibold'>Portafolio</h1>
    <Nav />
    </header>
)
}

export default Header