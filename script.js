function openModal(title, image, description, tech, github, live){

    document.getElementById("projectModal").style.display = "block";

    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalImg").src = image;
    document.getElementById("modalDesc").innerHTML = description;
    document.getElementById("modalTech").innerHTML = tech;
    document.getElementById("githubBtn").href = github;
    document.getElementById("liveBtn").href = live;
}

function closeModal(){
    document.getElementById("projectModal").style.display = "none";
}
 
window.onclick=function(e){

    const modal=document.getElementById("projectModal");

        if(e.target==modal){

            modal.style.display="none";
}

}

document.getElementById("projectModal").style.display = "block";
