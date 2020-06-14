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
        <a href="">${data.name}</a>
    </div>`);
}

addhabit();
}