/**
 * Week 1 - Main Entry Point
 * This file demonstrates how to import and use the utility functions
 * and the notes app you'll be building.
 */

// Import utility functions
import * as math from './utils/math.js';
import * as strings from './utils/strings.js';
import * as asyncDemo from './utils/asyncDemo.js';
import * as notesApp from './miniProject/notesApp.js';

console.log('=== Week 1: Git & JavaScript Starter ===\n');

// ============================================
// Part 1: Math Utilities Demo
// ============================================
console.log('--- Math Utilities ---');

// TODO: Uncomment and test these once you implement the math functions
console.log('5 + 3 =', math.add(5, 3));
console.log('10 - 4 =', math.subtract(10, 4));
console.log('6 * 7 =', math.multiply(6, 7));
console.log('20 / 4 =', math.divide(20, 4));
console.log('2^8 =', math.power(2, 8));


// ============================================
// Part 2: String Utilities Demo
// ============================================
console.log('--- String Utilities ---');

// TODO: Uncomment and test these once you implement the string functions
console.log('Capitalize "hello" =', strings.capitalize('hello'));
console.log('Reverse "javascript" =', strings.reverse('javascript'));
console.log('Is "racecar" a palindrome?', strings.isPalindrome('racecar'));
console.log('Word count in "Hello World" =', strings.wordCount('Hello World'));


// ============================================
// Part 3: Async Programming Demo
// ============================================
console.log('--- Async Programming ---');

// TODO: Uncomment and test the async demos once implemented
asyncDemo.demonstrateCallbacks();
asyncDemo.demonstratePromises();
asyncDemo.demonstrateAsyncAwait();


// ============================================
// Part 4: Notes App Demo
// ============================================
console.log('--- Notes App Mini Project ---');

// TODO: Uncomment these once you implement the notes app

const note1 = notesApp.addNote('Learn JavaScript', 'Complete all exercises in week 1');
const note2 = notesApp.addNote('Practice Git', 'Work through merge conflict scenarios');
console.log('All notes:', notesApp.getAllNotes());
console.log('Find note 1:', notesApp.getNoteById(1));
notesApp.updateNote(1, 'Learn JavaScript Basics', 'Focus on functions and arrays');
console.log('Updated notes:', notesApp.getAllNotes());
notesApp.deleteNote(2);
console.log('After deletion:', notesApp.getAllNotes());


// ============================================
// Your Experimentation Space
// ============================================
console.log('--- Your Code Here ---');
// TODO: Use this space to experiment and test your code
// For example:
// - Try different function inputs
// - Test edge cases
// - Combine multiple functions together
console.log('--- Trying Functions ---');
// Ex.1 Math.js
console.log('\n--- Math Example ---');
console.log('20 + 5 =', math.add(20, 5));
console.log('20 - 5 =', math.subtract(20, 5));
console.log('20 * 5 =', math.multiply(20, 5));
console.log('20 / 5 =', math.divide(20, 5));
console.log('2 ^ 5 =', math.power(2, 5));

// Ex.2 Strings.js
console.log('\n--- String Example ---');
console.log('Capitalize "hello" =', strings.capitalize('hello'));
console.log('Reverse "javascript" =', strings.reverse('javascript'));
console.log('Word count "hello world" =', strings.wordCount('hello world'));
console.log('Is "racecar" palindrome?', strings.isPalindrome('racecar'));

// Ex.3 Notes App
console.log('\n--- Notes App Example ---');
notesApp.addNote('My First Note', 'This is the content of my first note');
notesApp.addNote('Todo Task', 'Complete JavaScript exercises');
notesApp.addNote('Important', 'Study for exams');
console.log('Total notes:', notesApp.getNotesCount());

// Ex.4 Get note by ID
console.log('Get note 1:', notesApp.getNoteById(1));

// Ex.5 Search notes
console.log('\n--- Search Example ---');
console.log('Search "JavaScript":', notesApp.searchNotes('JavaScript'));

// Ex.6 Update note
console.log('\n--- Update Example ---');
notesApp.updateNote(1, 'Updated First Note', 'Updated content for the first note');
console.log('Updated note:', notesApp.getNoteById(1));

// Ex.7 Sort notes by date
console.log('\n--- Sorted Notes ---');
console.log('Notes by date (newest first):', notesApp.getNotesSortedByDate(false));

console.log('\n=== Keep coding! ===');
