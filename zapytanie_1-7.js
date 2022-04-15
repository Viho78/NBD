printjson(db.nbd_col.remove(
	{height: {$gt: '190'}}
))


printjson(db.nbd_col.find(
	{height: {$gte: '190'}}
).toArray())