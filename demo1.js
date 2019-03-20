// 导入对应产品模块的client models。
const CvmClient1 = require("./tencentcloud/aai/aai_client");
const models1 = require("./tencentcloud/aai/models")

const Credential = require("./tencentcloud/common/credential");

let cred = new Credential("AKIDUU6iPxeKwJxMWT4b5DVwtgGPIxzzOqPd", "lSp42oWB7ph9WXlOlRAiwePwHneGj3BB"); //

// 实例化要请求产品(以cvm为例)的client对象
let client1 = new CvmClient1(cred, "ap-shanghai");

// 实例化一个请求对象
var audio1 = 'http://cdn.itinga.cn/follow/episode/url/user/1/5c7ce27c21ba4aa78ae25d2891a33896.mp3'
console.log(encodeURIComponent(audio1))
console.log(Date.parse(new Date()))
let req1 = new models1.SentenceRecognitionRequest()
req1.deserialize(
    params = {
        ProjectId: 1258665607,
        SubServiceType: 2,
        EngSerViceType: '16k',
        SourceType: 0,
        VoiceFormat: 'mp3',
        UsrAudioKey: Date.parse(new Date()),
        Url: encodeURIComponent(audio1),
    }
)
// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client1.SentenceRecognition(req1, function (err, response) {
    // 请求异常返回，打印异常信息
    if (err) {
        console.log(err);
        return;
    }
    // 请求正常返回，打印response对象
    console.log(response.to_json_string());
})