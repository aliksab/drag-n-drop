let list_items = document.querySelectorAll(`.list-item`);
let lists = document.querySelectorAll(`.list`);
const createList = document.querySelector('.list')
const newButton = document.getElementById('newButton');


for (const list of lists) {
    list.addEventListener('click', () => {
        clearActiveClasses()
        list.classList.add('active')
    })
	list.addEventListener('drop', () => {
		clearActiveClasses()
        list.classList.add('active')
	})
}

function clearActiveClasses() {
    lists.forEach((list) => {
        list.classList.remove('active')
    })
}

let draggedItem = null;

function newElement(){
	let textLists = document.getElementById(`textList`).value;
	let newItem = document.createElement('div')
    newItem.classList.add('list-item')
    newItem.draggable = true
    newItem.textContent = textLists
    createList.append(newItem)
}

newButton.addEventListener('click', event => {
	newElement()	
	let newListItem = document.querySelectorAll(`.list-item`);
	for (let i = 0; i < newListItem.length; i++) {
		const item = newListItem[i];

		item.addEventListener('dragstart', function () {
			draggedItem = item;
			setTimeout(function () {
				item.style.display = 'none';
			}, 0)
		});
	
		item.addEventListener('dragend', function () {
			setTimeout(function () {
				draggedItem.style.display = 'block';
			}, 0);
		})
	}
})

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}

for (const item of list_items) {
    item.addEventListener('click', () => {
        item.classList.toggle('checked')
	})
}
