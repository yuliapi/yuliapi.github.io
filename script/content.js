var data = '%data%';
var projects = {
    "keysMain": {
        "project1": {
            "name": "Time counter",
            "src": "images/time-counter.jpg",
            "alt": "counter-image",
            "gitLink": "https://github.com/yuliapi/timeCounter",
            "demo": "projects/timeCounter/index.html",
            "description": "It’s nice looking spinning progress counter, written in pure HTML, CSS and Javascript with no extra libs."
        },
        "project2": {
            "name": "mamaHelp CRUD prototype",
            "src": "images/mamahelp.jpg",
            "alt": "mamahelp-image",
            "gitLink": "https://github.com/yuliapi/mamahelp",
            "demo": "http://mamahelp.herokuapp.com/",
            "description": "The working prototype for Beehelper project that covers authentication, help-entry creation, validation and list view. Form templates are Jade based and are served to the user with Django based backend."
        },
        "project3": {
            "name": "beehelper prototype",
            "src": "images/beehelper.jpg",
            "alt": "beehelper image",
            "gitLink": "https://github.com/yuliapi/beehelper-prototype",
            "demo": "projects/beehelper-prototype/templates/index.html",
            "description": "The prototype of online social networking resource. It is a result of general requirement collection phase and visualizing of general application flows."
        },
        "project5": {
            "name": "Carousel",
            "src": "images/carousel.jpg",
            "alt": "carousel",
            "gitLink": "https://github.com/yuliapi/carousel",
            "demo": "projects/carousel/index.html",
            "description": "Reusable slider component written with pure Javascript. Beautiful animation, rich user experience. Responsive and cross-browser compatible (Chrome, Safari, Firefox and Opera)."
        },
        "project4": {
            "name": "Blog display template",
            "src": "images/myGallery.jpg",
            "alt": "project image",
            "gitLink": "https://github.com/yuliapi/myGallery-layout",
            "demo": "https://yuliapi-gallery.herokuapp.com/",
            "description": "Template backed by Node.js RESTful API and PostgreSQL persistence layer. Gallery built with plain Javascript and CSS."
        }


    },
    // "keysOther": {
    //
    // },
    display: function () {

        displayProjects(projects.keysMain, '#gallery');
        // displayProjects(projects.keysOther, '#second-row')
    }
};
function addOverlay(demo, git) {
    var overlay = $('<div class="overlay"></div>');
    var inner = $('<div class="overlay-inner"></div>');
    var span = $('<span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>');
    inner.append(span);
    inner.append(demo);
    inner.append(git);
    inner.appendTo(overlay);
    return overlay
}



function displayProjects(keys, holder) {
    var div = $(holder);

    for (var property in keys) {
        if (keys.hasOwnProperty(property)) {
            var object = keys[property];
            var formattedImage = image(object);
            var formattedTitle = HTMLgalleryTitle.replace(data, object.name);
            var wrapper = $('<div class="image-wrapper"></div>');
            wrapper.append(formattedImage);
            var gitLink = $(HTMLgalleryLink.replace(data, "View on GitHub")).attr("href", object.gitLink);
            var demoLink = $(HTMLgalleryLink.replace(data, "View demo")).attr("href", object.demo);
            var overlay = addOverlay(demoLink, gitLink);
            wrapper.append(overlay);
            var text = HTMLgalleryText.replace(data, object.description);
            div.prepend(HTMLgalleryStart);
            var projectEntry = $(div).find('.project-entry:first');
            projectEntry.append(wrapper);
            projectEntry.append(formattedTitle);
            projectEntry.append(text);
        }
    }

}

function image(data) {
    var image = $(HTMLgalleryImage);
    image.attr('src', data.src);
    image.attr('alt', data.alt);
    return image
}

projects.display();
