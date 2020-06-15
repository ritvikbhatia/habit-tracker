
{
    function toggle(){
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
        function show(){
            const url = new URL(window.location.href);
        const hid = url.searchParams.get("id");
        let box=$('#calender > div');
            box.each(function(){
                let thisbox=this;
            $.ajax(
                {
                    type: 'post',
                        url: `habits/show`,
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
            })
            
            
        }
    toggle();
    show();
}