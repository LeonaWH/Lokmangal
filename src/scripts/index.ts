// Scrollspy

const sections = document.querySelectorAll("section");
const pageContents: HTMLElement[] = [document.querySelector("#hero")!]
const navLi = document.querySelectorAll(".nav-link");
sections.forEach(section => pageContents.push(section));
document.onscroll = () => {
    pageContents.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (top >= offset && top < offset + height)
            navLi.forEach(li => {
                li.classList.remove("active");
                if (id == "hero")
                    document.querySelector(".nav-link a[href='#']")!.parentElement!.classList.add("active");
                else
                    document.querySelector(`.nav-link a[href="#${id}"]`)!.parentElement!.classList.add("active");
            });
    });
}

// Programs Buttons

const programBtns = document.querySelectorAll(".program-btn");
programBtns.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
        programBtns.forEach((btn) => btn.classList.remove("active"));
        (e.target as HTMLElement).classList.add("active");
        const program = (e.target as HTMLButtonElement).value;
        const programs = document.querySelectorAll(".program");
        programs.forEach((program) =>
            program.classList.add("hidden", "opacity-0")
        );
        const programElement = document.querySelector(
            `.program#${program}`
        )!;
        programElement.classList.remove("hidden");
        setTimeout(() => programElement.classList.remove("opacity-0"), 1);
    });
});

// Scroll to top button

// Get the button:
const mybutton = document.getElementById("scrollBtn")!;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
        setTimeout(() => (mybutton.style.transform = "scaleY(1)"), 1);
    } else {
        mybutton.style.transform = "scaleY(0)";
        setTimeout(() => (mybutton.style.display = "none"), 1000);
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("scrollBtn")!.onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};