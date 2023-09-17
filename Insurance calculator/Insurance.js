$(document).ready(function() {
    $("#calculate").click(function() {
        var age = $("#age").val();
        if (age !== "") {
            var insuranceCost = 5 * age + 300;
            $("#result").text("Your insurance cost is: $" + insuranceCost.toFixed(2) + " per year").show();
        }
    });

    $("#clear").click(function() {
        $("#age").val("");
        $("#result").hide();
    });
});
