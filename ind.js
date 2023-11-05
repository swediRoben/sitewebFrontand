let input = document.getElementById('input')
let span = document.querySelector('span')

sessionStorage.setItem("token", "bearer hdhfhffbbddsddd admin")

$(".translate").change(function() {
    var langue = $(this).val();
    sessionStorage.setItem("lang", langue)
    sessionStorage.setItem("langue", sessionStorage.getItem("lang"))
})

$(function() {
    $(".translate").click(function() {
        var langue = $(this).attr('id');
        $(".langs").each(function(index, element) {
            $(this).text(menuApropos[langue][$(this).attr('key')]);
            $(this).text(menuApropos[langue]['pubsous'][$(this).attr('key')]);
        });
    });
})

$(function() {
    $(".translate").change(function() {
        // var langue = $(this).val();
        var langue = sessionStorage.getItem("langue");
        console.log(langue)

        $(".langs").each(function(index, element) {
            $(this).text(menuApropos[langue][$(this).attr('key')]);
            $(".langsSous").each(menuApropos[langue]["0"], function(i, value) {
                $(this).text(value[$(this).attr('key')]);
            });


            $(this).text(menuApropos[langue]['pubsous'][$(this).attr('key')]);
            $(this).text(index[langue][$(this).attr('key')]);
            $(this).text(index[langue]['pubsousmanu'][$(this).attr('key')]);
            $(this).text(index[langue]['projet'][$(this).attr('key')]);
        });
    });
})



var langSession = sessionStorage.getItem("langue");
if (langSession !== null) {
    $(".langs").each(function(index, element) {
        $(this).text(menuApropos[langSession][$(this).attr('key')]);
        $(this).text(menuApropos[langSession]['pubsous'][$(this).attr('key')]);
        $(this).text(index[langSession][$(this).attr('key')]);
        $(this).text(index[langSession]['pubsousmanu'][$(this).attr('key')]);
        $(this).text(index[langSession]['projet'][$(this).attr('key')]);
    });
}


function langue() {
    var langSession = sessionStorage.getItem("langue");
    if (langSession == 0) {
        return "fr"
    } else {
        return "en"
    }
}