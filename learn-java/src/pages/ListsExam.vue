<template lang='html'>
  <div class="">
    <div class="columns is-mobile">
      <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-offset-3-desktop is-6-desktop is-offset-3-desktop">
        <nav class="panel">
          <p class="panel-heading">
            แบบทดสอบ
          </p>
          <!--<div class="panel-block">
            <p class="control has-icon">
              <input class="input is-small" type="text" placeholder="Search">
              <span class="icon is-small">
                <i class="fa fa-search"></i>
              </span>
            </p>
          </div>-->
          <p class="panel-tabs">
            <a class="is-active">All</a>
            <a>งานใหม่</a>
            <a>งานที่ทำเสร็จแล้ว</a>
          </p>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 1
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 2
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 3
          </a>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 1
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 2
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fa fa-book"></i>
            </span>
            บทที่ 3
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListsExam',
    data () {
      return {
      }
    },
    mounted () {
    }
  }
</script>

<style lang='css'>
</style>
