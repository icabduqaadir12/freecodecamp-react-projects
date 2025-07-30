import './style.css';
export function MegaNavbar() {
    return (
        <>
            <nav className="navbar">
                <ul className='nav-list'>
                    <li className='nav-item'><a href='#'>Dashboard</a></li>
                    <li className='nav-item'><a href='#'>Widgets</a></li>
                    <li className='nav-item'>
                        <button aria-expanded='' className="dropdown-btn">Apps</button>
                        <ul aria-label='' className='submenu'>
                            <li><a href='#'>Calendar</a></li>
                            <li><a href='#'>Chat</a></li>
                            <li><a href='#'>Email</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}