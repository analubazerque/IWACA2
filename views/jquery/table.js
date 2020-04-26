// THIS IS THE FUNCTION THAT GETS ALL THE ITEMS 
// ON THE LIST AND PRINTS THEM INTO THE TABLE
$(document).ready(() => {

    //GET ALL THE ITEMS FROM THE DB THROUGH THE API
    fetch('/items')
        .then(res => res.json())
        .then(res => {
            console.log(res)

            //CREATES THE tbody TAG THAT WILL CONTAIN THE LIST
            var tbody = res.map((item, index) => {
                //BUILD THE SECTIONS 
                var section = "";

                if (index == 0) {
                    section = "Dairy"
                } else if (index == 1) {
                    section = "Bakery"
                } else if (index == 2) {
                    section = "Personal Hygene"
                } else if (index == 3) {
                    section = "Cleaning"
                } else {
                    section = "Fruit And Vegetables"
                }

                //CREATE THE ROWS IN THE TABLE AS ARRAY OF SECTIONS
                //WHICH IS AN ARRAY OF AN ARRAY OF ITEMS
                var tr1 = $(`<tr id="${section}"><td colspan="3"><b>${section}</b></td></tr>`
                    + item.reduce((acc, current) => acc + `  
                <tr id="${current._id}">
                    <td><input name="item0" id="select" type="checkbox"></td>
                    <td> ${current.name}</td>
                    <td> ${current.price}</td>
                </tr>
            `, ""))

                return tr1;

            })
            $('#itemsData').html(tbody)
        });
});

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

function delete_row() {

    //     //THIS I MY ATTEMP TO IMPLEMENT THE FUNCTION TO getOne IN THE API
    //     //TO GET FROM THE SELECTED CHECKBOX FECHED FROM THE TABLE

    //     //SELECTING THE CHECKBOX INPUT BY ATTRIBUTE
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkboxes);
    for (var i = 0; i < checkboxes.length; i++) {
        let selectedID = ($(checkboxes[i]).parent().parent().attr("id"));

        //PREPARING THE REQUEST
        let url = "/items/" + selectedID;
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        fetch(url, options)
            .then((res) => console.log(res))
            .catch(err => console.log(err));
            window.location.reload();
    }

}