printjson(db.nbd_col.find(
	{ $and:[
		{'weight': {$gte: '68'}},
		{'weight': {$lt: '71.5'}}
	]
	}
).toArray())
