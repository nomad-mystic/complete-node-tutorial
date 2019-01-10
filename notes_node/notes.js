// const fs = require('fs');

const notesUtilities = require('./utilities/note.utilities');

const addNote = (title, body) => {
    let note = {
        title,
        body,
    };

    // read the notes in the file
    let notes = notesUtilities.fetchNotes();

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        notesUtilities.saveNotes(notes);
        return note;
    } else {
        return 'Duplicate note found';
    }
};

const getAll = () => {
    return 'All notes';
};

const removeNote = (title) => {
    let notes = notesUtilities.fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    notesUtilities.saveNotes(filteredNotes);

    return (notes.length === filteredNotes.length) ? 'No Note was removed.' : `Note with title: ${title} was removed.`;
};

const getNote = (title) => {
    console.log(`${title}`);
    return 'Read Note';
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote,
};