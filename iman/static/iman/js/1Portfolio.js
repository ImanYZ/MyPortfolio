var gutterSize = 13;
var itemSize = 310;

function AddNodeTools() {
  $( ".grid-item" ).each(function( index ) {
    var minimizePostObj = $('<a/>')
        .addClass('Vote-Link Minimize-Post pull-right')
        .attr("role", 'button')
        .attr("href", '#')
        .attr("title", 'Minimize this post.');
    var glyphiconMinimizeObj = $('<span/>')
        .addClass('glyphicon glyphicon-minus Minimize-minus')
        .attr("aria-hidden", 'true');
    var minimizeSRObj = $('<span/>')
        .addClass('sr-only')
        .attr("text", 'Minimize this post.');

    $( this ).children( ".panel" ).prepend(minimizePostObj);
      minimizePostObj.append(glyphiconMinimizeObj);
      minimizePostObj.append(minimizeSRObj);

    var removePostObj = $('<a/>')
        .addClass('Vote-Link Remove-Post pull-right')
        .attr("role", 'button')
        .attr("href", '#')
        .attr("title", 'Remove this post.');
    var glyphiconRemoveObj = $('<span/>')
        .addClass('glyphicon glyphicon-remove Reject-remove')
        .attr("aria-hidden", 'true');
    var removeSRObj = $('<span/>')
        .addClass('sr-only')
        .attr("text", 'Remove this post.');

    $( this ).children( ".panel" ).prepend(removePostObj);
      removePostObj.append(glyphiconRemoveObj);
      removePostObj.append(removeSRObj);

    if ($( this ).children( ".panel" ).children( ".panel-body" ).children( ".post-content" ).length &&
      $( this ).children( ".panel" ).children( ".panel-body" ).children( ".post-content" ).children( "div" ).length &&
      $( this ).children( ".panel" ).children( ".panel-body" ).children( ".post-content" ).children( "div" ).children( "a" ).length) {
      $( this ).children( ".panel" ).children( ".panel-body" )
        .children( ".post-content" ).children( "div" ).children( "a" ).each(function () {
        var svgContainerAID = $(this).attr('id');
        var aImage = $(this).children( "img" );
        var svgObj = $( "#WelcomeBlackDIV" ).find("#WelcomeBlackSVG").clone();
        svgObj.attr("id", svgContainerAID + "SVG");
        var svgImage = document.createElementNS('http://www.w3.org/2000/svg','image');
        svgImage.setAttributeNS(null, "x", aImage.attr("x"));
        svgImage.setAttributeNS(null, "y", aImage.attr("y"));
        svgImage.setAttributeNS(null, "width", aImage.attr("width"));
        svgImage.setAttributeNS(null, "height", aImage.attr("height"));
        svgImage.setAttributeNS('http://www.w3.org/1999/xlink','href', aImage.attr("xlink:href"));
        svgImage.setAttributeNS(null, 'visibility', 'visible');
        svgObj.find( "#WelcomeBlackChangableSection" ).append(svgImage);
        svgObj.find( "#WelcomeBlackChangableSection" ).attr("id", svgContainerAID + "ChangableSection");
        svgObj.find( "#WelcomeBlackG" ).attr("id", svgContainerAID + "G");
        svgObj.find( "#WelcomeBlackApath3785BallL11" ).attr("id", svgContainerAID + "path3785BallL11");
        svgObj.find( "#WelcomeBlackApath3785BallL12" ).attr("id", svgContainerAID + "path3785BallL12");
        svgObj.find( "#WelcomeBlackApath3795BallL11" ).attr("id", svgContainerAID + "path3795BallL11");
        svgObj.find( "#WelcomeBlackApath3795BallL12" ).attr("id", svgContainerAID + "path3795BallL12");
        svgObj.find( "#WelcomeBlackApath3908" ).attr("id", svgContainerAID + "path3908");
        svgObj.find( "#WelcomeBlackApath3811" ).attr("id", svgContainerAID + "path3811");
        $(this).append(svgObj);
        aImage.remove();
      });
    }
  });

  $('.Minimize-Post').click(function(){
    var containerNode = $( this ).parent();
    var bodyNode = containerNode.children(".panel-body");
    if ( bodyNode.is(':visible') ) {
      bodyNode.hide(100, function() {
        AdjustMasonry();
      });
      $( this ).children('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-unchecked');
      $( this ).children('.sr-only').html("Maximize this post.");
      $( this ).prop('title', "Maximize this post.");
    }
    else {
      bodyNode.show(100, function() {
        AdjustMasonry();
      });
      $( this ).children('.glyphicon').removeClass('glyphicon-unchecked').addClass('glyphicon-minus');
      $( this ).children('.sr-only').html("Minimize this post.");
      $( this ).prop('title', "Minimize this post.");
    }
  });

  $('.Remove-Post').click(function(){
    $( this ).parent().parent().hide();
    AdjustMasonry();
  });
}

function AdjustMasonry() {
    $('.grid-item').css('width', itemSize + "px");
    $('#Grid').masonry({
        itemSelector: '.grid-item',
        gutter: gutterSize,
        columnWidth: itemSize,
    });
}

function SetItemsWidth() {
    var containerWidth = $('#Grid').parent().width();
    for (var i = 1; i < 13; i++) {
        if (containerWidth < (310 * (i + 1)) + (gutterSize * i)) {
            itemSize = (containerWidth - (gutterSize * (i - 1))) / i >> 0;
            break;
        }
    }
    AdjustMasonry();
}

$("#CreatePost").click(function () {
  $("#New-Post").show();

  AdjustMasonry('.grid-item');
});

function mouseOver(obj) {
  var id = $(obj).attr("id");
/*
      $('#' + id + '_Bright > img').attr("src", id + '.png');
      $('#' + id).hide();
      $('#' + id + ' > img').attr("src", id + '_Bright.png');
      $('#' + id).fadeIn(400);
*/
  $( "#" + id + "path3785BallL11" ).animate({
      opacity: 1
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3785BallL12" ).animate({
      opacity: 0
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3795BallL11" ).animate({
      opacity: 1
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3795BallL12" ).animate({
      opacity: 0
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3908" ).animate({
      fill: "#6e6e6e"
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3811" ).animate({
      fill: "#000000"
    }, 700, function() {
      // Animation complete.
    });
}

function mouseOut(obj) {
  var id = $(obj).attr("id");
/*
      $('#' + id + '_Bright > img').attr("src", id + '_Bright.png');
      $('#' + id).hide();
      $('#' + id + ' > img').attr("src", id + '.png');
      $('#' + id).fadeIn(400);
*/
  $( "#" + id + "path3785BallL11" ).animate({
      opacity: 0
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3785BallL12" ).animate({
      opacity: 1
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3795BallL11" ).animate({
      opacity: 0
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3795BallL12" ).animate({
      opacity: 1
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3908" ).animate({
      fill: "#FDEEF4"
    }, 700, function() {
      // Animation complete.
    });
  $( "#" + id + "path3811" ).animate({
      fill: "#FDEEF4"
    }, 700, function() {
      // Animation complete.
    });
}

function LoadYouTubeVideos() {
    (function () {
        var v = document.getElementsByClassName("youtube-player");
        for (var n = 0; n < v.length; n++) {
            var p = document.createElement("div");
            p.innerHTML = labnolThumb(v[n].dataset.id);
            p.onclick = labnolIframe;
            v[n].appendChild(p);
        }
    })();

    function labnolThumb(id) {
        return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&showinfo=0");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("class", "youtube-iframe");
        this.parentNode.replaceChild(iframe, this);
    }
}
