import axios from 'axios';
export const postModule = {
  state: () => ({
    posts: [], 
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
  }),

  getters: {
    sortedPosts(state){
      return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
    },
    sortedAndSearchedPosts(state, getters){
      return getters.sortedPosts.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setSelectedSort(state, setSelectedSort) {
      state.setSelectedSort = setSelectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },

  actions: {
    async fetchPosts({state, commit}) {
      try{
          commit('setLoading', true);      
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.page,
              _limit: state.limitPost
            }
          });
          commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limitPost))
          commit('setPosts',  response.data)
      }
      catch (e) {
        console.log(e)
      }
      finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({state, commit}) {
      try{
          commit('setPage', state.page + 1)     
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: state.page,
              _limit: state.limitPost
            }
          });
          commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limitPost));
          commit('setPosts', [...state.posts, ...response.data]);
      }
      catch (e) {
        console.log(e)
      } 
    }
  },
  namespaced: true // теперь я не могу обращаться в компоненте через postModule, теперь через название post, которое я ему задала в store/index.js 
}