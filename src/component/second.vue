<template>
  <div id="second">
    <h1>i am a tile..</h1>
    <a>written by {{anthor}}</a>
    <p>感谢<a href="https://www.baidu.com">百度</a></p>
    <ul>
      <li v-for="article in articles">
        {{article.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      anthor: '百度公众号 jinkey-love',
      articles: []
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
        console.log(response)

        this.articles = response.body.subjects
        console.log(this.articles)

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>

<style>

</style>
