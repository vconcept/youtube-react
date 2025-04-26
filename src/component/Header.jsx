const Header = () => {
    return (
        // Header component with a logo, search bar, and menu icon
        // The header is styled using Tailwind CSS classes
        <header>
        <div>
            <nav className="flex justify-between items-center p-4 bg-white text-black">
                <div className="flex items-center space-x-2">
                    {/* Menu button */}
                    <a href="#"><img width="50" height="50" src="https://img.icons8.com/ios/50/menu--v1.png" alt="menu--v1"/></a>

                    {/* Logo*/}
                    <a href="#" className="flex items-center space-x-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube Logo" className="h-5" />
                        <span className="text-xl font-bold">YouTube</span>
                    </a>
                </div>
                
                <div className="flex items-center space-x-4">
                    {/* Search bar */}
                    <div className="flex items-center w-full">
                        <input type="text" placeholder="Search" className="border border-gray-300 rounded-full py-2"/>
                        <button className="bg-gray-200 text-white w-10"><img src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" className="mx-auto"/></button>
                    </div>
                    <div>
                        <button className="bg-gray-200"><img width="30" height="30" src="https://img.icons8.com/material-sharp/48/microphone--v1.png" alt="microphone--v1" className=""/></button>
                    </div>
                </div>
                <div>
                    <button>MenuIcon</button>
                    <button>Sign In</button>
                </div>
            </nav>
        </div>
        </header>
    );
}


export default Header;