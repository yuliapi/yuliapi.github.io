class LandingPage {
    static animationStart() {
        $('#animatedLetters').addClass('animate');
        document.getElementById("dot").addEventListener("transitionend", () =>
            setTimeout(LandingPage.animationEnd, 200))
    }

    static animationEnd() {
        LandingPage.showHidden("typing-text");
        typeText()
    }

    static showHidden(element) {
        let selector = "." + element + ".hide";
        $(selector).map((index, item) => {
            $(item).removeClass('hide').addClass('show')
        })
    }

    static animateCursor() {
        $('#cursor').animate({
            opacity: 0
        }, 'fast', 'swing').animate({
            opacity: 1
        }, 'fast', 'swing');

    }
}


function typeText() {
    let textContainer = document.getElementById('text');
    let text = '"occupation": "front-end engineering", "motto": "I wish^^^^know I could^^^^^can"';
    let currentIndex = 0;
    let speed = 100;

    typeWriter(text, currentIndex, speed, textContainer);
}


function typeWriter(text, currentIndex, speed, textContainer, currentSpan = null, isKey = true, isOpen = false) {
    if (currentIndex >= text.length) {
        LandingPage.showHidden("my-button");
        $('#cursor').hide();
        $('#skip').hide();

        return;
    }
    LandingPage.animateCursor();

    if (!isOpen && (text.charAt(currentIndex) === ":" || text.charAt(currentIndex) === ",")) {
        let sep = document.createElement("span");
        sep.className = "orange";
        textContainer.appendChild(sep);
        sep.innerText = text.charAt(currentIndex);
    }

    if (text.charAt(currentIndex) === "\"") {
        if (!isOpen) {
            currentSpan = document.createElement("span");
            textContainer.appendChild(currentSpan);
            currentSpan.className = isKey ? "pink" : "";
            currentSpan.innerText = "\"";
            isOpen = true;
        } else {
            currentSpan.innerText += "\"";
            isOpen = false;
            isKey = !isKey;
            currentSpan = null;
        }
    } else {
        if (isOpen) {
            if (text.charAt(currentIndex) === '^') {
                if (currentSpan.innerText.length > 0) {
                    currentSpan.innerText = (currentSpan.innerText.substring(0, currentSpan.innerText.length - 1));
                }
            } else {
                currentSpan.innerText += text.charAt(currentIndex);
            }
        }
    }

    setTimeout(() => typeWriter(text, ++currentIndex, speed, textContainer, currentSpan, isKey, isOpen), speed);
}


// let start = setTimeout(LandingPage.animationStart, 250);


function skipAnimation(button) {
    $(button).hide();
    $('#animatedLetters').addClass('animation-finished');
    LandingPage.showHidden("my-button");
    LandingPage.showHidden("typing-text");
    $('#type').find('p:first').html('&#10100;<span id="text" class="text-span">' +
        '<span class="pink">"occupation"</span>' +
        '<span class="orange">:</span><span class="">"front-end engineering"</span>' +
        '<span class="orange">,' +
        '</span><span class="pink">"motto"</span><span class="orange">:' +
        '</span><span class="">"I know I can"</span></span></span>&#10101;');
}

function pageRedirect(button) {
console.log(button);

}
