(function(){"use strict";var t={8473:function(t,e,i){var s=i(5130),a=i(6768);const o={class:"app-container"};function r(t,e,i,s,r,n){const l=(0,a.g2)("HeaderPage"),d=(0,a.g2)("router-view"),h=(0,a.g2)("FooterPage");return(0,a.uX)(),(0,a.CE)(a.FK,null,[e[0]||(e[0]=(0,a.Lk)("header",null,null,-1)),(0,a.Lk)("main",null,[(0,a.Lk)("div",o,[r.is404Page?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(l,{key:0})),(0,a.bF)(d),r.is404Page?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.Wv)(h,{key:1}))])])],64)}const n={class:"home-header"},l={key:0,class:"home-header-text"},d={key:1,class:"home-header-text"},h={key:2,class:"home-header-text"},c={key:3,class:"home-header-text"},u={key:4},m={class:"home-header-left-navigator"};function g(t,e,i,o,r,g){return(0,a.uX)(),(0,a.CE)("div",n,[r.scrolled?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("p",l,"About Us")),r.scrolled?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("p",d,"Product List")),r.scrolled?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("p",h,"Social Media")),r.scrolled?((0,a.uX)(),(0,a.CE)("div",u,[r.showNavigator?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("img",{key:0,src:"https://i.imgur.com/f4m7uMp.png",alt:"Home Hamburger",class:"home-header-hamburger",onClick:e[0]||(e[0]=(...t)=>g.handleNavigator&&g.handleNavigator(...t))})),(0,a.Lk)("img",{src:"https://i.imgur.com/oLjGjYp.png",alt:"Home Logo",class:"home-header-logo",onClick:e[1]||(e[1]=(...t)=>g.scrollToTop&&g.scrollToTop(...t))}),r.showNavigator?((0,a.uX)(),(0,a.CE)("div",{key:1,class:"home-header-left-navigator-container",onClick:e[3]||(e[3]=(0,s.D$)(((...t)=>g.handleNavigator&&g.handleNavigator(...t)),["self"]))},[(0,a.Lk)("div",m,[e[4]||(e[4]=(0,a.Fv)('<p class="home-header-navigator-content">About Us</p><p class="home-header-navigator-content">Product List</p><p class="home-header-navigator-content">Social Media</p><p class="home-header-navigator-content">Contact Us</p><div class="home-header-navigator-image-container"><img src="https://i.imgur.com/L5uXCN7.png" class="home-header-navigator-image" alt="nav-image"></div>',5)),(0,a.Lk)("div",{class:"home-header-navigator-closer",onClick:e[2]||(e[2]=(...t)=>g.handleNavigator&&g.handleNavigator(...t))})])])):(0,a.Q3)("",!0)])):((0,a.uX)(),(0,a.CE)("p",c,"Contact Us"))])}var p={name:"HeaderPage",props:{},data(){return{scrolled:!1,showNavigator:!1}},mounted(){window.addEventListener("scroll",this.handleScroll),document.body.style.overflow=""},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.scrolled=window.scrollY>20,0===window.scrollY&&(this.showNavigator=!1)},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleNavigator(){this.showNavigator=!this.showNavigator,!0===this.showNavigator?document.body.style.overflow="hidden":document.body.style.overflow=""}}},v=i(1241);const b=(0,v.A)(p,[["render",g]]);var w=b;const f={class:"footer-container"};function k(t,e,i,s,o,r){return(0,a.uX)(),(0,a.CE)("div",f,e[0]||(e[0]=[(0,a.Fv)('<div class="footer-top-container"><div class="footer-left-container"><img src="https://i.imgur.com/JQTsUE5.png" alt="bukan-kaleng-kaleng" class="footer-image-conditional"><p class="footer-title">PT DUMONS CAT INDONESIA</p><p class="footer-address">Jl Raya Boyolali - Semarang km 0.2 Winong, Boyolali, Jawa Tengah, Indonesia 57315</p><p class="footer-address">Whatsapp - 085159122501</p><p class="footer-address">admin@dumonscoating.mail</p></div><div class="footer-right-container"><img src="https://i.imgur.com/JQTsUE5.png" alt="bukan-kaleng-kaleng" class="footer-image"></div></div><div class="footer-bottom-container"><p>© All Rights Reserved.</p><p class="footer-notes">AKURASI WARNA: Kami telah berusaha membuat setiap warna pada layar seakurat mungkin. Tetapi kami tidak menjamin warna pada layar sama dengan warna produk yang sebenarnya. Kami merekomendasikan untuk mengacu pada Kartu Warna kami yang tersedia di toko cat atau bahan bangunan terdekat.</p></div>',2)]))}var y={name:"FooterPage"};const I=(0,v.A)(y,[["render",k]]);var x=I,C={name:"App",components:{HeaderPage:w,FooterPage:x},data(){return{is404Page:!1}},mounted(){this.scrollToTop(),this.checkIf404()},watch:{$route(t){this.checkIf404(t)}},methods:{checkIf404(t=this.$route){this.is404Page="/404"===t.path},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}};const A=(0,v.A)(C,[["render",r]]);var P=A,L=i(1387);function E(t,e,i,s,o,r){const n=(0,a.g2)("HomePage"),l=(0,a.g2)("PromotionPage"),d=(0,a.g2)("ProductHighlightPage"),h=(0,a.g2)("TestimonialPage"),c=(0,a.g2)("SocialMediaPage");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(n),(0,a.bF)(l),(0,a.bF)(d),(0,a.bF)(h),(0,a.bF)(c)])}const S={ref:"homeContainer",class:"home-container"};function U(t,e,i,s,o,r){return(0,a.uX)(),(0,a.CE)("div",S,e[0]||(e[0]=[(0,a.Lk)("div",{class:"home-background-container"},[(0,a.Lk)("div",{class:"home-background-image"},[(0,a.Lk)("div",{class:"home-logo"})])],-1)]),512)}var T={name:"HomePage",props:{},mounted(){},methods:{}};const M=(0,v.A)(T,[["render",U]]);var X=M;const H={ref:"promotionContainer",class:"promotion-container"},R={class:"card-container"},N=["disabled"],W=["src","onClick"],_=["disabled"];function F(t,e,i,s,o,r){const n=(0,a.g2)("ImageModal");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",H,[e[2]||(e[2]=(0,a.Lk)("p",{class:"promotion-title"},"Our Promotions",-1)),(0,a.Lk)("div",R,[o.shouldShowLeftArrow?((0,a.uX)(),(0,a.CE)("button",{key:0,disabled:0===o.startIndex,class:"promotion-prev-button",onClick:e[0]||(e[0]=(...t)=>r.showPrevPromotionCards&&r.showPrevPromotionCards(...t))},null,8,N)):(0,a.Q3)("",!0),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.visibleArray,((t,e)=>((0,a.uX)(),(0,a.CE)("img",{ref_for:!0,ref:"promotionCard",key:e,src:t.data.imageUrl,alt:"p1",class:"promotion-card",onClick:e=>r.showModal(t.data.imageUrl)},null,8,W)))),128)),o.shouldShowRightArrow?((0,a.uX)(),(0,a.CE)("button",{key:1,disabled:o.shouldDisableRightArrow,class:"promotion-next-button",onClick:e[1]||(e[1]=(...t)=>r.showNextPromotionCards&&r.showNextPromotionCards(...t))},null,8,_)):(0,a.Q3)("",!0)])],512),this.selectedPromotion?((0,a.uX)(),(0,a.Wv)(n,{key:0,"image-url":o.selectedPromotion,onCloseModal:r.closeModal},null,8,["image-url","onCloseModal"])):(0,a.Q3)("",!0)],64)}const K={class:"promotionModalContent"},D=["src"];function O(t,e,i,o,r,n){return(0,a.uX)(),(0,a.CE)("div",{class:"promotionModalContainer",onClick:e[1]||(e[1]=(0,s.D$)(((...t)=>n.close&&n.close(...t)),["self"]))},[(0,a.Lk)("div",K,[(0,a.Lk)("img",{class:"promotionModalImage",src:i.imageUrl,alt:"Promotion Image"},null,8,D)]),(0,a.Lk)("button",{class:"promotionModalCloser",onClick:e[0]||(e[0]=(...t)=>n.close&&n.close(...t))})])}var B={name:"ImageModal",props:{imageUrl:{type:String,required:!0}},methods:{close(){this.$emit("closeModal"),document.body.style.overflow=""}},mounted(){document.body.style.overflow="hidden"},beforeUnmount(){document.body.style.overflow=""}};const Q=(0,v.A)(B,[["render",O]]);var j=Q;function $(t){return{data:{imageUrl:t}}}var V={name:"PromotionPage",props:{},components:{ImageModal:j},data(){return{showNavigator:!1,selectedPromotion:null,promotions:[$("https://i.imgur.com/H73lA7U.png"),$("https://i.imgur.com/QqaktR6.png"),$("https://i.imgur.com/X7CTGeN.png")],visibleArray:[],startIndex:0,intervalId:null,shouldShowRightArrow:!1,shouldShowLeftArrow:!1,cardUpdated:!1,shouldDisableRightArrow:!1}},mounted(){window.innerWidth<768?(this.cardUpdated=!0,this.shouldShowLeftArrow=!0,this.shouldShowRightArrow=!0,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.$nextTick((()=>{const t=this.$refs.promotionCard[0];t.setAttribute("data-active",""),this.intervalId=setInterval((()=>{const t=this.$refs.promotionCard[0];t&&t.removeAttribute("data-active"),setTimeout((()=>{this.startIndex=(this.startIndex+1)%this.promotions.length,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.shouldDisableRightArrow=this.visibleArray.at(this.visibleArray.length-1).data.imageUrl===this.promotions.at(this.promotions.length-1).data.imageUrl,t.setAttribute("data-active","")}),400)}),5e3)}))):this.visibleArray=this.promotions.slice(this.startIndex,this.promotions.length),window.addEventListener("resize",this.updateVisibleArray)},beforeUnmount(){clearInterval(this.intervalId),window.removeEventListener("resize",this.updateVisibleArray)},watch:{visibleArray(t){window.innerHeight<768&&t.at(t.length-1)===this.promotions.at(this.promotions.length-1)?this.shouldDisableRightArrow=!0:window.innerHeight<=768&&t.at(t.length-1)!==this.promotions.at(this.promotions.length-1)&&(this.shouldDisableRightArrow=!1)}},methods:{closeModal(){this.selectedPromotion=null},updateVisibleArray(){if(window.innerWidth<768&&!1===this.cardUpdated){let t=!1;this.cardUpdated=!0,this.shouldShowLeftArrow=!0,this.shouldShowRightArrow=!0,clearInterval(this.intervalId),this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1);const e=this.$refs.promotionCard[0];this.intervalId=!1===t?setInterval((()=>{setTimeout((()=>{e&&e.removeAttribute("data-active"),setTimeout((()=>{this.startIndex=(this.startIndex+1)%this.promotions.length,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.shouldDisableRightArrow=this.visibleArray.at(this.visibleArray.length-1).data.imageUrl===this.promotions.at(this.promotions.length-1).data.imageUrl,e.setAttribute("data-active","")}),200)}),200),t=!0}),5e3):setInterval((()=>{e&&e.removeAttribute("data-active"),setTimeout((()=>{this.startIndex=(this.startIndex+1)%this.promotions.length,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.shouldDisableRightArrow=this.visibleArray.at(this.visibleArray.length-1).data.imageUrl===this.promotions.at(this.promotions.length-1).data.imageUrl,e.setAttribute("data-active","")}),400)}),5e3)}else window.innerWidth>=768&&!0===this.cardUpdated&&(clearInterval(this.intervalId),this.cardUpdated=!1,this.shouldShowLeftArrow=!1,this.shouldShowRightArrow=!1,this.startIndex=0,this.visibleArray=this.promotions.slice(this.startIndex,this.promotions.length))},showNextPromotionCards(){if(window.innerWidth<768){clearInterval(this.intervalId);const t=this.$refs.promotionCard[0];t&&t.removeAttribute("data-active"),setTimeout((()=>{this.startIndex<this.promotions.length-1&&(this.startIndex++,this.shouldDisableRightArrow=2===this.startIndex,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.shouldDisableRightArrow=this.visibleArray.at(this.visibleArray.length-1).data.imageUrl===this.promotions.at(this.promotions.length-1).data.imageUrl,t.setAttribute("data-active",""))}),400)}},showPrevPromotionCards(){if(window.innerWidth<768){clearInterval(this.intervalId);const t=this.$refs.promotionCard[0];t&&t.removeAttribute("data-active"),setTimeout((()=>{0!==this.startIndex&&(this.startIndex--,this.visibleArray=this.promotions.slice(this.startIndex,this.startIndex+1),this.shouldDisableRightArrow=this.visibleArray.at(this.visibleArray.length-1).data.imageUrl===this.promotions.at(this.promotions.length-1).data.imageUrl,t.setAttribute("data-active",""))}),400)}},showModal(t){window.innerWidth<768&&(this.selectedPromotion=t)}}};const Y=(0,v.A)(V,[["render",F]]);var G=Y,z=i(4232);const J={ref:"productHighlightContainer",class:"product-highlight-container"},Z={class:"product-highlight-top-content-container"},q={class:"product-highlight-header-left"},tt={key:0,class:"product-highlight-smallest-text"},et={key:0,class:"product-highlight-header-right"},it={class:"product-highlight-bottom-content-container"},st=["disabled"],at={class:"test1",ref:"scrollContainer"},ot={class:"card-top-section"},rt={key:0,class:"card-badge-best-seller"},nt={class:"product-highlight-image"},lt=["src"],dt={class:"card-bottom-section"},ht={class:"card-bottom-content-container"},ct={class:"product-name"},ut={class:"product-description"},mt=["onClick"],gt={key:0,class:"product-highlight-detail"},pt=["onClick"],vt=["disabled"];function bt(t,e,i,s,o,r){return(0,a.uX)(),(0,a.CE)("div",J,[(0,a.Lk)("div",Z,[(0,a.Lk)("div",q,[e[2]||(e[2]=(0,a.Lk)("p",{class:"product-highlight-big-text"},"Transform Your Ride",-1)),e[3]||(e[3]=(0,a.Lk)("p",{class:"product-highlight-small-text"},"Elevate Your Car’s Aesthetics with Our Premium Coating Solutions!",-1)),o.shouldHideProductHighlightHeaderRight?((0,a.uX)(),(0,a.CE)("p",tt,"Our cutting-edge ceramic coatings provide unmatched protection and an incredible gloss that lasts. Offering a robust shield against scratches, chemicals, and UV damage, our coatings ensure your car stays pristine. With superior hydrophobic properties, dirt and grime slide off effortlessly, making maintenance a breeze. Not only do our solutions enhance your vehicle's shine, but they also offer long-lasting protection, giving you peace of mind knowing your investment is safeguarded against the elements.")):(0,a.Q3)("",!0)]),o.shouldHideProductHighlightHeaderRight?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",et,e[4]||(e[4]=[(0,a.Lk)("p",{class:"product-highlight-smallest-text-on-right"},"Our cutting-edge ceramic coatings provide unmatched protection and an incredible gloss that lasts. Offering a robust shield against scratches, chemicals, and UV damage, our coatings ensure your car stays pristine. With superior hydrophobic properties, dirt and grime slide off effortlessly, making maintenance a breeze. Not only do our solutions enhance your vehicle's shine, but they also offer long-lasting protection, giving you peace of mind knowing your investment is safeguarded against the elements.",-1)])))]),(0,a.Lk)("div",it,[(0,a.Lk)("button",{disabled:0===o.index,onClick:e[0]||(e[0]=t=>r.showPrevCards(!0)),class:"prev-button"},null,8,st),(0,a.Lk)("div",at,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.array,((t,i)=>((0,a.uX)(),(0,a.CE)("div",{class:"test2",key:i},[(0,a.Lk)("div",ot,["Best Seller"===t.data.badge?((0,a.uX)(),(0,a.CE)("div",rt)):(0,a.Q3)("",!0),e[5]||(e[5]=(0,a.Lk)("div",{class:"grey-background"},null,-1)),(0,a.Lk)("div",nt,[(0,a.Lk)("img",{src:t.data.imageUrl,alt:"Product Image"},null,8,lt)])]),(0,a.Lk)("div",dt,[(0,a.Lk)("div",ht,[(0,a.Lk)("p",ct,(0,z.v_)(t.data.name),1),(0,a.Lk)("p",ut,(0,z.v_)(t.data.description),1)]),(0,a.Lk)("button",{class:"card-button",onClick:t=>r.showDetailProduct(i)},"View Detail",8,mt),t.data.showDetail?((0,a.uX)(),(0,a.CE)("div",gt,[(0,a.Lk)("div",{class:"view-detail-close-button",onClick:t=>r.showDetailProduct(i)},"Close",8,pt),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.data.detail,((t,e)=>((0,a.uX)(),(0,a.CE)("p",{class:"detail-product-text",key:e},(0,z.v_)(t),1)))),128))])):(0,a.Q3)("",!0)])])))),128))],512),(0,a.Lk)("button",{disabled:r.isLastCard,onClick:e[1]||(e[1]=t=>r.showNextCards(!0)),class:"next-button"},null,8,vt)])],512)}function wt(t,e,i,s,a,o){return{data:{name:t,imageUrl:e,showDetail:!1,variant:s,description:o,detail:a,badge:i}}}var ft={name:"ProductHighlightPage",data(){return{array:[wt("Clear S2","https://i.imgur.com/LFldnXV.png",null,["Red","Blue","Yellow"],["Bagus","Keren","Mantap"],"High Solid Clear yang sangat glossy dan tahan lama"),wt("2K PU Surfacer","https://i.imgur.com/Bu16psT.png",null,["Red","Cyan","Yellow"],["Bagus","Keren","Mantap","Kece"],"Pelapis primer 2 komponen yang cepat kering, keras dan mudah diaplikasikan"),wt("Clear 705","https://i.imgur.com/3HgI32S.png",null,["1L","5L","10L"],["Bagus","Keren","Mantap","Gokil","Kinclong"],"Medium Solid Clear yang glossy dan tahan lama"),wt("Zinc Chromate","https://i.imgur.com/eOZ8hrf.png",null,["Red","Blue","Yellow"],["Bagus","Keren","Mantap","Gokil","Kinclong"],"Pelapis primer sintetik dengan hasil yang lebih halus, anti korosi dan solusi terbaik untuk efisiensi maksimal"),wt("PP Primer Surfacer","https://i.imgur.com/HnhHlMT.png",null,["Red","Blue","Yellow"],["Bagus","Keren","Mantap","Gokil","Kinclong"],"Pelapis primer untuk Plastik (PE) yang kuat dan cepat kering, tidak mudah retak dan terkelupas"),wt("Epoxy Primer Green","https://i.imgur.com/0KHKpA3.png","Best Seller",["Red","Blue","Yellow"],["Bagus","Keren","Mantap","Gokil","Kinclong"],"Pelapis primer untuk Plat Metal yang kuat dan cepat kering, mudah diaplikasikan dan daya tutup tinggi")],shouldHideProductHighlightHeaderRight:!1,shouldDisableRightArrow:!1,cardWidth:260,index:0,isLargeScreen:!0,isScrolling:!1}},mounted(){window.innerWidth<=960&&(this.isLargeScreen=!1),window.addEventListener("resize",this.updateVisibleArray)},computed:{isLastCard(){return window.innerWidth<=960&&this.index>=this.array.length-1||window.innerWidth>960&&this.index>=this.array.length-3}},methods:{scrollToLeft(){this.$refs.scrollContainer.scrollLeft=0},showNextCards(){this.isScrolling||this.index>=this.array.length-1||(this.isScrolling=!0,this.index++,this.$refs.scrollContainer.scrollBy({left:this.cardWidth,behavior:"smooth"}),setTimeout((()=>{this.isScrolling=!1}),300))},showPrevCards(){this.isScrolling||this.index<=0||(this.isScrolling=!0,this.index--,this.$refs.scrollContainer.scrollBy({left:-this.cardWidth,behavior:"smooth"}),setTimeout((()=>{this.isScrolling=!1}),300))},showDetailProduct(t){this.visibleArray[t].data.showDetail=!this.visibleArray[t].data.showDetail},updateVisibleArray(){window.innerWidth<=960&&this.isLargeScreen?(this.isLargeScreen=!1,this.shouldHideProductHighlightHeaderRight=!0,this.scrollToLeft(),this.index=0):window.innerWidth>960&&!this.isLargeScreen&&(this.isLargeScreen=!0,this.shouldHideProductHighlightHeaderRight=!1,this.scrollToLeft(),this.index=0)}}};const kt=(0,v.A)(ft,[["render",bt]]);var yt=kt;const It={ref:"testimonialContainer",class:"testimonial-container"},xt={class:"testimonial-bottom-container"},Ct={class:"testimonial-card-container"},At=["src","onClick"],Pt={class:"testimonial-button-container"};function Lt(t,e,i,s,o,r){const n=(0,a.g2)("ImageModal");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",It,[e[2]||(e[2]=(0,a.Lk)("div",{class:"testimonial-top-container"},[(0,a.Lk)("p",{class:"testimonial-header"},"See the Results!"),(0,a.Lk)("p",{class:"testimonial-top-text"},"Real Transformations with Our Coating")],-1)),(0,a.Lk)("div",xt,[(0,a.Lk)("div",Ct,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.visibleArray,((t,e)=>((0,a.uX)(),(0,a.CE)("img",{key:e,class:"testimonial-card",src:t.data.imageUrl,alt:"img",onClick:e=>r.showModal(t.data.imageUrl)},null,8,At)))),128))]),(0,a.Lk)("div",Pt,[(0,a.Lk)("button",{class:"testimonial-prev-button",onClick:e[0]||(e[0]=(...t)=>r.showPrevCards&&r.showPrevCards(...t))}),(0,a.Lk)("button",{class:"testimonial-next-button",onClick:e[1]||(e[1]=(...t)=>r.showNextCards&&r.showNextCards(...t))})])])],512),this.selectedTestimonial?((0,a.uX)(),(0,a.Wv)(n,{key:0,"image-url":o.selectedTestimonial,onCloseModal:r.closeModal},null,8,["image-url","onCloseModal"])):(0,a.Q3)("",!0)],64)}function Et(t){return{data:{imageUrl:t}}}var St={name:"TestimonialPage",components:{ImageModal:j},data(){return{testimonials:[Et("https://i.imgur.com/SYLvbfd.jpeg"),Et("https://i.imgur.com/B06esZ0.jpeg"),Et("https://i.imgur.com/IPjh2ys.jpeg"),Et("https://i.imgur.com/aDgScma.jpeg"),Et("https://i.imgur.com/wi0dcWc.jpeg")],visibleArray:[],startIndex:0,cardUpdated:!1,intervalId:null,selectedTestimonial:null}},mounted(){window.innerWidth<768?(this.cardUpdated=!0,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1),this.intervalId=setInterval((()=>{this.startIndex=(this.startIndex+1)%this.testimonials.length,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1)}),5e3)):(this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3),this.intervalId=setInterval((()=>{this.startIndex++,3===this.startIndex&&(this.startIndex=0),this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3)}),5e3)),window.addEventListener("resize",this.setVisibleArray)},beforeUnmount(){window.removeEventListener("resize",this.setVisibleArray)},methods:{showNextCards(){clearInterval(this.intervalId),window.innerWidth<768&&this.startIndex!==this.testimonials.length-1?(this.startIndex++,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1)):this.startIndex+3<this.testimonials.length&&(this.startIndex++,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3))},showPrevCards(){clearInterval(this.intervalId),window.innerWidth<768&&0!==this.startIndex?(this.startIndex--,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1)):0!==this.startIndex&&(this.startIndex--,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3))},setVisibleArray(){window.innerWidth<768&&!1===this.cardUpdated?(clearInterval(this.intervalId),this.cardUpdated=!0,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1),this.intervalId=setInterval((()=>{this.startIndex=(this.startIndex+1)%this.testimonials.length,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+1)}),5e3)):window.innerWidth>=768&&!0===this.cardUpdated&&(clearInterval(this.intervalId),this.cardUpdated=!1,this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3),this.intervalId=setInterval((()=>{this.startIndex++,3===this.startIndex&&(this.startIndex=0),this.visibleArray=this.testimonials.slice(this.startIndex,this.startIndex+3)}),5e3))},showModal(t){window.innerWidth<768&&(this.selectedTestimonial=t)},closeModal(){this.selectedTestimonial=null}}};const Ut=(0,v.A)(St,[["render",Lt]]);var Tt=Ut;const Mt={ref:"socialMediaContainer",class:"social_media_container"};function Xt(t,e,i,s,o,r){return(0,a.uX)(),(0,a.CE)("div",Mt,e[0]||(e[0]=[(0,a.Fv)('<div class="social_media_image_container"><div class="social_media_find_us"></div><div class="social_media_content_container"><img src="  https://i.imgur.com/FdMivRP.png" alt="sosmed" class="social_media_image_logo"><div class="social_media_logo_container"><div class="social_media_IG_logo"></div><div class="social_media_TT_logo"></div></div></div></div>',1)]),512)}var Ht={name:"SocialMediaPage",mounted(){},methods:{}};const Rt=(0,v.A)(Ht,[["render",Xt]]);var Nt=Rt,Wt={name:"App",components:{ProductHighlightPage:yt,HomePage:X,PromotionPage:G,TestimonialPage:Tt,SocialMediaPage:Nt}};const _t=(0,v.A)(Wt,[["render",E]]);var Ft=_t;const Kt={ref:"notFoundContainer",class:"not-found-container"};function Dt(t,e,i,s,o,r){return(0,a.uX)(),(0,a.CE)("div",Kt,e[0]||(e[0]=[(0,a.Lk)("p",{class:"not-found-title"},"404 Page Not Found",-1)]),512)}var Ot={name:"NotFoundPage",mounted(){},methods:{}};const Bt=(0,v.A)(Ot,[["render",Dt]]);var Qt=Bt;const jt=[{path:"/",redirect:"/home"},{path:"/home",component:Ft},{path:"/404",component:Qt},{path:"/:pathMatch(.*)*",redirect:"/404"}],$t=(0,L.aE)({history:(0,L.LA)("/dumons/"),routes:jt});var Vt=$t;(0,s.Ef)(P).use(Vt).mount("#app")}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,o){if(!s){var r=1/0;for(h=0;h<t.length;h++){s=t[h][0],a=t[h][1],o=t[h][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(n=!1,o<r&&(r=o));if(n){t.splice(h--,1);var d=a();void 0!==d&&(e=d)}}return e}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[s,a,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,r=s[0],n=s[1],l=s[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(a in n)i.o(n,a)&&(i.m[a]=n[a]);if(l)var h=l(i)}for(e&&e(s);d<r.length;d++)o=r[d],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(h)},s=self["webpackChunkdumons"]=self["webpackChunkdumons"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(8473)}));s=i.O(s)})();
//# sourceMappingURL=app.8935b227.js.map