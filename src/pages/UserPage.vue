<template>
    <my-input v-model="searchQuery" placeholder="Поиск..."></my-input>
    <div class="app_btn">
      <my-button @click = "showDialog">
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
    <post-list v-if = "!isPostsLoading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"/>
    <div v-else> идет загрузка</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--<div ref="observer" class="observer"></div>-->
    <!--мы можем отследить когда этот блок появился в поле видимости страницы, для этого используем API Intersection observer.
    Когда у элемента есть ref, vue создает объект, который можно использовать для доступа к этому элементу или компоненту в коде.
    ref="observer" означает, что вы создаете ссылку на этот div элемент с именем observer. После этого вы можете получить доступ к этому элементу в вашем компоненте, используя this.$refs.observer.
    -->
    <!--<div class="page__wrapper">
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
    </div>-->
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
 export default {
  components: {
    PostForm, PostList
  },
  data() {
    return {
      posts: [], 
      dialogVisible: false,
      isPostsLoading: false,
      searchQuery: '',
      selectedSort: '',
      page: 1,
      totalPage: 0,
      limitPost: 10,
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'}
      ],
    }
  },
  methods: {
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
    /*changePage(newPageNumber){
      this.page = newPageNumber;
    },*/
    async fetchPosts() {
      try{
          this.isPostsLoading = true;        
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limitPost
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limitPost);
          this.posts = response.data;
      }
      catch (e) {
        alert('error')
      }
      finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try{
          this.page += 1;       
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limitPost
            }
          });
          this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limitPost);
          this.posts = [...this.posts, ...response.data];
      }
      catch (e) {
        alert('error')
      } 
    }
  },
  mounted() {
    this.fetchPosts();
    /*const options = {
      root: document.querySelector("#scrollArea"), // по умолчанию 
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => { // отработает когда мы пересечем элемент, причем и при скроле вниз, и при скроле вверх
      if(entries[0].isIntersecting && this.page < this.totalPage){
        this.loadMorePosts();
      } // условие для того, чтобы только при скроле вниз работало
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);*/
  },
  watch: {
    /*page(){
      this.fetchPosts();
    }*/
    /*selectedSort(newValue){
      this.posts.sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    }*/
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts(){
      return this.sortedPosts.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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