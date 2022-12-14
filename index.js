var MongoClient=require('mongodb').MongoClient;

var URL="mongodb+srv://jibon:JIBfaruON98521@cluster1.8ng8ojv.mongodb.net?retryWrites=true&w=majority"

MongoClient.connect(URL, function (error) {

    if(error) {
        console.log("Connection Fail")
    }

    else{
        console.log("Connection Success")
    }
    
});