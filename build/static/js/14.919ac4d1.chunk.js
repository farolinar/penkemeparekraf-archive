(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[14,17],{34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),i=(t(34),t(7)),l=Object(n.lazy)((function(){return t.e(18).then(t.bind(null,37))})),c=Object(n.lazy)((function(){return t.e(10).then(t.bind(null,36))}));a.default=function(e){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),e.children,!e.withoutFooter&&Object(i.jsx)(c,{})]})}},44:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(43),l=t(0),c=t(35),s=(t(44),t(47)),d=t.n(s),r=t(7);a.default=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),t=a[0],s=a[1],o=Object(l.useState)(),j=Object(i.a)(o,2),u=j[0],m=j[1],p=Object(l.useState)(),f=Object(i.a)(p,2),b=f[0],N=f[1],O=Object(l.useState)(),A=Object(i.a)(O,2),x=A[0],h=A[1],P=Object(l.useState)(),g=Object(i.a)(P,2),v=g[0],S=g[1],G=Object(l.useState)({name:"",file:""}),U=Object(i.a)(G,2),D=U[0],E=U[1],F=Object(l.useState)({name:"",file:""}),I=Object(i.a)(F,2),M=I[0],H=I[1],R=Object(l.useState)({name:"",file:""}),T=Object(i.a)(R,2),k=T[0],L=T[1],B=Object(l.useState)({name:"",file:""}),w=Object(i.a)(B,2),y=w[0],K=w[1],J=Object(l.useState)({name:"",file:""}),C=Object(i.a)(J,2),W=C[0],V=C[1],Y=Object(l.useState)({name:"",file:""}),z=Object(i.a)(Y,2),X=z[0],q=z[1],Q=Object(l.useState)({name:"",file:""}),Z=Object(i.a)(Q,2),$=Z[0],_=Z[1],ee=Object(l.useState)({name:"",file:""}),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],ie=Object(l.useState)({name:"",file:""}),le=Object(i.a)(ie,2),ce=le[0],se=le[1],de=Object(l.useState)({name:"",file:""}),re=Object(i.a)(de,2),oe=re[0],je=re[1],ue=Object(l.useState)({name:"",file:""}),me=Object(i.a)(ue,2),pe=me[0],fe=me[1],be=Object(l.useState)({name:"",file:""}),Ne=Object(i.a)(be,2),Oe=Ne[0],Ae=Ne[1],xe=Object(l.useState)({name:"",file:""}),he=Object(i.a)(xe,2),Pe=he[0],ge=he[1],ve=Object(l.useState)({name:"",file:""}),Se=Object(i.a)(ve,2),Ge=Se[0],Ue=Se[1],De=Object(l.useState)({name:"",file:""}),Ee=Object(i.a)(De,2),Fe=Ee[0],Ie=Ee[1],Me=Object(l.useState)({name:"",file:""}),He=Object(i.a)(Me,2),Re=He[0],Te=He[1],ke=Object(l.useState)(),Le=Object(i.a)(ke,2),Be=Le[0],we=Le[1],ye={image:["image/jpeg"],pdf:["application/pdf"],docx:[".doc",".docx"]},Ke=function(e){var a=e.title,t=void 0===a?"":a,n=e.subtitle,i=void 0===n?"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)":n,c=e.id,s=void 0===c?"":c,o=e.type,j=void 0===o?"image":o,u=e.fileName,m=void 0===u?"":u,p=e.setData,f=void 0===p?function(){}:p;return Object(l.useEffect)((function(){d()(document).on("change","#".concat(s),(function(){!function(e){if(ye[j].includes(e.files[0].type)){if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(a){f({name:e.files[0].name,file:e.files[0]})},a.readAsDataURL(e.files[0])}}else m||(f({name:"",file:""}),alert("Harap masukkan file tipe ".concat(j)))}(this)}))}),[]),Object(r.jsxs)("div",{className:"upload-file-wrapper",children:[Object(r.jsx)("div",{className:"upload-file-title",children:t}),Object(r.jsx)("div",{className:"upload-file-subtitle",children:i}),Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)("div",{className:"upload-file-button",children:Object(r.jsxs)("label",{children:["Unggah File",Object(r.jsx)("input",{id:s,type:"file",accept:ye[j],style:{display:"none",width:"100%"}})]})}),m&&Object(r.jsxs)("p",{children:[m," ",Object(r.jsx)("span",{onClick:function(){f({name:"",file:""})},children:"X"})]})]})]})};return Object(r.jsx)(c.default,{children:Object(r.jsxs)("div",{className:"upload-form-wrapper upload-production-form-wrapper",children:[Object(r.jsx)("h2",{children:"Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia"}),Object(r.jsxs)("div",{className:"upload-form-section",children:[Object(r.jsxs)("div",{className:"upload-form-title",children:[Object(r.jsx)("div",{className:"upload-form-label",children:"DATA PENDAFTAR"}),Object(r.jsx)("span",{children:"*Wajib diisi"})]}),Object(r.jsxs)("div",{className:"upload-form-content-wrapper",children:[Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"full-name",children:"NAMA LENGKAP *"}),Object(r.jsx)("input",{name:"full-name",defaultValue:t,onChange:function(e){return s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"id-number",children:"Nomor Identitas/nik/paspor *"}),Object(r.jsx)("input",{name:"id-number",defaultValue:u,onChange:function(e){return m(e.target.value)}})]}),Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"company-name",children:"Nama Rumah Produksi *"}),Object(r.jsx)("input",{name:"company-name",defaultValue:b,onChange:function(e){return N(e.target.value)}})]}),Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Alamat Email *"}),Object(r.jsx)("input",{name:"email",defaultValue:x,onChange:function(e){return h(e.target.value)}})]}),Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"whatsapp-number",children:"Nomor Whatsapp *"}),Object(r.jsx)("input",{name:"whatsapp-number",defaultValue:v,onChange:function(e){return S(e.target.value)}})]})]})]}),Object(r.jsxs)("div",{className:"upload-form-section",children:[Object(r.jsxs)("div",{className:"upload-form-title",children:[Object(r.jsx)("div",{className:"upload-form-label",children:"DOKUMEN LEGALITAS"}),Object(r.jsx)("span",{children:"*Wajib diisi"})]}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH KTP PENANGGUNG JAWAB *",subtitle:"(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)",id:"upload-form-id-number-file",type:"image",fileName:D.name,setData:function(e){return E(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH REKENING ATAS NAMA BADAN USAHA *",subtitle:"(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)",id:"upload-form-card-number-file",type:"image",fileName:M.name,setData:function(e){return H(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH NPWP ATAS NAMA BADAN USAHA *",subtitle:"(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)",id:"upload-form-npwp-file",type:"image",fileName:k.name,setData:function(e){return L(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SALINAN SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR *",subtitle:"(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tax-file",type:"image",fileName:y.name,setData:function(e){return K(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH AKTA PENDIRIAN ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-akta-pendirian-file",type:"pdf",fileName:W.name,setData:function(e){return V(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH AKTA PERUBAHAN ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-akta-perubahan-file",type:"pdf",fileName:X.name,setData:function(e){return q(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SK KEMENHUMKAM HAM ATAS AKTA PENDIRIAN DAN PERUBAHAN *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-sk-kemenhumkan-file",type:"pdf",fileName:$.name,setData:function(e){return _(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH NOMOR INDUK BERUSAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-nomor-induk-file",type:"pdf",fileName:te.name,setData:function(e){return ne(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH TANDA DAFTAR USAHA PERFILMAN *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-daftar-usaha-file",type:"pdf",fileName:ce.name,setData:function(e){return se(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH TANDA PEMBERITAHUAN PEMBUATAN FILM *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-pemberitahuan-pembuatan-file",type:"pdf",fileName:oe.name,setData:function(e){return je(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SURAT KETERANGAN DOMISILI USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-keterangan-domisili-usaha-file",type:"pdf",fileName:pe.name,setData:function(e){return fe(Object(n.a)({},e))}})})]}),Object(r.jsxs)("div",{className:"upload-form-section",children:[Object(r.jsxs)("div",{className:"upload-form-title",children:[Object(r.jsx)("div",{className:"upload-form-label",children:"KELENGKAPAN BERKAS"}),Object(r.jsx)("span",{children:"*Wajib diisi"})]}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI * ",subtitle:"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-rumah-produksi-file",type:"docx",fileName:Oe.name,setData:function(e){return Ae(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK * ",subtitle:"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-tanggung-jawab-file",type:"docx",fileName:Pe.name,setData:function(e){return ge(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *",subtitle:"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-permohonan-bantuan-pemerintah-file",type:"docx",fileName:Ge.name,setData:function(e){return Ue(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *",subtitle:"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-profil-pengusul-proposal-file",type:"docx",fileName:Fe.name,setData:function(e){return Ie(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsx)(Ke,{title:"UNGGAH PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *",subtitle:"(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-proposal-permohonan-file",type:"docx",fileName:Re.name,setData:function(e){return Te(Object(n.a)({},e))}})}),Object(r.jsx)("div",{className:"upload-form-content-wrapper",children:Object(r.jsxs)("div",{className:"upload-form-field",children:[Object(r.jsx)("label",{htmlFor:"link",children:"UNGGAH LINK DOKUMEN FILM YANG DIAJUKAN *"}),Object(r.jsx)("p",{children:"(Link Google Drive, Youtube,dsb)"}),Object(r.jsx)("input",{name:"link",defaultValue:Be,onChange:function(e){return we(e.target.value)}})]})})]}),Object(r.jsx)("div",{onClick:function(){},className:"submit-button",children:"Submit"})]})})}}}]);
//# sourceMappingURL=14.919ac4d1.chunk.js.map