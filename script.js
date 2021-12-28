var btn = document.getElementsByClassName('btn')[0];
var inputText = document.getElementById('item');
var parentUl = document.getElementsByClassName('parentUl')[0];
var ItemClose = document.getElementsByClassName("close")[0];

btn.addEventListener('click', function(){
   addToLi();
   inputText.value =" "
})


document.addEventListener('keypress',function(e){;

if(e.keyCode === 13){
    addToLi();
    inputText.value =" " 
}
})

function addToLi(){
    var inputTextValue = inputText.value;
    var inputTextNode = document.createTextNode(inputTextValue);
    var newLi = document.createElement('li');
    newLi.appendChild(inputTextNode);
    newLi.classList.add('listItems')
     parentUl.appendChild(newLi);

     var firstSpan = document.createElement('span');
     var spanText= document.createTextNode("Done");




     firstSpan.addEventListener('click', function(){
    var DoneList = document.getElementsByClassName('doneList')[0]
    console.log("works") 
    var li = this.parentNode;
    var ul = li.parentNode;
    DoneList.appendChild(li)
    li.removeChild(this)
    
     })







     firstSpan.appendChild(spanText)
     firstSpan.classList.add("done")
     newLi.appendChild(firstSpan)
    var spanElement = document.createElement('span');
    var imgElement = document.createElement('img');

    imgElement.addEventListener('click', function(){
        var span = this.parentNode;
        var itemToDelete = span.parentNode;
        var ul = itemToDelete.parentNode
        ul.removeChild(itemToDelete);
        console.log("works")
    })
    

     imgElement.classList.add("close");
    imgElement.setAttribute("src", "images/4115230_cancel_close_delete_icon.svg")
    spanElement.appendChild(imgElement);
    newLi.appendChild(spanElement);

    


}


