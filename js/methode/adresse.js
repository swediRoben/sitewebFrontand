$(function() {
    let lang = langue();

    $.ajax({
        type: "GET",
        url: "http://localhost:3031/adresse/",
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {
            $.each(response.data.content, function(i, data) {
                $(".adresse").text(data.adresse);
                $(".tel").text(data.telephone);
                $(".mail").text(data.mail);
            });
        }
    });
});