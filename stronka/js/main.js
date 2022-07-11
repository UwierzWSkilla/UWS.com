window.addEventListener("hashchange", function(){
    const hash = window.location.hash.replace("#", "") || "home"
    const [page, article] = hash.split("/")

    document.querySelectorAll(".page").forEach(function($e){
        $e.classList.add("is-hidden")
    })

    document.getElementById(hash).classList.remove("is-hidden")
});