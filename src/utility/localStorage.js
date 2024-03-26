const getStoredReadBooksDetails = () => {
    const storedReadBook = localStorage.getItem('read-books');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBooksDetails = (id) => {
    const storedReadBooks = getStoredReadBooksDetails();
    const exists = storedReadBooks.find(bookId => bookId === id)
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

export {saveReadBooksDetails,getStoredReadBooksDetails}