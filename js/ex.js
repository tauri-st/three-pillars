
class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}
	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks() {
		console.log(`Favorite Books: ${ String(this.favoriteBooks.length) } `);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}

//receive an instance of the `Bookshelf` class that will be passed to it
function loadBooks(theBookshelf) {
	/*
	call the provided `fakeAjax(..)`, using `BOOK_API` as the URL 
	and an inline function expression as the callback.
	*/
	/*
	The callback will be passed an array of book names (named as such). 
	Loop through this array, passing each book name to the `addFavoriteBook(..)` method 
	of the `Bookshelf` instance passed to `loadBooks(..)`. 
	Then call the `printFavoriteBooks()` method.
	*/
	fakeAjax(BOOK_API,function onBooks (bookNames){
		for (let bookName of bookNames) {
			//implicit binding
			theBookshelf.addFavoriteBook(bookName);
		}
		theBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

//Create an instance of `Bookshelf` class
//pass it as an argument to `loadBooks(..)`.
var myBooks = new Bookshelf();
loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
//cb stands for callback
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
