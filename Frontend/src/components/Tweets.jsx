{/* <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
<div class="animate-pulse flex space-x-4">
  <div class="rounded-full bg-slate-700 h-10 w-10"></div>
  <div class="flex-1 space-y-6 py-1">
    <div class="h-2 bg-slate-700 rounded"></div>
    <div class="space-y-3">
      <div class="grid grid-cols-3 gap-4">
        <div class="h-2 bg-slate-700 rounded col-span-2"></div>
        <div class="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div class="h-2 bg-slate-700 rounded"></div>
    </div>
  </div>
</div>
</div> */}

// TweetsPage.js

import React from 'react';

const TweetsPage = () => {
  // Dummy tweet data (you can fetch this from an API or use state)
  const tweets = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just had a great day at the beach! 🏖️ #Sunshine',
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Working on a new React project. Loving it! 💻 #coding',
    },
    // Add more tweets here...
  ];

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Tweets</h1>
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="bg-white p-4 rounded shadow-md"
          >
            <p className="text-gray-700">{tweet.content}</p>
            <p className="text-gray-500 text-sm mt-2">
              By {tweet.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetsPage;
 

