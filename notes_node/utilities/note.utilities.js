const fs = require('fs');

const fetchNotes = () => {
    try {
        // read the notes in the file
        let notesString = fs.readFileSync('notes.data.json');
        return JSON.parse(notesString);
    } catch (e) {
        // console.log(e);
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.data.json', JSON.stringify(notes));
};

const logNote = (note) => {
    console.log(`${note.title} \n ${note.body}`);
};

module.exports = {
    fetchNotes,
    saveNotes,
    logNote,
};