(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[7,25],{150:function(e,a,t){"use strict";t.r(a);var n=t(14),i=t(44),l=t(1),r=t(57),c=t(16),s=(t(46),t(54),t(58)),o=t.n(s),d=t(15),j=t(41),m=t(59),u=t(61),b=t(63),p=t(2),O={image:["image/png","image/jpeg"],pdf:["application/pdf"],docx:[".doc",".docx"],all:["image/png","image/jpeg","application/pdf"]},f="pdf",h="all",x={image:"jpg, jpeg, atau png",pdf:"pdf",docx:".doc atau .docx",all:"jpg, jpeg, png, atau pdf"},v={pt:{text:"Perseroan Terbatas (PT)",val:"pt"},cv:{text:"Perseroan Komanditer (CV)",val:"cv"}},N={siap_produksi:{text:"Film Siap Produksi",val:"ready_production"},dalam_penyelesaian:{text:"Film Dalam Tahap Penyelesaian",val:"on_progress"}},A={film_pendek:{text:"Film Pendek",val:"movie"},film_dokumenter:{text:"Film Dokumenter Pendek",val:"documentary"}},g=function(e){var a=e.title,t=void 0===a?"":a,n=e.subtitle,i=void 0===n?"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)":n,r=e.id,c=void 0===r?"":r,s=e.type,d=void 0===s?"image":s,j=e.fileName,m=void 0===j?"":j,u=e.setData,b=void 0===u?function(){}:u;return Object(l.useEffect)((function(){o()(document).on("change","#".concat(c),(function(){!function(e,a){if(e.files&&e.files[0]){var t=e.files[0].size?e.files[0].size/1024/1024:0;if(O[d].includes(e.files[0].type)&&t<=5){var n=new FileReader;n.onload=function(a){b({name:e.files[0].name,file:e.files[0]})},n.readAsDataURL(e.files[0])}else m||(b({name:"",file:""}),o()("#".concat(a)).val(""),alert("Harap masukkan file tipe ".concat(x[d]," dengan maks. ukuran 5 MB")))}}(this,c)}))}),[]),Object(p.jsxs)("div",{className:"upload-file-wrapper",children:[Object(p.jsx)("div",{className:"upload-file-title",children:t}),Object(p.jsx)("div",{className:"upload-file-subtitle",children:i}),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[Object(p.jsx)("div",{className:"upload-file-button",children:Object(p.jsxs)("label",{children:["Unggah File",Object(p.jsx)("input",{id:c,type:"file",accept:O[d],style:{display:"none",width:"100%"}})]})}),m&&Object(p.jsxs)("p",{children:[m," ",Object(p.jsx)("span",{onClick:function(){b({name:"",file:""}),o()("#".concat(c)).val("")},children:"X"})]})]})]})};a.default=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),t=a[0],s=a[1],O=Object(l.useState)(),x=Object(i.a)(O,2),P=x[0],k=x[1],S=Object(l.useState)(),R=Object(i.a)(S,2),I=R[0],y=R[1],D=Object(l.useState)(),F=Object(i.a)(D,2),T=F[0],U=F[1],L=Object(l.useState)(""),_=Object(i.a)(L,2),M=_[0],w=_[1],E=Object(l.useState)(""),B=Object(i.a)(E,2),K=B[0],G=B[1],C=Object(l.useState)(""),H=Object(i.a)(C,2),V=H[0],J=H[1],Y=Object(l.useState)(""),z=Object(i.a)(Y,2),W=z[0],X=z[1],$=Object(l.useState)(""),q=Object(i.a)($,2),Q=q[0],Z=q[1],ee=Object(l.useState)(""),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],ie=Object(l.useState)(""),le=Object(i.a)(ie,2),re=le[0],ce=le[1],se=Object(l.useState)(""),oe=Object(i.a)(se,2),de=oe[0],je=oe[1],me=Object(l.useState)(""),ue=Object(i.a)(me,2),be=ue[0],pe=ue[1],Oe=Object(l.useState)(""),fe=Object(i.a)(Oe,2),he=fe[0],xe=fe[1],ve=Object(l.useState)(""),Ne=Object(i.a)(ve,2),Ae=Ne[0],ge=Ne[1],Pe=Object(l.useState)(""),ke=Object(i.a)(Pe,2),Se=ke[0],Re=ke[1],Ie=Object(l.useState)(""),ye=Object(i.a)(Ie,2),De=ye[0],Fe=ye[1],Te=Object(l.useState)(""),Ue=Object(i.a)(Te,2),Le=Ue[0],_e=Ue[1],Me=Object(l.useState)(""),we=Object(i.a)(Me,2),Ee=we[0],Be=we[1],Ke=Object(l.useState)(""),Ge=Object(i.a)(Ke,2),Ce=Ge[0],He=Ge[1],Ve=Object(l.useState)(""),Je=Object(i.a)(Ve,2),Ye=Je[0],ze=Je[1],We=Object(l.useState)(""),Xe=Object(i.a)(We,2),$e=Xe[0],qe=Xe[1],Qe=Object(l.useState)(""),Ze=Object(i.a)(Qe,2),ea=Ze[0],aa=Ze[1],ta=Object(l.useState)(""),na=Object(i.a)(ta,2),ia=na[0],la=na[1],ra=Object(l.useState)(""),ca=Object(i.a)(ra,2),sa=ca[0],oa=ca[1],da=Object(l.useState)(""),ja=Object(i.a)(da,2),ma=ja[0],ua=ja[1],ba=Object(l.useState)(""),pa=Object(i.a)(ba,2),Oa=pa[0],fa=pa[1],ha=Object(l.useState)(""),xa=Object(i.a)(ha,2),va=xa[0],Na=xa[1],Aa=Object(l.useState)({name:"",file:""}),ga=Object(i.a)(Aa,2),Pa=ga[0],ka=ga[1],Sa=Object(l.useState)({name:"",file:""}),Ra=Object(i.a)(Sa,2),Ia=Ra[0],ya=Ra[1],Da=Object(l.useState)({name:"",file:""}),Fa=Object(i.a)(Da,2),Ta=Fa[0],Ua=Fa[1],La=Object(l.useState)({name:"",file:""}),_a=Object(i.a)(La,2),Ma=_a[0],wa=_a[1],Ea=Object(l.useState)({name:"",file:""}),Ba=Object(i.a)(Ea,2),Ka=Ba[0],Ga=Ba[1],Ca=Object(l.useState)({name:"",file:""}),Ha=Object(i.a)(Ca,2),Va=Ha[0],Ja=Ha[1],Ya=Object(l.useState)({name:"",file:""}),za=Object(i.a)(Ya,2),Wa=za[0],Xa=za[1],$a=Object(l.useState)({name:"",file:""}),qa=Object(i.a)($a,2),Qa=qa[0],Za=qa[1],et=Object(l.useState)({name:"",file:""}),at=Object(i.a)(et,2),tt=at[0],nt=at[1],it=Object(l.useState)({name:"",file:""}),lt=Object(i.a)(it,2),rt=lt[0],ct=lt[1],st=Object(l.useState)({name:"",file:""}),ot=Object(i.a)(st,2),dt=ot[0],jt=ot[1],mt=Object(l.useState)({name:"",file:""}),ut=Object(i.a)(mt,2),bt=ut[0],pt=ut[1],Ot=Object(l.useState)({name:"",file:""}),ft=Object(i.a)(Ot,2),ht=ft[0],xt=ft[1],vt=Object(l.useState)({name:"",file:""}),Nt=Object(i.a)(vt,2),At=Nt[0],gt=Nt[1],Pt=Object(l.useState)({name:"",file:""}),kt=Object(i.a)(Pt,2),St=kt[0],Rt=kt[1],It=Object(l.useState)({name:"",file:""}),yt=Object(i.a)(It,2),Dt=yt[0],Ft=yt[1],Tt=Object(l.useState)(!1),Ut=Object(i.a)(Tt,2),Lt=Ut[0],_t=Ut[1],Mt=Object(l.useState)(!1),wt=Object(i.a)(Mt,2),Et=wt[0],Bt=wt[1],Kt=Object(l.useState)(!1),Gt=Object(i.a)(Kt,2),Ct=Gt[0],Ht=Gt[1],Vt=Object(l.useState)(1),Jt=Object(i.a)(Vt,2),Yt=Jt[0],zt=Jt[1],Wt=Object(l.useState)(!0),Xt=Object(i.a)(Wt,2),$t=Xt[0],qt=Xt[1],Qt=Object(l.useState)({movieSynopsis:"",movieStatement:"",movieVision:"",movieDirectorDetail:"",movieProdHouseDetail:""}),Zt=Object(i.a)(Qt,2),en=Zt[0],an=Zt[1],tn=function(){for(var e in en)if(en[e])return!1;return t&&P&&I&&T&&W&&M&&K&&V&&Q&&te&&re&&de&&be&&he&&Se&&De&&Le&&Ee&&Ce&&Ye&&ea&&ia&&ma&&Oa&&va&&Ka.file&&Pa.file&&Ia.file&&Ta.file&&Ma.file&&Va.file&&Wa.file&&Qa.file&&tt.file&&rt.file&&dt.file&&bt.file&&ht.file&&At.file&&St.file&&Dt.file&&Lt};return Object(p.jsxs)(j.default,{children:[Object(p.jsx)(d.a,{visibility:Et,afterLoadingText:"Sukses Mendaftar !",isLoading:Ct}),Object(p.jsx)("div",{className:"upload-form-wrapper upload-production-form-wrapper upload-pra-production-form-wrapper",children:1===Yt?Object(p.jsxs)(l.Fragment,{children:[Object(p.jsx)("h2",{children:"Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia Untuk Rumah Produksi"}),Object(p.jsxs)("ul",{className:"upload-form-note",children:[Object(p.jsx)("li",{children:"Anggaran Bantuan Pemerintah Bagi Produksi Film Indonesia saat ini masih dalam tahap pengajuan ke Kementerian Keuangan, Rumah Produksi yang melakukan pendaftaran pada skema produksi dengan ini memahami dan bersedia untuk menerima dan tidak akan menuntut Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif apabila pengajuan anggaran dana bantuan pemerintah ini tidak disetujui atau tidak tersedia"}),Object(p.jsx)("li",{children:"Seluruh dokumen asli legalitas, identitas dan stempel badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)"}),Object(p.jsx)("li",{children:"Penjelasan poin 2 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan"})]}),Object(p.jsxs)("div",{className:"upload-form-section",children:[Object(p.jsxs)("div",{className:"upload-form-title",children:[Object(p.jsx)("div",{className:"upload-form-label",children:"DATA PENDAFTAR"}),Object(p.jsx)("span",{children:"*Wajib diisi"})]}),Object(p.jsxs)("div",{className:"upload-form-content-wrapper",children:[Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"full-name",children:["NAMA LENGKAP ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"full-name",defaultValue:t,onChange:function(e){return s(e.target.value)}})]}),Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"id-number",children:["NOMOR IDENTITAS/NIK/PASPOR ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"id-number",defaultValue:I,onChange:function(e){y(e.target.value)}})]}),Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"company-name",children:["NAMA RUMAH PRODUKSI ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"company-name",defaultValue:T,onChange:function(e){return U(e.target.value)}})]}),Object(p.jsxs)("div",{className:"upload-form-field radio-button",children:[Object(p.jsxs)("label",{htmlFor:"company-name",children:["BENTUK BADAN USAHA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(m.a,{onChange:function(e){return w(e)},radioButtons:Object.keys(v).map((function(e){return v[e]})),unselectedColor:"var(--main-light-green)",selectedColor:"var(--main-light-green)",selected:M})]}),Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"email",children:["ALAMAT EMAIL ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"email",defaultValue:P,onChange:function(e){return k(e.target.value)}})]}),Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"whatsapp-number",children:["NOMOR WHATSAPP ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{type:"text",name:"whatsapp-number",value:W,onChange:function(e){var a=e.target.value;a=new RegExp(/^[0-9]*$/).test(a)?a:W,X(a)}})]}),Object(p.jsxs)("div",{className:"upload-form-field radio-button",children:[Object(p.jsxs)("label",{htmlFor:"company-name",children:["KRITERIA FILM (Pilih Salah 1) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(m.a,{onChange:function(e){return G(e)},radioButtons:Object.keys(N).map((function(e){return N[e]})),unselectedColor:"var(--main-light-green)",selectedColor:"var(--main-light-green)",selected:K})]}),Object(p.jsxs)("div",{className:"upload-form-field radio-button",children:[Object(p.jsxs)("label",{htmlFor:"company-name",children:["KATEGORI FILM (Pilih Salah 1) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(m.a,{onChange:function(e){return J(e)},radioButtons:Object.keys(A).map((function(e){return A[e]})),unselectedColor:"var(--main-light-green)",selectedColor:"var(--main-light-green)",selected:V})]})]})]}),Object(p.jsxs)("div",{className:"upload-form-section",children:[Object(p.jsxs)("div",{className:"upload-form-title",children:[Object(p.jsx)("div",{className:"upload-form-label",children:"PROPOSAL DATA FILM"}),Object(p.jsx)("span",{children:"*Wajib diisi"})]}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-title",children:["JUDUL FILM ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-title",defaultValue:Q,onChange:function(e){return Z(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-duration",children:["DURASI FILM ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-duration",defaultValue:te,onChange:function(e){return ne(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-genre",children:["GENRE ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-genre",defaultValue:re,onChange:function(e){return ce(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-writer",children:["NAMA PENULIS ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-writer",defaultValue:de,onChange:function(e){return je(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-director",children:["NAMA SUTRADARA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-director",defaultValue:be,onChange:function(e){return pe(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-producer",children:["NAMA PRODUSER ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-producer",defaultValue:he,onChange:function(e){return xe(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsx)("label",{htmlFor:"movie-animator",children:"NAMA ANIMATOR (JIKA ADA)"}),Object(p.jsx)("input",{name:"movie-animator",defaultValue:Ae,onChange:function(e){return ge(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-cast",children:["DAFTAR NAMA PEMAIN UTAMA DAN PENDUKUNG ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-cast",value:Se,onChange:function(e){return Re(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-target",children:["TARGET PENONTON ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-target",defaultValue:De,onChange:function(e){return Fe(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-logline",children:["LOGLINE (3 KALIMAT) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("input",{name:"movie-logline",defaultValue:Le,onChange:function(e){return _e(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-synopsis",children:["SINOPSIS (200-400 KATA) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-synopsis",value:Ee,onChange:function(e,a){Be(e.target.value);var t=Object(n.a)({},en);t.movieSynopsis=a,an(t)},valida:!0})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-director-statement",children:["DIRECTOR'S STATEMENT (200-400 KATA) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-director-statement",value:Ce,onChange:function(e,a){He(e.target.value);var t=Object(n.a)({},en);t.movieStatement=a,an(t)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-producer-vision",children:["VISI PRODUSER (200-400 KATA) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-producer-vision",value:Ye,onChange:function(e,a){ze(e.target.value);var t=Object(n.a)({},en);t.movieVision=a,an(t)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsx)("label",{htmlFor:"movie-other-resource",children:"DAFTAR PENDANAAN PRODUKSI DARI SUMBER LAIN / INVESTOR LAIN (JIKA ADA)"}),Object(p.jsx)(u.a,{name:"movie-other-resource",value:$e,onChange:function(e){return qe(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-producer-vision",children:["PROFIL PRODUSER DAN RUMAH PRODUKSI YANG TERLIBAT (200-400 Kata) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-producer-vision",value:ea,onChange:function(e,a){aa(e.target.value);var t=Object(n.a)({},en);t.movieProdHouseDetail=a,an(t)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"movie-director-detail",children:["PROFIL SUTRADARA (200-400 Kata) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)(u.a,{name:"movie-director-detail",value:ia,onChange:function(e,a){la(e.target.value);var t=Object(n.a)({},en);t.movieDirectorDetail=a,an(t)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsx)("label",{htmlFor:"movie-crew-milestone",children:"PRESTASI DARI TENAGA KERJA (KRU DAN PEMAIN)"}),Object(p.jsx)(u.a,{name:"movie-crew-milestone",value:sa,onChange:function(e){return oa(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"link",children:["TAUTAN DARING DARI CONTOH HASIL KARYA SUTRADARA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("p",{className:"upload-file-subtitle",children:"(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)"}),Object(p.jsx)("input",{name:"link",defaultValue:ma,onChange:function(e){return ua(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"link",children:["TAUTAN DARING DARI CONTOH HASIL KARYA PRODUSER ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("p",{className:"upload-file-subtitle",children:"(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)"}),Object(p.jsx)("input",{name:"link",defaultValue:Oa,onChange:function(e){return fa(e.target.value)}})]})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsxs)("div",{className:"upload-form-field",children:[Object(p.jsxs)("label",{htmlFor:"link",children:["TAUTAN DARING DARI HASIL KARYA (PORTOFOLIO) RUMAH PRODUKSI TAHUN 2019-2021 ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),Object(p.jsx)("p",{className:"upload-file-subtitle",children:"(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)"}),Object(p.jsx)("input",{name:"link",defaultValue:va,onChange:function(e){return Na(e.target.value)}})]})})]}),Object(p.jsx)("div",{onClick:function(){zt(2),o()("html, body").animate({scrollTop:0},"fast")},className:"submit-button",children:"Next"})]}):Object(p.jsxs)(l.Fragment,{children:[Object(p.jsxs)("div",{className:"upload-form-section",children:[Object(p.jsxs)("div",{className:"upload-form-title",children:[Object(p.jsx)("div",{className:"upload-form-label",children:"DOKUMEN LEGALITAS"}),Object(p.jsx)("span",{children:"*Wajib diisi"})]}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH AKTA PENDIRIAN DAN MINIMAL SUDAH BERDIRI SEJAK 1 JANUARI 2019 ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-akta-pendirian-file",type:f,fileName:Ka.name,setData:function(e){return Ga(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SALINAN KTP PENANGGUNG JAWAB / DIREKTUR PH ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, JPG, JPEG, atau PNG, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-id-number-file",type:h,fileName:Pa.name,setData:function(e){return ka(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT KETERANGAN DOMISILI USAHA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-keterangan-domisili-usaha-file",type:f,fileName:Qa.name,setData:function(e){return Za(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH NOMOR INDUK BERUSAHA (NIB) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-nomor-induk-file",type:f,fileName:Va.name,setData:function(e){return Ja(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH TANDA DAFTAR USAHA PERFILMAN (TDUP)",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-daftar-usaha-file",type:f,fileName:Wa.name,setData:function(e){return Xa(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH DOKUMEN NOMOR POKOK WAJIB PAJAK ATAS NAMA BADAN USAHA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-npwp-file",type:f,fileName:Ta.name,setData:function(e){return Ua(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tax-file",type:f,fileName:Ma.name,setData:function(e){return wa(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH DOKUMEN REKENING ATAS NAMA BADAN USAHA ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-card-number-file",type:f,fileName:Ia.name,setData:function(e){return ya(Object(n.a)({},e))}})})]}),Object(p.jsxs)("div",{className:"upload-form-section",children:[Object(p.jsxs)("div",{className:"upload-form-title",children:[Object(p.jsx)("div",{className:"upload-form-label",children:"BERKAS LAMPIRAN"}),Object(p.jsx)("span",{children:"*Wajib diisi"})]}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN A.1) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-surat-pernyataan-rumah-produksi",type:f,fileName:tt.name,setData:function(e){return nt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 1) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-surat-pernyataan-tanggung-jawab-mutlak",type:f,fileName:rt.name,setData:function(e){return ct(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PERNYATAAN TIDAK MENERIMA BANTUAN PEMERINTAH PROMOSI FILM INDONESIA DAN/ATAU BANTUAN K/L LAINNYA (LAMPIRAN 2) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-surat-pernyataan-tidak-menerima-bantuan",type:f,fileName:dt.name,setData:function(e){return jt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PERNYATAAN FILM MASIH DALAM TAHAP PERENCANAAN/ PRODUKSI  (LAMPIRAN 3) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-surat-pernyataan-dalam-tahap-perencanaan",type:f,fileName:bt.name,setData:function(e){return pt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 4) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-spbpbpfi",type:f,fileName:ht.name,setData:function(e){return xt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 5) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-ringkasan-profil",type:f,fileName:At.name,setData:function(e){return gt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH DOKUMEN PENDUKUNG PROPOSAL BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 6) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-dokumen-pendukung",type:f,fileName:St.name,setData:function(e){return Rt(Object(n.a)({},e))}})}),Object(p.jsx)("div",{className:"upload-form-content-wrapper",children:Object(p.jsx)(g,{title:Object(p.jsxs)(l.Fragment,{children:["UNGGAH PENGAJUAN RINCIAN ANGGARAN BIAYA PRODUKSI FILM (LAMPIRAN 7) ",Object(p.jsx)("span",{style:{color:"var(--main-red)"},children:"*"})]}),subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-rabp",type:f,fileName:Dt.name,setData:function(e){return Ft(Object(n.a)({},e))}})})]}),Object(p.jsx)(r.a,{checked:Lt,icon:Object(p.jsx)("div",{style:{display:"flex",flex:1,backgroundColor:"white",alignSelf:"center"},children:Object(p.jsx)(c.b,{color:"#3884C2",size:26})}),borderColor:"#3884C2",style:{overflow:"hidden",backgroundColor:"white"},size:22,label:Object(p.jsx)("p",{style:{fontSize:24},children:"Saya menyatakan bahwa seluruh data yang saya isi adalah benar."}),labelStyle:{color:"white",marginLeft:10,fontSize:18},onChange:function(e){return _t(e)},containerStyle:{cursor:"pointer"}}),Object(p.jsxs)("div",{className:"upload-submit-button-wrapper",children:[Object(p.jsx)("div",{onClick:function(){tn()&&function(){if(tn()){Bt(!0),Ht(!0);var e={fullname:t,identity_id:I,production_house:T,whatsapp:W,bentuk_badan_usaha:M,email:P,film_criteria:K,film_category:V,proposal_film_title:Q,proposal_duration:te,proposal_genre:re,proposal_writer:de,proposal_director:be,proposal_producer:he,proposal_animator:Ae,proposal_actors:Se,proposal_target_audience:De,proposal_logline:Le,proposal_synopsis:Ee,proposal_director_statement:Ce,proposal_producer_vision:Ye,proposal_funding_list:$e,proposal_producer_profile:ea,proposal_director_profile:ia,proposal_crew_achievements:sa,proposal_hasil_karya_link_sutradara:ma,proposal_hasil_karya_link_produser:Oa,proposal_portfolio_link:va,akta_pendirian_fname:Ka.name,akta_pendirian_file:Ka.file,ktp_direktur_fname:Pa.name,ktp_direktur_file:Pa.file,sk_domisili_usaha_fname:Qa.name,sk_domisili_usaha_file:Qa.file,nib_fname:Va.name,nib_file:Va.file,tdup_fname:Wa.name,tdup_file:Wa.file,npwp_fname:Ta.name,npwp_file:Ta.file,spt_fname:Ma.name,spt_file:Ma.file,rekening_fname:Ia.name,rekening_file:Ia.file,sprp_fname:tt.name,sprp_file:tt.file,sptjm_fname:rt.name,sptjm_file:rt.file,sptmbppfi_fname:dt.name,sptmbppfi_file:dt.file,spfmdtp_fname:bt.name,spfmdtp_file:bt.file,spbppfi_fname:ht.name,spbppfi_file:ht.file,ringkasan_profil_fname:At.name,ringkasan_profil_file:At.file,dokumen_pendukung_fname:St.name,dokumen_pendukung_file:St.file,rabp_fname:Dt.name,rabp_file:Dt.file},a=new FormData;for(var n in e)a.append(n,e[n]);fetch("https://api-penfilm.kemenparekraf.go.id/v1/register-produksi/productionhouse",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){e.field_code?(Ht(!1),Bt(!1),alert(e.message)):(Ht(!1),setTimeout((function(){Bt(!1),window.location.href="/"}),3e3))})).catch((function(e){Ht(!1),Bt(!1),alert(e)}))}else Lt?alert("Harap isi semua data."):alert("Harap berikan tanda centang pada pernyataan.")}()},className:"submit-button",style:tn()?{}:{backgroundColor:"#e5e5e5",color:"white",cursor:"not-allowed"},children:"Submit"}),Object(p.jsx)("div",{onClick:function(){zt(1),o()("html, body").animate({scrollTop:0},"fast")},className:"submit-button",children:"Back"})]})]})}),Object(p.jsxs)(b.a,{visibility:$t,title:"PERHATIAN!",buttonText:"OK, Saya Mengerti",onClickButton:function(){return qt(!1)},className:"modal-disclaimer-production modal-disclaimer-pra-production",backdrop:"static",children:[Object(p.jsx)("h4",{children:"Pastikan Anda telah menyiapkan dokumen-dokumen persyaratan khusus seperti :"}),Object(p.jsxs)("div",{className:"modal-disclaimer-content",children:[Object(p.jsx)("div",{className:"modal-disclaimer-content-title",children:"A. Dokumen Legalitas :"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Akta Pendirian dan SK Kemenkumham"}),Object(p.jsx)("li",{children:"Akta Perubahan dan SK Kemenkumham (terkait susunan kepengurusan yang berlaku apabila ada perubahan dari akta pendirian)"}),Object(p.jsx)("li",{children:"Salinan KTP Penanggung jawab / Direktur PH"}),Object(p.jsx)("li",{children:"Nomor Induk Berusaha (NIB) dengan nomor KBLI 74141 (Aktivitas Desain Khusus yakni Film, Video, Program TV, Animasi dan Komik)"}),Object(p.jsx)("li",{children:"Dokumen Nomor Pokok Wajib Pajak atas nama Badan Usaha"}),Object(p.jsx)("li",{children:"Surat Pemberitahuan Tahunan (SPT) Pajak 1 tahun terakhir"}),Object(p.jsx)("li",{children:"Dokumen Rekening atas nama Badan Usaha"}),Object(p.jsx)("li",{children:"Profil dan Potofolio Badan Usaha Rumah Produksi"})]}),Object(p.jsx)("div",{className:"modal-disclaimer-content-title",children:"B. Berkas Lampiran :"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Surat Pernyataan Rumah Produksi (Lampiran 1)"}),Object(p.jsx)("li",{children:"Surat Pernyataan Tanggung Jawab Mutlak (Lampiran 2)"}),Object(p.jsx)("li",{children:"Surat Pernyataan Tidak Menerima Bantuan Pemerintah Promosi Film Indonesia dan/atau Bantuan K/L Lainnya (Lampiran 3)"}),Object(p.jsx)("li",{children:"Surat Pernyataan Film Masih Dalam Tahap Perencanaan/ Produksi  (Lampiran 3)"}),Object(p.jsx)("li",{children:"Surat Permohonan Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 4)"}),Object(p.jsx)("li",{children:"Ringkasan Profil Pengusul Proposal Permohonan Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 5)"}),Object(p.jsx)("li",{children:"Dokumen Pendukung Proposal Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 6)"}),Object(p.jsx)("li",{children:"Rincian Anggaran (RAB) Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 7)"})]})]})]})]})}},41:function(e,a,t){"use strict";t.r(a);var n=t(1),i=(t(42),t(2)),l=Object(n.lazy)((function(){return t.e(26).then(t.bind(null,45))})),r=Object(n.lazy)((function(){return t.e(15).then(t.bind(null,43))}));a.default=function(e){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),e.children,!e.withoutFooter&&Object(i.jsx)(r,{})]})}},42:function(e,a,t){},46:function(e,a,t){},54:function(e,a,t){},59:function(e,a,t){"use strict";var n=t(14),i=t(44),l=t(1),r=t(72),c=(t(60),t(2));a.a=function(e){var a=e.onChange,t=void 0===a?function(){}:a,s=e.horizontal,o=void 0===s||s,d=e.radioButtons,j=void 0===d?[{val:"",text:""}]:d,m=e.unselectedColor,u=e.selectedColor,b=e.selected,p=void 0!==b&&b,O=Object(l.useState)({}),f=Object(i.a)(O,2),h=f[0],x=f[1];return Object(l.useEffect)((function(){if(p){var e=Object(n.a)({},h);e.value=p,x(e)}else x({})}),[p]),Object(c.jsx)("div",{className:"radio-button-wrapper",children:Object(c.jsx)(r.RadioGroup,Object(n.a)(Object(n.a)({onChange:t,horizontal:o},h),{},{children:j.map((function(e){return Object(c.jsx)(r.ReversedRadioButton,{value:e.val,rootColor:m,pointColor:u,children:e.text})}))}))})}},60:function(e,a,t){},61:function(e,a,t){"use strict";var n=t(44),i=t(1),l=(t(62),t(2));a.a=function(e){var a=e.name,t=void 0===a?"":a,r=e.value,c=void 0===r?"":r,s=e.onChange,o=void 0===s?function(){}:s,d=e.maxLength,j=void 0!==d&&d,m=e.minLength,u=void 0!==m&&m,b=e.rows,p=void 0===b?"10":b,O=Object(i.useState)(0),f=Object(n.a)(O,2),h=f[0],x=f[1],v=Object(i.useState)(""),N=Object(n.a)(v,2),A=N[0],g=N[1];return Object(i.useEffect)((function(){x(c.length)}),[c]),Object(l.jsxs)("div",{className:"textarea-counter-wrapper",children:[Object(l.jsx)("textarea",{name:t,defaultValue:c,onChange:function(e){var a="";u&&e.target.value.length<u&&(a="Panjang teks minimal ".concat(u," karakter")),g(a),o(e,a)},maxLength:j,rows:p}),A&&Object(l.jsx)("span",{className:"info-left",children:A}),j&&Object(l.jsxs)("span",{className:"info-right",children:[h,"/",j]})]})}},62:function(e,a,t){},63:function(e,a,t){"use strict";var n=t(1),i=t(160),l=t(146),r=t(147),c=t(148),s=(t(64),t(2));a.a=function(e){var a=e.visibility,t=void 0===a||a,o=e.title,d=void 0===o?"":o,j=(e.contentTitle,e.buttonText),m=void 0===j?"":j,u=e.onClickButton,b=void 0===u?function(){}:u,p=e.style,O=void 0===p?{}:p,f=e.className,h=void 0===f?"":f,x=e.footerText,v=void 0===x?null:x,N=e.backdrop,A=void 0===N||N,g=e.children;return Object(s.jsx)(n.Fragment,{children:Object(s.jsxs)(i.a,{isOpen:t,toggle:b,style:O,className:"modal-wrapper ".concat(h),backdrop:A,children:[Object(s.jsx)(l.a,{children:d}),Object(s.jsx)(r.a,{children:g}),Object(s.jsxs)(c.a,{children:[Object(s.jsx)("div",{className:"modal-footer-info",children:v}),Object(s.jsx)("button",{onClick:b,children:m})]})]})})}},64:function(e,a,t){}}]);
//# sourceMappingURL=7.38cd3542.chunk.js.map