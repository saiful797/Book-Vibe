//For Read Books with local storage
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
    if(exists){
        return exists;
    }
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
}

//For Wish List Books with local storage
const getStoredWishListBooks = () =>{
    const storedWishListBook = localStorage.getItem('wish-books');
    if(storedWishListBook){
        return JSON.parse(storedWishListBook);
    }
    return [];
}

const saveWishListBooks = (id) => {
    const storedWishListBooks = getStoredWishListBooks();
    const exists = storedWishListBooks.find(bookId => bookId === id);
    if(exists){
        return exists;
    }
    if(!exists){
        storedWishListBooks.push(id);
        localStorage.setItem('wish-books', JSON.stringify(storedWishListBooks));
    }
}


export {getStoredReadBooksDetails,saveReadBooksDetails,getStoredWishListBooks,saveWishListBooks}