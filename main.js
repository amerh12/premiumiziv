$(document).ready(function () {
    var cheker = parseInt($('#nevidse').val());
    $("#menu").click(function () {
        $("nav").fadeToggle(300);
    });
    $("#overview").click(function () {
        $("#strMerc").hide();
        $("#popUp").hide();
        $("#srfcMerc").hide();
        $("#overTxtMerc").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury.svg");
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus.svg");
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth.svg");
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars.svg");
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter.svg");
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn.svg");
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus.svg");
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune.svg");
        }
    });
    $("#structure").click(function () {
        $("#overTxtMerc").hide();
        $("#srfcMerc").hide();
        $("#popUp").hide();
        $("#strMerc").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury-internal.svg");
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus-internal.svg");
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth-internal.svg");
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars-internal.svg");
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter-internal.svg");
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn-internal.svg");
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus-internal.svg");
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune-internal.svg");
        }
    });
    $("#surface").click(function () {
        $("#overTxtMerc").hide();
        $("#strMerc").hide();
        $("#srfcMerc").show();
        $("#popUp").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury.svg");
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus.svg");
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth.svg");
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars.svg");
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter.svg");
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn.svg");
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus.svg");
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune.svg");
        }
    });
    $("#overviewTbt").click(function () {
        $("#strMerc").hide();
        $("#popUp").hide();
        $("#srfcMerc").hide();
        $("#overTxtMerc").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury.svg");
            $("#structureTbt").removeClass('active1');
            $("#surfaceTbt").removeClass('active1');
            $("#overviewTbt").addClass('active1');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active1');
                $("#surfaceTbt").removeClass('active1');
                $("#overviewTbt").removeClass('active1');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active1');
                $("#surfaceTbt").addClass('active1');
                $("#overviewTbt").removeClass('active1');
            });
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus.svg");
            $("#structureTbt").removeClass('active2');
            $("#surfaceTbt").removeClass('active2');
            $("#overviewTbt").addClass('active2');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active2');
                $("#surfaceTbt").removeClass('active2');
                $("#overviewTbt").removeClass('active2');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active2');
                $("#surfaceTbt").addClass('active2');
                $("#overviewTbt").removeClass('active2');
            });
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth.svg");
            $("#structureTbt").removeClass('active3');
            $("#surfaceTbt").removeClass('active3');
            $("#overviewTbt").addClass('active3');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active3');
                $("#surfaceTbt").removeClass('active3');
                $("#overviewTbt").removeClass('active3');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active3');
                $("#surfaceTbt").addClass('active3');
                $("#overviewTbt").removeClass('active3');
            });
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars.svg");
            $("#structureTbt").removeClass('active4');
            $("#surfaceTbt").removeClass('active4');
            $("#overviewTbt").addClass('active4');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active4');
                $("#surfaceTbt").removeClass('active4');
                $("#overviewTbt").removeClass('active4');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active4');
                $("#surfaceTbt").addClass('active4');
                $("#overviewTbt").removeClass('active4');
            });
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter.svg");
            $("#structureTbt").removeClass('active5');
            $("#surfaceTbt").removeClass('active5');
            $("#overviewTbt").addClass('active5');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active5');
                $("#surfaceTbt").removeClass('active5');
                $("#overviewTbt").removeClass('active5');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active5');
                $("#surfaceTbt").addClass('active5');
                $("#overviewTbt").removeClass('active5');
            });
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn.svg");
            $("#structureTbt").removeClass('active6');
            $("#surfaceTbt").removeClass('active6');
            $("#overviewTbt").addClass('active6');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active6');
                $("#surfaceTbt").removeClass('active6');
                $("#overviewTbt").removeClass('active6');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active6');
                $("#surfaceTbt").addClass('active6');
                $("#overviewTbt").removeClass('active6');
            });
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus.svg");
            $("#structureTbt").removeClass('active7');
            $("#surfaceTbt").removeClass('active7');
            $("#overviewTbt").addClass('active7');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active7');
                $("#surfaceTbt").removeClass('active7');
                $("#overviewTbt").removeClass('active7');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active7');
                $("#surfaceTbt").addClass('active7');
                $("#overviewTbt").removeClass('active7');
            });
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune.svg");
            $("#structureTbt").removeClass('active8');
            $("#surfaceTbt").removeClass('active8');
            $("#overviewTbt").addClass('active8');
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active8');
                $("#surfaceTbt").removeClass('active8');
                $("#overviewTbt").removeClass('active8');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active8');
                $("#surfaceTbt").addClass('active8');
                $("#overviewTbt").removeClass('active8');
            });
        }
    });
    $("#structureTbt").click(function () {
        $("#overTxtMerc").hide();
        $("#popUp").hide();
        $("#srfcMerc").hide();
        $("#strMerc").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury-internal.svg");
            $("#structureTbt").addClass('active1');
            $("#surfaceTbt").removeClass('active1');
            $("#overviewTbt").removeClass('active1');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active1');
                $("#surfaceTbt").removeClass('active1');
                $("#overviewTbt").addClass('active1');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active1');
                $("#surfaceTbt").addClass('active1');
                $("#overviewTbt").removeClass('active1');
            });
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus-internal.svg");
            $("#structureTbt").addClass('active2');
            $("#surfaceTbt").removeClass('active2');
            $("#overviewTbt").removeClass('active2');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active2');
                $("#surfaceTbt").removeClass('active2');
                $("#overviewTbt").addClass('active2');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active2');
                $("#surfaceTbt").addClass('active2');
                $("#overviewTbt").removeClass('active2');
            });
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth-internal.svg");
            $("#structureTbt").addClass('active3');
            $("#surfaceTbt").removeClass('active3');
            $("#overviewTbt").removeClass('active3');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active3');
                $("#surfaceTbt").removeClass('active3');
                $("#overviewTbt").addClass('active3');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active3');
                $("#surfaceTbt").addClass('active3');
                $("#overviewTbt").removeClass('active3');
            });
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars-internal.svg");
            $("#structureTbt").addClass('active4');
            $("#surfaceTbt").removeClass('active4');
            $("#overviewTbt").removeClass('active4');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active4');
                $("#surfaceTbt").removeClass('active4');
                $("#overviewTbt").addClass('active4');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active4');
                $("#surfaceTbt").addClass('active4');
                $("#overviewTbt").removeClass('active4');
            });
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter-internal.svg");
            $("#structureTbt").addClass('active5');
            $("#surfaceTbt").removeClass('active5');
            $("#overviewTbt").removeClass('active5');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active5');
                $("#surfaceTbt").removeClass('active5');
                $("#overviewTbt").addClass('active5');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active5');
                $("#surfaceTbt").addClass('active5');
                $("#overviewTbt").removeClass('active5');
            });
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn-internal.svg");
            $("#structureTbt").addClass('active6');
            $("#surfaceTbt").removeClass('active6');
            $("#overviewTbt").removeClass('active6');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active6');
                $("#surfaceTbt").removeClass('active6');
                $("#overviewTbt").addClass('active6');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active6');
                $("#surfaceTbt").addClass('active6');
                $("#overviewTbt").removeClass('active6');
            });
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus-internal.svg");
            $("#structureTbt").addClass('active7');
            $("#surfaceTbt").removeClass('active7');
            $("#overviewTbt").removeClass('active7');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active7');
                $("#surfaceTbt").removeClass('active7');
                $("#overviewTbt").addClass('active7');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active7');
                $("#surfaceTbt").addClass('active7');
                $("#overviewTbt").removeClass('active7');
            });
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune-internal.svg");
            $("#structureTbt").addClass('active8');
            $("#surfaceTbt").removeClass('active8');
            $("#overviewTbt").removeClass('active8');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active8');
                $("#surfaceTbt").removeClass('active8');
                $("#overviewTbt").addClass('active7');
            });
            $("#surfaceTbt").click(function () {
                $("#structureTbt").removeClass('active8');
                $("#surfaceTbt").addClass('active8');
                $("#overviewTbt").removeClass('active8');
            });
        }
    });
    $("#surfaceTbt").click(function () {
        $("#overTxtMerc").hide();
        $("#strMerc").hide();
        $("#srfcMerc").show();
        $("#popUp").show();
        if (cheker == 1) {
            $("#merSlika").attr("src", "assets/planet-mercury.svg");
            $("#structureTbt").removeClass('active1');
            $("#surfaceTbt").addClass('active1');
            $("#overviewTbt").removeClass('active1');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active1');
                $("#surfaceTbt").removeClass('active1');
                $("#overviewTbt").addClass('active1');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active1');
                $("#surfaceTbt").removeClass('active1');
                $("#overviewTbt").removeClass('active1');
            });
        }
        else if (cheker == 2) {
            $("#merSlika").attr("src", "assets/planet-venus.svg");
            $("#structureTbt").removeClass('active2');
            $("#surfaceTbt").addClass('active2');
            $("#overviewTbt").removeClass('active2');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active2');
                $("#surfaceTbt").removeClass('active2');
                $("#overviewTbt").addClass('active2');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active2');
                $("#surfaceTbt").removeClass('active2');
                $("#overviewTbt").removeClass('active2');
            });
        }
        else if (cheker == 3) {
            $("#merSlika").attr("src", "assets/planet-earth.svg");
            $("#structureTbt").removeClass('active3');
            $("#surfaceTbt").addClass('active3');
            $("#overviewTbt").removeClass('active3');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active3');
                $("#surfaceTbt").removeClass('active3');
                $("#overviewTbt").addClass('active3');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active3');
                $("#surfaceTbt").removeClass('active3');
                $("#overviewTbt").removeClass('active3');
            });
        }
        else if (cheker == 4) {
            $("#merSlika").attr("src", "assets/planet-mars.svg");
            $("#structureTbt").removeClass('active4');
            $("#surfaceTbt").addClass('active4');
            $("#overviewTbt").removeClass('active4');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active4');
                $("#surfaceTbt").removeClass('active4');
                $("#overviewTbt").addClass('active4');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active4');
                $("#surfaceTbt").removeClass('active4');
                $("#overviewTbt").removeClass('active4');
            });
        }
        else if (cheker == 5) {
            $("#merSlika").attr("src", "assets/planet-jupiter.svg");
            $("#structureTbt").removeClass('active5');
            $("#surfaceTbt").addClass('active5');
            $("#overviewTbt").removeClass('active5');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active5');
                $("#surfaceTbt").removeClass('active5');
                $("#overviewTbt").addClass('active5');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active5');
                $("#surfaceTbt").removeClass('active5');
                $("#overviewTbt").removeClass('active5');
            });
        }
        else if (cheker == 6) {
            $("#merSlika").attr("src", "assets/planet-saturn.svg");
            $("#structureTbt").removeClass('active6');
            $("#surfaceTbt").addClass('active6');
            $("#overviewTbt").removeClass('active6');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active6');
                $("#surfaceTbt").removeClass('active6');
                $("#overviewTbt").addClass('active6');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active6');
                $("#surfaceTbt").removeClass('active6');
                $("#overviewTbt").removeClass('active6');
            });
        }
        else if (cheker == 7) {
            $("#merSlika").attr("src", "assets/planet-uranus.svg");
            $("#structureTbt").removeClass('active7');
            $("#surfaceTbt").addClass('active7');
            $("#overviewTbt").removeClass('active7');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active7');
                $("#surfaceTbt").removeClass('active7');
                $("#overviewTbt").addClass('active7');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active7');
                $("#surfaceTbt").removeClass('active7');
                $("#overviewTbt").removeClass('active7');
            });
        }
        else {
            $("#merSlika").attr("src", "assets/planet-neptune.svg");
            $("#structureTbt").removeClass('active8');
            $("#surfaceTbt").addClass('active8');
            $("#overviewTbt").removeClass('active8');
            $("#overviewTbt").click(function () {
                $("#structureTbt").removeClass('active8');
                $("#surfaceTbt").removeClass('active8');
                $("#overviewTbt").addClass('active8');
            });
            $("#structureTbt").click(function () {
                $("#structureTbt").addClass('active8');
                $("#surfaceTbt").removeClass('active8');
                $("#overviewTbt").removeClass('active8');
            });
        }
    });
});
