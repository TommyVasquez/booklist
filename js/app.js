"use strict;"

// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const storeBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn = '34343434'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn = '45454545'
            }
        ]; 
        
        const books = storeBooks;
        books.forEach(book => {
            UI.addBookToList(book);
        });
    }

    static addBookToList(book) {
        const li = document.querySelector('#book-list');
        const row = document.createElement('tr');
        li.appendChild(row);
    }
}

// Store Clas: Handles Storage

// Event: Display Books

// Event: Add a Book

// Event: Remove s Book