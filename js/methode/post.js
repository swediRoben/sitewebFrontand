$(function() {
    let lang = langue();
    let langSession = sessionStorage.getItem("langue");

    // $("#index").submit(function(event) {
    //     alert("on")
    //     event.preventDefault();
    //     var formData = new FormData(this);
    //     let files = $('#file')[0].files;
    //     for (const element of files) {
    //         formData.append('file[]', element);
    //     }
    //     console.log(formData)
    //     let response = post("http://localhost:3031/publication/", formData, lang, langSession);
    //     console.log(response)
    // });

    // if (langSession !== null) {
    //     $.ajax({
    //         type: "GET",
    //         url: "http://localhost:3031/publication/?type=0&typeFichier=0&langue=" + langSession,
    //         dataType: "json",
    //         headers: {
    //             "Accept-Language": lang,
    //             "token": ""
    //         },
    //         success: function(response) {
    //             $.each(response.data.contents, function(i, data) {
    //                 $(".act1").attr("src", data.urlfile);
    //                 $(".titre").text(data.titre);
    //                 $(".act2").attr("src", data.urlfile);
    //                 $(".date").text(data.date);
    //                 $(".act3").attr("src", data.urlfile);
    //                 $(".mail").text(data.mail);

    //             });
    //             console.log(response)
    //         }
    //     });
    // }
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:3031/publication/?type=0&typeFichier=0&langue=" + langSession,
    //     dataType: "json",
    //     headers: {
    //         "Accept-Language": lang,
    //         "token": ""
    //     },
    //     success: function(response) {
    //         $.each(response.data.contents, function(i, data) {
    //             $(".act1").attr("src", data.urlfile);
    //             $(".titre").text(data.titre);
    //             $(".act2").attr("src", data.urlfile);
    //             $(".date").text(data.date);
    //             $(".act3").attr("src", data.urlfile);
    //             $(".mail").text(data.mail);

    //         });
    //         console.log(response)
    //     }
    // });


    // $(".translate").change(function() {
    //     // var langue = $(this).val();
    //     var langue = sessionStorage.getItem("langue");
    //     $.ajax({
    //         type: "GET",
    //         url: "http://localhost:3031/publication/?type=0&typeFichier=0&langue=" + langue,
    //         dataType: "json",
    //         headers: {
    //             "Accept-Language": lang,
    //             "token": ""
    //         },
    //         success: function(response) {
    //             $.each(response.data.contents, function(i, data) {
    //                 $(".act1").attr("src", data.urlfile);
    //                 $(".titre").text(data.titre);
    //                 $(".act2").attr("src", data.urlfile);
    //                 $(".date").text(data.dateupdate);
    //                 $(".act3").attr("src", data.urlfile);

    //             });
    //             console.log(response)
    //         }
    //     });
    // });


    // $("#profile-form").submit(function(event) {
    //     event.preventDefault();
    //     let formData = new FormData();
    //     let files = $('#files')[0].files;
    //     for (const element of files) {
    //         formData.append('files[]', element);
    //     }
    //     $.ajax({
    //         url: 'http://localhost:3031/publication/',
    //         type: 'POST',
    //         data: JSON.stringify(formData),
    //         processData: false,
    //         contentType: "application/json",
    //         headers: {
    //             "Accept-Language": lang,
    //             "token": ""
    //         },
    //         success: function(response) {
    //             console.log(response);
    //         },
    //         error: function(xhr, status, error) {
    //             console.log(error);
    //         }
    //     });
    // });

});