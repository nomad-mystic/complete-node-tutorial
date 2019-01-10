const addNote = (title, body) => {
    console.log(`${title}: \n ${body}`);
    return `${title}: \n ${body}`;
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