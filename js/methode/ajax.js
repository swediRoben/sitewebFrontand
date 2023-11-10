$(function() {

    function get(url, param, lang, token) {
        let data = new Object();
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

    function getImage(url, id, filename, lang, token) {
        let data = new Object();
        $.ajax({
            type: "GET",
            url: url + '/' + id + '/' + filename,
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

    function post(url, data, lang, token) {
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
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

    function postWithImage(url, data, lang, token) {

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            scriptCharset: "utf-8",
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
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
            type: "DEletE",
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

    let lang = langue();
    let langSession = sessionStorage.getItem("langue");
    $("#index").submit(function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        let files = $('#files')[0].files;
        for (const element of files) {
            formData.append("file[]", element);
        }
        let response = postWithImage("http://localhost:3031/publication/", formData, lang, langSession);
        console.log(response)
    });

    // Authorization: this.authService.getBasicAuth()

    let res = get("http://localhost:3031/publication/?type=0&typeFichier=0&langue=0", "", "fr", "");
    console.log("data :" + res)

    $.each(res, function(i, data) {
        // $(".adresse").text(data.adresse);
        // $(".tel").text(data.telephone);
        // $(".mail").text(data.mail);
        $(".act1").attr('src', "http://localhost:3031/publication/file/29/FB_IMG_16309613608351803.jpg");
    });



    // let resultat = get("http://localhost:3031/adresse/", "", "fr", "");


    // $.each(resultat, function(i, data) {
    //     $(".adresse").text(data.adresse);
    //     $(".tel").text(data.telephone);
    //     $(".mail").text(data.mail);
    // }); 

});