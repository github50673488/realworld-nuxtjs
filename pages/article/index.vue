<template>
  <!-- 文章详情 -->
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ article.title }}</h1>

        <article-meta :article="article"/>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <!--        <div class="col-md-12">{{ article.body }}</div>-->
        <div class="col-md-12" v-html="article.body"></div>
        <!--        把Markdown转为HTML-->
      </div>

      <hr/>

      <div class="article-actions">
        <article-meta :article="article"/>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :article="article"/>

        </div>

      </div>

    </div>

  </div>
  <!-- /文章详情 -->
</template>

<script>

import {getArticle} from "../../api/article";
import MarkdownIt from 'markdown-it'
import ArticleMeta from './components/article-meta.vue'
import ArticleComments from './components/article-comments.vue'

export default {
  name: 'ArticleIndex',
  async asyncData({params}) {

    // 教程上的网页上的代码有误 写成 getArticles 了
    const {data} = await getArticle(params.slug)
    const {article} = data
    const md = new MarkdownIt
    article.body = md.render(article.body)
    return {
      article: article
    }
  }
  ,
  components: {
    ArticleMeta,
    ArticleComments

  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>

<style>

</style>
