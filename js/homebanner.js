var i = 0;
var bannerNames = ["", "牛仔裙", "金米欧手表", "格子衬衫"];
var bannerContent = ["",
"<p>　　牛仔裙是诸多裙装中修饰最少、穿着最随着的服装。它不受年龄限制，只要身材适中，配上一双中跟皮鞋或休闲鞋便可以“挺拔”地站出来。</p><br/><p>　　牛仔裙的风格总的来说是洒脱、随意、纯朴、自然的，它不仅使女性拥有一种妩媚，在飘逸之中透着沉稳，而且还充分展示了女性健康、坦荡的一面。</p>",
"<p>　　金米欧是永鸿钟表集团旗下钟表品牌，英文名为：KIMIO。</p><br/><p>　　永鸿钟表在国内钟表技上处于领先地位，拥有多项手表制造技术。品牌成立以来，金米欧一直采用优质的配件，坚持品质、美丽、可靠的优秀传统，以其锐利的精品意识、精良的工艺、源源不断的生产出深受中国消费者喜爱的手表。</p>",
"<p>　　格子衬衫是传统与时尚的经典结合，是重要的点缀。给人清爽的印象，让衬衫渲染出你独立的气质。</p><br/><p>　　穿着给人清爽活波开朗的感觉。格子衬衫无疑是整个格子风潮中的必备品，因为它休闲，百搭，贴心又温暖。",
];

function init() {
  setInterval("changeImage()", 4000);
  changeImage();
}

function changeImage() {
  if(++i > 3) i = 1;
  document.getElementById("banner_image").src = "image/banner_" + i + ".jpg";
  document.getElementById("banner_link").href = "#banner_" + i;
  document.getElementById("banner_description_header").innerText = bannerNames[i];
  document.getElementById("banner_description_content").innerHTML = bannerContent[i];
}