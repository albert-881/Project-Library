const myLibrary = []

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(); 
}



function displayBooks() {
    const container = document.querySelector('.container');
    
    container.innerHTML = ''; // Clear the container before adding new elements

    for (let i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Title: ${myLibrary[i].title} <br> 
                    Author: ${myLibrary[i].author} <br> 
                    Pages: ${myLibrary[i].pages} <br> 
                    Read: ${myLibrary[i].read}`;
        newDiv.classList.add('card');
        container.append(newDiv);

        const btngroup = document.createElement('div');
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', (e) => {
            myLibrary.splice(i, 1); // Remove the book at index i
            displayBooks(); 
        })
        
        btngroup.append(delBtn);


        const toggleRead = document.createElement('button');
        toggleRead.textContent = 'Toggle Read';
        toggleRead.addEventListener('click', (e) => {
            if (myLibrary[i].read == 'yes') {
                myLibrary[i].read = 'no';;
            }
            else{
                myLibrary[i].read = 'yes';
            }
            displayBooks();
        })
        btngroup.append(toggleRead);
        newDiv.append(btngroup);

    }
    

}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "no")
const it = new Book("IT", "Stephen King", "500 pages", "yes")
addBookToLibrary(theHobbit);
addBookToLibrary(it);


let formc = document.querySelector('.myForm');
formc.style.display = 'none';


let openBtn = document.querySelector('.open-button');
openBtn.addEventListener('click', (e) => {
    let Oform = document.querySelector('.myForm');
    Oform.style.display = 'block';
})

let closeBtn = document.querySelector('.close-button');
closeBtn.addEventListener('click', (e) =>{
    console.log(e.target);

    let Cform = document.querySelector('.myForm');
    Cform.style.display = 'none';
})


let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('input[name="choice"]:checked').value;

    let newbook = new Book(title, author, pages, read);
    addBookToLibrary(newbook);

    
})

displayBooks();