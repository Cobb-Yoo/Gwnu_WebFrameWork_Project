<template>
  <v-card elevation="0">
    <v-row justify="center" class="mt-1">
      <v-col cols="6">
        <v-card elevation="3" class="pa-0">
          <v-card-title class="pa-2">
            크롤링된 사진입니다
          </v-card-title>
          <v-card-subtitle class="ma-0">
            확인을 누르면 리스트에 저장되고 <br />
            마지막 사진 이후 바탕화면에 저장됩니다
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="6" class="pt-0">
        <v-img :src="url[idx]" contain height="650" />
      </v-col>
    </v-row>

    <v-footer fixed color="white" height="60">
      <v-row justify="center">
        <v-btn text x-large fontSize="18px" @click="down()">
          <v-icon class="mx-3">mdi-arrow-left</v-icon>
          <span fontSize="18px">이전</span>
        </v-btn>

        <v-btn text x-large fontSize="18px" @click="downlaods()">
          <span> 저장 </span>
        </v-btn>

        <v-btn text x-large fontSize="18px" @click="imgChoice(idx)">
          <span> 선택 </span>
        </v-btn>

        <v-btn text x-large fontSize="18px" @click="up()">
          <span>다음</span>
          <v-icon class="mx-3">mdi-arrow-right</v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      idx: 0,
      url: [
        "https://www.theguru.co.kr/data/photos/20210937/art_16316071303022_bf8378.jpg",
        "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg",
        "https://blog.kakaocdn.net/dn/bie8yq/btqUeitAhZI/cCN2ZeS9brlsxlo2LtS4j1/img.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUa4aFmJrSoi0jj-Mt-mGZvOXTJ6Of-FM2CA&usqp=CAU",
        "http://thetravelnews.co.kr/wp-content/uploads/2021/05/%EC%82%AC%EC%A7%84_%EC%95%84%EC%9D%B4%EC%9C%A0_EDAM-ent.jpeg",
      ],
    };
  },
  methods: {
    up() {
      this.idx = this.idx + 1;
      if (this.idx >= this.url.length) {
        this.idx = 0;
      }
    },
    down() {
      this.idx = this.idx - 1;
      if (this.idx < 0) {
        this.idx = this.url.length - 1;
      }
    },
    imgChoice(e) {
      console.log("this is imgSave");
      console.log(this.url[e]);
      this.up();
    },
    getImgList() {
      //url = 데이터...
      console.log("image.vue - getImgList");
    },
    saveData(idx) {
      console.log(idx);

      const link = document.createElement("a");
      link.href = this.url[idx].slice(8);
      link.setAttribute("download", idx);

      console.log(link);

      document.body.appendChild(link);
      link.click();
      //document.body.removeChild(link);
    },
    downlaods() {
      for (var idx = 0; idx < 5; idx++) {
        console.log(idx);

        const link = document.createElement("a");
        link.href = this.url[idx].slice(8);
        link.setAttribute("download", idx);

        console.log(link);

        document.body.appendChild(link);
        link.click();
      }
    },
  },
  created() {
    this.getImgList();
  },
};
</script>
