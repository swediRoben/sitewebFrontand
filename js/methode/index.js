$(function() {
    let lang = langue();
    let langSession = sessionStorage.getItem("langue");

    if (langSession !== null) {
        $.ajax({
            type: "GET",
            url: "http://localhost:3031/publication/?type=0&typeFichier=0&langue=" + langSession + "&page=0&size=3",
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": ""
            },
            success: function(response) {
                $.each(response.data.content, function(i, data) {
                    if (i === 0) {
                        $.each(response.data.content, function(i, data) {
                            $.each(data.image, function(j, img) {
                                if (j === 0) {
                                    $(".act3").attr('src', "http://localhost:3031/publication/file/" + img.path);
                                }
                            });
                            $(".titre").text(data.titre);
                            $(".titre").attr('href', "plus.html");
                            $(".date").text(data.dateupdate);

                        });
                    }

                    if (i === 1) {
                        $.each(data.image, function(j, img) {
                            if (j === 0) {
                                $(".act1").attr('src', "http://localhost:3031/publication/file/" + img.path);
                            }
                        });
                        $(".titre1").text(data.titre);
                        $(".titre1").attr('href', "plus.html");
                        $(".date1").text(data.dateupdate);
                    }

                    if (i === 2) {
                        $.each(data.image, function(j, img) {
                            if (j === 0) {
                                $(".act2").attr('src', "http://localhost:3031/publication/file/" + img.path);
                            }
                        });
                        $(".titre2").text(data.titre);
                        $(".titre2").attr('href', "plus.html");
                        $(".date2").text(data.dateupdate);
                    }


                });
            }
        });
    }

    $(".translate").change(function() {
        // var langue = $(this).val();
        let langue = sessionStorage.getItem("langue");
        $.ajax({
            type: "GET",
            url: "http://localhost:3031/publication/?type=0&typeFichier=0&langue=" + langue + "&page=0&size=3",
            dataType: "json",
            headers: {
                "Accept-Language": lang,
                "token": "",
                "Access-Control-Allow-Origin": "*"
            },
            success: function(response) {
                $.each(response.data.content, function(i, data) {
                    if (i === 0) {
                        $.each(response.data.content, function(i, data) {
                            $.each(data.image, function(j, img) {
                                if (j === 0) {
                                    $(".act3").attr('src', "http://localhost:3031/publication/file/" + img.path);
                                }
                            });
                            $(".titre").text(data.titre);
                            $(".titre").attr('href', "plus.html");
                            $(".date").text(data.dateupdate);

                        });
                    }

                    if (i === 1) {
                        $.each(data.image, function(j, img) {
                            if (j === 0) {
                                $(".act1").attr('src', "http://localhost:3031/publication/file/" + img.path);
                            }
                        });
                        $(".titre1").text(data.titre);
                        $(".titre1").attr('href', "plus.html");
                        $(".date1").text(data.dateupdate);
                    }

                    if (i === 2) {
                        $.each(data.image, function(j, img) {
                            if (j === 0) {
                                $(".act2").attr('src', "http://localhost:3031/publication/file/" + img.path);
                            }
                        });
                        $(".titre2").text(data.titre);
                        $(".titre2").attr('href', "plus.html");
                        $(".date2").text(data.dateupdate);
                    }


                });
            }
        });
    });



    // $("#indexJson").submit(function(event) {
    //     event.preventDefault();
    //     let formData = new FormData(this);
    //     // formData.append('file[]', $('#files')[0].files[0]);
    //     let files = $('#fileIndex')[0].files;
    //     for (const element of files) {
    //         formData.append("file[]", element);
    //     }

    //     $.ajax({
    //         type: "POST",
    //         url: "http://localhost:3031/index/",
    //         data: formData,
    //         scriptCharset: "utf-8",
    //         enctype: "multipart/form-data",
    //         processData: false,
    //         contentType: false,
    //         headers: {
    //             "Accept-Language": lang,
    //             "token": "",
    //             "Access-Control-Allow-Origin": "*"
    //         },
    //         success: function(response) {
    //             console.log(response.message)

    //         }
    //     });

    // });

})