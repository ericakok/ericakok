$(document).ready(function() {

$("#second").hide();
$("#third").hide();
$("#fourth").hide();

//HOME PAGE.

$("#home").click(function(){
    $("#One").slideDown();
    $("#second").slideUp();
    $("#third").slideUp();
    $("#fourth").slideUp();
    document.getElementById('res').style.color = 'black';
    document.getElementById('proj').style.color = 'black';
    document.getElementById('cont').style.color = 'black';
    $("#home").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "rgb(150, 182, 44)");
    });
    $("#res").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#proj").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#cont").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
	});

//RESUME PAGE.

$("#res").click(function(){
    $("#One").slideUp();
    $("#second").slideDown();
    $("#third").slideUp();
    $("#fourth").slideUp();
    document.getElementById('home').style.color = 'black';
    document.getElementById('proj').style.color = 'black';
    document.getElementById('cont').style.color = 'black';
    $("#home").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#res").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "rgb(150, 182, 44)");
    });
    $("#proj").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#cont").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
	});

$("#resume").click(function(){
    $("#One").slideUp();
    $("#second").slideDown();
    $("#third").slideUp();
    $("#fourth").slideUp();
    document.getElementById('home').style.color = 'black';
    document.getElementById('res').style.color = 'rgb(150, 182, 44)';
    document.getElementById('proj').style.color = 'black';
    document.getElementById('cont').style.color = 'black';
    $("#home").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#res").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "rgb(150, 182, 44)");
    });
    $("#proj").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#cont").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
  });

// PROJECTS PAGE.

$("#proj").click(function(){
    $("#One").slideUp();
    $("#second").slideUp();
    $("#third").slideDown();
    $("#fourth").slideUp();
    document.getElementById('home').style.color = 'black';
    document.getElementById('res').style.color = 'black';
    document.getElementById('cont').style.color = 'black';
    $("#home").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#res").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#proj").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "rgb(150, 182, 44");
    });
    $("#cont").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
	});

$("#work").click(function(){
    $("#One").slideUp();
    $("#second").slideUp();
    $("#third").slideDown();
    $("#fourth").slideUp();
    document.getElementById('home').style.color = 'black';
    document.getElementById('res').style.color = 'black';
    document.getElementById('proj').style.color = 'rgb(150, 182, 44)';
    document.getElementById('cont').style.color = 'black';
    $("#home").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#res").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
    $("#proj").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "rgb(150, 182, 44)");
    });
    $("#cont").hover(function(){
        $(this).css("color", "rgb(122, 148, 39)");
        }, function(){
        $(this).css("color", "black");
    });
  });

//CONTACT PAGE.

  $("#cont").click(function(){
      $("#One").slideUp();
      $("#second").slideUp();
      $("#third").slideUp();
      $("#fourth").slideDown();
      document.getElementById('home').style.color = 'black';
      document.getElementById('res').style.color = 'black';
      document.getElementById('proj').style.color = 'black';
      $("#home").hover(function(){
          $(this).css("color", "rgb(122, 148, 39)");
          }, function(){
          $(this).css("color", "black");
      });
      $("#res").hover(function(){
          $(this).css("color", "rgb(122, 148, 39)");
          }, function(){
          $(this).css("color", "black");
      });
      $("#proj").hover(function(){
          $(this).css("color", "rgb(122, 148, 39)");
          }, function(){
          $(this).css("color", "black");
      });
      $("#cont").hover(function(){
          $(this).css("color", "rgb(122, 148, 39)");
          }, function(){
          $(this).css("color", "rgb(150, 182, 44");
      });
  	});


    $("#contact").click(function(){
        $("#One").slideUp();
        $("#second").slideUp();
        $("#third").slideUp();
        $("#fourth").slideDown();
        document.getElementById('home').style.color = 'black';
        document.getElementById('res').style.color = 'black';
        document.getElementById('proj').style.color = 'black';
        document.getElementById('cont').style.color = 'rgb(150, 182, 44)';
        $("#home").hover(function(){
            $(this).css("color", "rgb(122, 148, 39)");
            }, function(){
            $(this).css("color", "black");
        });
        $("#res").hover(function(){
            $(this).css("color", "rgb(122, 148, 39)");
            }, function(){
            $(this).css("color", "black");
        });
        $("#proj").hover(function(){
            $(this).css("color", "rgb(122, 148, 39)");
            }, function(){
            $(this).css("color", "black");
        });
        $("#cont").hover(function(){
            $(this).css("color", "rgb(122, 148, 39)");
            }, function(){
            $(this).css("color", "rgb(150, 182, 44)");
        });
    	});
    });
