// Prevent scrolling
document.body.addEventListener('touchstart', function(e){  
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){ 
	e.preventDefault();
});







// Prevent scrolling
document.body.addEventListener('touchstart', function(e){  
	// allow clicks on links within the moveable area
	if($(e.target).is('a, iframe')) {
		return true;
	}
	e.preventDefault();
});


document.body.addEventListener('touchmove', function(e){ 
	e.preventDefault();
});







var json = [{
				title: 'Fall 2009',
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu risus tortor. Nam dui tellus, porta at libero eu, tempor rutrum tortor.",
				startDate: (new Date('August 31, 2009 10:29:00 pm GMT+0')),
				endDate: null
			},
			{
            title: 'Dec 15, 2010',
				description: "Integer hendrerit iaculis odio id semper. ",
				startDate: (new Date('December 15, 2010 00:00:00 am GMT+0')),
				endDate: null
			},
            {     title: 'December 2010',
				description: "Donec sed mauris blandit, faucibus mauris ac, congue est.",
				startDate: (new Date('December 18, 2010 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: "June 2011",
				description: "Phasellus sit amet vestibulum turpis.",
				startDate: (new Date('June 1, 2011 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: 'July 4, 2011',
				description: "Nam pretium, sapien ut blandit venenatis, purus odio consectetur dolor, non mollis ligula sem eget leo.",
				startDate: (new Date('July 4, 2011 00:00:00 am GMT+0')),
				endDate: null
			},
			{        title: 'Yesterday',
				description: "Sed adipiscing nunc mi, a egestas eros rhoncus vel.",
				startDate: (new Date('August 30, 2011 00:00:00 am GMT+0')),
				endDate: null
			}];





$("#timeline").timeCube({
	data: json,
	granularity: "year",
	startDate: new Date('August 31, 2009 10:20:00 pm GMT+0'),
	endDate: new Date('September 30, 2011 02:20:00 am GMT+0'),
	nextButton: $("#next-link"),
	previousButton: $("#prev-link"),
	showDate: false
});
