$(function() {
    let lang = langue();
    let langSession = sessionStorage.getItem("langue");

    $('.input-select').append('<option selected>All Categories</option>');

    $.ajax({
        type: "GET",
        url: "http://localhost:3031/constante/type",
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {
            $.each(response.data, function(i, data) {
                $('.input-select').append('<option value="' + data.key + '">' + data.value + '</option>');

            });
        }
    });

    // POUR LE FORMULAIRE 

    $('.type').append('<option selected >TYPE DE PUBLICATION</option>');
    $.ajax({
        type: "GET",
        url: "http://localhost:3031/constante/type",
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {
            $.each(response.data, function(i, data) {
                $('.type').append('<option value="' + data.key + '">' + data.value + '</option>');

            });
        }
    });


    $('.typefichier').append('<option selected>TYPE DE FICHIER</option>');

    $.ajax({
        type: "GET",
        url: "http://localhost:3031/constante/typefichier",
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {
            $.each(response.data, function(i, data) {
                $('.typefichier').append('<option value="' + data.key + '">' + data.value + '</option>');

            });
        }
    });


    $('.langue').append('<option selected>LANGUE</option>');

    $.ajax({
        type: "GET",
        url: "http://localhost:3031/constante/langue",
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {
            $.each(response.data, function(i, data) {
                $('.langue').append('<option value="' + data.key + '">' + data.value + '</option>');

            });
        }
    });

    // SELECT BY TYPE
    $(".input-select").change(function(e) {
        e.preventDefault();
        $(".table .tbody tr").remove();
        let lang = 0;
        if (langSession !== null) {
            lang = langSession;
        }
        $.ajax({
            type: "GET",
            url: "http://localhost:3031/publication/?type=" + $(this).val() + "&langue=" + lang,
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": ""
            },
            success: function(response) {

                $.each(response.data.content, function(i, data) {
                    $(".table .tbody").append('<tr>' +
                        '<th scope="row">' + i + '</th>' +
                        '<td>' + data.titre + '</td>' +
                        '<td>' + data.types.value + '</td>' +
                        '<td>' + data.dateupdate + '</td>' +
                        '<td><a href="view.html?key=' + data.id + '"  className="btn btn-sm btn-secondary m-1">view</a></td>' +
                        '<td><a href="#" key="' + data.id + '"  type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-sm btn-secondary m-1">edit</a></td>' +
                        '<td><a href="#" key="' + data.id + '"   type="button" data-bs-toggle="modal" data-bs-target="#myModalDelete" className="btn btn-sm btn-secondary m-1">delete</a></td>' +
                        '</tr>');

                });
            }
        });
    });

    // CHANGE FILE BY TYPE FICHIER
    $("#formFile").hide();
    $(".urlFile").hide();
    $(".typefichier").change(function(e) {
        e.preventDefault();
        let val = $(this).val();
        if (val !== "1") {
            $(".urlFile").hide();
            $("#formFile").show();
        } else {
            $("#formFile").hide();
            $(".urlFile").show();
        }
    });

    // AFFICHER TABLEAU
    $(".table .tbody tr").remove();
    let lange = 0;
    if (langSession !== null) {
        lang = langSession;
    }
    $.ajax({
        type: "GET",
        url: "http://localhost:3031/publication/?langue=" + lange,
        dataType: "json",
        headers: {
            "Accept-Language": lang,
            "token": ""
        },
        success: function(response) {

            $.each(response.data.content, function(i, data) {
                $(".table .tbody").append('<tr>' +
                    '<th scope="row">' + i + '</th>' +
                    '<td>' + data.titre + '</td>' +
                    '<td>' + data.types.value + '</td>' +
                    '<td>' + data.dateupdate + '</td>' +
                    '<td><a href="view.html?key=' + data.id + '"  className="btn btn-sm btn-secondary m-1">view</a></td>' +
                    '<td><a href="#" key="' + data.id + '"  type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-sm btn-secondary m-1">edit</a></td>' +
                    '<td><a href="#" key="' + data.id + '"   type="button" data-bs-toggle="modal" data-bs-target="#myModalDelete" className="btn btn-sm btn-secondary m-1">delete</a></td>' +
                    '</tr>');

            });
        }
    });

    // RECHERCHE

    $(".search-f").submit(function(e) {
        e.preventDefault();
        $(".table .tbody tr").remove();
        let titre = $(".search-f .search").val();
        let type = $(".search-f .input-select").val();

        console.log(titre)
        let lange = 0;
        if (langSession !== null) {
            lang = langSession;
        }
        $.ajax({
            type: "GET",
            url: "http://localhost:3031/publication/?langue=" + lange + "&type=" + type + "&description=" + titre,
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": ""
            },
            success: function(response) {

                $.each(response.data.content, function(i, data) {
                    $(".table .tbody").append('<tr>' +
                        '<th scope="row">' + i + '</th>' +
                        '<td>' + data.titre + '</td>' +
                        '<td>' + data.types.value + '</td>' +
                        '<td>' + data.dateupdate + '</td>' +
                        '<td><a href="view.html?key=' + data.id + '"  className="btn btn-sm btn-secondary m-1">view</a></td>' +
                        '<td><a href="#" key="' + data.id + '"  type="button" data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-sm btn-secondary m-1">edit</a></td>' +
                        '<td><a href="#" key="' + data.id + '"   type="button" data-bs-toggle="modal" data-bs-target="#myModalDelete" className="btn btn-sm btn-secondary m-1">delete</a></td>' +
                        '</tr>');

                });
            }
        });

    });



    let form = {
        'type': '',
        'typeValue': '',
        'idusercreate': '',
        'typefichier': '',
        'typefichierValue': '',
        'titre': '',
        'content': '',
        'langue': '',
        'langueValue': '',
        'urlFile': ''
    }

    $(".search-f").submit(function(e) {
        e.preventDefault();

        let lange = 0;
        if (langSession !== null) {
            lang = langSession;
        }
        $.ajax({
            type: "GET",
            url: "http://localhost:3031/publication/?langue=" + lange + "&type=0",
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": ""
            },
            success: function(response) {

                $.each(response.data.content, function(i, data) {
                    let path = data.image[0].path;
                    form.type = data.types.key;
                    form.typeValue = data.types.value;
                    form.idusercreate = data.idusermodif;
                    form.typefichier = data.typefichiers.key;
                    form.typefichierValue = data.typefichiers.value;
                    form.titre = data.titre;
                    form.content = data.content;
                    form.langue = data.langues.key;
                    form.langueValue = data.langues.value;
                    if (data.typefichiers.key === 1) {
                        form.urlFile = path;
                        $(".urlFile").show();
                    }

                });
            }
        });
        $(".titre").attr("value", form.titre);
        $(".content").attr("value", form.content);
        $(".urlFile").attr("value", form.urlFile);
        $(".idusercreate").attr("value", form.idusercreate);
        $('.type').append('<option value="' + form.type + '" selected>' + form.typeValue + '</option>');
        $('.typefichier').append('<option value="' + form.typefichier + '" selected>' + form.typefichierValue + '</option>');
        $('.langue').append('<option value="' + form.langue + '" selected>' + form.langueValue + '</option>');
    });



    $("#publication").submit(function(event) {
        event.preventDefault();
        let id = $(this).attr("key");
        let method = $(this).attr("method");
        console.log(method)
        let formData = new FormData(this);
        // formData.append('file[]', $('#files')[0].files[0]);
        let files = $('#formFile')[0].files;
        for (const element of files) {
            formData.append("file[]", element);
        }

        $.ajax({
            type: method,
            url: "http://localhost:3031/publication/" + id,
            data: formData,
            scriptCharset: "utf-8",
            enctype: "multipart/form-data",
            processData: false,
            contentType: false,
            headers: {
                "Accept-Language": lang,
                "token": "",
                "Access-Control-Allow-Origin": "*"
            },
            success: function(response) {
                console.log(response.message)

            }
        });

    });

});