import React from 'react'

function TweetCard({_id ,content ,owner}) {
  return (
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Sample Tweet */}
        <div className="flex border-b pb-4 mb-4">
          <img src="https://source.unsplash.com/random" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus dolor eu justo malesuada fermentum. Cras viverra velit et dui molestie, ac egestas lacus vulputate.</p>
          </div>
        </div>
        {/* Add more tweets here */}
      </div>
  )
}

export default TweetCard