import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  return (
      <header className="glass-effect sticky top-0 z-50 border-b border-white/20 shadow-lg bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">


            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">L</div>
              <span className="text-xl font-bold text-slate-800">LibraryAI</span>
            </Link>


            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-slate-600 hover:text-indigo-600 font-medium">Home</Link>
              <Link to="/recommendations" className="text-slate-600 hover:text-indigo-600 font-medium">AI Recommendations</Link>


              {user?.role === 'admin' && (
                  <Link to="/admin" className="text-red-600 border border-red-200 bg-red-50 px-3 py-1 rounded-md font-bold text-sm hover:bg-red-100 transition">
                    Admin Panel 🔒
                  </Link>
              )}
            </nav>


            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && user ? (
                  <div className="flex items-center gap-4">
                    {/* Kullanıcı Bilgisi */}
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-semibold text-slate-700">{user.name}</span>


                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${
                          user.role === 'admin'
                              ? 'bg-red-100 text-red-700 border border-red-200'
                              : 'bg-green-100 text-green-700 border border-green-200'
                      }`}>
                    {user.role}
                  </span>
                    </div>

                    <button
                        onClick={() => logout()}
                        className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
              ) : (
                  <div className="space-x-2">
                    <Link to="/login" className="px-4 py-2 text-slate-600 hover:text-indigo-600 font-medium">Login</Link>
                    <Link to="/signup" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Sign Up</Link>
                  </div>
              )}
            </div>


            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              ☰
            </button>
          </div>


          {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-slate-100 space-y-2">
                <Link to="/" className="block px-4 py-2 text-slate-600">Home</Link>
                {user?.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-2 text-red-600 font-bold">Admin Panel</Link>
                )}
                {isAuthenticated ? (
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-red-500">Logout</button>
                ) : (
                    <Link to="/login" className="block px-4 py-2 text-indigo-600 font-bold">Login</Link>
                )}
              </div>
          )}
        </div>
      </header>
  );
}
