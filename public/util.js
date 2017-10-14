// load the data



$(".department").on("click", function(){
	var deptID = $(this).attr("deptID");
	viewDept(deptID);


})


function getGroupsNames(){
	return {
		1:"group 1",
		2:"group 2",
		3:"group 3",
		4:"group 4",
		5:"group 5",
		6:"group 6",


	}
}

function getDeptNames(){
	return [
		{name: "dept 1", group: 1},
		{name: "dept 2", group: 2},
		{name: "dept 3", group: 3},
		{name: "dept 4", group: 4},
		{name: "dept 5", group: 5},
		{name: "dept 6", group: 6},
		{name: "dept 7", group: 1},
		{name: "dept 8", group: 1},
		{name: "dept 9", group: 1},
		{name: "dept 10", group: 1},
		{name: "dept 11", group: 1},
		{name: "dept 12", group: 1},
		{name: "dept 13", group: 1},
		{name: "dept 14", group: 1},
		{name: "dept 15", group: 1},
		{name: "dept 16", group: 1},
		{name: "dept 17", group: 1},
		{name: "dept 18", group: 1},
		{name: "dept 19", group: 1},
		{name: "dept 20", group: 1},
		{name: "dept 21", group: 1},
	]
}

function getDeptItems(id){
	var arr = [];

	for(var i = 0 ; i < data.length; i++){
		var itemID = data[i].departmentId;
		
	}
	// todo 
	// go over the items and get the items that belong
	return arr;
}

function createDeptMenu(){
	// create menu that has a list of items 
}
function viewDept(id){
	var items = getDeptItems(id);
	//do whatever with the items to display
}