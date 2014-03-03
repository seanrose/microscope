Handlebars.registerHelper('pluralize', function(n, thing) {
    // LOL
    if (n === 1) {
        return '1 ' + thing;
    } else {
        return n + ' ' + thing + 's';
    }
});