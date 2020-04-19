let groceryList = [];
 const getAll = () => {
    console.log("caling get all")
    fetch('https://3000-a03a3456-19dd-4edd-9b5f-c58332488828.ws-eu01.gitpod.io/items')
    .then(res => res.json())
    .then(res => { 
        groceryList = res;
    callbackData();
    });
 }
const callbackData = () => {
    let tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];
    
    // for (var i = 0; i < groceryList.length; i++){
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell_0  = newRow.insertCell(0);
    var newCell_1  = newRow.insertCell(1);
    var newCell_2  = newRow.insertCell(2);
    var newText_0  = document.createTextNode("new text")
    newCell_0.appendChild(newText_0);
    var newText_1  = document.createTextNode(`${groceryList[0].name}`)
    newCell_1.appendChild(newText_1);
    var newText_2  = document.createTextNode(groceryList[0].price)
    newCell_2.appendChild(newText_2);

}






// function draw_table()
// {
//     let items = document.getElementById('/items');
//         if (items.length > 1)
//             var table = '<table id="listTable">';
//                 table+='<thead>';
//                 table+='<tr>';
//                 table+='<th>Select</th>';
//                 table+='<th>Item</th>';
//                 table+='<th>Price</th>';
//                 table+="</tr>"
//                 table+="</thead>";

//         for (var  in table)

//         itemData += '<tr>';
//         itemData += '<td>'++'</td>';// como fas?
//         itemData += '<td>'+value.name+'</td>';
//         itemData += '<td>'+value.price+'</td>';
//         itemData += '<tr>';
// 	};




    // function CreateTableFromJSON() {
    //     var itemsList = [{
        
    //     "section": "Dairy",
    //     "name": "Margarine",
    //     "price": 1.23,
    //     "__v": 0
    // },
    // {
        
    //     "section": "Cleaning",
    //     "name": "Desinfectant",
    //     "price": 1.23,
    //     "__v": 0
    // },
    // {
        
    //     "section": "Bakery",
    //     "name": "Sour Dogh",
    //     "price": 1.5,
    //     "__v": 0
    // },
    // {
        
    //     "section": "Bakery",
    //     "name": "Whole Grain",
    //     "price": 1.5,
    //     "__v": 0
    // }
    // ]

//         // EXTRACT VALUE FOR HTML HEADER. 
//       var col = [];
//         for (var i = 0; i < itemsList.length; i++) {
//             for (var key in itemsList[i]) {
//                 if (col.indexOf(key) === -1) {
//                     col.push(key);
//                 }
//             }
//         }

//         // CREATE DYNAMIC TABLE.
//         var table = document.createElement("table");

//         // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

//         var tr = table.insertRow(-1);                   // TABLE ROW.

//         for (var i = 0; i < col.length; i++) {
//             var th = document.createElement("th");      // TABLE HEADER.
//             th.innerHTML = col[i];
//             tr.appendChild(th);
//         }

//         // ADD JSON DATA TO THE TABLE AS ROWS.
//         for (var i = 0; i < itemsList.length; i++) {

//             tr = table.insertRow(-1);
//             itemsList.forEach(item => {
                
                
//             });

//             for (var j = 0; j < col.length; j++) {
//                 var tabCell = tr.insertCell(-1);
//                 tabCell.innerHTML = itemsList[i][col[j]];
//             }
//         }

//         // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//         var divContainer = document.getElementById("showData");
//         divContainer.innerHTML = "";
//         divContainer.appendChild(table);
//     }
	


// function select_row()
// {
// 	$("#listTable tr[id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
// 		var entree = $(this).attr("id") - 1;
// 		delete_row(section, entree);
// 	})
// };
