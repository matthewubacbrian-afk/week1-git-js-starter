/**
 * Asynchronous Programming Demo
 * Examples of callbacks, promises, and async/await patterns
 */

// ============================================
// 1. CALLBACKS
// ============================================

/**
 * Simulates fetching user data with a callback
 * @param {number} userId - User ID to fetch
 * @param {function} callback - Callback function (error, data)
 */
function fetchUserCallback(userId, callback) {
  console.log(`Fetching user ${userId}...`);

  // Simulate network delay with setTimeout
  setTimeout(() => {
    // TODO: Complete this callback example
    // Hint: Call the callback with (null, userData) for success
    // or (error, null) for failure

    // Check if the userId is valid (greater than 0)
    if (userId > 0) {
      // Create a user object with the data
      const userData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      // Call callback with NO error (null) and the user data
      // Pattern: callback(error, data)
      callback(null, userData);
    } else {
      // If userId is invalid, call callback with an error message
      // Pattern: callback(error, null)
      callback('Invalid user ID', null);
    }
  }, 1000); // Wait 1000ms (1 second) to simulate network delay
}

/**
 * Demonstrates callback pattern
 */
function demonstrateCallbacks() {
  console.log('\n=== Callback Demo ===');
  
  // Call fetchUserCallback and provide a callback function
  fetchUserCallback(1, (error, data) => {
    // This function will be called after 1 second
    if (error) {
      // If there's an error, display it
      console.log('Error:', error);
    } else {
      // If successful, display the user data
      console.log('User data:', data);
    }
  });
}

// ============================================
// 2. PROMISES
// ============================================

/**
 * Simulates fetching user data with a Promise
 * @param {number} userId - User ID to fetch
 * @returns {Promise} Promise that resolves with user data
 */
function fetchUserPromise(userId) {
  console.log(`Fetching user ${userId}...`);

  // Return a new Promise - it represents a value that will be available in the future
  return new Promise((resolve, reject) => {
    // resolve = function to call when successful
    // reject = function to call when there's an error
    
    setTimeout(() => {
      // TODO: Complete this promise example
      // Hint: Use resolve(userData) for success
      // Use reject(error) for failure

      // Check if userId is valid
      if (userId > 0) {
        // Create user data object
        const userData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        };
        // Call resolve() to mark the promise as successful
        // Whatever we pass to resolve() will be received in .then()
        resolve(userData);
      } else {
        // Call reject() to mark the promise as failed
        // Whatever we pass to reject() will be received in .catch()
        reject('Invalid user ID');
      }
    }, 1000); // Wait 1 second to simulate network delay
  });
}

/**
 * Demonstrates promise pattern with .then() and .catch()
 */
function demonstratePromises() {
  console.log('\n=== Promise Demo ===');
  
  // Call fetchUserPromise which returns a Promise
  fetchUserPromise(2)
    .then((data) => {
      // This runs if the promise is resolved (successful)
      console.log('User data:', data);
    })
    .catch((error) => {
      // This runs if the promise is rejected (error)
      console.log('Error:', error);
    });
}

// ============================================
// 3. ASYNC/AWAIT
// ============================================

/**
 * Creates a delay using promises
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside a Promise
  
  // Return a Promise that waits for a specified time
  return new Promise((resolve) => {
    // Use setTimeout to wait, then call resolve
    setTimeout(() => {
      resolve(); // No data needed, just signal that time is up
    }, ms);
  });
}

/**
 * Fetches multiple users sequentially using async/await
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchMultipleUsers(userIds) {
  // TODO: Implement this using async/await
  // Hint: Use a loop and await fetchUserPromise for each ID
  // Use try/catch to handle errors
  // Return an array of all user data
  
  // Create an empty array to store all user data
  const users = [];
  
  // Loop through each user ID one by one
  for (const userId of userIds) {
    try {
      // Wait for fetchUserPromise to complete before continuing
      // 'await' pauses execution until the promise resolves
      const user = await fetchUserPromise(userId);
      
      // Add the user data to our array
      users.push(user);
    } catch (error) {
      // If fetching a user fails, log the error but continue with others
      console.log(`Failed to fetch user ${userId}:`, error);
    }
  }
  
  // Return the array of all successfully fetched users
  return users;
}

/**
 * Demonstrates async/await pattern
 */
async function demonstrateAsyncAwait() {
  console.log('\n=== Async/Await Demo ===');
  // TODO: Call fetchMultipleUsers with an array of user IDs
  // Use try/catch to handle any errors
  // Log the results
  
  try {
    // 'await' waits for fetchMultipleUsers to complete
    // This looks like synchronous code but it's actually asynchronous!
    const users = await fetchMultipleUsers([1, 2, 3]);
    console.log('All users:', users);
  } catch (error) {
    // If something goes wrong, catch and display the error
    console.log('Error:', error);
  }
}

// ============================================
// BONUS: Promise.all()
// ============================================

/**
 * Fetches multiple users in parallel using Promise.all()
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchUsersParallel(userIds) {
  // TODO: Implement this using Promise.all()
  // Hint: Map userIds to promises, then use Promise.all()
  // This is faster than sequential fetching!
  
  // Create an array of promises by mapping each userId to a fetch call
  // All these fetches start at the SAME TIME (parallel)
  const promises = userIds.map((id) => {
    return fetchUserPromise(id);
  });
  
  // Promise.all() waits for ALL promises to complete
  // If all succeed, we get an array of all results
  // If ANY fails, the whole thing fails (rejects)
  const users = await Promise.all(promises);
  
  // Return the array of user data
  return users;
}

// Export functions
export {
  fetchUserCallback,
  demonstrateCallbacks,
  fetchUserPromise,
  demonstratePromises,
  delay,
  fetchMultipleUsers,
  demonstrateAsyncAwait,
  fetchUsersParallel,
};