let input = document.getElementById('input')
let span = document.querySelector('span')

sessionStorage.setItem("token", "bearer hdhfhffbbddsddd admin")

$(".translate").change(function() {
    let langue = $(this).val();
    sessionStorage.setItem("lang", langue)
    sessionStorage.setItem("langue", sessionStorage.getItem("lang"))
})

let langMenu = {
    '0': {
        'home': 'accueil',
        'publications': 'publications',
        'pubsousmanu': {
            'actualite': 'actualités',
            'rapports': 'rapports',
            'offres': 'offres'
        },
        'projets': 'projets',
        'projet': {
            'encours': 'projets encours',
            'realise': 'projets réaliser'
        },
        'apropos': 'apropos',
        'contact': 'contactez-nous'
    },
    '1': {
        'home': 'Home',
        'publication': 'publications',
        'pubsousmanu': {
            'actualite': 'news',
            'rapports': 'reports',
            'offres': 'offers'
        },
        'projets': 'projects',
        'projet': {
            'encours': 'current projects',
            'realise': 'projects carried out'
        },
        'apropos': 'about',
        'contact': 'contact us'
    },
    '2': {
        'home': 'Hogar',
        'publication': 'publicaciones',
        'pubsousmanu': {
            'actualite': 'noticias',
            'rapports': 'informes',
            'offres': 'ofertas'
        },
        'projets': 'proyectos',
        'projet': {
            'encours': 'proyectos en curso',
            'realise': 'proyectos realizados'
        },
        'apropos': 'acerca de',
        'contact': 'Contáctenos'
    },
    '3': {
        'home': 'home',
        'publication': 'machapisho',
        'pubsousmanu': {
            'actualite': 'habari',
            'rapports': 'ripoti',
            'offres': 'inatoa'
        },
        'projets': 'miradi',
        'projet': {
            'encours': 'miradi ya sasa',
            'realise': 'miradi iliyotekelezwa'
        },
        'apropos': 'kuhusu sisi',
        'contact': 'Wasiliana nasi'
    },
}


let langFooter = {
    '0': {
        'Contanct': 'Contanctez-nous',
        'partenaire': 'partenaires',
        'publication': 'publication',
        'pubsous': {
            'projets': 'Projets encours',
            'actualite': 'actualités',
            'rapports': 'rapports'
        },
        'social': 'Reseaux social',
        'logo': 'partenaires logo',
    },
    '1': {
        'Contanct': 'Contact us',
        'partenaire': 'partners',
        'publication': 'publication',
        'pubsous': {
            'projets': 'Current projects',
            'actualite': 'news',
            'rapports': 'reports'
        },
        'social': 'Social networks',
        'logo': 'partners logo',
    },
    '2': {
        'Contanct': 'Contáctenos',
        'partenaire': 'socios',
        'publication': 'publicación',
        'pubsous': {
            'projets': 'Proyectos en curso',
            'actualite': 'noticias',
            'rapports': 'informes'
        },
        'social': 'Redes sociales',
        'logo': 'socios logo',
    },
    '3': {
        'Contanct': 'Wasiliana nasi',
        'partenaire': 'washirika',
        'publication': 'uchapishaji',
        'pubsous': {
            'projets': 'Miradi ya sasa',
            'actualite': 'habari',
            'rapports': 'ripoti'
        },
        'social': 'Mitandao ya kijamii',
        'logo': 'washirika logo',
    }
}

let langBody = {
    '0': {
        'Contanct': 'Contanctez-nous',
        'partenaire': 'partenaires',
        'publication': 'publication',
        'pubsous': {
            'projet': 'Projets encours',
            'actualite': 'actualités',
            'rapports': 'rapports'
        },
        'logo': 'partenaires logo',
    },
}


$(function() {
    $(".translate").click(function() {
        let langue = $(this).attr('id');
        $(".langs").each(function(index, element) {
            $(this).text(langFooter[langue][$(this).attr('key')]);
            $(this).text(langFooter[langue]['pubsous'][$(this).attr('key')]);
        });
    });
})

$(function() {
    $(".translate").change(function() {
        // let langue = $(this).val();
        let langue = sessionStorage.getItem("langue");
        console.log(langue)
        $(".langs").each(function(index, element) {
            $(this).text(langFooter[langue][$(this).attr('key')]);
            $(this).text(langFooter[langue]['pubsous'][$(this).attr('key')]);
            $(this).text(langMenu[langue][$(this).attr('key')]);
            $(this).text(langMenu[langue]['pubsousmanu'][$(this).attr('key')]);
            $(this).text(langMenu[langue]['projet'][$(this).attr('key')]);
        });
    });
})



let langSession = sessionStorage.getItem("langue");
if (langSession !== null) {
    $(".langs").each(function(index, element) {
        $(this).text(langFooter[langSession][$(this).attr('key')]);
        $(this).text(langFooter[langSession]['pubsous'][$(this).attr('key')]);
        $(this).text(langMenu[langSession][$(this).attr('key')]);
        $(this).text(langMenu[langSession]['pubsousmanu'][$(this).attr('key')]);
        $(this).text(langMenu[langSession]['projet'][$(this).attr('key')]);
    });
}


function langue() {
    let langSession = sessionStorage.getItem("langue");
    if (langSession == 0) {
        return "fr"
    } else {
        return "en"
    }
}