var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');
var userList = document.getElementById('userList');


addButton.addEventListener('click',function() {
    create(nameInput.value , ageInput.value);
    
})


function create(name, age) {
    var data = {
        name : name,
        age: age
    };
    return firebase.database().ref().child('user').push(data);
    
}

firebase.database().ref('user').on('value', function () 
{
    userList.innerHTML = '';
    snapshot.forEach(function(item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name+ ':'+item.val().age));
        userList.appendChild(li)
        
    });
    
})
