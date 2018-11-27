function PostsListController(mainSrv) {
  var vm = this;
  mainSrv.getPosts().then(function (response) {
    vm.posts = response.data;
  });
}

app.component('postsList', {
  templateUrl: 'post-list/posts-list.html',
  controller: PostsListController,
  controllerAs: 'vm'


});

