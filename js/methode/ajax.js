$(function() {

    // var tech = getUrlParameter('technology');
    // var blog = getUrlParameter('blog');

    function get(url, param, lang, token) {
        var data = new Object();
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": token
            },
            success: function(response) {
                data['response'] = response.data.content;
            }
        });
        return data;
    }

    var dataJson = {
        "mail": "jym@gmail.com",
        "typemail": 0,
        "telephone": "0990979",
        "adresse": "uvira, kamrngr/05",
        "datedebut": "2016-12-13"
    }

    function post(url, dataJson, lang, token) {
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(dataJson),
            contentType: "application/json",
            headers: {
                "Accept-Language": lang,
                "token": token
            },
            success: function(response) {
                sessionStorage.setItem("response", response.message)

            }
        });
        return sessionStorage.getItem("response");
    }

    function put(url, id, dataJson, lang, token) {
        $.ajax({
            type: "PUT",
            url: url + id,
            data: JSON.stringify(dataJson),
            contentType: "application/json",
            headers: {
                "Accept-Language": lang,
                "token": token
            },
            success: function(response) {
                sessionStorage.setItem("response", response.message)

            }
        });
        return sessionStorage.getItem("response");
    }

    function del(url, id, lang, token) {
        $.ajax({
            type: "DELETE",
            url: url + id,
            contentType: "application/json",
            headers: {
                "Accept-Language": lang,
                "token": token
            },
            success: function(response) {
                sessionStorage.setItem("response", response.message)
            }
        });
        return sessionStorage.getItem("response");
    }

    var res = del("http://localhost:3031/adresse/", 2, "fr", "");
    var resultat = get("http://localhost:3031/adresse/", "", "fr", "");
    console.log(resultat)

    $.each(resultat, function(i, data) {
        $(".adresse").text(data.adresse);
        $(".tel").text(data.telephone);
        $(".mail").text(data.mail);
    });


});