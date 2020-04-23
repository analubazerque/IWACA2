
$(document).ready(()=>{

    fetch('/items')
    .then(res => res.json())
    .then(res => { console.log(res)
    
        var tbody = res.map((item, index)=>{

            var section = "";

            if (index == 0){
                section = "Dairy"
            } else if (index == 1) {
                section = "Bakery"
            } else if (index == 2) {
                section = "Cleaning"
            } else if (index == 3) {
                section = "Personal Hygene"
            } else {
                section = "Fruit And Vegetables"
            }

            var tr1 = $(`<tr id="${section}"><td colspan="3">${section}</td></tr>`+item.reduce((acc, current)=>acc+`  
                <tr id="${current._id}">
                    <td><input name="item0" type="checkbox"></td>
                    <td> ${current.name}</td>
                    <td> ${current.price}</td>
                </tr>
            `, ""))  

            return tr1;

        })
    $('#itemsData').html(tbody)
    })

});    

        
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



// function select_row()
// {
// 	$("#listTable tr[id]").click(function ()
// 	{
// 		$(".selected").removeClass("selected");
// 		$(this).addClass("selected");
// 		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
// 		var item = $(this).attr("id") - 1;
// 		delete_row(section, item);
// 	})
// };
