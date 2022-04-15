printjson(db.nbd_col.find({
	$and: [
		{'sex': "Female"}, 
		{'nationality': "China"}
]}).limit(1).toArray())
