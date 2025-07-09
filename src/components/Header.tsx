import React from 'react'
import { Zap, Menu, Settings, HelpCircle } from 'lucide-react'

interface HeaderProps {
  isConnected: boolean
  setIsConnected: (connected: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ isConnected, setIsConnected }) => {
  return (
    <header className="border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-emerald-400" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg"></div>
            </div>
            <span className="text-xl font-bold text-white">THORChain</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-emerald-400 transition-colors font-medium">
              Swap
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              Pools
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              Analytics
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors font-medium">
              Docs
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <HelpCircle className="w-5 h-5" />
            </button>
            
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">thor1x...k9m2</span>
                <button 
                  onClick={() => setIsConnected(false)}
                  className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors text-sm font-medium"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsConnected(true)}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all font-medium shadow-lg shadow-emerald-500/25"
              >
                Connect Wallet
              </button>
            )}

            <button className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
