# HTML Form With Firebase Realtime Database


### Publish data from an HTML form into a Firebase realtime database

Bare minimum HTML & JavaScript code to get email address, name and message from a user and publish to a Firebase Realtime database.
This repo exists for my future reference.

Add your project's configuration secrets in this section in `firebase.js` file.
```
var  firebaseConfig = {
	apiKey:  "",
	authDomain:  "",
	databaseURL:  "",
	projectId:  "",
	storageBucket:  "",
	messagingSenderId:  "",
	appId:  ""
};
firebase.initializeApp(firebaseConfig);
```

Firebase provides [several methods](https://firebase.google.com/docs/database/admin/save-data#section-ways-to-save) for publishing data into a database:
|                |                |
|----------------|-------------------------------|
|set|Write or replace data to a **defined path**, like `messages/users/<username>`|
|update          |Update some of the keys for a defined path without replacing all of the data|
|push|**Add to a list of data** in the database. Every time you push a new node onto a list, your database generates a unique key, like `messages/users/<unique-user-id>/<username>`|
|transaction          |Use transactions when working with complex data that could be corrupted by concurrent updates|


The ref() method is used to specify a path for data update. Each new submission is saved under the current date as the path.
```
firebase.database().ref(date_formatted).set(
	{
		email:  email.value,
		name:  name.value,
		message:  message.value
	}
);
```

To use a randomly generated path each time, use the push() method like this:
```
firebase.database().ref().push().set(
	{
		email:  email.value,
		name:  name.value,
		message:  message.value
	}
);
```

