$(() => {
    loading()
})

$(window).on('load', function() {
    router()
})

$( window ).on('hashchange', function() {
    router();
} );

