/*!
* Start Bootstrap - Business Casual v7.0.8 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
/* window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
}) */
var Idioma=JSON.parse(localStorage.getItem("SatIdi"))?? "sp";
var Onestic=JSON.parse(localStorage.getItem("SatOn"))?? "index";

let idioma=document.getElementById("idioma")
let idi;
switch(Idioma){case "sp": idi="Español";break;case "fr": idi="Frances";break;case "cat": idi="Catalan";break;case "en":  idi="Ingles";break;}

idioma.innerHTML=`
    <select id="selectLang" onchange="idiomaSeleccionado()">
    <option value="${Idioma}" selected>${idi}</option>
    <option value="sp">Español</option>
    <option value="fr">Frances</option>
    <option value="en">Ingles</option>
    <option value="cat">Catalan</option>
    </select>`

function idiomaSeleccionado(){
    let seleccion = document.getElementById("selectLang").value;
    let keys= document.getElementsByTagName("meta")
    let span = document.getElementsByTagName("span")
    let as = document.getElementsByTagName("a")
    let ps = document.getElementsByTagName("p")

    Idioma=seleccion;
    switch(Idioma){
        case "sp": document.title='Satya - Traductora Profesional - comics webtoon novela grafica';
                   keys.keywords.content='sp, traduccion, español, frances, ingles, comics, webtoon, novela grafica';
                   span[1].innerHTML='Traductora Literaria';
                   span[2].innerHTML='Novelas graficas, cómics, webtoons';
                   as[1].innerHTML='Inicio';
                   as[2].innerHTML='Portfolio';
                   as[3].innerHTML='Colectivo';
                   as[4].innerHTML='Quien soy?';
                   as[5].innerHTML='Contacto';

                   switch(Onestic){
                     case "index":  span[4].innerHTML='Traductora Literaria';
                                     as[6].innerHTML='Contacta!';
                                     ps[0].innerHTML='¿Eres un profesional del mundo del libro y buscas una traductora literaria que ademas domine la terminología del cómic y del mundo editorial para traducir tus documentos profesionales, websitios, o catálogos?';
                                     ps[1].innerHTML='¿Eres autor/a de cómic, y quieres enviar tu proyecto a las editoriales en un francés perfecto?';
                                     ps[2].innerHTML='¿No formas parte del mundo del libro pero te interesa mi perfil?';
                                     ps[3].innerHTML='¡No dudes en contactarme para que intercambiemos y hablemos juntos de tus proyectos!'; break;
                     case "port":   document.getElementsByTagName("h1")[1].innerHTML='PORTFOLIO';
                                    as[6].innerHTML='Todos';
                                    as[7].innerHTML='Comics';
                                    as[9].innerHTML='Novela Grafica';
                                    as[10].innerHTML='Español/Francés';
                                    as[11].innerHTML='Inglés/Francés'; break;
                     case "colec": span[3].innerHTML='Colectivo profesional';
                                   span[4].innerHTML='Colectivo Débullé';
                                   ps[0].innerHTML=`Soy parte de un colectivo de profesionales especializados en adaptación de cómics.
                                   Débullé junta traductores (del inglés, japonés, coreano, mandarino, castellano y más),
                                   pero también letradores y correctores, todos espezializados en cómics, webtoons y manga. `;
                                   ps[1].innerHTML=`Somos un colectivo de profesionales free-lance que juntamos nuestras fuerzas para ofrecer
                                   a los editoriales una flexibilidad de tiempo, ofertas y perfiles y permetir de reducir
                                   los intermedios.`;break;
                     case "quien":  span[4].innerHTML='Quien soy?';
                                    let H3=document.getElementsByTagName("h3");
                                    H3[0].innerHTML='Traductora autonoma';
                                    H3[1].innerHTML='CAST/ING/FR';
                                    H3[2].innerHTML='Especializada en cómic, webtoon y el mundo del libro';
                                    ps[0].innerHTML='Olesa de Montserrat, Cataluña';
                                    ps[1].innerHTML='¡Traductora del castellano al francés en busca de nuevos proyectos!';
                                    ps[2].innerHTML='¿Eres autor·a de cómic, y quieres enviar tu proyecto a las editoriales en un francés perfecto? ¿Necesitas ayuda para encontrar el editor francés que encajara perfectamente con tu proyecto?';
                                    ps[3].innerHTML='¿Eres un professionnal del mundo del libro y buscas una traductora que domine la terminología del cómic y del mundo editorial para traducir tus documentos profesionales, websitios, o catologos?';
                                    ps[4].innerHTML='¿No formas parte del mundo del libro pero te interesa mi perfil?';
                                    ps[5].innerHTML='¡No dudes en contactarme para que intercambiemos y hablemos juntos de tus proyectos!';
                                    H3[3].innerHTML='Experiencia';
                                    ps[6].innerHTML='Traducción ES>FR   *Traducción de un cómic de Hernán Migoya y de Manolo Carot para Glénat';
                                    ps[7].innerHTML='Traductora de webtoon IN>FR   *Traducción del webtoon "I want to escape princess lessons".';
                                    ps[8].innerHTML='Traductora cómic ES>FR   *Traducción del cómic, "Le Premier Dumas" T.1 de Salva Rubio y Rubén Del Rincón';
                                    ps[9].innerHTML='Traductora autónoma ES>FR   *Traductora autonóma para el mundo del cómic: páginas, pitch, sinopsis, biografías, entrevistas, correos profesionales, candidaturas para residencia artística.';
                                    ps[10].innerHTML='Librera especializada en cómic   *responsable de lenguas extranjeras de la librería, atención de autores y público extranjero, sección V.O., responsable redacción, responsable comunicación y eventos';
                                    //segunda sección 
                                    span[6].innerHTML='Traducciones personalizadas';
                                    span[7].innerHTML='Profesionalidad';
                                    ps[11].innerHTML='Soy una especialista en traducciones en 4 idiomas (ES, FR, ING, CAT)';
                                    ps[12].innerHTML='Siempre al dia, de las últimas mejoras en traducción';
                                    H3[4].innerHTML='Educación';
                                    ps[13].innerHTML='Edvenn   Traducción del castellano al Francés, Documentación, terminología, técnicas de traducción, garantía, calidad';
                                    ps[14].innerHTML='IUT de Paris- Rives de Seine    Licenciatura profesional, Profesiones Editoriales';
                                    ps[15].innerHTML='Northumbria University   Estudios de la Información';
                                    ps[16].innerHTML='IUT Nancy-Charlemagne  DUT, Profesiones del Libro, Especialidad Librería';
                                    ps[17].innerHTML='Université Rennes 2    Universidad, Bellas Artes y Artes Plásticas';
                     break;
                     case "cont": span[3].innerHTML='Contacto'; span[9].innerHTML='Telefono (ES)';span[11].innerHTML='Telefono (FR)';break;
                    } 
        break;
        case "fr": document.title='Satya - Traductrice professionnelle - bande dessinée webtoon roman graphique';
                   keys.keywords.content='fr, traduction, BD, bande dessinee, webtoon, roman,espagnol, traducteur';
                   span[1].innerHTML='Traductrice professionnel';
                   span[2].innerHTML='Romans graphiques, bandes dessinées, webtoons';
                   as[1].innerHTML='Accueil';
                   as[2].innerHTML='Portfolio';
                   as[3].innerHTML='Collectif';
                   as[4].innerHTML='Qui suis-je?';
                   as[5].innerHTML='Contact';

                   switch(Onestic){
                    case "index": span[4].innerHTML='Traductrice littéraire';
                                  as[6].innerHTML='Contactez!';
                                  ps[0].innerHTML=`Vous êtes un professionnel du monde du livre et vous recherchez un traducteur littéraire connaissant également la terminologie de la bande dessinée et le monde de l'édition pour traduire vos documents professionnels, sites internet ou catalogues?`;
                                  ps[1].innerHTML='Vous êtes auteur de BD, et souhaitez envoyer votre projet aux éditeurs dans un français parfait ?';
                                  ps[2].innerHTML='Vous ne faites pas partie du monde du livre mais vous êtes intéressé par mon profil ?';
                                  ps[3].innerHTML=`N'hésitez pas à me contacter pour que nous puissions échanger et parler ensemble de vos projets!`; break;
                    case "port":  document.getElementsByTagName("h1")[1].innerHTML='PORTFOLIO';
                                  as[6].innerHTML='Tout';
                                  as[7].innerHTML='Bande dessinée';
                                  as[9].innerHTML='Roman graphique';
                                  as[10].innerHTML='Espagnol/Français';
                                  as[11].innerHTML='Anglais/Français'; break;
                    case "colec":   span[3].innerHTML='Collectif professionnel';
                                    span[4].innerHTML='Collectif Débullé';
                                    ps[0].innerHTML=`Je fais partie d'un groupe de professionnels spécialisés dans l'adaptation de bandes dessinées.
                                    Débullé ensemble des traducteurs (de l'anglais, du japonais, du coréen, du mandarin, de l'espagnol et plus),
                                    mais aussi des écrivains et correcteurs, tous spécialisés dans la bande dessinée, les webtoons et le manga.`;
                                    ps[1].innerHTML=`Nous sommes un groupe de professionnels indépendants qui unissent leurs forces pour offrir
                                    éditeurs une flexibilité de temps, d'offres et de profils et permettent de réduire
                                    les intermédiaires.`;break;
                    case "quien":   span[4].innerHTML='Qui suis-je?';
                                    let H3=document.getElementsByTagName("h3");
                                    H3[0].innerHTML='Traducteur indépendant';
                                    H3[1].innerHTML='ESP/ANG/FR';
                                    H3[2].innerHTML=`Spécialisé dans la BD, le webtoon et l'univers du livre`;
                                    ps[0].innerHTML='Olesa de Montserrat, Catalogne';
                                    ps[1].innerHTML='¡Traductrice espagnol vers français à la recherche de nouveaux projets !';
                                    ps[2].innerHTML=`Vous êtes auteur de BD, et souhaitez envoyer votre projet aux éditeurs dans un français parfait ? Vous avez besoin d'aide pour trouver l'éditeur français qui conviendra parfaitement à votre projet ?`;
                                    ps[3].innerHTML=`Vous êtes un professionnel du monde du livre et vous cherchez un traducteur connaissant la terminologie de la bande dessinée et du monde de l'édition pour traduire vos documents professionnels, sites internet ou catalogues ?`;
                                    ps[4].innerHTML='¿Vous ne faites pas partie du monde du livre mais vous êtes intéressé par mon profil ?';
                                    ps[5].innerHTML=`¡N'hésitez pas à me contacter pour que nous puissions échanger et parler ensemble de vos projets !`;
                                    H3[3].innerHTML='Vivre';
                                    ps[6].innerHTML=`Traduction ES>FR *Traduction d'une BD par Hernán Migoya et Manolo Carot pour Glénat`;
                                    ps[7].innerHTML='Traduction de webtoons ANG>FR   *Traduction du webtoon "I want to escape princess lessons".';
                                    ps[8].innerHTML='Traducteur BD ES>FR *Traduction de la BD, "Le Premier Dumas" T.1 par Salva Rubio et Rubén Del Rincón';
                                    ps[9].innerHTML=`Traducteur indépendant ES>FR *Traducteur indépendant pour le monde de la bande dessinée : pages, pitch, synopsis, biographies, interviews, emails professionnels, demandes de résidence d'artiste.`;
                                    ps[10].innerHTML='Bookstore specialized in comics *responsible for foreign languages of the bookstore, attention to authors and foreign public, V.O. section, editorial manager, communication and events manager';
                                    //segunda sección 
                                    span[6].innerHTML='Traductions personnalisées';
                                    span[7].innerHTML='Professionnalisme';
                                    ps[11].innerHTML='Je suis spécialiste des traductions en 4 langues (ES, FR, ANG, CAT)';
                                    ps[12].innerHTML='Toujours à jour avec les dernières améliorations en matière de traduction';
                                    H3[4].innerHTML='Éducation';
                                    ps[13].innerHTML='Edvenn Translation from Spanish to French, Documentation, terminologie, techniques de traduction, garantie, qualité';
                                    ps[14].innerHTML=`IUT de Paris- Rives de Seine Licence Professionnelle, Métiers de l'Edition`;
                                    ps[15].innerHTML=`Études de l'information de l'Université de Northumbrie`;
                                    ps[16].innerHTML='IUT Nancy-Charlemagne DUT, Métiers du Livre, Spécialité Librairie';
                                    ps[17].innerHTML='Université Rennes 2, Beaux-Arts et Arts Plastiques';break;
                    case "cont": span[3].innerHTML='Contact'; span[9].innerHTML='Téléphone (ESP)';span[11].innerHTML='Téléphone (FR)'; break;
                    }       
        break;
        case "cat": document.title='Satya - Traductora Professional - comics webtoon novel·la gràfica';
                    keys.keywords.content='cat, traducció, traductor, traductora, comics, webtoon';      
                    span[1].innerHTML='Traductora professional';
                    span[2].innerHTML='Novel·les grafiques, còmics, webtoons';
                    as[1].innerHTML='Inici';
                    as[2].innerHTML='Portfolio';
                    as[3].innerHTML='Col·lectiu';
                    as[4].innerHTML='Qui sóc?';
                    as[5].innerHTML='Contacte';
                    
                    
                    switch(Onestic){
                     case "index":  span[4].innerHTML='Traductora Literària';
                                    as[6].innerHTML='Contacta!';
                                    ps[0].innerHTML='Ets un professional del món del llibre i busques una traductora literària que a més domini la terminologia del còmic i del món editorial per traduir els teus documents professionals, webs, o catàlegs?';
                                    ps[1].innerHTML='Ets autor/a de còmic, i vols enviar el teu projecte a les editorials en un francès perfecte?';
                                    ps[2].innerHTML='No formeu part del món del llibre però us interessa el meu perfil?';
                                    ps[3].innerHTML='No dubtis a contactar-me perquè intercanviem i parlem junts dels teus projectes!';break;
                    case "port":  document.getElementsByTagName("h1")[1].innerHTML='PORTFOLIO';
                                  as[6].innerHTML='Tots';
                                  as[7].innerHTML='Comics';
                                  as[9].innerHTML='Novel·la Grafica';
                                  as[10].innerHTML='Espanyol/Francès';
                                  as[11].innerHTML='Anglès/Francès'; break;
                    case "colec":   span[3].innerHTML='Col·lectiu professional';
                                    span[4].innerHTML='Col·lectiu Débullé';
                                    ps[0].innerHTML=`Sóc part d'un col·lectiu de professionals especialitzats en adaptació de còmics.
                                    Débullé ajunta traductors (de l'anglès, japonès, coreà, mandarí, castellà i més),
                                    però també lletradors i correctors, tots espesialitzats en còmics, webtoons i màniga.`;
                                    ps[1].innerHTML=`Som un col·lectiu de professionals free-lance que ajuntem les nostres forces per oferir
                                    als editorials una flexibilitat de temps, ofertes i perfils i permetre de reduir
                                    els intermedis.`;break;
                    case "quien":   span[4].innerHTML='Qui sóc?';
                                    let H3=document.getElementsByTagName("h3");
                                    H3[0].innerHTML='Traductora autònoma';
                                    H3[1].innerHTML='ESP/ING/FR';
                                    H3[2].innerHTML='Especialitzada en còmic, webtoon i el món del llibre';
                                    ps[0].innerHTML='Olesa de Montserrat, Catalunya';
                                    ps[1].innerHTML='¡Traductora del castellà al francès a la recerca de nous projectes!';
                                    ps[2].innerHTML=`¿Ets autora de còmic, i vols enviar el teu projecte a les editorials en un francès perfecte? Necessites ajuda per trobar l'editor francès que encaixés perfectament amb el teu projecte?`;
                                    ps[3].innerHTML='Ets un professional del món del llibre i busques una traductora que domini la terminologia del còmic i del món editorial per traduir els teus documents professionals, webs, o catòlegs?';
                                    ps[4].innerHTML='¿No formeu part del món del llibre però us interessa el meu perfil?';
                                    ps[5].innerHTML='¡No dubtis a contactar-me perquè intercanviem i parlem junts dels teus projectes!';
                                    H3[3].innerHTML='Experiència';
                                    ps[6].innerHTML=`Traducció ES>FR *Traducció d'un còmic d'Hernán Migoya i de Manolo Carot per a Glénat`;
                                    ps[7].innerHTML='Traductora de webtoon ING>FR   *Traducció del webtoon "I want to escape princess lessons".';
                                    ps[8].innerHTML='Traductora còmic ES>FR *Traducció del còmic, "Le Premier Dumas" T.1 de Salva Rubio i Rubén Del Rincón';
                                    ps[9].innerHTML='Traductora autònoma ES>FR *Traductora autònoma per al món del còmic: pàgines, pitch, sinopsi, biografies, entrevistes, correus professionals, candidatures per a residència artística.';
                                    ps[10].innerHTML='Bookstore specialized in comics *responsible for foreign languages of the bookstore, attention to authors and foreign public, V.O. section, editorial manager, communication and events manager';
                                    //segunda sección 
                                    span[6].innerHTML='Traduccions personalitzades';
                                    span[7].innerHTML='Professionalitat';
                                    ps[11].innerHTML='Sóc una especialista en traduccions en 4 idiomes (ES, FR, ING, CAT)';
                                    ps[12].innerHTML='Sempre al dia, de les darreres millores en traducció';
                                    H3[4].innerHTML='Educació';
                                    ps[13].innerHTML='Edvenn Traducció del castellà al Francès, Documentació, terminologia, tècniques de traducció, garantia, qualitat';
                                    ps[14].innerHTML='IUT de Paris- Rives de Seine Llicenciatura professional, Professions Editorials';
                                    ps[15].innerHTML='Northumbria University Estudis de la Informació';
                                    ps[16].innerHTML='IUT Nancy-Charlemagne DUT, Professions del Llibre, Especialitat Llibreria';
                                    ps[17].innerHTML='Université Rennes 2 Universitat, Belles Arts i Arts Plastiques';break;
                    case "cont": span[3].innerHTML='Contacte'; span[9].innerHTML='Telèfon (ESP)';span[11].innerHTML='Telèfon (FR)';break;
                    }
        break;
        case "en": document.title='Satya - Professional Translator - comics webtoon graphic novel'; 
                   keys.keywords.content='en, traslation, comics, webtoon, graphic novel, french, france';     
                   span[1].innerHTML='Profesional translator';
                   span[2].innerHTML='Graphic novels, comics, webtoons';
                   as[1].innerHTML='Home';
                   as[2].innerHTML='Portfolio';
                   as[3].innerHTML='Collective';
                   as[4].innerHTML='Who I am?';
                   as[5].innerHTML='Contact';
                   
                   switch(Onestic){
                    case "index":   span[4].innerHTML='Literary Translator';
                                    as[6].innerHTML='Contact!';
                                    ps[0].innerHTML='Are you a professional in the world of books and are you looking for a literary translator who also knows the terminology of comics and the publishing world to translate your professional documents, websites, or catalogues?';
                                    ps[1].innerHTML='Are you a comic author, and want to send your project to publishers in perfect French?';
                                    ps[2].innerHTML='You are not part of the book world but you are interested in my profile?';
                                    ps[3].innerHTML='Do not hesitate to contact me so that we can exchange and talk about your projects together!';break;
                    case "port":  document.getElementsByTagName("h1")[1].innerHTML='PORTFOLIO';
                                   as[6].innerHTML='All';
                                   as[7].innerHTML='Comics';
                                   as[9].innerHTML='Graphic novel';
                                   as[10].innerHTML='Spanish/French';
                                   as[11].innerHTML='English/French'; break;
                    case "colec":  span[3].innerHTML='Professional collective';
                                    span[4].innerHTML='Débullé collective';
                                    ps[0].innerHTML=`I am part of a group of professionals specialized in comic book adaptation.
                                    Débullé together translators (from English, Japanese, Korean, Mandarin, Spanish and more),
                                    but also writers and proofreaders, all specialized in comics, webtoons and manga.`;
                                    ps[1].innerHTML=`We are a group of freelance professionals who join forces to offer
                                    publishers a flexibility of time, offers and profiles and allow to reduce
                                    the intermediates.`;break;
                    case "quien":  span[4].innerHTML='Who I am?';
                                    let H3=document.getElementsByTagName("h3");
                                    H3[0].innerHTML='Freelance translator';
                                    H3[1].innerHTML='SPA/ENG/FR';
                                    H3[2].innerHTML='Specialized in comics, webtoon and the world of books';
                                    ps[0].innerHTML='Olesa de Montserrat, Catalonia';
                                    ps[1].innerHTML='Spanish to French translator looking for new projects!';
                                    ps[2].innerHTML='Are you a comic author, and want to send your project to publishers in perfect French? Do you need help finding the French editor that will fit perfectly with your project?';
                                    ps[3].innerHTML='Are you a professional in the world of books and are you looking for a translator who knows the terminology of comics and the publishing world to translate your professional documents, websites, or catalogues?';
                                    ps[4].innerHTML='¿You are not part of the book world but you are interested in my profile?';
                                    ps[5].innerHTML='¡Do not hesitate to contact me so that we can exchange and talk about your projects together!';
                                    H3[3].innerHTML='Experience';
                                    ps[6].innerHTML='ES>FR translation *Translation of a comic by Hernán Migoya and Manolo Carot for Glénat';
                                    ps[7].innerHTML='Webtoons Translator ENG>FR   *Webtoon Translator "I want to escape princess lessons".';
                                    ps[8].innerHTML='ES>FR comic translator *Translation of the comic, "Le Premier Dumas" T.1 by Salva Rubio and Rubén Del Rincón';
                                    ps[9].innerHTML='Freelance ES>FR translator *Freelance translator for the world of comics: pages, pitch, synopsis, biographies, interviews, professional emails, applications for artist residency.';
                                    ps[10].innerHTML='Bookstore specialized in comics *responsible for foreign languages of the bookstore, attention to authors and foreign public, V.O. section, editorial manager, communication and events manager';
                                    //segunda sección 
                                    span[6].innerHTML='Custom translations';
                                    span[7].innerHTML='Professionalism';
                                    ps[11].innerHTML='I am a specialist in translations in 4 languages (ES, FR, ENG, CAT)';
                                    ps[12].innerHTML='Always up to date with the latest improvements in translation';
                                    H3[4].innerHTML='Education';
                                    ps[13].innerHTML='Edvenn Translation from Spanish to French, Documentation, terminology, translation techniques, guarantee, quality';
                                    ps[14].innerHTML='IUT de Paris- Rives de Seine Professional degree, Publishing Professions';
                                    ps[15].innerHTML='Northumbria University Information Studies';
                                    ps[16].innerHTML='IUT Nancy-Charlemagne DUT, Book Professions, Bookseller Specialty';
                                    ps[17].innerHTML='Université Rennes 2 University, Fine Arts and Plastic Arts';break;
                    case "cont": span[3].innerHTML='Contact'; span[9].innerHTML='Telephone (SPA)';span[11].innerHTML='Telephone (FR)';break;
                    }
        break;}
        //location.reload();
        localStorage.setItem("SatIdi", JSON.stringify(Idioma));
}


function posicionarMenu() {
    var altura_del_header = $('.headbg').outerHeight(true);
    //var altura_del_menu = $('.menu').outerHeight(true);
 
    if ($(window).scrollTop() >= altura_del_header){
        $('.menu').addClass('fixed');
       // $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.menu').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}

function estoy(donde){Onestic=donde;localStorage.setItem("SatOn", JSON.stringify(Onestic));}

posicionarMenu();
idiomaSeleccionado();

$(window).scroll(function() {    
    posicionarMenu();
});