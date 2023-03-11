
var totalamount=0;
items=document.getElementById('items');
items.innerText="";
document.addEventListener("DOMContentLoaded", load)

function load()
{
    axios.get(`https://crudcrud.com/api/2b9414a80bf14ae39f4b74cedbbfc353/AddItems`)
    .then((res)=>{
        for(let i=0;i<res.data.length;i++)
        {
            const item=`<li id=${res.data[i]._id}>${res.data[i].Pname}-${res.data[i].pprice}<input type="button" name="delete" value="delete" onclick=deleteItem('${res.data[i]._id}')></li>`
           items.innerHTML=items.innerHTML+item; 

           totalamount=totalamount+Number(res.data[i].pprice);
        }
    document.getElementById("product-total").innerHTML=`<h3>Total Items Price is : ${totalamount}</h3>`
    })
}

AddProduct=document.getElementById('form');
AddProduct.addEventListener('submit',(e)=>{
        e.preventDefault(); 
pname=document.getElementById("product-name").value;
pprice=document.getElementById("product-price").value;
const obj={
    Pname:pname,
    pprice:pprice,
}
axios.post("https://crudcrud.com/api/2b9414a80bf14ae39f4b74cedbbfc353/AddItems",obj)
.then((res)=>{
    console.log(res);
    document.getElementById("product-name").value='';
    document.getElementById("product-price").value='';
    location.reload();
return false;
}).catch((error)=>{
    console.log(error)
})
});

function deleteItem(id) {
    console.log(id);
    axios.delete(`https://crudcrud.com/api/2b9414a80bf14ae39f4b74cedbbfc353/AddItems/${id}`)
    .then((res) => {
      console.log("Item is deleted");
      document.getElementById(id).remove();
      location.reload();
      return false;
      
    })
    .catch((error) => {
      console.log("Error while deleting item: ", error);
    });
  }
  