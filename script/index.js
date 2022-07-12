// Fazer menu de criação de task aparecer
$("#adicionar-task").on("click", () => {
    $(".menu-task").css("display", "block")
})

// Fazer menu de criação de task desaparecer
const fecharMenuTask = () => $(".menu-task").css("display", "none")

$("#close-menu-task").on("click", fecharMenuTask)

// Criar uma task nova
function criarTask(titulo, conteudo){
    const tituloElem = $("<h2>").text(titulo)
    const conteudoElem = $("<p>").text(conteudo)
    const div = $("<div>").addClass("task").append(tituloElem, conteudoElem)

    return div
}

$("#menu-task-adicionar").on("click", (event) => {
    event.preventDefault()

    const titulo = $("#titulo-task").val()
    $("#titulo-task").val("")
    const conteudo = $("#conteudo-task").val()
    $("#conteudo-task").val("")
    $(".container-left").append(criarTask(titulo, conteudo))

    fecharMenuTask()
})