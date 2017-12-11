var data = '%data%';

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
var projects = {
    "keys": {
        "project1": {
            "name": "Time counter",
            "src": "images/time-counter.jpg",
            "alt": "counter-image",
            "target": "#time-counter-modal",
            "modalId": "time-counter-modal",
            "gitLink": "https://github.com/yuliapi/timeCounter",
            "liveDemo": "https: //yuliapi.github.io/projects/timeCounter/index.html",
            "description": "dfgewgw"
        }
    },

    display: function () {
        var holder = $('#gallery');

        for (var property in projects.keys) {
            if (projects.keys.hasOwnProperty(property)) {

                var object = projects.keys[property]
                var formattedImage = new Image(object);
                var formattedTitle = HTMLgalleryTitle.replace(data, object.name);
                var gitLink = $(HTMLgalleryLink.replace(data, "View on GitHub")).attr("href", object.gitLink);
                var modal = $(HTMLmodalDiv).attr("id", object.modalId).html($('#modal-template').html());
                $(modal).find("img").attr("src", object.src);
                $(modal).find("p").text(object.description)
                holder.append(HTMLgalleryStart);
                var projectEntry = $('.project-entry:last');
                projectEntry.append(formattedImage);
                projectEntry.append(formattedTitle);
                projectEntry.append(gitLink)
                $('body').append(modal);
            }
        }
    }
}
var experience = {
    "keys": {
        "job1": {
            "from": "Feb/2005",
            "till": "Oct/2008",
            "company": "Kyiv Arsenal",
            "position": "Engineer",
            "description": "trshstrhstrh"
        },
        "job2": {
            "from": "Oct/2004",
            "till": "May/2005",
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
            "company": " National Technical University of Ukraine 'Igor Sykorsky Kyiv Politechnical Institute'",
            "position": "Master degree"
        },
        "entry2": {
            "from": "1999",
            "till": "2003",
            "company": " National Technical University of Ukraine 'Igor Sykorsky Kyiv Politechnical Institute'",
            "position": "Bachelor degree"
        }
    },
    display: function () {
        var holder = $('#educationInfo');
        for (var property in education.keys) {
            if (education.keys.hasOwnProperty(property)) {
                var object = education.keys[property]
                var table  = Table(object, HTMLeducationTerm, HTMLeducationCompany, HTMLeducationPosition);
                holder.append(table);
            }
        }
    }
}

function displaySkills(array) {
    var text = '';
    for (var i = 0; i < array.length; i++) {
        text = text + array[i] + ', ';
    }
    return (text.slice(0, -2))
}
function Image(data) {
    var image = $(HTMLgalleryImage)
    image.attr('src', data.src);
    image.attr('alt', data.alt);
    image.attr('data-target', data.target);

    return image
}
function Panel(name, content) {
    var id = "heading" + name;
    var panel = $('<div class="panel panel-default"></div>');
    var panelHead = $('<div class="panel-heading wrapper" role="tab"></div>')
    panelHead.attr("id", id);
    var btnCollapse = $('<a role="button" data-toggle="collapse" href="" aria-expanded="false"></a>')
    btnCollapse.attr('href', "#collapse" + id);
    btnCollapse.attr("aria-controls", "collapse" + id);
    var table  = Table(content, HTMLexperienceTerm, HTMLexperienceCompany, HTMLexperiencePosition);
    var collapseModule = $(' <div id="" class="panel-collapse collapse" role="tabpanel">')
    collapseModule.attr('id', "collapse"+id);
    collapseModule.attr("aria-labelledby", id)
    var description = HTMLexperienseDescription.replace(data, content.description);
    $(description).appendTo(collapseModule)
    table.appendTo(btnCollapse);
    btnCollapse.appendTo(panelHead);
    panelHead.appendTo(panel);
    collapseModule.appendTo(panel);
    return panel
}
function Table(content, t, c, pos) {
    var table = $(' <table class="col-xs-12"></table>');
    var tableRow = $('<tr></tr>')
    var term = t.replace(data, content.from + " - " + content.till)
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

skills.display();
projects.display();
experience.display();
education.display();
