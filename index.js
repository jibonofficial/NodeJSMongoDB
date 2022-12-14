var MongoClient=require('mongodb').MongoClient;

var URL="mongodb+srv://jibon:JIBfaruON98521@cluster1.8ng8ojv.mongodb.net/company?retryWrites=true&w=majority"

MongoClient.connect(URL, function (error,MyMongoClient) {

    if(error) {
        console.log("Connection Fail")
    }

    else{
        console.log("Connection Success")
        // InsertData(MyMongoClient);
        // DeleteOneItem(MyMongoClient)
        // DeleteAllItem(MyMongoClient)
        // FindOneWithCondition(MyMongoClient);
        FindALlData(MyMongoClient);
    }
    
});


function InsertData(MyMongoClient) {
    var MyDataBase= MyMongoClient.db("company");
    var MyCollection= MyDataBase.collection("employee");

    var MyData=[    {Name:"Rabil", Roll:"01", Class:"Ten", City:"Dhaka"},
                    {Name:"Rokina", Roll:"8", Class:"Ten", City:"Dhaka"},
                    {Name:"Asad", Roll:"02", Class:"Ten", City:"Dhaka"},
                    {Name:"Alvee", Roll:"03", Class:"Ten", City:"Dhaka"},
                    {Name:"Shamim", Roll:"04", Class:"Ten", City:"Dhaka"},
                    {Name:"Ashadul", Roll:"05", Class:"Ten", City:"Dhaka"},
                    {Name:"Jibon", Roll:"06", Class:"Ten", City:"Dhaka"},
                    {Name:"Sokina", Roll:"07", Class:"Ten", City:"Dhaka"},
                ]

    MyCollection.insertMany(MyData,function (error) {
        if(error) {
            console.log("Data Insert Fail");
        }
        else{
            console.log("Data Insert Success");
        }
        
    })
}

// function DeleteOneItem(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("company");
//     var MyCollection= MyDataBase.collection("employee");
//     var DeleteItem={Roll:"03"}
//     MyCollection.deleteOne(DeleteItem, function (error){
        
//         if(error) {
//             console.log("Data Delete Fail")
//         }

//         else{
//             console.log("Data Delete  Success")
//         }
//     });



// }
// function DeleteAllItem(MyMongoClient) {
//     var MyDataBase= MyMongoClient.db("company");
//     var MyCollection= MyDataBase.collection("employee");
    
//     MyCollection.deleteMany(function (error,ResultObj){
        
//         if(error) {
//             console.log("Data Delete Fail")
//         }

//         else{
//             console.log("Data Delete  Success")
//         }
//     });



// }
/* 
function FindOneWithCondition(MyMongoClient) {
    var MyDataBase= MyMongoClient.db("company");
    var MyCollection= MyDataBase.collection("employee");
    var FindObj={"Roll":"05"}
    MyCollection.findOne(FindObj,function (error,result){
        console.log(result);
    })
    
} */

function FindALlData(MyMongoClient) {
    var MyDataBase= MyMongoClient.db("company");
    var MyCollection= MyDataBase.collection("employee");
    MyCollection.find().toArray(function (error,result){
        console.log(result);
    })
    
}