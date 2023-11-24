$(function() {
    let lang = langue();
    let langSession = sessionStorage.getItem("langue");

    $('.input-select').append('<option value="">All Categories</option>');

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
        'idusercreate': '',
        'Contanct': '',
        'typefichier': '',
        'titre': '',
        'content': '',
        'langue': '',
        'urlFile': '',
    }

    // <form action="#" method="post" className="form-control" id="indexJson" encType="multipart/form-data">
    //             <label htmlFor="titre">id:</label>
    //             <input type="text" id="id" name="id" /><br />
    //             <label htmlFor="titre">titre:</label>
    //             <input type="text" id="titre" name="titre" /><br />
    //             <label htmlFor="description">description :</label>
    //             <input type="text" id="description" name="description" /><br />
    //             <label htmlFor="titreContent">titre 2 :</label>
    //             <input type="text" id="titreContent" name="titreContent" /><br />
    //             <label htmlFor="content">content :</label>
    //             <input type="text" id="content" name="content" /><br />
    //             <label htmlfor="profile-lastname">Langue :</label>
    //             <input type="text" id="langue" name="langue" />
    //             <input type="file" name="files[]" id="fileIndex" multiple accept="JPEG" /><br />
    //             <button type="submit">Enregistrer</button><br /></form>

    console.log(langFooter.Contanct)
});