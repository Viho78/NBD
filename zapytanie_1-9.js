printjson(db.nbd_col.updateMany(
	{'first_name': 'Antonio'},
	{$set: {'hobby': 'pingpong'}}
))


printjson(db.nbd_col.find( {'first_name': 'Antonio'} ).toArray())
