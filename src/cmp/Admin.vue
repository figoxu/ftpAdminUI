<template>
  <div>
    <header id="header" class="clearfix">
      <!-- Logo -->
      <a href="#" class="logo shadowed">
        Figo FTP Admin
      </a>

      <div class="dropdown profile-menu shadowed">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
          <img src="/static/tpl/img/profile-pics/profile-pic.png" alt="" class="profile-pic">
        </a>
        <ul class="dropdown-menu pull-right text-right">
          <li><a href="">Update Profile</a></li>
          <li><a href="">Notifications & Updates</a></li>
          <li><a href="">Settings</a></li>
          <li class="divider"></li>
          <li><a href="">Sign-Out</a></li>
        </ul>
      </div>

      <ul class="nav nav-pills pull-right shadowed" id="top-menu">
        <li><a style="cursor: pointer;">统计报表</a></li>
        <li><a  style="cursor: pointer;">FTP账号</a></li>
        <li><a style="cursor: pointer;">修改密码</a></li>
      </ul>

    </header>
  </div>
</template>
