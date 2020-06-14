{
   /* **********************************************************************************/
//Add Task function 

let addhabit=function(){
    let newform=$('#habitform');
    newform.submit(function(e){
        e.preventDefault();
    $.ajax(
        {
            type: 'post',
                url: '/addhabit',
                data: newform.serialize(),
                success: function(data){        
                     displayonpage(data.data);
                }, error: function(error){
                    console.log(error.responseText);
                }

        }
    )
})};

/* **********************************************************************************/
//Display on page function

function displayonpage(data)
{
    console.log(data);
    $('#habitscontainer').prepend(`<div id='habitbox'>
    <div id="discbox">
        <input class="form-check-input" type="checkbox" value="${data._id}" id="defaultCheck1">
        <label class="form-check-label strikethrough" for="defaultCheck1"><a href="">${data.name}</a></label>
    </div>`);
}


/* **********************************************************************************/
//Show habits Function

let showHabits=function(){
    $.ajax(
        {
            type: 'get',
                url: '/showHabits',
                success:  function(data){
                    console.log(data.data);
                    for(let i of data.data)
                        {
                            console.log(i);
                             displayonpage(i);
                        }

                }, error: function(error){
                    console.log(error.responseText);
                }

        }
    )
};
/* **********************************************************************************/
//Delete Habits function

function deleteHabits(){
    $("#delhabit").click(function(){
        var selectedHabits = new Array();
        var n = $(".form-check-input:checked").length;
        if (n > 0){
             jQuery(".form-check-input:checked").each(function(){
                selectedHabits.push($(this).val());
            });
        }
        $.ajax(
            {
                type: 'post',
                data:{
                    "del":selectedHabits
                },
                    url: '/delHabits',
                    success: async function(data){
                        console.log(data.data);
                        $('#Habitscontainer').empty();
                        for(let i of data.data)
                            {
                                console.log(i);
                                await displayonpage(i);
                            }
    
                    }, error: function(error){
                        console.log(error.responseText);
                    }
    
            }
        )
    });
}
/* **********************************************************************************/
//Delete All function

function deleteAll(){
    $("#delAll").click(function(){
        console.log('inside')
        $.ajax(
            {
                type: 'post',
                    url: '/delAll',
                    success: async function(){
                        $('#Habitscontainer').empty(); 
    
                    }, error: function(error){
                        console.log(error.responseText);
                    }
            }
        )
    });
}
deleteHabits();
addhabit();
showHabits();
deleteAll();
}