
import React from 'react'
function NAVBAR() {
  return (
    <>


<header className="fixed w-full z-50">
  <div className="container mx-auto px-6 py-4">
    <div className="flex justify-between items-center glass-card rounded-full px-6 py-3 shadow-sm">
      <div className="flex items-center space-x-2">
        <i className="fas fa-gavel text-indigo-500 text-2xl" />
        <a href="index.html" className="text-2xl font-bold text-s                               late-800">Auction<span className="gradient-text">Hub</span></a>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex space-x-8">
          <li><a href="index.html" className="nav-link font-medium text-slate-700 hover:text-indigo-600">Home</a></li>
          <li><a href="./src/pages/auction.html" className="nav-link font-medium text-slate-700 hover:text-indigo-600">Auctions</a></li>
          <li><a href="./src/pages/sell.html" className="nav-link font-medium text-slate-700 hover:text-indigo-600">Sell</a></li>
          <li><a href="./src/pages/dashboard.html" className="nav-link font-medium text-slate-700 hover:text-indigo-600">Dashboard</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="./src/pages/login.html" className="hidden md:inline-block text-slate-700 hover:text-indigo-600 font-medium">Login</a>
        <a href="./src/pages/register.html" className="bg-gradient-to-r from-indigo-500 to-emerald-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Join Free
        </a>
        <button id="mobile-menu-button" className="lg:hidden text-slate-700 focus:outline-none">
          <i className="fas fa-bars text-xl" />
        </button>
      </div>
    </div>
  </div>
</header>




      
    </>
  )
}

export default NAVBAR
