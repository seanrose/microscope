Comments = new Meteor.Collection('comments');

Meteor.methods({
    comment: function(commentAttributes) {
        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);
        // ensure user is logged in
        if (!user) {
            throw new Meteor.Error(401, 'You need to log in to make comments');
        }

        if (!commentAttributes.body) {
            throw new Meteor.Error(422, 'Please write some content');
        }

        if (!post) {
            throw new Meteor.Error(422, 'You must comment on a post');
        }

        comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        // update the comment count of the corresponding post
        Posts.update(comment.postId, {$inc: {comentsCount: 1}});

        // Create the commment, save the ID
        comment._id = Comments.insert(comment);

        // create a notification for the comment
        createCommentNotification(comment);

        return comment._id;
    }
});