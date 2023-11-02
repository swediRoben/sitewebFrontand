let input = document.getElementById('input')
let span = document.querySelector('span')

sessionStorage.setItem("token", "bearer hdhfhffbbddsddd admin")

$(".translate").change(function() {
    var langue = $(this).val();
    sessionStorage.setItem("lang", langue)
    sessionStorage.setItem("langue", sessionStorage.getItem("lang"))
})

var index = {
    '0': {
        "titre": "titre",
        "img": {
            "1": {
                'img': 'url',
                'description': ''
            }
        },
        "descritiption": "descr",
        "langue": 0
    },
    '1': {
        "titre": "titre",
        "img": {
            "1": {
                'img': 'url',
                'description': ''
            }
        },
        "descritiption": "descr",
        "langue": 0
    },
    '2': {
        "titre": "titre",
        "img": {
            "1": {
                'img': 'url',
                'description': ''
            }
        },
        "descritiption": "descr",
        "langue": 0
    },
    '3': {
        "titre": "titre",
        "img": {
            "1": {
                'img': 'url',
                'description': ''
            }
        },
        "descritiption": "descr",
        "langue": 0
    },
}


var menuApropos = {
    '0': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '1': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '2': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '3': {
        '1': {
            'key': '1',
            'description': 'desc'
        },

    }
}

var aproposDesciption = {
    '0': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '1': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '2': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    },
    '3': {
        '1': {
            'key': '1',
            'description': 'desc'
        },
    }
}

var contanct = {
    '0': {
        'titre': 'titre',
        'description': 'desc'
    },
    '1': {
        'titre': 'titre',
        'description': 'desc'
    },
    '2': {
        'titre': 'titre',
        'description': 'desc'
    },
    '3': {
        'titre': 'titre',
        'description': 'desc'
    }
}


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