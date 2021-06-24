(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be6c8"],{"2fca":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[i("el-form-item",{attrs:{label:"班级：",prop:"gradeLevel",required:""}},[i("el-select",{attrs:{placeholder:"年级"},on:{change:e.levelChange},model:{value:e.form.gradeLevel,callback:function(t){e.$set(e.form,"gradeLevel",t)},expression:"form.gradeLevel"}},e._l(e.levelEnum,(function(e){return i("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),i("el-form-item",{attrs:{label:"课程：",prop:"subjectId",required:""}},[i("el-select",{attrs:{placeholder:"课程"},on:{change:e.currStationChange},model:{value:e.form.subjectId,callback:function(t){e.$set(e.form,"subjectId",t)},expression:"form.subjectId"}},e._l(e.subjectFilter,(function(e){return i("el-option",{key:e.id,attrs:{value:e.id,label:e.name+" ( "+e.levelName+" )"}})})),1)],1),i("el-form-item",{attrs:{label:"考试题目：",prop:"secret",required:""}},[i("el-radio-group",{model:{value:e.form.secret,callback:function(t){e.$set(e.form,"secret",t)},expression:"form.secret"}},[i("el-radio",{attrs:{label:!0}},[e._v("是")]),i("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),i("el-form-item",{attrs:{label:"题干：",prop:"title",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"title")}},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),i("div",{staticClass:"upLoad"},[i("label",{attrs:{for:"pop_image",id:"labelr"}},[e.form.imagePath?i("img",{attrs:{id:"videoId",src:e.form.imagePath,width:"100%"}}):e._e(),i("div",{staticClass:"flexRow"},[i("div",{staticClass:"inputImage"},[e._v("上传图片:")]),i("input",{ref:"file",attrs:{id:"pop_image",type:"file",accept:"image/*",capture:"camcorder",name:"fileTrans",value:""},on:{change:function(t){return e.getImage(e.event,"2")}}})])])]),i("div",{staticClass:"upLoad"},[i("label",{attrs:{for:"pop_video",id:"labelr"}},[e.form.videoPath?i("video",{attrs:{id:"videoId",src:e.form.videoPath,controls:"",width:"100%"}}):e._e(),i("div",{staticClass:"flexRow"},[i("div",{staticClass:"inputVideo"},[e._v("上传视频:")]),i("input",{ref:"file",attrs:{id:"pop_video",type:"file",accept:"video/*",capture:"camcorder",name:"fileTrans",value:"上传视频"},on:{change:function(t){return e.getVideo(e.event,"2")}}})])])]),i("div",{staticClass:"upLoad"},[i("label",{attrs:{for:"pop_audio",id:"labelr"}},[e.form.audioPath?i("audio",{attrs:{id:"audioId",src:e.form.audioPath,controls:"",width:"100%"}}):e._e(),i("div",{staticClass:"flexRow"},[i("div",{staticClass:"inputAudio"},[e._v("上传音频:")]),i("input",{ref:"file",attrs:{id:"pop_audio",type:"file",accept:"audio/*",capture:"camcorder",name:"fileTrans",value:""},on:{change:function(t){return e.getAudio(e.event,"2")}}})])])])],1),i("el-form-item",{attrs:{label:"答案：",prop:"correct",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"correct")}},model:{value:e.form.correct,callback:function(t){e.$set(e.form,"correct",t)},expression:"form.correct"}})],1),i("el-form-item",{attrs:{label:"解析：",prop:"analyze",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"analyze")}},model:{value:e.form.analyze,callback:function(t){e.$set(e.form,"analyze",t)},expression:"form.analyze"}})],1),i("el-form-item",{attrs:{label:"分数：",prop:"score",required:""}},[i("el-input-number",{attrs:{precision:1,step:1,max:100},model:{value:e.form.score,callback:function(t){e.$set(e.form,"score",t)},expression:"form.score"}})],1),i("el-form-item",{attrs:{label:"难度：",required:""}},[i("el-rate",{staticClass:"question-item-rate",model:{value:e.form.difficult,callback:function(t){e.$set(e.form,"difficult",t)},expression:"form.difficult"}})],1),i("el-form-item",{attrs:{prop:"chapterId",label:"知识点"}},[i("el-select",{attrs:{filterable:"","allow-create":"","default-first-option":"",placeholder:"请选择知识点"},model:{value:e.chapterShow.newChapter,callback:function(t){e.$set(e.chapterShow,"newChapter",t)},expression:"chapterShow.newChapter"}},e._l(e.chapterShow.chapters,(function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),i("el-button",{on:{click:e.resetForm}},[e._v("重置")]),i("el-button",{attrs:{type:"success"},on:{click:e.showQuestion}},[e._v("预览")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.richEditor.dialogVisible,"append-to-body":"","close-on-click-modal":!1,"show-close":!1,center:""},on:{"update:visible":function(t){return e.$set(e.richEditor,"dialogVisible",t)}}},[i("Ueditor",{on:{ready:e.editorReady}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.editorConfirm}},[e._v("确 定")]),i("el-button",{on:{click:function(t){e.richEditor.dialogVisible=!1}}},[e._v("取 消")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.questionShow.dialog},on:{"update:visible":function(t){return e.$set(e.questionShow,"dialog",t)}}},[i("QuestionShow",{attrs:{qType:e.questionShow.qType,question:e.questionShow.question,qLoading:e.questionShow.loading}})],1)],1)},o=[],a=(i("4de4"),i("caad"),i("b0c0"),i("a9e3"),i("d3b7"),i("2532"),i("3ca3"),i("ddb0"),i("2b3d"),i("96cf"),i("1da1")),n=i("5530"),s=i("294d"),l=i("63f4"),c=i("2f62"),u=i("2ac8"),d={components:{Ueditor:l["a"],QuestionShow:s["a"]},data:function(){return{form:{id:null,questionType:5,gradeLevel:null,subjectId:null,title:"",videoPath:"",audioPath:"",imagePath:"",items:[],analyze:"",correct:"",score:"",difficult:0,chapterId:"",secret:!1},subjectFilter:null,formLoading:!1,rules:{gradeLevel:[{required:!0,message:"请选择年级",trigger:"change"}],subjectId:[{required:!0,message:"请选择学科",trigger:"change"}],title:[{required:!0,message:"请输入题干",trigger:"blur"}],correct:[{required:!0,message:"请输入答案",trigger:"blur"}],analyze:[{required:!0,message:"请输入解析",trigger:"blur"}],score:[{required:!0,message:"请输入分数",trigger:"blur"}]},richEditor:{dialogVisible:!1,object:null,parameterName:"",instance:null},questionShow:{qType:0,dialog:!1,question:null,loading:!1},chapterShow:{chapters:[],newChapter:"",loading:!1,queryCha:{pageIndex:1,pageSize:100,subjectId:"",gradeLevel:""},queryNewCha:{id:"",name:"",subjectId:"",gradeLevel:"",info:""},chaId:[],someShow:!0}}},created:function(){var e=this.$route.query.id,t=this;this.initSubject((function(){t.subjectFilter=t.subjects})),e&&0!==parseInt(e)&&(t.formLoading=!0,this.init(e),this.getChapter())},watch:{"chapterShow.newChapter":function(e){e&&(this.newChapter=e,this.postChapter())}},methods:Object(n["a"])(Object(n["a"])({init:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,u["a"].select(e).then((function(e){t.form=e.response,t.chapterShow.queryNewCha.subjectId=t.form.subjectId,t.chapterShow.queryCha.subjectId=t.form.subjectId,t.getChapter(),t.chapterShow.newChapter=parseInt(t.form.chapterId),t.formLoading=!1}));case 2:case"end":return i.stop()}}),i)})))()},currStationChange:function(e){console.log("currStationChange",e),e&&(this.chapterShow.queryNewCha.subjectId=e,this.chapterShow.queryCha.subjectId=e,this.getChapter())},getChapter:function(){var e=this;u["a"].chapterList(this.chapterShow.queryCha).then((function(t){var i=t.response.list,r=[];e.chaId=[];for(var o=0;o<i.length;o++)e.chaId.push(i[o].id),i[o].name&&r.push(i[o]);e.chapterShow.chapters=r,e.form.chapterId=String(e.chapterShow.chapters[0].id)}))},postChapter:function(){var e=this;""!=this.newChapter&&0==this.chaId.includes(Number(this.newChapter))&&(this.chapterShow.queryNewCha.name=this.newChapter,u["a"].insertChapter(this.chapterShow.queryNewCha).then((function(t){1==t.code&&e.getChapter()})))},getImage:function(e,t){var i=this,r=this,o=document.getElementById("pop_image");document.getElementById("imageId");r.form.imagePath=this.getFileURL(o.files[0]),console.log(r.form.imagePath);var a=new FormData;a.append("multipartFile",o.files[0]),u["a"].imagePost(a).then((function(e){console.log(e),1===e.code&&(i.form.imagePath="http://47.97.152.219:8000"+e.response)})),console.log(url)},getVideo:function(e,t){var i=this,r=this,o=document.getElementById("pop_video");document.getElementById("videoId");r.form.videoPath=this.getFileURL(o.files[0]),console.log(r.form.videoPath);var a=new FormData;a.append("multipartFile",o.files[0]),u["a"].videoPost(a).then((function(e){console.log(e),1===e.code&&(i.form.videoPath="http://47.97.152.219:8000"+e.response,console.log(i.form.videoPath))})),console.log(url)},getAudio:function(e,t){var i=this,r=document.getElementById("pop_audio");document.getElementById("audioId");this.form.audioPath=this.getFileURL(r.files[0]);var o=new FormData;o.append("multipartFile",r.files[0]),u["a"].audioPost(o).then((function(e){console.log(e),1===e.code&&(i.form.audioPath="http://47.97.152.219:8000"+e.response)})),console.log(this.vidioUrl)},getFileURL:function(e){var t=null;return void 0!=window.createObjectURL?t=window.createObjectURL(e):void 0!=window.URL?t=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t},editorReady:function(e){this.richEditor.instance=e;var t=this.richEditor.object[this.richEditor.parameterName];this.richEditor.instance.setContent(t),this.richEditor.instance.focus(!0)},inputClick:function(e,t){this.richEditor.object=e,this.richEditor.parameterName=t,this.richEditor.dialogVisible=!0},editorConfirm:function(){var e=this.richEditor.instance.getContent();this.richEditor.object[this.richEditor.parameterName]=e,this.richEditor.dialogVisible=!1},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(i){if(!i)return!1;e.formLoading=!0,u["a"].edit(e.form).then((function(i){1===i.code?(t.$message.success(i.message),t.delCurrentView(t).then((function(){t.$router.push("/exam/question/list")}))):(t.$message.error(i.message),e.formLoading=!1)})).catch((function(t){e.formLoading=!1}))}))},resetForm:function(){this.$refs["form"].resetFields(),this.form={id:null,questionType:5,gradeLevel:null,subjectId:null,title:"",items:[],analyze:"",correct:"",score:"",difficult:0}},levelChange:function(){var e=this;this.form.subjectId=null,this.subjectFilter=this.subjects.filter((function(t){return t.level===e.form.gradeLevel}))},showQuestion:function(){this.questionShow.dialog=!0,this.questionShow.qType=this.form.questionType,this.questionShow.question=this.form}},Object(c["b"])("exam",{initSubject:"initSubject"})),Object(c["b"])("tagsView",{delCurrentView:"delCurrentView"})),computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["c"])("enumItem",["enumFormat"])),Object(c["e"])("enumItem",{questionTypeEnum:function(e){return e.exam.question.typeEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(c["e"])("exam",{subjects:function(e){return e.subjects}}))},h=d,m=i("2877"),f=Object(m["a"])(h,r,o,!1,null,null,null);t["default"]=f.exports}}]);