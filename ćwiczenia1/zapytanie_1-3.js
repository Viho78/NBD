printjson(db.nbd_col.find({
	$and: [
		{'sex': "Male"}, 
		{'nationality': "Germany"}
]}).toArray())
