sects = document.getElementsByClassName("sects")
colors = document.querySelectorAll(".colors")
alt = document.querySelectorAll(".box")

function toggleNav() {
    if (window.innerWidth <= 1000) {
        document.getElementById("nav-bar").classList.toggle("openNav")
        document.getElementById("closeBtn").classList.toggle("navBtn")
        document.getElementById("menuBtn").classList.toggle("navBtn")
        document.getElementById("menu").classList.toggle("navBtn")
        document.getElementById("nav-links").classList.toggle("navBtn")
    }
}

function openPage() {
    scrollTo(top)

    for (el of sects) {
        el.classList.toggle("open", false)
    }

    document.getElementById("sect-head").classList.toggle("open")
    document.getElementById(event.target.id + "-sect").classList.toggle("open")

    if (event.target.id == "intro") {
        document.getElementById("sect-head").innerText = "Intro."
        colors.forEach(element => {
            element.style.backgroundColor = "#001900"
            element.style.color = "#7FAA7F"
        });
        alt.forEach(element => {
            element.style.backgroundColor = "#001900"
            element.style.color = "#7FAA7F"
            element.style.border = "#7FAA7F 3px solid"
        });
    }

    if (event.target.id == "who") {
        document.getElementById("sect-head").innerText = "Who."
        colors.forEach(element => {
            element.style.backgroundColor = "#330000"
            element.style.color = "#bf7f7f"
        });
        alt.forEach(element => {
            element.style.backgroundColor = "#330000"
            element.style.color = "#bf7f7f"
            element.style.border = "#bf7f7f 3px solid"
        });
    }

    if (event.target.id == "what") {
        document.getElementById("sect-head").innerText = "What."
        colors.forEach(element => {
            element.style.backgroundColor = "#2b1706"
            element.style.color = "#bd9572"
        });
        alt.forEach(element => {
            element.style.backgroundColor = "#2b1706"
            element.style.color = "#bd9572"
            element.style.border = "#bd9572 3px solid"
        });
    }

    if (event.target.id == "work") {
        document.getElementById("sect-head").innerText = "Work."
        colors.forEach(element => {
            element.style.backgroundColor = "#001313"
            element.style.color = "#667c7d"
        });
        alt.forEach(element => {
            element.style.backgroundColor = "#001313"
            element.style.color = "#667c7d"
            element.style.border = "#667c7d 3px solid"
        });
    }
}