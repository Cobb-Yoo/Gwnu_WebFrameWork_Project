<template>
  <v-card elevation="0">
    <v-row justify="center" class="mt-1">
      <v-col cols="6">
        <v-card elevation="3" class="pa-0">
          <v-card-title class="pa-2">
            크롤링된 텍스트 입니다
          </v-card-title>
          <v-card-subtitle class="ma-0">
            확인을 누르면 리스트에 저장되고 <br />
            마지막 사진 이후 바탕화면에 저장됩니다
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-container>
      <v-row justify="center">
        <v-col>
          <v-card elevation="0">
            <v-data-table
              :headers="txtHeader"
              :items="txtList"
              :items-per-page="100"
            >
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer fixed color="white" height="60">
      <v-row justify="center">
        <v-btn text x-large fontSize="18px" @click="down()">
          <v-icon class="mx-3">mdi-arrow-left</v-icon>
          <span fontSize="18px">이전</span>
        </v-btn>

        <v-btn text x-large fontSize="18px">
          <span> 저장 </span>
        </v-btn>

        <v-btn text x-large fontSize="18px">
          <span> 선택 </span>
        </v-btn>

        <v-btn text x-large fontSize="18px">
          <span>다음</span>
          <v-icon class="mx-3">mdi-arrow-right</v-icon>
        </v-btn>
      </v-row>
    </v-footer>

    <v-dialog v-model="dialog" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      txtList: [
        {
          String: "test1",
          path: "test1",
        },
        {
          String: "test2",
          path: "test2",
        },
        {
          String: "test3",
          path: "test3",
        },
        {
          String: "test4",
          path: "test4",
        },
        {
          String: "test1",
          path: "test1",
        },
        {
          String: "test2",
          path: "test2",
        },
        {
          String: "test3",
          path: "test3",
        },
        {
          String: "test4",
          path: "test4",
        },
        {
          String: "test1",
          path: "test1",
        },
        {
          String: "test2",
          path: "test2",
        },
        {
          String: "test3",
          path: "test3",
        },
        {
          String: "test4",
          path: "test4",
        },
        {
          String: "test1",
          path: "test1",
        },
        {
          String: "test2",
          path: "test2",
        },
        {
          String: "test3",
          path: "test3",
        },
        {
          String: "test4",
          path: "test4",
        },
      ],
      txtHeader: [
        { text: "삭제?", value: "" },
        { text: "값", value: "String" },
        { text: "경로", value: "path" },
      ],
    };
  },
  methods: {
    startCrawling(url) {
      this.dialog = true;

      console.log(url);
      //txtList = ???

      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters({ targetUrl: "getUrl" }),
  },
  created() {
    //this.getImgList();
    this.startCrawling(this.targetUrl);
  },
};
</script>
