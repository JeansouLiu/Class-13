//this script is used for showing the data

//all
function global() {
    $.ajax({
        type: "get",
        url: 'summary.json',
        data: {},
        async: false,
        dataType: 'json',
        success: function (item) {
            var pageItem = "<table class='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>";
            pageItem += "<thead>";
            pageItem += "<tr>";
            pageItem += "<th>新增确诊</th>";
            pageItem += "<th>累计确诊</th>";
            pageItem += "<th>新增死亡</th>";
            pageItem += "<th>累计死亡</th>";
            pageItem += "<th>新增治愈</th>";
            pageItem += "<th>累计治愈</th>";
            pageItem += "</tr>";
            pageItem += "</thead>";
            pageItem += "<tbody>";
            pageItem += "<tr>";
            pageItem += "<td>" + item.Global.NewConfirmed + "</td>";
            pageItem += "<td>" + item.Global.TotalConfirmed + "</td>";
            pageItem += "<td>" + item.Global.NewDeaths + "</td>";
            pageItem += "<td>" + item.Global.TotalDeaths + "</td>";
            pageItem += "<td>" + item.Global.NewRecovered + "</td>";
            pageItem += "<td>" + item.Global.TotalRecovered + "</td>";
            pageItem += "</tr>";
            pageItem += "</tbody>";
            pageItem += "</table>";
            pageItem += "<h2>各个国家</h2>";
            pageItem += "<table class='mdl-data-table mdl-js-data-table mdl-shadow--2dp'>";
            pageItem += "<thead>";
            pageItem += "<tr>";
            pageItem += "<th class='mdl-data-table__cell--non-numeric'>国家</th>";
            pageItem += "<th>新增确诊</th>";
            pageItem += "<th>累计确诊</th>";
            pageItem += "<th>新增死亡</th>";
            pageItem += "<th>累计死亡</th>";
            pageItem += "<th>新增治愈</th>";
            pageItem += "<th>累计治愈</th>";
            pageItem += "<th class='mdl-data-table__cell--non-numeric'>最后更新（协调世界时）</th>";
            pageItem += "</tr>";
            pageItem += "</thead>";
            pageItem += "<tbody>";
            $.each(item.Countries, function (index, guojia) {
                pageItem += "<tr>";
                pageItem += "<td class='mdl-data-table__cell--non-numeric'>" + guojia.Country + "</td>";
                pageItem += "<td>" + guojia.NewConfirmed + "</td>";
                pageItem += "<td>" + guojia.TotalConfirmed + "</td>";
                pageItem += "<td>" + guojia.NewDeaths + "</td>";
                pageItem += "<td>" + guojia.TotalDeaths + "</td>";
                pageItem += "<td>" + guojia.NewRecovered + "</td>";
                pageItem += "<td>" + guojia.TotalRecovered + "</td>";
                pageItem += "<td class='mdl-data-table__cell--non-numeric'>" + guojia.Date + "</td>";
            });
            pageItem += "</tr>";
            pageItem += "</tbody>";
            pageItem += "</table>";
            $(pageItem).appendTo('#detail');
        }
    });
};
global();