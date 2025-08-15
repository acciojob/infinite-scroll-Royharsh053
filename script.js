//your code here!

const list = document.getElementById('infi-list');

function addInitialItems() {
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        list.appendChild(li);
    }
}

let itemCount = 11; // Start from 11 since we already added 10 items

function addMoreItems() {
    for (let i = 0; i < 2; i++) {
        const li = document.createElement('li');
        li.textContent = `Item ${itemCount++}`;
        list.appendChild(li);
    }
}

window.addEventListener('scroll', () => {
    if (list.getBoundingClientRect().bottom <= window.innerHeight) {
        addMoreItems();
    }
});

// Call the initial function to populate the list
addInitialItems();