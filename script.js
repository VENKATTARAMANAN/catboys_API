var imaging=document.querySelector(".images");
var imaging1=document.querySelector(".images1");
var imaging2=document.querySelector(".images2");
var imaging3=document.querySelector(".images3");

async function getdata(){
        try{
        var res=await fetch(`https://api.catboys.com/baka`);
    var res1=await res.json();
imaging.innerHTML=`
<img width="285" height="200" src=${res1.url}>`
    }
    catch (error) {
            console.log("error");
          }
        }
        getdata();

        async function getdata1(){
          try{
          var res=await fetch(`https://api.catboys.com/img`);
      var res1=await res.json();
  imaging1.innerHTML=`
  <img width="285" height="200" src=${res1.url}>`
      }
      
      catch (error) {
              console.log("error");
            }
         
          }
  
          getdata1();

          async function getdata2(){
            try{
            var res=await fetch(`https://api.catboys.com/8ball`);
        var res1=await res.json();
    imaging2.innerHTML=`
    <img width="290" height="200" src=${res1.url}>`
        }
        
        catch (error) {
                console.log("error");
              }
           
            }
    
            getdata2();

            async function getdata3(){
              try{
              var res=await fetch(`https://api.catboys.com/dice`);
          var res1=await res.json();
      imaging3.innerHTML=`
      <img width="290" height="200" src=${res1.url}>`
          }
          
          catch (error) {
                  console.log("error");
                }
             
              }
      
              getdata3();
       