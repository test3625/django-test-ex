(function($) {
    var common;

    common = {
        something: function() {

        },
        ex1: function () {

        },
        ajaxPost: function(url, parameter){
            var deferred = new $.deferred();
            $.ajax({
                url: url,
                type: 'POST',
                data: parameter,
                cache: false
            }).then(
                function(data) {
                    deferred.resolve(data);
                },
                function(data) {
                    deferred.rejected(data);
                },
            );
            return deferred.promise();
        },
    }

    window.common = common;
})(jQuery);


function hogeAction() {
    var url='/aaaaa';
    var param = {aaa: '123'};
    var deferred = ajaxAction(
        url, param
    ).done(function(data) {
        // 成功
    }).fail(function(data) {
        // 失敗
    });
}