function addItem() {

    let section = document.querySelector("#section").value;
    let name = document.querySelector("#itemname").value;
    let price = document.querySelector("#itemprice").value;

    // let section = $("#section").val();
    // let name = $("#itemname").val();
    // let price = $("#itemprice").val();

    //preparing request
    const data = { section, name, price };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    console.log(options.body);
    fetch("/items", options)
        .then(console.log("test"))
        .catch(err => console.log(err));

    //     const form = new FormData(document.getElementById('createItem'));
    //     fetch('/items', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json, text/plain, /'
    //         },
    //         body: form
    //             .then(res => res.json())
    //  });

    //     $('#itemsData').html(tbody)

}

var tbody;
$(document).ready(() => {

    fetch('/items')
        .then(res => res.json())
        .then(res => {
            console.log(res)

            tbody = res.map((item, index) => {

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

                var tr1 = $(`<tr id="${section}"><td colspan="3">${section}</td></tr>` + item.reduce((acc, current) => acc + `  
                <tr id="${current.id}">
                    <td><input name="item0" type="checkbox"></td>
                    <td> ${current.name}</td>
                    <td> ${current.price}</td>
                </tr>
            `, ""))

                return tr1;

            })
            $('#itemsData').html(tbody)
        });


    function select_row() {
        console.log("HERE")
        $("#itemsData tr[id]").click(function () {
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
            var item = $(this).attr("_id") - 1;
            delete_row(section, item);
        })
    };

    function delete_row(section, item) {
        $("#delete").click(function () {
            $.ajax(
                {
                    url: "/items/:id",
                    method: "DELETE",
                    data:
                    {
                        section: section,
                        item: item
                    },

                })
        })
    };
})