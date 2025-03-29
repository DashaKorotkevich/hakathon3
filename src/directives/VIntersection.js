export default{
   mounted(el, binding){ /* принимает элемент, на который вешается директива и объект */
    console.log(binding)
    const options = {
      root: document.querySelector("#scrollArea"), // по умолчанию 
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => { // отработает когда мы пересечем элемент, причем и при скроле вниз, и при скроле вверх
      if(entries[0].isIntersecting){
        binding.value(); // this.laodMorePosts()
      } // условие для того, чтобы только при скроле вниз работало
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el /* this.$refs.observer */);
   },
   name: 'intersection'
}