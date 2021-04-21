function Balance1(){
    if (document.getElementById("check1").checked === true){
        document.getElementById("check2").checked = false;
        document.getElementById("check3").checked = false;
    }
}
function Balance2(){
    if (document.getElementById("check2").checked === true){
        document.getElementById("check1").checked = false;
        document.getElementById("check3").checked = false;
    }
}
function Balance3(){
    if (document.getElementById("check3").checked === true){
        document.getElementById("check2").checked = false;
        document.getElementById("check1").checked = false;
    }
}


//key, value, visited, pastKey, price From start, F = H + G
var vertexProperty = [
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999],
		[0, 0, false, -1, 99999, 99999]];
		

var Array = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]
];

var Clean = false;

let path = [];

function Queue() {
    let collection = []

    this.print = function() {
        console.log(collection)
    }

    this.enqueue = function(element) {
        collection.push(element)
    }

    this.dequeue = function() {
        return collection.shift()
    }

    this.front = function() {
        return collection[0]
    }

    this.isEmpty = function() {
        return collection.length === 0
    }

    this.size = function() {
        return collection.length
    }
}
//_|_|_
//_|_|_
// | |
function checkVertexIsConnectedAndSetPropery(start, finish)
{
	let vertexes = [];
	vertexProperty[start][2] = true;
	vertexProperty[start][4] = 0;
	vertexes.push(start);
	
	while(vertexes.length != 0)
	{
		let currentVertex = vertexes[0];
		let p = 0;
		for (let i = 1; i < vertexes.length; i++) {
			if(vertexProperty[currentVertex][5] > vertexProperty[vertexes[i]][5])
			{
				p = i;
				currentVertex = vertexes[i];
			}
		}
		//2
		if((currentVertex > 5) && (vertexProperty[currentVertex-6][2] === false) && (vertexProperty[currentVertex-6][1] === 0))
		{
			vertexes.push(currentVertex-6);
			vertexProperty[currentVertex-6][2] = true;
			vertexProperty[currentVertex-6][3] = currentVertex;
			vertexProperty[currentVertex-6][4] = vertexProperty[currentVertex][4] + 10;
			
			let x = Math.abs((currentVertex % 6) - ((currentVertex- 6) % 6));
			let y = Math.abs((Math.trunc(currentVertex / 6)) - Math.trunc((currentVertex- 6) / 6));
			vertexProperty[currentVertex-6][5] = vertexProperty[currentVertex-6][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex-6)%6) + String(Math.trunc((currentVertex-6) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex-6][4]);
		    document.getElementById(String((currentVertex-6)%6) + String(Math.trunc((currentVertex-6) / 6))).style.background = 'linear-gradient(to top, cyan, white, white, white)';
		    document.getElementById(String((currentVertex-6)%6) + String(Math.trunc((currentVertex-6) / 6))).style.color = 'green';
		    if(currentVertex-6 === finish){
				document.getElementById(String((currentVertex-6)%6) + String(Math.trunc((currentVertex-6) / 6))).style.background = 'purple';
				break;
		    }
		}
		//4
		if((currentVertex % 6 != 0) && (vertexProperty[currentVertex-1][2] === false) && (vertexProperty[currentVertex-1][1] === 0))
		{
			vertexes.push(currentVertex-1);
			vertexProperty[currentVertex-1][2] = true;
			vertexProperty[currentVertex-1][3] = currentVertex;
			vertexProperty[currentVertex-1][4] = vertexProperty[currentVertex][4] + 10;
			
			let x = Math.abs((finish % 6) - ((currentVertex- 1) % 6));
			let y = Math.abs((Math.trunc(finish / 6)) - Math.trunc((currentVertex- 1) / 6));
			vertexProperty[currentVertex-1][5] = vertexProperty[currentVertex-1][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex-1)%6) + String(Math.trunc((currentVertex-1) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex-1][4]);
		    document.getElementById(String((currentVertex-1)%6) + String(Math.trunc((currentVertex-1) / 6))).style.background = 'linear-gradient(to left, cyan, white, white, white)';
		    document.getElementById(String((currentVertex-1)%6) + String(Math.trunc((currentVertex-1) / 6))).style.color = 'green';
		    if(currentVertex-1 === finish){
				document.getElementById(String((currentVertex-1)%6) + String(Math.trunc((currentVertex-1) / 6))).style.background = 'purple';
				break;
		    }
		}
		//6
		if(((currentVertex + 1) % 6 != 0) && (vertexProperty[currentVertex+1][2] === false) && (vertexProperty[currentVertex+1][1] === 0))
		{
			vertexes.push(currentVertex+1);
			vertexProperty[currentVertex+1][2] = true;
			vertexProperty[currentVertex+1][3] = currentVertex;
			vertexProperty[currentVertex+1][4] = vertexProperty[currentVertex][4] + 10;
			
			let x = Math.abs((finish % 6) - ((currentVertex+ 1) % 6));
			let y = Math.abs((Math.trunc(finish / 6)) - Math.trunc((currentVertex+ 1) / 6));
			vertexProperty[currentVertex+1][5] = vertexProperty[currentVertex+1][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex+1)%6) + String(Math.trunc((currentVertex+1) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex+1][4]);
			document.getElementById(String((currentVertex+1)%6) + String(Math.trunc((currentVertex+1) / 6))).style.background = 'linear-gradient(to right, cyan, white, white, white)';
			document.getElementById(String((currentVertex+1)%6) + String(Math.trunc((currentVertex+1) / 6))).style.color = 'green';
		    if(currentVertex+1 === finish){
				document.getElementById(String((currentVertex+1)%6) + String(Math.trunc((currentVertex+1) / 6))).style.background = 'purple';
				break;
		    }
		}
		//8
		if((currentVertex < 30) && (vertexProperty[currentVertex+6][2] === false) && (vertexProperty[currentVertex+6][1] === 0))
		{
			vertexes.push(currentVertex+6);
			vertexProperty[currentVertex+6][2] = true;
			vertexProperty[currentVertex+6][3] = currentVertex;
			vertexProperty[currentVertex+6][4] = vertexProperty[currentVertex][4] + 10;
			
			let x = Math.abs((finish % 6) - ((currentVertex+ 6) % 6));
			let y = Math.abs(Math.trunc((finish / 6)) - Math.trunc((currentVertex+ 6) / 6));
			vertexProperty[currentVertex+6][5] = vertexProperty[currentVertex+6][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex+6)%6) + String(Math.trunc((currentVertex+6) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex+6][4]);
			 document.getElementById(String((currentVertex+6)%6) + String(Math.trunc((currentVertex+6) / 6))).style.background = 'linear-gradient(to bottom, cyan, white, white, white)';
			 document.getElementById(String((currentVertex+6)%6) + String(Math.trunc((currentVertex+6) / 6))).style.color = 'green';
		    if(currentVertex+6 === finish){
				document.getElementById(String((currentVertex+6)%6) + String(Math.trunc((currentVertex+6) / 6))).style.background = 'purple';
				break;
		    }
		}
		//1
		if((currentVertex % 6 != 0) && (currentVertex > 5) && (vertexProperty[currentVertex-7][2] === false) && (vertexProperty[currentVertex-7][1] === 0))
		{
			vertexes.push(currentVertex-7);
			vertexProperty[currentVertex-7][2] = true;
			vertexProperty[currentVertex-7][3] = currentVertex;
			vertexProperty[currentVertex-7][4] = vertexProperty[currentVertex][4] + 14;
			
			let x = Math.abs((finish % 6) - ((currentVertex- 7) % 6));
			let y = Math.abs(Math.trunc((finish / 6)) - Math.trunc((currentVertex- 7) / 6));
			vertexProperty[currentVertex-7][5] = vertexProperty[currentVertex-7][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex-7)%6) + String(Math.trunc((currentVertex-7) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex-7][4]);
			document.getElementById(String((currentVertex-7)%6) + String(Math.trunc((currentVertex-7) / 6))).style.background = 'linear-gradient(to left top, cyan, white, white, white)';
			document.getElementById(String((currentVertex-7)%6) + String(Math.trunc((currentVertex-7) / 6))).style.color = 'green';
		    if(currentVertex-7 === finish){
				document.getElementById(String((currentVertex-7)%6) + String(Math.trunc((currentVertex-7) / 6))).style.background = 'purple';
				break;
		    }
		}
		
		//3
		if(((currentVertex + 1) % 6 != 0) && (currentVertex > 5) && (vertexProperty[currentVertex-5][2] === false) && (vertexProperty[currentVertex-5][1] === 0))
		{
			vertexes.push(currentVertex-5);
			vertexProperty[currentVertex-5][2] = true;
			vertexProperty[currentVertex-5][3] = currentVertex;
			vertexProperty[currentVertex-5][4] = vertexProperty[currentVertex][4] + 14;
			
			let x = Math.abs((finish % 6) - ((currentVertex- 5) % 6));
			let y = Math.abs(Math.trunc((finish / 6)) - Math.trunc((currentVertex- 5) / 6));
			vertexProperty[currentVertex-5][5] = vertexProperty[currentVertex-5][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex-5)%6) + String(Math.trunc((currentVertex-5) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex-5][4]);
			document.getElementById(String((currentVertex-5)%6) + String(Math.trunc((currentVertex-5) / 6))).style.background = 'linear-gradient(to right top, cyan, white, white, white)';
			document.getElementById(String((currentVertex-5)%6) + String(Math.trunc((currentVertex-5) / 6))).style.color = 'green';

		    if(currentVertex-5 === finish){
				document.getElementById(String((currentVertex-5)%6) + String(Math.trunc((currentVertex-5) / 6))).style.background = 'purple';
				break;
		    }
		}
		
		
		//7
		if((currentVertex % 6 != 0) && (currentVertex < 30) && (vertexProperty[currentVertex+5][2] === false) && (vertexProperty[currentVertex+5][1] === 0))
		{
			vertexes.push(currentVertex+5);
			vertexProperty[currentVertex+5][2] = true;
			vertexProperty[currentVertex+5][3] = currentVertex;
			vertexProperty[currentVertex+5][4] = vertexProperty[currentVertex][4] + 14;
			
			let x = Math.abs((finish % 6) - ((currentVertex+5) % 6));
			let y = Math.abs(Math.trunc((finish / 6)) - Math.trunc((currentVertex+5) / 6));
			vertexProperty[currentVertex+5][5] = vertexProperty[currentVertex+5][4] + (x + y) * 10;
			
			document.getElementById(String((currentVertex+5)%6) + String(Math.trunc((currentVertex+5) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex+5][4]);
			document.getElementById(String((currentVertex+5)%6) + String(Math.trunc((currentVertex+5) / 6))).style.background = 'linear-gradient(to left bottom, cyan, white, white, white)';
			document.getElementById(String((currentVertex+5)%6) + String(Math.trunc((currentVertex+5) / 6))).style.color = 'green';

		    if(currentVertex+5 === finish){
				document.getElementById(String((currentVertex+5)%6) + String(Math.trunc((currentVertex+5) / 6))).style.background = 'purple';
				break;
		    }
		}
		
		//9
		if(((currentVertex + 1) % 6 != 0) && (currentVertex < 30) && (vertexProperty[currentVertex+7][2] === false) && (vertexProperty[currentVertex+7][1] === 0))
		{
			vertexes.push(currentVertex+7);
			vertexProperty[currentVertex+7][2] = true;
			vertexProperty[currentVertex+7][3] = currentVertex;
			vertexProperty[currentVertex+7][4] = vertexProperty[currentVertex][4] + 14;
		
			let x = Math.abs((finish % 6) - ((currentVertex+7) % 6));
			let y = Math.abs(Math.trunc(finish / 6) - Math.trunc((currentVertex+7) / 6));
			vertexProperty[currentVertex+7][5] = vertexProperty[currentVertex+7][4] + (x + y) * 10;
		
			document.getElementById(String((currentVertex+7)%6) + String(Math.trunc((currentVertex+7) / 6))).innerHTML = 
			String( (x + y) * 10) +"  " + String(vertexProperty[currentVertex+7][4]);
			document.getElementById(String((currentVertex+7)%6) + String(Math.trunc((currentVertex+7) / 6))).style.background = 'linear-gradient(to right bottom, cyan, white, white, white)';
			document.getElementById(String((currentVertex+7)%6) + String(Math.trunc((currentVertex+7) / 6))).style.color = 'green';

			if(currentVertex+7 === finish){
				document.getElementById(String((currentVertex+7)%6) + String(Math.trunc((currentVertex+7) / 6))).style.background = 'purple';
				break;
		    }
		}
		
		
		var removedItem = vertexes.splice(p, 1);
		
	}
	
}


function Set(x,y,iid) {
    if (Clean === true){
                for(i=0;i<36;i++){
        vertexProperty[i][0] = 0;
        vertexProperty[i][1] = 0;
        vertexProperty[i][2] = false;
        vertexProperty[i][3] = -1;
        vertexProperty[i][4] = 99999;
		vertexProperty[i][5] = 99999;
        }
		Clean = false;
		for (i = 0; i<6; i++){
			for (j = 0; j<6; j++) {
			    Array[i][j] = 0;
				document.getElementById(String(i)+String(j)).style.background = 'white';
				document.getElementById(String(i)+String(j)).style.borderColor = 'transparent';
				document.getElementById(String(i)+String(j)).style.color = 'transparent';
			}
		}
	} else if(Array[x][y] === 0){
		if (document.getElementById("check1").checked === true) {
		    for (i = 0; i<6; i++){
			for (j = 0; j<6; j++) {
			    if(Array[i][j] === 1){
			        Array[i][j] = 0;
				document.getElementById(String(i)+String(j)).style.background = 'white';}
			}
		    }
			Array[x][y] = 1;
			document.getElementById(iid).style.background = 'lime';
			
			console.log(Array[x][y]);
		}
		if (document.getElementById("check2").checked === true) {
		    for (i = 0; i<6; i++){
				for (j = 0; j<6; j++) {
			    	if(Array[i][j] === 2){
			        	Array[i][j] = 0;
					document.getElementById(String(i)+String(j)).style.background = 'white';}
				}
		    }
			Array[x][y] = 2;
			document.getElementById(iid).style.background = 'purple';
			console.log(Array[x][y]);
		}
		if (document.getElementById("check3").checked === true){
			Array[x][y] = 3;
			document.getElementById(iid).style.background = 'blue';
			console.log(Array[x][y]);
		}
	} else {
		Array[x][y] = 0;
		document.getElementById(iid).style.background = 'white';
		console.log(Array[x][y]);
	}
}

function setPath(start, finish)
{
    path = [];
	checkVertexIsConnectedAndSetPropery(start, finish);
	
	let currentKey = finish;
	
	while(currentKey != -1)
	{
		var newLength = path.push(currentKey);
		currentKey = vertexProperty[currentKey][3];
	}
	
	for(i = 1; i < path.length - 1; i++)
	{
	    
	    if(Array[path[i]%6][Math.trunc(path[i] / 6)] != 1 && Array[path[i]%6][Math.trunc(path[i] / 6)] != 2){
		    document.getElementById(String(path[i]%6) + String(Math.trunc(path[i] / 6))).style.background = 'cyan';
	    }
	}
	path.forEach(function (item, index, array) {
		
		console.log(Math.trunc(item / 6), item);
	});
}

function Main() {
    Clean = true;
    
    
	//Приклад циклу
	let start, finish;
	for(i=0; i<6; i++){
		for(j=0;j<6;j++){
			vertexProperty[i*6 + j][0] = i*6 + j;
			
			if( Array[j][i] === 1)
			{
				start = i*6 + j
			}
			else if(Array[j][i] === 2){
				finish = i*6 + j
			}
			else 
			{
				vertexProperty[i*6 + j][1] = Array[j][i];
			}
			console.log(Array[i][j]);
		}
	}
	
	
	
	setPath(start, finish);
	for(i = 0; i < 36; i++)
	{
		console.log("Вершина: " + vertexProperty[i][0] + "\n" +
					"Значення: " + vertexProperty[i][1] + "\n" +
					"Відвідана: " + vertexProperty[i][2] + "\n" +
					"Код минулої: " + vertexProperty[i][3] + "\n" +
					"Відстань від початку: " + vertexProperty[i][4] + "\n");
	}
	
	
	
	//let v1 = new Vertex()
	/*
	Короче, в цій функції нада написати той алгоритм
	Оператори знайомі, розберешся
	Бат
	По ходу обходу встав ту конструкцію
	"document.getElementById(id).style.background = 'yellow';"
	Воно буде зафарбовувати відвідані квадратики 
	В id для того треба передати ключ у вигляді стрінга 'xy' де xy то координати, припустимо отак "23"
	Ну і в кінці сам шлях
	Отак думаю:
	"document.getElementById(id).style.background = 'cyan';"
	Єслі шо - питай
	Удачі в вебі, бережи очко
	*/
}