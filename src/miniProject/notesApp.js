/**
 * Notes App - Mini Project
 * A simple CRUD (Create, Read, Update, Delete) application for managing notes
 * This demonstrates practical JavaScript skills with arrays and objects
 */

// In-memory storage for notes (array of note objects)
let notes = [];
let nextId = 1; // Auto-incrementing ID for new notes

/**
 * Note Object Structure:
 * {
 *   id: number,
 *   title: string,
 *   content: string,
 *   createdAt: Date,
 *   updatedAt: Date
 * }
 */

// ============================================
// CREATE
// ============================================

/**
 * Adds a new note
 * @param {string} title - Note title
 * @param {string} content - Note content
 * @returns {object} The created note object
 */
function addNote(title, content) {
  // TODO: Implement addNote
  // Steps:
  // 1. Create a new note object with id, title, content, createdAt, updatedAt
  // 2. Use nextId for the id, then increment it
  // 3. Set both createdAt and updatedAt to current date (new Date())
  // 4. Push the note to the notes array
  // 5. Return the created note
  
  // Step 1 & 2: Create a new note object with current ID
  const newNote = {
    id: nextId,           // Assign the current nextId
    title: title,         // Set the title
    content: content,     // Set the content
    createdAt: new Date(), // Set creation timestamp
    updatedAt: new Date()  // Set update timestamp (same as creation for new notes)
  };
  
  // Step 2 continued: Increment nextId for the next note
  nextId++;
  
  // Step 4: Add the new note to our notes array
  notes.push(newNote);
  
  // Step 5: Return the newly created note
  return newNote;
}

// ============================================
// READ
// ============================================

/**
 * Gets all notes
 * @returns {Array} Array of all notes
 */
function getAllNotes() {
  // TODO: Implement getAllNotes
  // Hint: Return a copy of the notes array to prevent external modification
  // You can use the spread operator [...notes] or notes.slice()
  
  // Return a copy of the notes array using the spread operator
  // This prevents outside code from directly modifying our original notes array
  return [...notes];
}

/**
 * Gets a note by ID
 * @param {number} id - Note ID
 * @returns {object|null} The note object or null if not found
 */
function getNoteById(id) {
  // TODO: Implement getNoteById
  // Hint: Use the find() method to search the notes array
  // Return the found note or null
  
  // Use find() to search for a note with matching id
  // find() returns the first matching element, or undefined if not found
  const foundNote = notes.find(function(note) {
    return note.id === id; // Check if this note's id matches what we're looking for
  });
  
  // Return the found note, or null if undefined (not found)
  return foundNote || null;
}

/**
 * Searches notes by keyword in title or content
 * @param {string} keyword - Search keyword
 * @returns {Array} Array of matching notes
 */
function searchNotes(keyword) {
  // TODO: Implement searchNotes
  // Hint: Use filter() to find notes where title or content includes the keyword
  // Consider converting to lowercase for case-insensitive search
  // Return array of matching notes (empty array if none found)
  
  // Convert keyword to lowercase for case-insensitive searching
  const lowercaseKeyword = keyword.toLowerCase();
  
  // Use filter() to find all notes that match our search
  const matchingNotes = notes.filter(function(note) {
    // Convert note's title and content to lowercase for comparison
    const titleMatch = note.title.toLowerCase().includes(lowercaseKeyword);
    const contentMatch = note.content.toLowerCase().includes(lowercaseKeyword);
    
    // Return true if keyword is found in either title or content
    return titleMatch || contentMatch;
  });
  
  // Return the array of matching notes (will be empty array if no matches)
  return matchingNotes;
}

// ============================================
// UPDATE
// ============================================

/**
 * Updates an existing note
 * @param {number} id - Note ID to update
 * @param {string} newTitle - New title (optional)
 * @param {string} newContent - New content (optional)
 * @returns {object|null} The updated note or null if not found
 */
function updateNote(id, newTitle, newContent) {
  // TODO: Implement updateNote
  // Steps:
  // 1. Find the note by id
  // 2. If not found, return null
  // 3. Update title if newTitle is provided
  // 4. Update content if newContent is provided
  // 5. Update the updatedAt timestamp to current date
  // 6. Return the updated note
  
  // Step 1: Find the note we want to update
  const note = notes.find(function(note) {
    return note.id === id;
  });
  
  // Step 2: If note doesn't exist, return null
  if (!note) {
    return null;
  }
  
  // Step 3: Update title if a new title was provided
  if (newTitle !== undefined && newTitle !== null) {
    note.title = newTitle;
  }
  
  // Step 4: Update content if new content was provided
  if (newContent !== undefined && newContent !== null) {
    note.content = newContent;
  }
  
  // Step 5: Update the timestamp to show when this note was last modified
  note.updatedAt = new Date();
  
  // Step 6: Return the updated note
  return note;
}

// ============================================
// DELETE
// ============================================

/**
 * Deletes a note by ID
 * @param {number} id - Note ID to delete
 * @returns {boolean} True if deleted, false if not found
 */
function deleteNote(id) {
  // TODO: Implement deleteNote
  // Hint: Use findIndex() to locate the note, then splice() to remove it
  // Return true if deleted, false if note wasn't found
  
  // Find the position (index) of the note in the array
  const index = notes.findIndex(function(note) {
    return note.id === id;
  });
  
  // If note wasn't found, findIndex returns -1
  if (index === -1) {
    return false; // Note not found, deletion failed
  }
  
  // Remove the note from the array using splice
  // splice(index, 1) means: starting at 'index', remove 1 element
  notes.splice(index, 1);
  
  // Successfully deleted
  return true;
}

/**
 * Deletes all notes (use with caution!)
 * @returns {number} Number of notes deleted
 */
function deleteAllNotes() {
  // TODO: Implement deleteAllNotes
  // Steps:
  // 1. Store the current count of notes
  // 2. Clear the notes array
  // 3. Reset nextId to 1
  // 4. Return the count of deleted notes
  
  // Step 1: Remember how many notes we had before deleting
  const count = notes.length;
  
  // Step 2: Clear all notes by setting the array to empty
  notes = [];
  
  // Step 3: Reset the ID counter back to 1
  nextId = 1;
  
  // Step 4: Return how many notes were deleted
  return count;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Gets the total count of notes
 * @returns {number} Number of notes
 */
function getNotesCount() {
  // TODO: Implement getNotesCount
  // Hint: Return the length of the notes array
  
  // Simply return how many notes are in the array
  return notes.length;
}

/**
 * Gets notes sorted by creation date
 * @param {boolean} ascending - Sort order (true for oldest first, false for newest first)
 * @returns {Array} Sorted array of notes
 */
function getNotesSortedByDate(ascending = false) {
  // TODO: Implement getNotesSortedByDate
  // Hint: Create a copy of notes array, then use sort() with a compare function
  // Compare createdAt dates
  // Return the sorted array
  
  // Create a copy of the notes array so we don't modify the original
  const notesCopy = [...notes];
  
  // Sort the copy using a comparison function
  notesCopy.sort(function(noteA, noteB) {
    // Get the time in milliseconds for each note's creation date
    const dateA = noteA.createdAt.getTime();
    const dateB = noteB.createdAt.getTime();
    
    if (ascending) {
      // Ascending: older notes first (smaller dates first)
      return dateA - dateB;
    } else {
      // Descending: newer notes first (larger dates first)
      return dateB - dateA;
    }
  });
  
  // Return the sorted copy
  return notesCopy;
}

// Export all functions
export {
  addNote,
  getAllNotes,
  getNoteById,
  searchNotes,
  updateNote,
  deleteNote,
  deleteAllNotes,
  getNotesCount,
  getNotesSortedByDate,
};