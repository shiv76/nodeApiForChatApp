"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class Db{

	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
	}

	 async onConnect(){
		 //"mongodb+srv://user-2:Shiv@#123@cluster0.lhrpc.mongodb.net/myDB?retryWrites=true&w=majority";
		// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
		// const client = new MongoClient(uri);
		// try {
		// 	// Connect to the MongoDB cluster
		// 	await  client.connect();
		// 	// Make the appropriate DB calls
		// 	await  listDatabases(client);
		// } catch (e) {
		// 	console.error(e);
		// } finally {
		// 	await  client.close();
		// }
		//const mongoURL="mongodb+srv://user-2:Shiv@#123@cluster0.lhrpc.mongodb.net/data?retryWrites=true&w=majority";
		const mongoURL = 'mongodb://localhost:27017/chatDatabase';
		return new Promise( (resolve, reject) => {
			this.mongoClient.connect(mongoURL, (err, db) => {
				if (err) {
					reject(err);
				} else {
					assert.equal(null, err);
					resolve([db,this.ObjectID]);
				}
			});
		});
	}
}
module.exports = new Db();