console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const command = process.argv[2];
const argv = yargs.argv;

console.log(`Command: ${command}`);
// console.log(process.argv);
console.log(argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if ('remove' === command) {
    notes.removeNote(argv.title);
} else if ('read' === command) {
    notes.getNote(argv.title);
} else {
    console.log('No command recognized');
}
