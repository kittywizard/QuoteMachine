$(function () {
    //pull both divs
    var $author = $('.author');
    var $quote = $(".quote");
    var $twitter = $(".twitter");
    var $tweet = "";


    // need a way to replace old quote with new with each click
    $("#getMessage").on('click', function () {

        $.ajax({
            type: 'GET'
            , url: 'http://quotes.stormconsultancy.co.uk/random.json'
            , success: function (data) {
                console.log(data);
                var getquote = data.quote;
                var getauthor = data.author;

                ($quote).html("<p>" + getquote + "</p>");
                ($author).html("<p> &mdash; " + getauthor + "</p>");

                if (getquote.length <= 140){
                  tweet = getquote;
                    }
                else {
                    tweet = getquote.slice(0, 137) + "...";

                    }

                $(".twitter-link").on('click', function() {
                    window.open("https://www.twitter.com/intent/tweet?text=" + tweet);


                });
            }
        });

    });
});
