console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const command = process.argv[2];
const argv = yargs.argv;

// console.log(`Command: ${command}`);
// console.log(process.argv);
// console.log(argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);

    if (Array.isArray(note)) {
        console.log(`A note was created: \n ${note.title} \n ${note.body}`);
    } else {
        console.log(note);
    }
} else if (command === 'list') {
    notes.getAll();
} else if ('remove' === command) {
    let message = notes.removeNote(argv.title);
    console.log(message);
} else if ('read' === command) {
    notes.getNote(argv.title);
} else {
    console.log('No command recognized');
}
