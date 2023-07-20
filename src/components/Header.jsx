import { FaSatellite } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="bg-dark text-white d-flex align-items-center justify-content-center user-select-none p-3">
            <div className="container">
                <div className="d-flex  align-items-center justify-content-around">
                    <h1>ISS Tracker</h1>
                    <FaSatellite size='30px' />
                </div>
            </div>
        </header>
    )
}
export default Header