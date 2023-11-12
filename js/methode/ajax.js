$(function() {

    function get(url, param, lang, token) {
        let data = new Object();
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": token,
                "Access-Control-Allow-Origin": "*"
            },
            success: function(response) {

                data["response"] = response.data.content;

            }
        });

        return data;
    }

    function getImage(url, id, filename, lang, token) {
        let conten = new Object();
        $.ajax({
            type: "GET",
            url: url + '/' + id + '/' + filename,
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": token,
                "Access-Control-Allow-Origin": "*"
            },
            success: function(response) {
                conten['response'] = response.data.content;
            }
        });
        return conten;
    }

    function post(url, data, lang, token) {
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json",
            headers: {
                "Accept-Language": lang,
                "token": token,
                "Access-Control-Allow-Origin": "*"
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
                "token": token,
                "Access-Control-Allow-Origin": "*"
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
                "token": token,
                "Access-Control-Allow-Origin": "*"
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
                "token": token,
                "Access-Control-Allow-Origin": "*"
            },
            success: function(response) {
                sessionStorage.setItem("response", response.message)
            }
        });
        return sessionStorage.getItem("response");
    }

    let lang = langue();
    let langSession = sessionStorage.getItem("langue");
    $("#publication").submit(function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        let files = $('#files')[0].files;
        for (const element of files) {
            formData.append("file[]", element);
        }
        let response = postWithImage("http://localhost:3031/publication/", formData, lang, langSession);
        console.log(response)
    });

    $("#indexJson").submit(function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        let files = $('#fileIndex')[0].files;
        for (const element of files) {
            formData.append("file[]", element);
        }
        console.log(formData)
        let response = postWithImage("http://localhost:3031/index/", formData, lang, langSession);
        console.log(response)
    });

    // Authorization: this.authService.getBasicAuth()


});