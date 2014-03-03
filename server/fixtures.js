// fixture data
if (Posts.find().count() === 0) {
    var now = new Date().getTime();

    // create two users
    var derrickId = Meteor.users.insert({
        profile: { name: 'Derrick Rose' }
    });
    var derrick = Meteor.users.findOne(derrickId);
    var kevinId = Meteor.users.insert({
        profile: { name: 'Kevin Durant' }
    });
    var kevin = Meteor.users.findOne(kevinId);

    var kdThirtyFiveId = Posts.insert({
        title: 'The Official Home of Kevin Durant',
        userId: kevin._id,
        author: kevin.profile.name,
        url: 'http://kevindurant35.com/',
        submitted: now - 7 * 3600 * 1000,
        commentsCount: 2,
        upvoters: [],
        votes: 0
    });

    Comments.insert({
        postId: kdThirtyFiveId,
        userId: derrick._id,
        author: derrick.profile.name,
        submitted: now - 5 * 3600 * 1000,
        body: 'I may be injured but I\'m still better than you'
    });

    Comments.insert({
        postId: kdThirtyFiveId,
        userId: kevin._id,
        author: kevin.profile.name,
        submitted: now - 3 * 3600 * 1000,
        body: 'LMAO #MVP'
    });

    Posts.insert({
        title: 'Derrick Rose (HD)',
        userId: derrick._id,
        author: derrick.profile.name,
        url: 'https://www.youtube.com/watch?v=GOtxJrzp6ls',
        submitted: now - 10 * 3600 * 1000,
        commentsCount: 0,
        upvoters: [],
        votes: 0
    });

    Posts.insert({
        title: 'Derrick Rose Stats',
        userId: derrick._id,
        author: derrick.profile.name,
        url: 'http://espn.go.com/nba/player/_/id/3456/derrick-rose',
        submitted: now - 12 * 3600 * 1000,
        commentsCount: 0,
        upvoters: [],
        votes: 0
    });

    for (var i = 0; i < 10; i++) {
        Posts.insert({
            title: 'Test post #' + i,
            author: kevin.profile.name,
            userId: kevin._id,
            url: 'http://google.com/?q=test-' + i,
            submitted: now - i * 3600 * 1000,
            commentsCount: 0
        });
    }
}