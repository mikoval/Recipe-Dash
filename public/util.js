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
	return {
		1:{name: "dept 1", group: 1},
		2:{name: "dept 2", group: 1},
		3:{name: "dept 3", group: 1},
		4:{name: "dept 4", group: 1},
		5:{name: "dept 5", group: 1},
		6:{name: "dept 6", group: 1},
		7:{name: "dept 7", group: 1},
		8:{name: "dept 8", group: 1},
		9:{name: "dept 9", group: 1},
		10:{name: "dept 10", group: 1},
		11:{name: "dept 11", group: 1},
		12:{name: "dept 12", group: 1},
		13:{name: "dept 13", group: 1},
		14:{name: "dept 14", group: 1},
		15:{name: "dept 15", group: 1},
		16:{name: "dept 16", group: 1},
		17:{name: "dept 17", group: 1},
		18:{name: "dept 18", group: 1},
		19:{name: "dept 19", group: 1},
		20:{name: "dept 20", group: 1},
		21:{name: "dept 21", group: 1},
		
	}
}

function getDeptItems(id){
	var arr = [];

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