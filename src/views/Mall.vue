<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in images" :key="item.image">
      <img class="medium" :src="item.image" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
export default {
  data() {
    return {
      images: [
        {
          image: img1,
        },
        {
          image: img2,
        },
        {
          image: img6,
        },
        {
          image: img3,
        },
        {
          image: img4,
        },
        {
          image: img5,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>