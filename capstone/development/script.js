(function(){
    console.log('reading js');

    $(document).ready(function(){
        var rows = 4;
        var columns = 4;
        var pieces = "";
        var place = 1;
        order = 0;
        for (var i=0; i<rows; i++)
        {
            for (var j=0; j<columns; j++)
            {
                pieces+= `<div class='piece'><img src='image/puzzles/seal${place}.jpg' width='100'></div>`;
                place++;
                order++;
            }
        }
        // console.log(pieces);
        $("#puzzleContainer").html(pieces);
        $("#btnStart").click(function(){
            console.log("button clicked")
            var pieces = $("#puzzleContainer div");
            var counter = 0;
            pieces.each(function(){
                var leftPosition = Math.floor(Math.random()*290)+25 + "px";
                var topPosition = Math.floor(Math.random()*290)+25 + "px";
                $(this).attr('data-order', counter);

                $(this).addClass("draggablePiece").css({
                    position: "absolute", 
                    left: leftPosition,
                    top: topPosition
                })
                counter++;
                $("pieceContainer").append($(this));
            });
            var emptyString = "";
            var counter = 0;
            for (var i=0; i<rows; i++) {
                for (var j=0; j<columns; j++)
                {
                    emptyString+= `<div class='piece droppableSpace' data-location='${counter}'></div>`;
                    counter++;
                }
                
            }
            $("#puzzleContainer").append(emptyString);
            $(this).hide();
            $("#btnReset").show();
            $("#btnDone").show();
            implementLogic();
        });
        function implementLogic(){
            $(".draggablePiece").draggable({
                revert:"invalid",
                start:function(){
                    if($(this).hasClass("droppedPiece")){
                        $(this).removeClass("droppedPiece")
                        $(this).parent().removeClass("piecePresent");
                    } 
                }
            });
            $(".droppableSpace").droppable({
                hoverClass:"ui-state-highlight", //change theme in link to change color
                accept:function(){
                    return!$(this).hasClass("piecePresent")
                },
                drop:function(event,ui){
                    var draggableElement = ui.draggable;
                    var droppedOn = $(this);
                    var squareNumber = $(this).attr("data-location");
                    var pieceNumber = $(draggableElement).attr('data-order');
                    console.log(pieceNumber);
                    droppedOn.addClass("piecePresent");
                    $(draggableElement).addClass("droppedPiece").css({
                        top:0,
                        left: 0,
                        position: "relative"
                    }).appendTo(droppedOn);
                    if (squareNumber == pieceNumber){
                       // Popup("correct!");
                        var popup = `#piece${pieceNumber}`;
                        $(popup).attr('class', 'showing');

                        // Add click event to close the popup
                        $(popup).click(function(){
                            $(this).removeClass('showing');
                        });

                    }
                    else{alert('incorrect')};
                }

            });
            //show a pop up when the puzzle is completed
            $("#btnDone").click(function() {
                if ($("#puzzleContainer .droppableSpace").length === $("#puzzleContainer .piecePresent").length) {
                    $("#lgPopup").removeClass("hidden").addClass("animate__bounceIn");
                } else {
                    alert("Please complete the puzzle first.");
                }
            });

            // Close the lgPopup when the close button is clicked
            $("#btnClosePopup").click(function() {
                $("#lgPopup").removeClass("animate__bounceIn").addClass("hidden");
            });

            //close the window

            $("#btnReset").click(function(){
                window.location.reload();
            })

        }
    })
})();