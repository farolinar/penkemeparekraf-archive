(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[17,19],{38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),i=(t(38),t(1)),l=Object(n.lazy)((function(){return t.e(20).then(t.bind(null,41))})),c=Object(n.lazy)((function(){return t.e(11).then(t.bind(null,40))}));a.default=function(e){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(l,{}),e.children,!e.withoutFooter&&Object(i.jsx)(c,{})]})}},48:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(47),l=t(0),c=t(56),s=t(62),r=(t(48),t(54)),d=t.n(r),o=t(14),f=t(39),u=t(1),m={image:["image/png","image/jpeg"],pdf:["application/pdf"],docx:[".doc",".docx"],all:["image/png","image/jpeg","application/pdf"]},p="pdf",j="all",b={image:"jpg, jpeg, atau png",pdf:"pdf",docx:".doc atau .docx",all:"jpg, jpeg, png, atau pdf"},O=function(e){var a=e.title,t=void 0===a?"":a,n=e.subtitle,i=void 0===n?"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)":n,c=e.id,s=void 0===c?"":c,r=e.type,o=void 0===r?"image":r,f=e.fileName,p=void 0===f?"":f,j=e.setData,O=void 0===j?function(){}:j;return Object(l.useEffect)((function(){d()(document).on("change","#".concat(s),(function(){!function(e,a){if(e.files&&e.files[0]){var t=e.files[0].size?e.files[0].size/1024/1024:0;if(m[o].includes(e.files[0].type)&&t<=5){var n=new FileReader;n.onload=function(a){O({name:e.files[0].name,file:e.files[0]})},n.readAsDataURL(e.files[0])}else p||(O({name:"",file:""}),d()("#".concat(a)).val(""),alert("Harap masukkan file tipe ".concat(b[o]," dengan maks. ukuran 5 MB")))}}(this,s)}))}),[]),Object(u.jsxs)("div",{className:"upload-file-wrapper",children:[Object(u.jsx)("div",{className:"upload-file-title",children:t}),Object(u.jsx)("div",{className:"upload-file-subtitle",children:i}),Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(u.jsx)("div",{className:"upload-file-button",children:Object(u.jsxs)("label",{children:["Unggah File",Object(u.jsx)("input",{id:s,type:"file",accept:m[o],style:{display:"none",width:"100%"}})]})}),p&&Object(u.jsxs)("p",{children:[p," ",Object(u.jsx)("span",{onClick:function(){O({name:"",file:""}),d()("#".concat(s)).val("")},children:"X"})]})]})]})};a.default=function(){var e=Object(l.useState)(),a=Object(i.a)(e,2),t=a[0],r=a[1],d=Object(l.useState)(),m=Object(i.a)(d,2),b=m[0],N=m[1],A=Object(l.useState)(),h=Object(i.a)(A,2),x=h[0],g=h[1],P=Object(l.useState)(),I=Object(i.a)(P,2),v=I[0],S=I[1],k=Object(l.useState)(""),D=Object(i.a)(k,2),M=D[0],R=D[1],G=Object(l.useState)({name:"",file:""}),_=Object(i.a)(G,2),U=_[0],F=_[1],L=Object(l.useState)({name:"",file:""}),w=Object(i.a)(L,2),E=w[0],y=w[1],T=Object(l.useState)({name:"",file:""}),H=Object(i.a)(T,2),B=H[0],K=H[1],C=Object(l.useState)({name:"",file:""}),J=Object(i.a)(C,2),z=J[0],Y=J[1],W=Object(l.useState)({name:"",file:""}),V=Object(i.a)(W,2),X=V[0],$=V[1],q=Object(l.useState)({name:"",file:""}),Q=Object(i.a)(q,2),Z=Q[0],ee=Q[1],ae=Object(l.useState)({name:"",file:""}),te=Object(i.a)(ae,2),ne=te[0],ie=te[1],le=Object(l.useState)({name:"",file:""}),ce=Object(i.a)(le,2),se=ce[0],re=ce[1],de=Object(l.useState)({name:"",file:""}),oe=Object(i.a)(de,2),fe=oe[0],ue=oe[1],me=Object(l.useState)({name:"",file:""}),pe=Object(i.a)(me,2),je=pe[0],be=pe[1],Oe=Object(l.useState)({name:"",file:""}),Ne=Object(i.a)(Oe,2),Ae=Ne[0],he=Ne[1],xe=Object(l.useState)({name:"",file:""}),ge=Object(i.a)(xe,2),Pe=ge[0],Ie=ge[1],ve=Object(l.useState)({name:"",file:""}),Se=Object(i.a)(ve,2),ke=Se[0],De=Se[1],Me=Object(l.useState)({name:"",file:""}),Re=Object(i.a)(Me,2),Ge=Re[0],_e=Re[1],Ue=Object(l.useState)({name:"",file:""}),Fe=Object(i.a)(Ue,2),Le=Fe[0],we=Fe[1],Ee=Object(l.useState)({name:"",file:""}),ye=Object(i.a)(Ee,2),Te=ye[0],He=ye[1],Be=Object(l.useState)(""),Ke=Object(i.a)(Be,2),Ce=Ke[0],Je=Ke[1],ze=Object(l.useState)(""),Ye=Object(i.a)(ze,2),We=Ye[0],Ve=Ye[1],Xe=Object(l.useState)(!1),$e=Object(i.a)(Xe,2),qe=$e[0],Qe=$e[1],Ze=Object(l.useState)(!1),ea=Object(i.a)(Ze,2),aa=ea[0],ta=ea[1],na=function(){return t&&b&&x&&v&&M&&U.file&&E.file&&B.file&&z.file&&X.file&&Z.file&&ne.file&&se.file&&fe.file&&je.file&&Ae.file&&Pe.file&&ke.file&&Ge.file&&Le.file&&Te.file&&Ce&&qe};return Object(u.jsxs)(f.default,{children:[Object(u.jsx)(o.a,{visibility:aa}),Object(u.jsxs)("div",{className:"upload-form-wrapper upload-tactical-form-wrapper",children:[Object(u.jsx)("h2",{children:"Pendaftaran Program Bantuan Pemerintah Promosi Film Indonesia"}),Object(u.jsxs)("ul",{className:"upload-form-note",children:[Object(u.jsx)("li",{children:"Seluruh dokumen asli legalitas, identitas dan stempel badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)"}),Object(u.jsx)("li",{children:"Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan"})]}),Object(u.jsxs)("div",{className:"upload-form-section",children:[Object(u.jsxs)("div",{className:"upload-form-title",children:[Object(u.jsx)("div",{className:"upload-form-label",children:"DATA PENDAFTAR"}),Object(u.jsx)("span",{children:"*Wajib diisi"})]}),Object(u.jsxs)("div",{className:"upload-form-content-wrapper",children:[Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"full-name",children:"NAMA LENGKAP *"}),Object(u.jsx)("input",{name:"full-name",defaultValue:t,onChange:function(e){return r(e.target.value)}})]}),Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"id-number",children:"NOMOR IDENTITAS/NIK/PASPOR *"}),Object(u.jsx)("input",{name:"id-number",defaultValue:b,onChange:function(e){N(e.target.value)}})]}),Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"company-name",children:"NAMA RUMAH PRODUKSI *"}),Object(u.jsx)("input",{name:"company-name",defaultValue:x,onChange:function(e){return g(e.target.value)}})]}),Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"email",children:"ALAMAT EMAIL *"}),Object(u.jsx)("input",{name:"email",defaultValue:v,onChange:function(e){return S(e.target.value)}})]}),Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"whatsapp-number",children:"NOMOR WHATSAPP *"}),Object(u.jsx)("input",{type:"text",name:"whatsapp-number",value:M,onChange:function(e){var a=e.target.value;a=new RegExp(/^[0-9]*$/).test(a)?a:M,R(a)}})]})]})]}),Object(u.jsxs)("div",{className:"upload-form-section",children:[Object(u.jsxs)("div",{className:"upload-form-title",children:[Object(u.jsx)("div",{className:"upload-form-label",children:"DOKUMEN LEGALITAS"}),Object(u.jsx)("span",{children:"*Wajib diisi"})]}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH AKTA PENDIRIAN DAN MINIMAL SUDAH BERDIRI SEJAK 1 JANUARI 2019 *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-akta-pendirian-file",type:p,fileName:X.name,setData:function(e){return $(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SALINAN KTP PENANGGUNG JAWAB / DIREKTUR PH *",subtitle:"(File PDF, JPG, JPEG, atau PNG, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-id-number-file",type:j,fileName:U.name,setData:function(e){return F(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SURAT KETERANGAN DOMISILI USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-keterangan-domisili-usaha-file",type:p,fileName:fe.name,setData:function(e){return ue(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH NOMOR INDUK BERUSAHA (NIB) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-nomor-induk-file",type:p,fileName:Z.name,setData:function(e){return ee(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH TANDA DAFTAR USAHA PERFILMAN (TDUP)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-daftar-usaha-file",type:p,fileName:ne.name,setData:function(e){return ie(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH TANDA PEMBERITAHUAN PEMBUATAN FILM (TPPF)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tanda-pemberitahuan-pembuatan-file",type:p,fileName:se.name,setData:function(e){return re(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH DOKUMEN NOMOR POKOK WAJIB PAJAK ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-npwp-file",type:p,fileName:B.name,setData:function(e){return K(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-tax-file",type:p,fileName:z.name,setData:function(e){return Y(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH DOKUMEN REKENING ATAS NAMA BADAN USAHA *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-card-number-file",type:p,fileName:E.name,setData:function(e){return y(Object(n.a)({},e))}})})]}),Object(u.jsxs)("div",{className:"upload-form-section",children:[Object(u.jsxs)("div",{className:"upload-form-title",children:[Object(u.jsx)("div",{className:"upload-form-label",children:"BERKAS LAMPIRAN"}),Object(u.jsx)("span",{children:"*Wajib diisi"})]}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN 1) * ",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-rumah-produksi-file",type:p,fileName:je.name,setData:function(e){return be(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 2) * ",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-pernyataan-tanggung-jawab-file",type:p,fileName:Ae.name,setData:function(e){return he(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 3) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-form-permohonan-bantuan-pemerintah-file",type:p,fileName:Pe.name,setData:function(e){return Ie(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 4) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-profil-pengusul-proposal-file",type:p,fileName:ke.name,setData:function(e){return De(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH PROPOSAL BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 5)*",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-proposal-permohonan-file",type:p,fileName:Ge.name,setData:function(e){return _e(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH RINCIAN ANGGARAN BIAYA (RAB) BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 6) *",subtitle:"(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-pengajuan-rab-produksi-file",type:p,fileName:Te.name,setData:function(e){return He(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsx)(O,{title:"UNGGAH PORTOFOLIO PRODUK FILM YANG TELAH DIHASILKAN *",subtitle:"(File PDF, max. 5MB, Lengkapi dengan Nama Pendaftar)",id:"upload-portofolio-produk-film-file",type:p,fileName:Le.name,setData:function(e){return we(Object(n.a)({},e))}})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"link",children:"UNGGAH LINK DOKUMEN TRAILER FILM YANG DIAJUKAN *"}),Object(u.jsx)("p",{className:"upload-file-subtitle",children:"(Link Google Drive, Youtube,dsb. Link harus diawali dengan https:// atau http://)"}),Object(u.jsx)("input",{name:"link",defaultValue:Ce,onChange:function(e){return Je(e.target.value)}})]})}),Object(u.jsx)("div",{className:"upload-form-content-wrapper",children:Object(u.jsxs)("div",{className:"upload-form-field",children:[Object(u.jsx)("label",{htmlFor:"link",children:"UNGGAH LINK DOKUMEN FILM YANG DIAJUKAN"}),Object(u.jsx)("p",{className:"upload-file-subtitle",children:"(Link Google Drive, Youtube,dsb. Link harus diawali dengan https:// atau http://)"}),Object(u.jsx)("input",{name:"link",defaultValue:We,onChange:function(e){return Ve(e.target.value)}})]})})]}),Object(u.jsx)(c.a,{checked:qe,icon:Object(u.jsx)("div",{style:{display:"flex",flex:1,backgroundColor:"white",alignSelf:"center"},children:Object(u.jsx)(s.a,{color:"#3884C2",size:26})}),borderColor:"#3884C2",style:{overflow:"hidden",backgroundColor:"white"},size:22,label:Object(u.jsx)("p",{style:{fontSize:24},children:"Saya menyatakan bahwa seluruh data yang saya isi adalah benar."}),labelStyle:{color:"white",marginLeft:10,fontSize:18},onChange:function(e){return Qe(e)},containerStyle:{cursor:"pointer"}}),Object(u.jsx)("div",{onClick:function(){na()&&function(){if(na()){ta(!0);var e={fullname:t,nik:b,production_house:x,email:v,whatsapp:M,ktp_dir_fname:U.name,ktp_dir_file:U.file,rekening_fname:E.name,rekening_file:E.file,npwp_fname:B.name,npwp_file:B.file,spt_fname:z.name,spt_file:z.file,ap_fname:X.name,ap_file:X.file,nib_fname:Z.name,nib_file:Z.file,tdup_fname:ne.name,tdup_file:ne.file,tppf_fname:se.name,tppf_file:se.file,l1_sp_production_house_fname:je.name,l1_sp_production_house_file:je.file,l2_sp_tgg_jwb_fname:Ae.name,l2_sp_tgg_jwb_file:Ae.file,l3_sp_bantuan_fname:Pe.name,l3_sp_bantuan_file:Pe.file,l5_profile_fname:ke.name,l5_profile_file:ke.file,l6_proposal_fname:Ge.name,l6_proposal_file:Ge.file,portfolio_fname:Le.name,portfolio_file:Le.file,l7_anggaran_biaya_fname:Te.name,l7_anggaran_biaya_file:Te.file,skdu_fname:fe.name,skdu_file:fe.file,movie_link:Ce,document_link:We},a=new FormData;for(var n in e)a.append(n,e[n]);fetch("https://api-penfilm.kemenparekraf.go.id/v2/register",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(e){ta(!1),e.field_code?alert(e.message):(alert("Sukses mendaftar!"),window.location.href="/")})).catch((function(e){alert(e),ta(!1)}))}else qe?alert("Harap isi semua data."):alert("Harap berikan tanda centang pada pernyataan.")}()},className:"submit-button",style:na()?{}:{backgroundColor:"#e5e5e5",color:"white",cursor:"not-allowed"},children:"Submit"})]})]})}}}]);
//# sourceMappingURL=17.e1435edf.chunk.js.map