import React from 'react'

function AuctionCard() {
  return (
    <>
      
  <div className="auction-card bg-white rounded-lg shadow-md overflow-hidden">
  <div className="image-container relative">
    <img src="path/to/your/image.jpg" alt="Auction Item Image" className="w-full h-48 object-cover" />
    <span className="status absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">Live</span>
  </div>
  <div className="details p-4">
    <h3 className="item-title text-lg font-semibold text-gray-800 mb-2">Vintage Leather Jacket</h3>
    <p className="description text-gray-600 text-sm mb-3">A beautifully aged leather jacket with unique character.</p>
    <div className="bid-info flex justify-between items-center mb-2">
      <span className="current-bid text-sm text-gray-700">Current Bid: <strong className="text-indigo-600">$150</strong></span>
      <span className="bid-count text-gray-500 text-xs">(5 Bids)</span>
    </div>
    <div className="time-left text-sm text-gray-500 mb-3">
      <span>Time Left:</span>
      <span className="time font-semibold text-orange-500">2 days 10 hours</span>
    </div>
    <button className="bid-button bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md w-full">Place Bid</button>
  </div>
</div>


    </>
  )
}

export default AuctionCard
