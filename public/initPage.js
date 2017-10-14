
$(document).ready(function () {
    console.log("init page")


    function createSidebar() {
        var departments = getDeptNames();

        for (i = 0; i < departments.length; i++) {
            var sidebarItem = document.createElement("div");
            sidebarItem.innerHTML = departments[i].name;
            document.getElementById("sidebar").appendChild(sidebarItem);
        }
    }

    createSidebar();
});

