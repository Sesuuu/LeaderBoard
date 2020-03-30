
var cand1 = [];
var cand2 = [];	
var cand3 = [];		
var cand4 = [];	

var boardmem = [];
var bm1 = [];
var bm2 = [];	
var bm3 = [];		
var bm4 = [];	

var clicked = "President";
var title = "President";
$("li").click(function(){
	$("#menu-toggle").click();
	clicked = $(this).text();
	title = $(this).text();
	$("#position").html(title);
	Plot();
});
		  
function Plot(){
cand1 = [];
cand2 = [];	
cand3 = [];		
cand4 = [];	

boardmem = [];
bmCan1 = [];
bmCan2 = [];	
bmCan3 = [];		
bmCan4 = [];	
bmCan5 = [];
bmCan6 = [];
bmCan7 = [];
bmCan8 = [];

$.ajax({
        type: "GET",
        url: "https://sheetsu.com/apis/v1.0su/1210483b23e5",
        data:{},
        success : function(json)
        {
			$("tbody").empty();
            $.each(json, function(key, feed) {
			$.each(feed, function(n, vote) {
				if(n == "President"){
					if(vote == "Quinn Martin Alpas"){cand1.push(vote);}
					if(vote == "Moses Aaron Alpas"){cand2.push(vote);}
					if(vote == "Juan Manuel Marquez"){cand3.push(vote);}
					if(vote == "Pepito Manaloto"){cand4.push(vote);}
				}
				if(n == "Board Member"){
					var res = vote.split(', ');
					boardmem.push(res);
				}
			
				console.log("name = "+n);
				console.log("vote = "+vote);
			});
		});
			
		$.each( boardmem, function( key, value ) {
			$.each( value, function( key1, value1 ) {
				console.log("asd = "+value1);
				if(value1 == "Candidate 1"){bmCan1.push(value1);}
				if(value1 == "Candidate 2"){bmCan2.push(value1);}
				if(value1 == "Candidate 3"){bmCan3.push(value1);}
				if(value1 == "Candidate 4"){bmCan4.push(value1);}
				if(value1 == "Candidate 5"){bmCan5.push(value1);}
				if(value1 == "Candidate 6"){bmCan6.push(value1);}
				if(value1 == "Candidate 7"){bmCan7.push(value1);}
				if(value1 == "Candidate 8"){bmCan8.push(value1);}
			});
		});
		
		const dataP = [
		  {
			name: 'Quinn Martin Alpas',
			points: cand1.length,
			double: false
		  },
		  {
			name: 'Moses Aaron Alpas',
			points: cand2.length,
			double: false
		  },
			{
			name: 'Juan Manuel Marquez',
			points: cand3.length,
			double: false
		  },
		  {
			name: 'Pepito Manaloto',
			points: cand4.length,
			double: false
		  },
		];
		
		const dataVP = [
		  {
			name: 'Candidate 1',
			points: bmCan1.length,
			double: false
		  },
		  {
			name: 'Candidate 2',
			points: bmCan2.length,
			double: false
		  },
			{
			name: 'Candidate 3',
			points: bmCan3.length,
			double: false
		  },
		  {
			name: 'Candidate 4',
			points: bmCan4.length,
			double: false
		  },
		  {
			name: 'Candidate 5',
			points: bmCan5.length,
			double: false
		  },
		  {
			name: 'Candidate 6',
			points: bmCan6.length,
			double: false
		  },
			{
			name: 'Candidate 7',
			points: bmCan7.length,
			double: false
		  },
		  {
			name: 'Candidate 8',
			points: bmCan8.length,
			double: false
		  },
		];
		

		const table = document.querySelector('table');
		const tbody = table.querySelector('tbody');
		
		if(clicked == "President"){
			//dataP.sort((a, b) => (a.points> b.points) ? -1 : 1);
			dataP.sort((a, b) => (a.points > b.points) ? -1 : (a.points === b.points) ? ((a.name > b.name) ? 1 : -1) : 1 )
			var rank = 1;
			dataP.forEach(entry => {
			// get first name for img
			////var str = String.raw`${entry.name}`;
			///var res = str.split(' ').join('_');
			console.log("before");
				tbody.insertAdjacentHTML('beforeend', `
				 <tr class="row">
					  <td class="rank">${rank}</td>
					  <td class="name"><img align="center" width="50" height="50" src="img/${entry.name}.png">${entry.name}</td>
					  <td class="points">${entry.points}</td>
				 </tr>
				`)
				rank++;
			});
		}
		
		if(clicked == "Vice President"){
			//data.sort((a, b) => (a.points> b.points) ? -1 : 1);
			dataVP.sort((a, b) => (a.points > b.points) ? -1 : (a.points === b.points) ? ((a.name > b.name) ? 1 : -1) : 1 )
			var rank = 1;
			dataVP.forEach(entry => {
			// get first name for img
			////var str = String.raw`${entry.name}`;
			///var res = str.split(' ').join('_');
			
				tbody.insertAdjacentHTML('beforeend', `
				 <tr class="row">
					  <td class="rank">${rank}</td>
					  <td class="name"><img align="center" width="50" height="50" src="img/${entry.name}.png">${entry.name}</td>
					  <td class="points">${entry.points}</td>
				 </tr>
				`)
				rank++;
			});
		}
		// condition if have same points
		if($('.row:nth-child(1) .points').text() == $('.row:nth-child(2) .points').text()){
				$(".row:nth-child(1)").css("background", "#dadada")
		}else{$(".row:nth-child(1)").css("background", "#fba636")}
        }
    });
}	
	
$( document ).ready(function() {
	Plot();
});
$( document ).ajaxStart(function() {
	$('html,body,li').css({
		"cursor": "not-allowed",
		"pointer-events": "none"
	});
	$('#table-body').empty();
	
	$(".container").after('<div class="text-center mt-3 mb-3 d-none" id="loading1"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><br><br><span>Loading Data...</span></div>');
	
});
$( document ).ajaxStop(function() {
	$('html,body,li').css({
		"cursor": "default",
		"pointer-events": "auto"
	});
	$("#loading1").remove();
});