import React from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      id: '1',
      type: 'swap',
      from: 'BTC',
      to: 'ETH',
      amount: '0.5',
      value: '$21,250',
      time: '2m ago',
      status: 'completed'
    },
    {
      id: '2',
      type: 'swap',
      from: 'ETH',
      to: 'AVAX',
      amount: '2.3',
      value: '$6,890',
      time: '5m ago',
      status: 'completed'
    },
    {
      id: '3',
      type: 'swap',
      from: 'BNB',
      to: 'BTC',
      amount: '45.2',
      value: '$12,340',
      time: '8m ago',
      status: 'pending'
    },
    {
      id: '4',
      type: 'swap',
      from: 'DOGE',
      to: 'ETH',
      amount: '15,000',
      value: '$1,890',
      time: '12m ago',
      status: 'completed'
    },
    {
      id: '5',
      type: 'swap',
      from: 'ATOM',
      to: 'BTC',
      amount: '234.5',
      value: '$3,456',
      time: '15m ago',
      status: 'completed'
    }
  ]

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Swaps</h3>
        <button className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  {tx.from} → {tx.to}
                </div>
                <div className="text-xs text-gray-400">
                  {tx.amount} {tx.from} • {tx.time}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-medium text-white">{tx.value}</div>
              <div className="flex items-center space-x-1">
                <div className={`w-2 h-2 rounded-full ${
                  tx.status === 'completed' ? 'bg-emerald-400' : 'bg-yellow-400'
                }`} />
                <span className={`text-xs capitalize ${
                  tx.status === 'completed' ? 'text-emerald-400' : 'text-yellow-400'
                }`}>
                  {tx.status}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            Load more transactions
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentTransactions
