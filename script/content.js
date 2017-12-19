var data = '%data%';

var contacts = {
    "keys": {
        ".linkedin": "https://www.linkedin.com/in/yuliapi/",
        ".github": "https://github.com/yuliapi"
    },

    display: function () {
        var arr;
        for (var property in contacts.keys) {
            if (contacts.keys.hasOwnProperty(property)) {
                arr = $(property);
                for (var i = 0; i < arr.length; i++) {
                    arr[i].href = contacts.keys[property];

                }
            }
        }
    }
};

var skills = {
    "keys": {
        '#languages': ['HTML5', 'CSS3', 'JavaScript'],
        '#frameworks': ['jQuery', 'Bootstrap', 'Grunt', 'Sass', 'CSS Grid', 'Nunjucks template langauge'],
        '#otherSkills': ['Git/Github']
    },
    display: function () {
        for (var property in skills.keys) {
            if (skills.keys.hasOwnProperty(property)) {
                var row = $(property);
                if (skills.keys[property] && skills.keys[property].length) {
                    var allSkills = displaySkills(skills.keys[property]);
                    row.append(HTMLskills.replace(data, allSkills))
                }
            }
        }
    }
};
var summary = {
    "text": {
        "paragraph1": "I started my career in engineering back in 2005 in R&D company Kyiv Arsenal. Our team worked on various projects including space and military industries at that time. I've got a phenomenal experience in design and implementation of full process of product development in the industry. I'm grateful to all my mentors and coworkers for opportunity of learning and contribution to our goals.",
        "paragraph2": "Being in mechanical engineering for a while, I made a shift to software engineering. My passion is Front-end web development where I can continue create new products and be impactful team player.",
        "paragraph3": "Main area of my interest is implementation of products that can help other people like me in their everyday life, be happier human being."
    },
    display: function () {
        var div = $('#summary');
        for (var property in summary.text) {
            if (summary.text.hasOwnProperty(property)) {
                var formattedParagraph = HTMLparagraph.replace(data, summary.text[property]);
                div.append(formattedParagraph)
            }
        }
    }
}

var projects = {
    "keysMain": {
        "project2": {
            "name": "mamaHelp CRUD prototype",
            "src": "images/mamahelp.jpg",
            "alt": "mamahelp-image",
            "gitLink": "https://github.com/yuliapi/mamahelp",
            "demo": "http://mamahelp.herokuapp.com/",
            "description": "Working prototype for Beehelper project that covers authentication, help enrty creation, validation and list view. Form templates are Jade based and are served to the user with Django based backend."
        },
        "project1": {
            "name": "Time counter",
            "src": "images/time-counter.jpg",
            "alt": "counter-image",
            "gitLink": "https://github.com/yuliapi/timeCounter",
            "demo": "projects/timeCounter/index.html",
            "description": "It’s nice looking spinning progress counter, written in pure HTML, CSS and Javascript with no extra libs."
        },
        "project3": {
            "name": "beehelper prototype",
            "src": "images/beehelper.jpg",
            "alt": "beehelper image",
            "gitLink": "https://github.com/yuliapi/beehelper-prototype",
            "demo": "projects/beehelper-prototype/templates/index.html",
            "description": "Prototype of online social networking resource. It is a result of general requirement collection phase and visializing of general application flows."
        }
    },
    "keysOther": {},
    display: function () {

        displayProjects(projects.keysMain, '#gallery');
        displayProjects(projects.keysOther, '#collapseGallery')
    }
};
var experience = {
    "keys": {
        "job1": {
            "from": "Feb/2005",
            "till": "Oct/2011",
            "company": 'State enterprise of a special instrumentation "Arsenal"',
            "position": "Engineer",
            "description": "trshstrhstrh"
        },
        "job2": {
            "from": "Oct/2003",
            "till": "May/2004",
            "company": "Paton Institute of Electrical Welding",
            "position": "Engineering technician",
            "description": "trshstrhstrh"
        }
    },
    display: function () {
        var holder = $('#experienceInfo');
        for (var property in experience.keys) {
            if (experience.keys.hasOwnProperty(property)) {
                var object = experience.keys[property]
                var panel = new Panel(property, object);
                holder.append(panel);
            }
        }
    }
};
var education = {
    "keys": {
        "entry1": {
            "from": "2003",
            "till": "2005",
            "company": "National Technical University of Ukraine 'Kyiv Polytechnic Institute'​",
            "position": "Master degree"
        },
        "entry2": {
            "from": "1999",
            "till": "2003",
            "company": "National Technical University of Ukraine 'Kyiv Polytechnic Institute'​",
            "position": "Bachelor degree"
        }
    },
    display: function () {
        var holder = $('#educationInfo');
        for (var property in education.keys) {
            if (education.keys.hasOwnProperty(property)) {
                var object = education.keys[property]
                var table = Table(object, HTMLeducationTerm, HTMLeducationCompany, HTMLeducationPosition);
                holder.append(table);
            }
        }
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

function displaySkills(array) {
    var text = '';
    for (var i = 0; i < array.length; i++) {
        text = text + array[i] + ', ';
    }
    return (text.slice(0, -2))
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
    var image = $(HTMLgalleryImage)
    image.attr('src', data.src);
    image.attr('alt', data.alt);
    return image
}

function Panel(name, content) {
    var id = "heading" + name;
    var panel = $('<div class="panel panel-default"></div>');
    var panelHead = $('<div class="panel-heading wrapper" role="tab"></div>');
    panelHead.attr("id", id);
    var btnCollapse = $('<a role="button" data-toggle="collapse" href="" aria-expanded="false"></a>');
    btnCollapse.attr('href', "#collapse" + id);
    btnCollapse.attr("aria-controls", "collapse" + id);
    var table = Table(content, HTMLexperienceTerm, HTMLexperienceCompany, HTMLexperiencePosition);
    var collapseModule = $(' <div id="" class="panel-collapse collapse" role="tabpanel">')
    collapseModule.attr('id', "collapse" + id);
    collapseModule.attr("aria-labelledby", id);
    var description = HTMLexperienseDescription.replace(data, content.description);
    $(description).appendTo(collapseModule);
    table.appendTo(btnCollapse);
    btnCollapse.appendTo(panelHead);
    panelHead.appendTo(panel);
    collapseModule.appendTo(panel);
    return panel
}
function Table(content, t, c, pos) {
    var table = $(' <table class="col-xs-12"></table>');
    var tableRow = $('<tr></tr>')
    var term = t.replace(data, content.from + " - " + content.till);
    $(term).appendTo(tableRow);
    var company = $('<td class="employer-ed"></td>');
    var companyName = c.replace(data, content.company);
    $(companyName).appendTo(company);
    var position = pos.replace(data, content.position);
    $(position).appendTo(company);
    company.appendTo(tableRow);
    tableRow.appendTo(table);
    return table;
}
contacts.display();
skills.display();
summary.display();
projects.display();
experience.display();
education.display();
