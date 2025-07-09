import React from 'react'
import { TrendingUp, DollarSign, Users, Zap } from 'lucide-react'

const PoolStats: React.FC = () => {
  const stats = [
    {
      label: 'Total Value Locked',
      value: '$2.4B',
      change: '+12.5%',
      icon: DollarSign,
      positive: true
    },
    {
      label: '24h Volume',
      value: '$45.2M',
      change: '+8.3%',
      icon: TrendingUp,
      positive: true
    },
    {
      label: 'Active Pools',
      value: '156',
      change: '+3',
      icon: Zap,
      positive: true
    },
    {
      label: 'Unique Swappers',
      value: '12.4K',
      change: '+5.2%',
      icon: Users,
      positive: true
    }
  ]

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
      <h3 className="text-lg font-semibold text-white mb-4">Network Stats</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <stat.icon className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="font-semibold text-white">{stat.value}</div>
              </div>
            </div>
            <div className={`text-sm font-medium ${
              stat.positive ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Top Pools */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h4 className="text-sm font-medium text-gray-400 mb-3">Top Pools</h4>
        <div className="space-y-3">
          {[
            { pair: 'BTC/ETH', apy: '12.4%', tvl: '$234M' },
            { pair: 'ETH/USDC', apy: '8.7%', tvl: '$189M' },
            { pair: 'BNB/BTC', apy: '15.2%', tvl: '$156M' }
          ].map((pool, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-white font-medium">{pool.pair}</span>
              <div className="text-right">
                <div className="text-emerald-400">{pool.apy}</div>
                <div className="text-gray-400">{pool.tvl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PoolStats
