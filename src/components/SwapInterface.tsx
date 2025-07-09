import React, { useState } from 'react'
import { ArrowUpDown, Settings, Info, Zap, Clock, Shield } from 'lucide-react'
import TokenSelector from './TokenSelector'

interface SwapInterfaceProps {
  isConnected: boolean
}

const SwapInterface: React.FC<SwapInterfaceProps> = ({ isConnected }) => {
  const [fromToken, setFromToken] = useState({
    symbol: 'BTC',
    name: 'Bitcoin',
    logo: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=32&h=32&fit=crop&crop=center'
  })
  
  const [toToken, setToToken] = useState({
    symbol: 'ETH',
    name: 'Ethereum',
    logo: 'https://images.unsplash.com/photo-1640161704729-cbe966a08853?w=32&h=32&fit=crop&crop=center'
  })

  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [slippage, setSlippage] = useState('0.5')

  const handleSwapTokens = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    // Simulate exchange rate calculation
    if (value) {
      const rate = fromToken.symbol === 'BTC' ? 15.2 : 0.066
      setToAmount((parseFloat(value) * rate).toFixed(6))
    } else {
      setToAmount('')
    }
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Cross-Chain Swap</h2>
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swap Form */}
      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 2.45 {fromToken.symbol}</span>
          </div>
          <div className="flex items-center space-x-4">
            <TokenSelector token={fromToken} onSelect={setFromToken} />
            <input
              type="text"
              placeholder="0.0"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              className="flex-1 bg-transparent text-right text-2xl font-semibold text-white placeholder-gray-500 outline-none"
            />
          </div>
          <div className="text-right text-sm text-gray-400 mt-2">
            ≈ ${fromAmount ? (parseFloat(fromAmount) * 42500).toLocaleString() : '0.00'}
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwapTokens}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all group"
          >
            <ArrowUpDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* To Token */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 12.89 {toToken.symbol}</span>
          </div>
          <div className="flex items-center space-x-4">
            <TokenSelector token={toToken} onSelect={setToToken} />
            <input
              type="text"
              placeholder="0.0"
              value={toAmount}
              readOnly
              className="flex-1 bg-transparent text-right text-2xl font-semibold text-white placeholder-gray-500 outline-none"
            />
          </div>
          <div className="text-right text-sm text-gray-400 mt-2">
            ≈ ${toAmount ? (parseFloat(toAmount) * 3000).toLocaleString() : '0.00'}
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      {fromAmount && (
        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Exchange Rate</span>
              <span className="text-white">1 {fromToken.symbol} = {fromToken.symbol === 'BTC' ? '15.2' : '0.066'} {toToken.symbol}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Network Fee</span>
              <span className="text-white">~$12.50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Price Impact</span>
              <span className="text-emerald-400">0.12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Slippage Tolerance</span>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={slippage}
                  onChange={(e) => setSlippage(e.target.value)}
                  className="w-12 px-2 py-1 bg-white/10 border border-white/20 rounded text-white text-xs text-center outline-none focus:border-emerald-500"
                />
                <span className="text-white">%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Estimated Time</span>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-white">~2-5 min</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Swap Button */}
      <div className="mt-6">
        {!isConnected ? (
          <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25">
            Connect Wallet to Swap
          </button>
        ) : !fromAmount ? (
          <button className="w-full py-4 bg-gray-600 text-gray-400 rounded-xl font-semibold cursor-not-allowed">
            Enter Amount
          </button>
        ) : (
          <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Swap {fromToken.symbol} for {toToken.symbol}</span>
          </button>
        )}
      </div>

      {/* Security Notice */}
      <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <div className="flex items-start space-x-2">
          <Shield className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-blue-300">
            <strong>Cross-chain security:</strong> This swap uses THORChain's decentralized protocol. 
            Your funds remain secure throughout the cross-chain process.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapInterface
