
        $(document).ready(function(){
            $("#item-colors a").click(function(){
                var t = $(this).children("img").attr("src");
                
                console.log(t);
                var t_start = t.slice(0,-4);
                console.log(t_start);
                var t_end =t.slice(-4);
               var t_final=t_start+"_b"+t_end;
                $("#item-photo img").attr("src",t_final);
                $("#item-photo a").attr("href",t_final);
            })
            
            
        })
  