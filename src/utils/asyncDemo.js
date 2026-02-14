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

    if (userId > 0) {
      const userData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      // Call callback with success data
      callback(null, userData);
    } else {
      // Call callback with error
      callback('Invalid user ID', null);
    }
  }, 1000);
}

/**
 * Demonstrates callback pattern
 */
function demonstrateCallbacks() {
  console.log('\n=== Callback Demo ===');
  fetchUserCallback(1, (error, data) => {
    if (error) {
      console.log('Error:', error);
    } else {
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

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Complete this promise example
      // Hint: Use resolve(userData) for success
      // Use reject(error) for failure

      if (userId > 0) {
        const userData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        };
        // Resolve with user data
        resolve(userData);
      } else {
        // Reject with error
        reject('Invalid user ID');
      }
    }, 1000);
  });
}
/**
 * Demonstrates promise pattern with .then() and .catch()
 */
function demonstratePromises() {
  console.log('\n=== Promise Demo ===');
  fetchUserPromise(2)
    .then((data) => {
      console.log('User data:', data);
    })
    .catch((error) => {
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
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
  const users = [];
  
  for (const userId of userIds) {
    const user = await fetchUserPromise(userId);
    users.push(user);
  }
  
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
    const users = await fetchMultipleUsers([1, 2, 3]);
    console.log('All users:', users);
  } catch (error) {
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
  const promises = userIds.map((id) => fetchUserPromise(id));
  const users = await Promise.all(promises);
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
