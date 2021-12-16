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
import axios from 'axios';
import cheerio from 'cheerio';


export default {
  data() {
    return {
      dialog: false,
      txtList: [],
      txtHeader: [
        { text: "삭제?", value: "" },
        { text: "값", value: "String" },
        { text: "경로", value: "path" },
      ],
    };
  },
  methods: {
      //딜레이 함수
      delay(ms) {
        return new Promise(function(resolve) {
          setTimeout(function(){
            resolve();
          },ms);
        });
      },

      //HTML 파싱
      getHTML(url) {
          return new Promise(resolve=>{
            this.delay(3000).then(function() {
              axios.get(url).then(function(data) {
                alert(data);
                resolve(data);
              });
            });
        })    
      },

      //xpath 경로 반환
      getPathTo(element) {
        if (element.tagName == 'HTML')
          return '/HTML[1]';
        if (element===document.body)
          return '/HTML[1]/BODY[1]';

        var ix= 0;
        var siblings= element.parentNode.childNodes;
        for (var i= 0; i<siblings.length; i++) {
          var sibling= siblings[i];
          if (sibling===element)
            return this.getPathTo(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
          if (sibling.nodeType===1 && sibling.tagName===element.tagName)
            ix++;
        }
      },

      //JSON 형식으로 반환
      makeJSON(url) {
        this.getHTML(url).then(html => {
          var resultList = [];
          const $ = cheerio.load(html.data);

          var body_text = $("body").text();
          alert(body_text);
          body_text = body_text.split("\n");
          for (var i=0; i<body_text.length; i++){
            let result = {};
              if (body_text[i].trim() !=""){       //정상적인 텍스트일 경우 
                var contain_list = $(":contains("+ body_text[i] +")");      //텍스트를 포함하는 element들을 contain_list에 저장
                
                //path가 가장 긴 element를 선택
                var endElement = contain_list[0];
                for (var j=1; j<contain_list.length; j++){
                  var length_a = this.getPathTo(endElement).length;
                  var length_b = this.getPathTo(contain_list[j]).length;
                  if (length_a<length_b){
                    endElement = contain_list[j];
                  }
                }
                result['no'] = String(i);
                result['path'] = this.getPathTo(endElement);
                result['string'] = body_text[i];
              }
            resultList.push(result);
          }
          return resultList;
        })
      .then(res => {
        var result_json = JSON.stringify(res);
        return result_json;
      });
    },
      startCrawling(url) {
      this.dialog = true;

      console.log(url);

      var txtList = this.makeJSON(url);
      alert(txtList);
      this.dialog = false;
    }
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
