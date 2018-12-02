
///////////////////// Adding/removing/editing names ////////////////////////

var inputText = document.getElementById("namesInput"),
	items = document.querySelectorAll("#namesList li"),
	tab = [], index;


///Both of thiese for loops allows to select each listed item
for (var i = 0; i < items.length; i++){
	tab.push(items[i].innerHTML);
}


for (var i = 0; i < items.length; i++){
	items[i].onclick = function(){
		index = tab.indexOf(this.innerHTML);
		console.log(this.innerHTML + " index = " + index)
		inputText.value = this.innerHTML;
	};
}


//Refresh and populate array
function refreshArray() {
	tab.length = 0;
	items = document.querySelectorAll("#namesList li"); 
	for (var i = 0; i < items.length; i++){ 
	tab.push(items[i].innerHTML);
}
}


//Add name function
function addName() {
	var list = document.getElementById("namesList"),
	 	text = document.createTextNode(inputText.value),
	 	li = document.createElement("li");

	 	li.appendChild(text);
	 	list.appendChild(li);

	 	refreshArray();
	 	li.onclick = function(){
			index = tab.indexOf(li.innerHTML);
			console.log(li.innerHTML + " index = " + index)
			inputText.value = li.innerHTML;
	};
}


//Edit name function
function editName() {
	items[index].innerHTML = inputText.value;
	refreshArray();
}


//Delete name function
function delName() {
	refreshArray();
	if (items.length > 0) {
		items[index].parentNode.removeChild(items[index]); 
		inputText.value = "";
	}	
}


///////////////////// Gneerating random name ////////////////////////
function teapicker () {
	var randomName = Math.floor(Math.random()*(items.length));
	document.getElementById('winner').innerHTML = items[randomName].innerHTML;//this says to print the items (li) with the index randomName generates
}