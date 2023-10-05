
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
	// TODO: call fakeAjax( .. );
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
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
