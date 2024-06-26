$("#GetFile").on("click", function () {
    $.ajax({
      url: "../Brochure.pdf",
      method: "GET",
      xhrFields: {
        responseType: "blob",
      },
      success: function (data) {
        var a = document.createElement("a");
        var url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = "PSAT_Brochure.pdf";
        document.body.append(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      },
    });
  });
  