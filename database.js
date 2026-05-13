const {MongoClient} = require("mongodb");

const URL ="mongodb+srv://contactkodo_db_user:YbkEUg8wemiz7fE3@company.oa38m8c.mongodb.net/?appName=Company";

const client = new MongoClient(URL);

const dbName = "hello_world";

async function main(){
    await client.connect();
    console.log("connect successfully to the server");
    const db = client.db(dbName);
    const collection = db.collection("user-collection");

    //create data

    const data={
        first_name:"aarti",
        last_name:"kushwaha",
        city:"ludhiana"
    }

    //insert the data
    const result = await collection.insertOne(data);
    console.log(result);

    //read the collection data
const findData = await collection.find({}).toArray();
console.log(findData);

    return 'done.';

}



main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close());
    














