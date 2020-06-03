$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    var total = Object.keys(data).length;
    $("#submitted").append(total);

    const failed = data.filter((val) => val.status === "failed");
    $("#failed").append(failed.length);
    const passed = data.filter((val) => val.status === "passed");
    $("#passed").append(passed.length);

    var intern_data = "";
    $.each(data, function (key, value) {
      var sn = parseInt(key + 1);
      intern_data +=
        '<tr class= " ' +
        (value.status === "passed" ? "passed" : "failed") +
        ' ">';
      intern_data += "<td>" + sn + "</td>";
      intern_data += "<td>" + value.name + "</td>";
      intern_data += "<td>" + value.id + "</td>";
      intern_data += "<td>" + value.email + "</td>";
      intern_data += "<td>" + value.message + "</td>";
      intern_data += "<td>" + value.status + "</td>";
      intern_data += "</tr>";
    });
    $("#table").append(intern_data);
  });
});
