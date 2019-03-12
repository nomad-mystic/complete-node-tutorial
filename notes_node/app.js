const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
const notesUtilities = require('./utilities/note.utilities');

const command = process.argv[2];
const argv = yargs.argv;

// console.log(`Command: ${command}`);
// console.log(process.argv);
// console.log(argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (_.isObject(note)) {
        console.log('A note was created:');
        notesUtilities.logNote(note);
    } else {
        console.log(note);
    }
} else if (command === 'list') {
    notes.getAll();
} else if ('remove' === command) {
    let message = notes.removeNote(argv.title);
    console.log(message);
} else if ('read' === command) {
    let fullNote = notes.getNote(argv.title);
    if (Array.isArray(fullNote)) {
        console.log('Here is the full note read: ');
        notesUtilities.logNote(fullNote[0]);
    } else {
        console.log(fullNote);
    }
} else {
    console.log('No command recognized');
}
