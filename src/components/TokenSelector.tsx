import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

interface Token {
  symbol: string
  name: string
  logo: string
}

interface TokenSelectorProps {
  token: Token
  onSelect: (token: Token) => void
}

const tokens: Token[] = [
  { symbol: 'BTC', name: 'Bitcoin', logo: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'ETH', name: 'Ethereum', logo: 'https://images.unsplash.com/photo-1640161704729-cbe966a08853?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'BNB', name: 'BNB Chain', logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'AVAX', name: 'Avalanche', logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'ATOM', name: 'Cosmos', logo: 'https://images.unsplash.com/photo-1640161704729-cbe966a08853?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'DOGE', name: 'Dogecoin', logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'LTC', name: 'Litecoin', logo: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=32&h=32&fit=crop&crop=center' },
  { symbol: 'BCH', name: 'Bitcoin Cash', logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=32&h=32&fit=crop&crop=center' },
]

const TokenSelector: React.FC<TokenSelectorProps> = ({ token, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTokens = tokens.filter(t => 
    t.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelect = (selectedToken: Token) => {
    onSelect(selectedToken)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all"
      >
        <img src={token.logo} alt={token.symbol} className="w-6 h-6 rounded-full" />
        <span className="font-medium text-white">{token.symbol}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-xl border border-white/20 shadow-2xl z-20 max-h-96 overflow-hidden">
            {/* Search */}
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tokens..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Token List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredTokens.map((t) => (
                <button
                  key={t.symbol}
                  onClick={() => handleSelect(t)}
                  className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors text-left"
                >
                  <img src={t.logo} alt={t.symbol} className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="font-medium text-white">{t.symbol}</div>
                    <div className="text-sm text-gray-400">{t.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TokenSelector
