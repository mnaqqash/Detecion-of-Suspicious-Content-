document.addEventListener("DOMContentLoaded",function(){
	
	

	var urlText="";
	var dbRef = new Firebase ("https://test-75f64.firebaseio.com/");
	
	$("#pushData").on("click",function(){
		
		urlText = document.getElementById("fname").value;
		var ref = dbRef.child("URL");
		ref.set({
		"url" : urlText,
		});
		
		//var ref = dbRef.child("Message");
		//ref.on('child_added', function(snapshot) {
		//alert(snapshot.val())
		//console.log(snapshot.val())
		
		dbRef.child("Message").on("child_changed",function(snapshot){
		document.getElementById("fname").value = snapshot.val();
		console.log(snapshot.val());
		//alert(snapshot.val());
		
	});
		
	
});

		
	});
	
	//var ref = firebase.database("Message").ref();
	//var leadsRef = dbRef.child("Message");
	//ref.on('value', function(snapshot) {
		//var childData = childSnapshot.val();
			//alert(snapshot.val());
	

//	leadsRef.on('value', function(snapshot) {
  //  snapshot.forEach(function(childSnapshot) {
	//	
		//	var childData = childSnapshot.val();
			//alert(childData);
		//});
	
//Add this code to you js file for message retrieval

	//dbRef.child("Message").set({
		//"message" : "This is the message from DB"

	

	
	//dbRef.child("URL").on("value",function(snapshot){
	//	console.log(snapshot.val());
	//});
	//)};