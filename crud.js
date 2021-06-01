const Users =[{Id:1,Name:"sandeep",Age:21,}]

const User1={Id:2,Name:"rajesh",Age:22}
const User2={Id:3,Name:"Nirnajan",Age:23}

// Create operation

function createuser(user){
    Users.push(user);
   
}
createuser(User1);
createuser(User2)
console.log(Users);

// Read operation

function readuser(Id){
    // let res=Users.find(function(element){
    //     return (element.Id==Id)
    // });
    let res =Users.find(element => element.Id==Id) //find method only search the spechfic element 
// console.log(res);
}
readuser(2);

// update operation 

function updateuser(Id, user){
    const index =Users.findIndex(user => user.Id==Id)
        Users[index]=user;
      
}
const Id=3;
const users = {Id:Id,name:"Sandy",age:55}
updateuser(Id,users)
// console.log(Users)

// delete operation

function deleteuser(Id){
const index =Users.findIndex(user => user.Id==Id)
Users.splice(index,1)  //splice method use for remove the element and retrun the remove element SYNTEX- splice(index, howmany element revoe ,add any new element)

}
deleteuser(2);
// console.log(Users)


// Filter operation

// function filterusre(Id, key, vlue){
//     Users.filter(user => {
//         if(user.Id==Id)
//         {
//             return (user[key]==value)
//         }
//         else
//         {
//             return("user not found")
//         }
//     })
// }

// filterusre(1,"Name","Johi")
// console.log(Users)

function age(min,max){
    
}