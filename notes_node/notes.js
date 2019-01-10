const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body,
    };

    try {
        // read the notes in the file
        let notesString = fs.readFileSync('notes.data.json');
        notes = JSON.parse(notesString);
    } catch (e) {
        console.log(e);
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes.data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    return 'All notes';
};

const removeNote = (title) => {
    console.log(`${title}`);
    return 'note removed';
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