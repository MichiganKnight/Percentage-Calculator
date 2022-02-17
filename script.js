$("#total").keyup(function() {
    $("#remain").val($(this).val());
});

$("#current").keyup(function() {
    var totalQuestions = $("#total").val();
    var remainingQuestions = totalQuestions - $("#current").val();
    $("#remain").val(remainingQuestions);
});

$("#correct").keyup(function () {
    $("#c").text($(this).val());
    $("#percent").text(GetPercent($(this).val(), $("#total").val()) + "%");
    if (GetPercent($(this).val(), $("#total").val()) < 0) {
        temp = 100 + parseFloat(GetPercent($(this).val(), $("#total").val()), 10);
        if (temp % 1 == 0) {
            temp = temp.toFixed(0);
        } else if (temp % 1 != 0) {
            temp = temp.toFixed(2);
        }
        $("#highest").text("Highest Possible Score: " + temp + "%");
    }
    $(document).prop("title", "Percent: " + $(this).val() + " / " + $("#total").val() + " = " + GetPercent($(this).val(), $("#total").val()) + "%");
});

$(window).on("wheel", function (e) {
    focusedEl = document.activeElement;
    if (focusedEl.id = "correct") {
        var value = parseInt(focusedEl.value, 10);
        if (e.originalEvent.deltaY < 0) {
            value++;
        } else {
            value--;
        }
        focusedEl.value = value;
        $("#c").text(value);
        $("#percent").text(GetPercent(value, $("#total").val()) + "%");
        if (GetPercent(value, $("#total").val()) < 0) {
            temp = 100 + parseFloat(GetPercent(value, $("#total").val()), 10);
            if (temp % 1 == 0) {
                temp = temp.toFixed(0);
            } else if (temp % 1 != 0) {
                temp = temp.toFixed(2);
            }
            $("#highest").text("Highest Possible Score: " + temp + "%");
        } else {
            temp = 100 - parseFloat(GetPercent(value, $("#total").val()), 10);
            if (temp % 1 == 0) {
                temp = temp.toFixed(0);
            } else if (temp % 1 != 0) {
                temp = temp.toFixed(2);
            }
            $("#highest").text("Highest Possible Score: " + temp + "%");
        }
        console.log($("#total").val() - value);
        $(document).prop("title", "Percent: " + value + " / " + $("#total").val() + " = " + GetPercent(value, $("#total").val()) + "%");
    }
});

$("#total").keyup(function () {
    $("#t").text($(this).val());
    $("#percent").text(GetPercent($("#correct").val(), $(this).val()) + "%");
    if (GetPercent($("#correct").val(), $(this).val()) < 0) {
        temp = 100 + parseFloat(GetPercent($("#correct").val(), $(this).val()), 10);
        if (temp % 1 == 0) {
            temp = temp.toFixed(0);
        } else if (temp % 1 != 0) {
            temp = temp.toFixed(2);
        }
        $("#highest").text("Highest Possible Score: " + temp + "%");
    }
    $(document).prop("title", "Percent: " + $("#correct").val() + " / " + $(this).val() + " = " + GetPercent($("#correct").val(), $(this).val()) + "%");
});

$("#reset").click(function () {
    $("#correct").focus();
    $("#correct").val(0);
    $("#total").val(100);
    $("#c").text(0);
    $("#t").text(100);
    $("#percent").text("0%");
});

function GetPercent(correct, total) {
    let percent = correct / total;
    percent *= 100;
    if (percent % 1 == 0) {
        return percent.toFixed(0);
    } else if (percent % 1 != 0) {
        return percent.toFixed(2);
    }
}