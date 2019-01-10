const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    let note = {
        title,
        body,
    };

    notes.push(note);
    fs.writeFileSync('notes.data.json', JSON.stringify(notes));


    // console.log(`${title}: \n ${body}`);
    // return `${title}: \n ${body}`;
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