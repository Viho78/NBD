db.nbd_col.find().forEach(function (doc){ 
    doc.weight = parseFloat(doc.weight) || 0;
	doc.height = parseFloat(doc.height) || 0;
    db.nbd_col.save(doc);
});




var mapf1 = function() {
	emit(this.sex, this.height);
};

var reducef2 = function(key, srednia) {
	return Array.avg(srednia);
};

db.nbd_col.mapReduce(mapf1, reducef2, 
	{out: 'zad1'} 
)

db.zad1.find().sort({_id: 1})




var mapf3 = function() {
	emit(this.sex, this.weight);
};

var reducef4 = function(key, srednia) {
	return Array.avg(srednia);
};

db.nbd_col.mapReduce(mapf3, reducef4, 
	{out: 'zad2'} 
)

db.zad2.find().sort({_id: 1})