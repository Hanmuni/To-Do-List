let items = ['Wasser', 'Gemüse', 'Fleisch'];

for (let i = 0; i < items.length; i++) {
    console.log('Heute kaufen: ' + items[i]);
}

function addItems() {

    let list = document.getElementById('list');

    list.innerHTML = '';


    for (let i = 0; i < items.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = items[i] + ' <a href="#" onclick="deleteItem(' + i + ')"> <img src="img/check.jpg">  </a>';
        list.appendChild(li);
    }
}

function deleteItem(i) {
    items.splice(i, 1);
    addItems();
}

function addCurrentItem() {
    if (items.length <= 15) {
        let currentItem = document.getElementById('new-name').value;

        items.push(currentItem);

        document.getElementById('new-name').value = '';

        addItems();
    }

    else {
        alert('Mehr soll nicht gekauft werden');
    }
}