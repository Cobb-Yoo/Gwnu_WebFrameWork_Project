<template>
  <v-row justify="center" class="mt-8">
    <v-col cols="6" class="mt-5">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Step 1
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Step 2
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Step 3
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-12" height="300px" elevation="0">
              <v-col class="ma-0 pa-0">
                <v-card-title>
                  <v-text-field
                    v-model="title"
                    color="purple darken-2"
                    label="Title"
                    required
                  >
                  </v-text-field>
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-text>
                  title에 해당 프로그램의 이름을 작성해주세요 <br />
                  이 빈칸에 넣을 설명거리가 더 필요함 <br />
                  우리 팀은 짱이다 <br />
                </v-card-text>
              </v-col>
            </v-card>

            <v-btn color="primary" @click="moveNext(title)">
              Continue
            </v-btn>

            <v-btn text @click="cancel('취소합니다')" class="ml-1">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" height="300px" elevation="0">
              <v-col class="ma-0 pa-0">
                <v-card-title>
                  <v-text-field
                    v-model="url"
                    color="purple darken-2"
                    label="URL"
                    required
                  >
                  </v-text-field>
                </v-card-title>
              </v-col>
              <v-col>
                <v-card-text>
                  url 해당 프로그램의 이름을 작성해주세요 <br />
                  이 빈칸에 넣을 설명거리가 더 필요함 <br />
                  우리 팀은 짱이다 <br />
                </v-card-text>
              </v-col>
            </v-card>

            <v-btn color="primary" @click="moveNext(url)" class="ml-1">
              Continue
            </v-btn>

            <v-btn text @click="cancel('취소합니다')">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-row justify="center" class="mb-1">
              <v-col cols="6" class="pa-1">
                <v-card class="choiceCard ma-4">
                  <v-card-title>
                    Image
                  </v-card-title>

                  <v-card-text>
                    대충이걸 누르면 이미지를 크롤링할꺼에요 <br />
                    그런설명 <br />
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="6" class="pa-1">
                <v-card class="choiceCard ma-4">
                  <v-card-title>
                    Text
                  </v-card-title>

                  <v-card-text>
                    대충이걸 누르면 텍스트를 크롤링할꺼에요 <br />
                    그런설명 <br />
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-btn color="red" @click="checkData()">
              Start
            </v-btn>

            <v-btn text @click="cancel('취소합니다')" class="ml-1">
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      e1: 1,
      title: "",
      url: "",
      type: "",
    };
  },
  methods: {
    ...mapActions(["setData"]),
    cancel(str) {
      alert(str);
      this.e1 = 1;
      this.title = "";
      this.url = "";
      this.type = "";
    },
    moveNext() {
      this.e1 = this.e1 + 1;
    },
    checkData() {
      if (this.title == "" || this.url == "" || this.type == "fdf") {
        this.cancel("비어있는 값이 있습니다.");
        return;
      }

      const payload = {
        title: this.title,
        url: this.url,
        type: this.type,
      };

      console.log(payload);

      this.setData(payload);
    },
  },
};
</script>

<style>
.choiceCard {
  height: 316px;
}
</style>
