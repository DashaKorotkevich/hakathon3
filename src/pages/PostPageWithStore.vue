<template>
  <h1>1{{}}</h1>
    <my-input 
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
     placeholder="Поиск..."/>
    <div class="app_btn">
      <my-button 
        @click = "showDialog">
      Создать
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show = "dialogVisible">
      <post-form @create = "createPost"/>
    </my-dialog>
    <post-list 
      v-if = "!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    />
    <div v-else> идет загрузка</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div class="page__wrapper">
      <div 
        v-for="pageNumber in totalPage"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
        >{{ pageNumber }}
      </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage:'post/setPage',
      setSearchQuery:'post/setSearchQuery',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post){
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter((p) => p.id !== post.id)
    }, 
    showDialog(){
      this.dialogVisible = true;
    },
  },
  mounted(){
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts, 
      isPostsLoading: state => state.post.isPostsLoading,
      searchQuery: state => state.post.searchQuery,
      selectedSort: state => state.post.selectedSort,
      page: state => state.post.page,
      totalPage: state => state.post.totalPage,
      limitPost: state => state.post.limitPost,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  }
}
</script>

<style>
a,button{
cursor: pointer;
}
.app_btn{
display: flex;
justify-content: space-between;
margin: 15px 0;
}
.page__wrapper{
display: flex;
margin-top: 15px;
}
.page{
border: 1px solid black;
padding: 10px;
}
.current-page{
border: 2px solid teal;
}
</style>