<template>
  <div class="home-page">
    <!-- 首页 -->
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <!-- 文章列表 -->
          <div
              class="article-preview"
              v-for="article in articles"
              :key="article.slug"
          >
            <div class="article-meta">
              <!-- <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a> -->
              <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
                <img :src="article.author.image"/>
              </nuxt-link>
              <div class="info">
                <!-- <a href="" class="author">Eric Simons</a> -->
                <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right"
                      :class="{
          active: article.favorited
        }">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <!-- <a href="" class="preview-link"> -->
            <nuxt-link
                class="preview-link"
                :to="{
      name: 'article',
      params: {
        slug: article.slug
      }
    }">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <!-- </a> -->
            </nuxt-link>
          </div>
          <!-- /文章列表 -->
          <!-- 分页列表 -->
          <nav>
            <ul class="pagination">

              <li class="page-item active">

                <a class="page-link ng-binding" href="">1</a>

              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a href="" class="tag-pill tag-default">programming</a>
              <a href="" class="tag-pill tag-default">javascript</a>
              <a href="" class="tag-pill tag-default">emberjs</a>
              <a href="" class="tag-pill tag-default">angularjs</a>
              <a href="" class="tag-pill tag-default">react</a>
              <a href="" class="tag-pill tag-default">mean</a>
              <a href="" class="tag-pill tag-default">node</a>
              <a href="" class="tag-pill tag-default">rails</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  <!-- /首页 -->
</template>

<script>
import {getArticles} from '@/api/article'

export default {
  name: 'HomeIndex',
  async asyncData() {
    const page = 1
    const limit = 10
    const {data} = await getArticles({
      // 文章分页数（默认20）
      limit,
      // 文章偏移/跳跃数（默认0）
      offset: (page - 1) * limit
    })
    return {
      articles: data.articles,
      articlesCount: data.articlesCount
    }
  }
}
</script>

<style>

</style>
