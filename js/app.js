
    $( document ).ready(function() {
      var flag = 0;
      var flag_j = 0;
      var jugador1;
      var jugador2;
      var rand_j;
      var cont_j1 = 0;
      var cont_j2 = 0;

// comparacion de jugadas
      var arrayA = []; 
      var arrayB = []; 
      var array_w1 = ["1","2","3"]; 
      var array_w2 = ["4","5","6"]; 
      var array_w3 = ["7","8","9"]; 
      var array_w4 = ["1","5","9"]; 
      var array_w5 = ["3","5","7"];
      var array_w6 = ["1","4","7"]; 
      var array_w7 = ["2","5","8"]; 
      var array_w8 = ["3","6","9"]; 
      var gamerfinish;

      function count_similarities(arrayA, arrayB) {
          var matches = 0;
          for (i=0;i<arrayA.length;i++) {
              if (arrayB.indexOf(arrayA[i]) != -1)
                  matches++;
          }
          return matches;
      }
      var similarities = 0;
      //alert(similarities);

//ocultar las dos ventanas 

       $( ".first" ).click(function() {
        $(".names").hide();
        $(".table_j").hide();
        $(".inicio").show();
      });
         $( ".play" ).click(function() {
        $(".inicio").hide();
        $(".names").show();
      });
         
         $( ".begin" ).click(function() {
            jugador1 = $(".name1").val();
            jugador2 = $(".name2").val();
            rand_j = Math.floor(Math.random() * 2) + 1;
            $(".names").hide();
        $(".table_j").show();
        
// interaccion de la segunda ventana 

        $(".mov_j1").html("Movimiento de "+jugador1+" "+cont_j1);
        $(".mov_j2").html("Movimiento de "+jugador2+" "+cont_j2);
        if(rand_j == 1){
              $(".player").html("Turno de "+jugador1);
              flag_j = 1;
        }else{
          $(".player").html("Turno de "+jugador2);
          flag_j = 0;
        }
      });

// segunda vista del juego 

          $( "td" ).click(function() {

            if (flag_j == 1) {
              $(".player").html("Turno de "+jugador2);
              cont_j1++;
              flag_j = 0;
              $(".mov_j1").html("Movimiento de "+jugador1+" "+cont_j1);
              arrayA.push($(this).attr("data-pos"));

              similarities = count_similarities(arrayA, array_w1);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w2);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w3);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w4);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w5);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w6);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w7);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
              similarities = count_similarities(arrayA, array_w8);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador1,
                    loser_player:jugador2,
                    number_of_turns_to_win:cont_j1
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador1);
              }
               
            }else  {
              $(".player").html("Turno de "+jugador1);
              flag_j = 1;
              cont_j2++;
              $(".mov_j2").html("Movimiento de "+jugador2+" "+cont_j2);
              arrayB.push($(this).attr("data-pos"));

              similarities = count_similarities(arrayB, array_w1);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w2);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w3);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w4);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w5);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w6);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w7);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
              similarities = count_similarities(arrayB, array_w8);
              if(similarities == 3){
                gamerfinish = {
                    winner_player: jugador2,
                    loser_player:jugador1,
                    number_of_turns_to_win:cont_j2
                }

                $.ajax({
                    url: 'http://test-ta.herokuapp.com/games',
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        $('#target').html(data.msg);
                    },
                    data: gamerfinish
                });
                $(".winnig").html("ganador "+jugador2);
              }
            } 

            if (flag == 1) {
              $(this).html("x");
              flag =0;
            }else{  
              
              $(this).html("o");
              flag =1;
            }
            //alert($(this).attr("data-pos"));
      });

         //$(td).attr("data-pos");
    });