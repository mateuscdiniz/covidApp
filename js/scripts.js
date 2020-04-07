const url = "https://covid19-brazil-api.now.sh/api/report/v1";

window.onload = function () {
    getInfo();
}

function getInfo() {
    
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
        var infos = request.response;

        showInfo(infos.data);
    }
}

function showInfo(infos) {
    console.log(infos)
    for (let i = 0; i < infos.length; i++) {
        let info = {
            state: infos[i].state,
            cases: infos[i].cases,
            deaths: infos[i].deaths

        }
        createTableElements(info);
        console.log(info);

    }
}

function createTableElements(info) {
    $("#info_table").append("<tr>");

    $("#info_table").append("<td>" + info.state + "</td>");
    $("#info_table").append("<td>" + info.cases + "</td>");
    $("#info_table").append("<td>" + info.deaths + "</td>");

    $("#info_table").append("</tr>");
}