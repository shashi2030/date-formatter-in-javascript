/* convert single value and return the new date format*/
	function dateConverter(_date){
		var data = _date;
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var dateval = data.split('-');
		return dateval[0] + '/' + months[parseInt((dateval[1])-1)] + '/' + dateval[2];
	}
	
	/* check new return date in console*/
	console.log(dateConverter('10-02-2011'));
	
	
	/* convert date in array collection and return new date format  */
	var dateCollection = ['10-02-2015','10-05-2013','10-02-1999','12-08-2001','20-12-2018']
	function dateConverterCollection(_date){
		var newData = [];
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		for(var i = 0; i < _date.length;i++){
			var dateval = _date[i].split('-');
			newData.push(dateval[0] + '/' + months[parseInt((dateval[1])-1)] + '/' + dateval[2]);
		}
		return newData;
	}
	
	/* check new return date in console*/
	console.log(dateConverterCollection(dateCollection));