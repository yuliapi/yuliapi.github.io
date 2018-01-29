var data = '%data%';

var contacts = {
    "keys": {
        ".linkedin": "https://www.linkedin.com/in/yuliapi/",
        ".github": "https://github.com/yuliapi",
        ".email-contact": "yulia.pi@gmail.com",
        ".phone-contact": "978-810-1047"
    },

    display: function () {
        var arr;
        for (var property in contacts.keys) {
            if (contacts.keys.hasOwnProperty(property)) {
                arr = $(property);
                for (var i = 0; i < arr.length; i++) {
                    if (property.indexOf("contact") === -1) {
                        arr[i].href = contacts.keys[property];
                    } else {
                        $(arr[i]).html(contacts.keys[property]);
                    }
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
        "paragraph1": "I started my career in engineering back in 2005 in R&D company Kyiv Arsenal. Our team worked on various projects including space and military industries at that time. I've got a phenomenal experience in design and implementation of the full process of product development in the industry. I'm grateful to all my mentors and coworkers for the opportunity of learning and contribution to our goals.",
        "paragraph2": "Being in mechanical engineering for a while, I made a shift to software engineering. My passion is front-end web development where I can continue to create new products and be the impactful team player.",
        "paragraph3": "The main area of my interest is the implementation of products that can help other people like me in their everyday life, be happier human being."
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
};

var projects = {
    "keysMain": {
        "project5": {
            "name": "Carousel",
            "src": "images/carousel.jpg",
            "alt": "carousel",
            "gitLink": "",
            "demo": "Coming soon",
            "description": "Coming soon! Slideshow build with pure Javascript and CSS "

        },
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
        "project4": {
            "name": "Blog display template",
            "src": "images/myGallery.jpg",
            "alt": "project image",
            "gitLink": "https://github.com/yuliapi/myGallery-layout",
            "demo": "https://yuliapi-gallery.herokuapp.com/gallery.html",
            "description": "Gallery template backed by RESTful API, Node.js and PostgreSQL database for persistence layer"
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
var experience = {
    "keys": {
        "job3": {
            "from": "May/2015",
            "till": "present",
            "company": 'Self-employed',
            "position": "Frontend developer",
            "responsibilities": ["collecting and analyzing requirements",
                "setting and negotiation features for minimum value product", "creating visual mock-ups and requirements translation into working prototype using HTML, CSS and Javascript"],
            "description": "Working on startup project of online social networking website(BeeHelper). As a result, I had created the working prototype with documentation which describes general application flows. Also, Mamahelp app, as a part of a prototype series of BeeHelper project, was created. Mamahelp serves the purpose to experiment with flows for managing of multi-steps forms and authentication. <br> More details, demo and sources of BeeHelper and Mamahelp are available in the profile section of this portfolio."
        },
        "job2": {
            "from": "Feb/2005",
            "till": "Oct/2011",
            "company": 'State enterprise of a special instrumentation "Arsenal"',
            "position": "Engineering Technologist",
            "responsibilities": ["adapting ERP(enterprise resource planning) system to the company needs",
                "verification of product conformity to technological requirements", "establishing work order and the operating route for processing parts"],
            "description": "In collaboration with other departments ERP system, primarily  designed for mass production, was adapted  to such Arsenal features as low production volume, wide range and unique production. It gave our company more clear and efficient way to manage production cycle, optimize procurement planning."
        },
        "job1": {
            "from": "Oct/2003",
            "till": "May/2004",
            "company": "Paton Institute of Electrical Welding",
            "position": "Engineering technician",
            "responsibilities": ["taking part in the planning of scientific experiments", "lab works(preparation of test samples)", "assisting in experiments and collecting results"]
        }
    },
    display: function () {
        var holder = $('#experienceInfo');
        for (var property in experience.keys) {
            if (experience.keys.hasOwnProperty(property)) {
                var object = experience.keys[property];
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
    var image = $(HTMLgalleryImage);
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
    var collapseModule = $(' <div id="" class="panel-collapse collapse" role="tabpanel">');
    collapseModule.attr('id', "collapse" + id);
    collapseModule.attr("aria-labelledby", id);
    var description = $('<div class="panel-body"></div>');

    if (content.responsibilities && content.responsibilities.length) {
        var heading = $('<h4>Responsibilities</h4>');

        var list = $('<ul></ul>');
        for (var i = 0; i < content.responsibilities.length; i++) {
            var item = HTMLlistItem.replace(data, content.responsibilities[i]);
            list.append(item)
        }
        $(heading).appendTo(description);
        $(list).appendTo(description);

    }
    if (content.description && content.description.length) {
        var text = HTMLparagraph.replace(data, content.description);
        $(text).appendTo(description);
    }
    $(description).appendTo(collapseModule);
    table.appendTo(btnCollapse);
    btnCollapse.appendTo(panelHead);
    panelHead.appendTo(panel);
    collapseModule.appendTo(panel);
    return panel
}

function Table(content, t, c, pos) {
    var table = $('<table class="col-xs-12"></table>');
    var tableRow = $('<tr></tr>');
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
