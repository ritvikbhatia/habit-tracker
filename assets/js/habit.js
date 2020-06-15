
{
    function toggle(){
        // console.log($('h1')[1].innerText);
        const url = new URL(window.location.href);
        const hid = url.searchParams.get("id");
        let box=$('div').click(function(event){
            event.stopPropagation()
            let thisbox=this;
            $.ajax(
                {
                    
                    type: 'post',
                        url: `habits/getval?day=${this.id}`,
                        data:{
                            a:hid,
                            day:this.id
                        },
                        success:  function(data){
                            // console.log(thisbox);
                            if(data.data=='a')
                            {
                                $(thisbox).empty();
                            }
                            if(data.data=='b')
                            {
                                $(thisbox).empty()
                                $(thisbox).append('<i class="fas fa-check"></i>')
                            }
                            if(data.data=='c')
                            {
                                $(thisbox).empty();
                                $(thisbox).append('<i class="fas fa-times"></i>');
                            }
        
                        }, error: function(error){
                            console.log(error.responseText);
                        }
        
                }
            )
            }

        )}
    toggle();
}