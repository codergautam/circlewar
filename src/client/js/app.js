import * as name from "./yee"
import css from "../css/main.css";

name.lol()
$("#btn-play").on("click", () => {
    $("#btn-play").addClass("spinner")
    $("#btn-play").html("")
    var name = $("#player-name-input").value

})