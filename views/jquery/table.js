function addItem() {

    let section = document.querySelector("#section").value;
    let name = document.querySelector("#itemname").value;
    let price = document.querySelector("#itemprice").value;

    //preparing request
    const data = { section, name, price };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    fetch("/items", options)
        .then(console.log("New Item added to the list"))
        .catch(err => console.log(err));

}

function getOne() {

//THIS I MY ATTEMP TO IMPLEMENT THE FUNCTION TO getOne IN THE API
//TO GET FROM THE SELECTED CHECKBOX FECHED FROM THE TABLE

    // addEventListener("click",function(){
    //     var el = document.getElementById("#select")
    // })

    //SELECTING THE CHECKBOX INPUT BY NAME
    itemChecked = document.querySelector("input[name=item0]:checked")

    // GETTING THE DETAILS OF THE ITEM
    let section = document.querySelector("#section").value;
    let name = document.querySelector("#itemname").value;
    let price = document.querySelector("#itemprice").value;

    // DATA FOR THE REQUEST BODY
    const data = { section, name, price };
    
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    // FETCH THE API'S ENDPOINT
    fetch('/items/:id')
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    return res.body; // RETURNS THE RESPONSE BODY
};


function delete_row() {

//THIS I MY ATTEMP TO IMPLEMENT THE FUNCTION TO getOne IN THE API
//TO GET FROM THE SELECTED CHECKBOX FECHED FROM THE TABLE

    
//SELECTING THE CHECKBOX INPUT BY NAME
itemChecked = document.querySelector("input[name=item0]:checked")
    
    //PREPARING THE REQUEST
    const data = {}
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    console.log(options.body);
    fetch("/items/:_id", options)
        .catch(err => console.log(err));
}

// THIS IS THE FUNCTION THAT GETS ALL THE ITEMS 
// ON THE LIST AND PRINTS THEM INTO THE TABLE
var tbody;
$(document).ready(() => {

    //GET ALL THE ITEMS FROM THE DB THROUGH THE API
    fetch('/items')
        .then(res => res.json())
        .then(res => {
            console.log(res)

            //CREATES THE tbody TAG THAT WILL CONTAIN THE LIST
            tbody = res.map((item, index) => {
                //BUILD THE SECTIONS 
                var section = "";

                if (index == 0) {
                    section = "Dairy"
                } else if (index == 1) {
                    section = "Bakery"
                } else if (index == 2) {
                    section = "PersonalHygene"
                } else if (index == 3) {
                    section = "Cleaning"
                } else {
                    section = "FruitAndVegetables"
                }

                //CREATE THE ROWS IN THE TABLE AS ARRAY OF SECTIONS
                //WHICH IS AN ARRAY OF AN ARRAY OF ITEMS
                var tr1 = $(`<tr id="${section}"><td colspan="3">${section}</td></tr>` + item.reduce((acc, current) => acc + `  
                <tr id="${current.id}">
                    <td><input name="item0" id="select" onclick="delete_row()" type="checkbox"></td>
                    <td> ${current.name}</td>
                    <td> ${current.price}</td>
                </tr>
            `, ""))

                return tr1;

            })
            $('#itemsData').html(tbody)
        });
});