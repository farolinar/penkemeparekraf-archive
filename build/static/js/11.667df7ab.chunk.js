(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[11,16,17],{38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),i=(t(38),t(1)),l=Object(n.lazy)((function(){return t.e(18).then(t.bind(null,46))})),c=Object(n.lazy)((function(){return t.e(9).then(t.bind(null,45))}));a.default=function(e){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),e.children,!e.withoutFooter&&Object(i.jsx)(c,{})]})}},48:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(47),l=t(0),c=(t(48),t(51)),s=t.n(c),r=t(14),d=t(1),f={image:["image/jpeg"],pdf:["application/pdf"],docx:[".doc",".docx"]},m=function(e){var a=e.title,t=void 0===a?"":a,n=e.subtitle,i=void 0===n?"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)":n,c=e.id,r=void 0===c?"":c,m=e.type,o=void 0===m?"image":m,u=e.fileName,j=void 0===u?"":u,p=e.setData,b=void 0===p?function(){}:p;return Object(l.useEffect)((function(){s()(document).on("change","#".concat(r),(function(){!function(e,a){if(e.files&&e.files[0]){var t=e.files[0].size?e.files[0].size/1024/1024:0;if(f[o].includes(e.files[0].type)&&t<=5){var n=new FileReader;n.onload=function(a){b({name:e.files[0].name,file:e.files[0]})},n.readAsDataURL(e.files[0])}else j||(b({name:"",file:""}),s()("#".concat(a)).val(""),alert("Harap masukkan file tipe ".concat(o," dengan maks. ukuran 5 MB")))}}(this,r)}))}),[]),Object(d.jsxs)("div",{className:"upload-file-wrapper",children:[Object(d.jsx)("div",{className:"upload-file-title",children:t}),Object(d.jsx)("div",{className:"upload-file-subtitle",children:i}),Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("div",{className:"upload-file-button",children:Object(d.jsxs)("label",{children:["Unggah File",Object(d.jsx)("input",{id:r,type:"file",accept:f[o],style:{display:"none",width:"100%"}})]})}),j&&Object(d.jsxs)("p",{children:[j," ",Object(d.jsx)("span",{onClick:function(){b({name:"",file:""}),s()("#".concat(r)).val("")},children:"X"})]})]})]})};a.default=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(l.useState)(),f=Object(i.a)(s,2),o=f[0],u=f[1],j=Object(l.useState)(),p=Object(i.a)(j,2),b=p[0],O=p[1],N=Object(l.useState)(),A=Object(i.a)(N,2),h=A[0],x=A[1],P=Object(l.useState)(""),g=Object(i.a)(P,2),v=g[0],I=g[1],D=Object(l.useState)({name:"",file:""}),M=Object(i.a)(D,2),S=M[0],F=M[1],U=Object(l.useState)({name:"",file:""}),_=Object(i.a)(U,2),R=_[0],k=_[1],G=Object(l.useState)({name:"",file:""}),L=Object(i.a)(G,2),E=L[0],T=L[1],w=Object(l.useState)({name:"",file:""}),H=Object(i.a)(w,2),B=H[0],y=H[1],K=Object(l.useState)({name:"",file:""}),J=Object(i.a)(K,2),C=J[0],W=J[1],Y=Object(l.useState)({name:"",file:""}),V=Object(i.a)(Y,2),z=V[0],X=V[1],$=Object(l.useState)({name:"",file:""}),q=Object(i.a)($,2),Q=q[0],Z=q[1],ee=Object(l.useState)({name:"",file:""}),ae=Object(i.a)(ee,2),te=ae[0],ne=ae[1],ie=Object(l.useState)({name:"",file:""}),le=Object(i.a)(ie,2),ce=le[0],se=le[1],re=Object(l.useState)({name:"",file:""}),de=Object(i.a)(re,2),fe=de[0],me=de[1],oe=Object(l.useState)({name:"",file:""}),ue=Object(i.a)(oe,2),je=ue[0],pe=ue[1],be=Object(l.useState)({name:"",file:""}),Oe=Object(i.a)(be,2),Ne=Oe[0],Ae=Oe[1],he=Object(l.useState)({name:"",file:""}),xe=Object(i.a)(he,2),Pe=xe[0],ge=xe[1],ve=Object(l.useState)({name:"",file:""}),Ie=Object(i.a)(ve,2),De=Ie[0],Me=Ie[1],Se=Object(l.useState)({name:"",file:""}),Fe=Object(i.a)(Se,2),Ue=Fe[0],_e=Fe[1],Re=Object(l.useState)({name:"",file:""}),ke=Object(i.a)(Re,2),Ge=ke[0],Le=ke[1],Ee=Object(l.useState)(),Te=Object(i.a)(Ee,2),we=Te[0],He=Te[1],Be=Object(l.useState)(!1),ye=Object(i.a)(Be,2),Ke=ye[0],Je=ye[1],Ce=function(){if(t&&o&&b&&h&&v&&S.file&&R.file&&E.file&&B.file&&C.file&&z.file&&Q.file&&te.file&&ce.file&&fe.file&&je.file&&Ne.file&&Pe.file&&De.file&&Ue.file&&Ge.file&&we){Je(!0);var e={fullname:t,nik:o,production_house:b,email:h,whatsapp:v,ktp_dir_fname:S.name,ktp_dir_file:S.file,rekening_fname:R.name,rekening_file:R.file,npwp_fname:E.name,npwp_file:E.file,spt_fname:B.name,spt_file:B.file,ap_fname:C.name,ap_file:C.file,nib_fname:z.name,nib_file:z.file,tdup_fname:Q.name,tdup_file:Q.file,tppf_fname:te.name,tppf_file:te.file,l1_sp_production_house_fname:fe.name,l1_sp_production_house_file:fe.file,l2_sp_tgg_jwb_fname:je.name,l2_sp_tgg_jwb_file:je.file,l3_sp_bantuan_fname:Ne.name,l3_sp_bantuan_file:Ne.file,l5_profile_fname:Pe.name,l5_profile_file:Pe.file,l6_proposal_fname:De.name,l6_proposal_file:De.file,portfolio_fname:Ue.name,portfolio_file:Ue.file,l7_anggaran_biaya_fname:Ge.name,l7_anggaran_biaya_file:Ge.file,skdu_fname:ce.name,skdu_file:ce.file,movie_link:we},a=new FormData;for(var n in e)a.append(n,e[n]);fetch("https://api-penfilm.kemenparekraf.go.id/v2/register",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){Je(!1),e.field_code?alert(e.message):(alert("Sukses mendaftar!"),window.location.href="/")})).catch((function(e){alert(e),Je(!1)}))}else alert("Harap isi semua data.")};return Object(d.jsxs)(l.Fragment,{children:[Object(d.jsx)(r.a,{visibility:Ke}),Object(d.jsxs)("div",{className:"upload-form-wrapper upload-tactical-form-wrapper",children:[Object(d.jsx)("h2",{children:"Pendaftaran Program Bantuan Pemerintah Promosi Film Indonesia"}),Object(d.jsxs)("ul",{className:"upload-form-note",children:[Object(d.jsx)("li",{children:"Seluruh dokumen asli legalitas dan identitas badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)"}),Object(d.jsx)("li",{children:"Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan"})]}),Object(d.jsxs)("div",{className:"upload-form-section",children:[Object(d.jsxs)("div",{className:"upload-form-title",children:[Object(d.jsx)("div",{className:"upload-form-label",children:"DATA PENDAFTAR"}),Object(d.jsx)("span",{children:"*Wajib diisi"})]}),Object(d.jsxs)("div",{className:"upload-form-content-wrapper",children:[Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"full-name",children:"NAMA LENGKAP *"}),Object(d.jsx)("input",{name:"full-name",defaultValue:t,onChange:function(e){return c(e.target.value)}})]}),Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"id-number",children:"NOMOR IDENTITAS/NIK/PASPOR *"}),Object(d.jsx)("input",{name:"id-number",defaultValue:o,onChange:function(e){u(e.target.value)}})]}),Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"company-name",children:"NAMA RUMAH PRODUKSI *"}),Object(d.jsx)("input",{name:"company-name",defaultValue:b,onChange:function(e){return O(e.target.value)}})]}),Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"email",children:"ALAMAT EMAIL *"}),Object(d.jsx)("input",{name:"email",defaultValue:h,onChange:function(e){return x(e.target.value)}})]}),Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"whatsapp-number",children:"NOMOR WHATSAPP *"}),Object(d.jsx)("input",{type:"text",name:"whatsapp-number",value:v,onChange:function(e){var a=e.target.value;a=new RegExp(/^[0-9]*$/).test(a)?a:v,I(a)}})]})]})]}),Object(d.jsxs)("div",{className:"upload-form-section",children:[Object(d.jsxs)("div",{className:"upload-form-title",children:[Object(d.jsx)("div",{className:"upload-form-label",children:"DOKUMEN LEGALITAS"}),Object(d.jsx)("span",{children:"*Wajib diisi"})]}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH AKTA PENDIRIAN DAN MINIMAL SUDAH BERDIRI SEJAK 1 JANUARI 2019 *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-akta-pendirian-file",type:"pdf",fileName:C.name,setData:function(e){return W(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SALINAN KTP PENANGGUNG JAWAB / DIREKTUR PH *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-id-number-file",type:"pdf",fileName:S.name,setData:function(e){return F(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SURAT KETERANGAN DOMISILI USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-keterangan-domisili-usaha-file",type:"pdf",fileName:ce.name,setData:function(e){return se(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH NOMOR INDUK BERUSAHA (NIB) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-nomor-induk-file",type:"pdf",fileName:z.name,setData:function(e){return X(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH TANDA DAFTAR USAHA PERFILMAN (TDUP)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-daftar-usaha-file",type:"pdf",fileName:Q.name,setData:function(e){return Z(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH TANDA PEMBERITAHUAN PEMBUATAN FILM (TPPF)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-pemberitahuan-pembuatan-file",type:"pdf",fileName:te.name,setData:function(e){return ne(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH DOKUMEN NOMOR POKOK WAJIB PAJAK ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-npwp-file",type:"pdf",fileName:E.name,setData:function(e){return T(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tax-file",type:"pdf",fileName:B.name,setData:function(e){return y(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH DOKUMEN REKENING ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-card-number-file",type:"pdf",fileName:R.name,setData:function(e){return k(Object(n.a)({},e))}})})]}),Object(d.jsxs)("div",{className:"upload-form-section",children:[Object(d.jsxs)("div",{className:"upload-form-title",children:[Object(d.jsx)("div",{className:"upload-form-label",children:"KELENGKAPAN BERKAS"}),Object(d.jsx)("span",{children:"*Wajib diisi"})]}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN 1) * ",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-rumah-produksi-file",type:"pdf",fileName:fe.name,setData:function(e){return me(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 2) * ",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-tanggung-jawab-file",type:"pdf",fileName:je.name,setData:function(e){return pe(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 3) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-permohonan-bantuan-pemerintah-file",type:"pdf",fileName:Ne.name,setData:function(e){return Ae(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH RINGKAS PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 4) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-profil-pengusul-proposal-file",type:"pdf",fileName:Pe.name,setData:function(e){return ge(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH PROPOSAL BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA UNTUK FILM SIAP TAYANG 2021 (LAMPIRAN 5)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-proposal-permohonan-file",type:"pdf",fileName:De.name,setData:function(e){return Me(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH PENGAJUAN RINCIAN ANGGARAN BIAYA PRODUKSI FILM (LAMPIRAN 6) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-pengajuan-rab-produksi-file",type:"pdf",fileName:Ge.name,setData:function(e){return Le(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsx)(m,{title:"UNGGAH PORTOFOLIO PRODUK FILM YANG TELAH DIHASILKAN *",subtitle:"(File PDF, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-portofolio-produk-film-file",type:"pdf",fileName:Ue.name,setData:function(e){return _e(Object(n.a)({},e))}})}),Object(d.jsx)("div",{className:"upload-form-content-wrapper",children:Object(d.jsxs)("div",{className:"upload-form-field",children:[Object(d.jsx)("label",{htmlFor:"link",children:"UNGGAH LINK DOKUMEN FILM YANG DIAJUKAN *"}),Object(d.jsx)("p",{children:"(Link Google Drive, Youtube,dsb)"}),Object(d.jsx)("input",{name:"link",defaultValue:we,onChange:function(e){return He(e.target.value)}})]})})]}),Object(d.jsx)("div",{onClick:function(){return Ce()},className:"submit-button",children:"Submit"})]})]})}},77:function(e,a,t){"use strict";t.r(a);t(0),t(8);var n=t(39),i=(t(48),t(52)),l=t(1);a.default=function(){return Object(l.jsxs)(n.default,{children:[Object(l.jsxs)("div",{className:"upload-form-main-wrapper",children:[Object(l.jsx)("div",{className:"our-program-filter"}),Object(l.jsxs)("div",{className:"our-program-main-content",children:[Object(l.jsx)("h2",{children:"Unggah Formulir"}),Object(l.jsx)("div",{className:"our-programs",children:Object(l.jsx)("div",{className:"our-program",children:Object(l.jsxs)("a",{children:["Bantuan Pemerintah",Object(l.jsx)("br",{}),"Promosi Film Indonesia"]})})})]})]}),Object(l.jsx)(i.default,{})]})}}}]);
//# sourceMappingURL=11.667df7ab.chunk.js.map