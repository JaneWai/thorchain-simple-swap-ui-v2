import React, { useState } from 'react'
import Header from './components/Header'
import SwapInterface from './components/SwapInterface'
import PoolStats from './components/PoolStats'
import RecentTransactions from './components/RecentTransactions'

function App() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(156, 146, 172, 0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header isConnected={isConnected} setIsConnected={setIsConnected} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Swap Interface */}
              <div className="lg:col-span-2">
                <SwapInterface isConnected={isConnected} />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <PoolStats />
                <RecentTransactions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
