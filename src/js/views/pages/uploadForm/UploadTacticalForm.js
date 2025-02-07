import React, { Fragment, useEffect, useState } from 'react';
import Checkbox from "react-custom-checkbox";
import { FaCheckSquare } from "react-icons/fa"
// import Template from '../../layout/template';
import "./UploadForm.scss";
import $ from 'jquery';
import Loading from '../../component/loading';
import Template from '../../layout/template';
// import { postData } from '../../../fetch';

const acceptedFileFormat = {
    image: ["image/png", "image/jpeg"],
    pdf: ["application/pdf"],
    docx: [".doc", ".docx"],
    all: ["image/png", "image/jpeg", "application/pdf"]
}

const acceptedFileFormatString = {
    image: "image",
    pdf: "pdf",
    docx: "docx",
    all: "all"
}

const acceptedFileFormatValidation = {
    image: "jpg, jpeg, atau png",
    pdf: "pdf",
    docx: ".doc atau .docx",
    all: "jpg, jpeg, png, atau pdf"
}

const UploadFileField = ({
    title="",
    subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)",
    id="",
    type="image",
    fileName="",
    setData = () => {}
}) => {
    function readURL(input, id) {
        // let validImageTypes = (type === "image" ? "image/jpeg" : "application/pdf");
        if (input.files && input.files[0]) {
            let fileSize = (input.files[0]["size"] ? (input.files[0]["size"] / 1024 / 1024) : 0)
            if (acceptedFileFormat[type].includes(input.files[0]["type"]) && fileSize <= 5) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    setData({name: input.files[0]["name"], file: input.files[0]});
                };
                reader.readAsDataURL(input.files[0]);
            } else if (!fileName) {
                setData({name: "", file: ""})
                $(`#${id}`).val('');
                alert(`Harap masukkan file tipe ${acceptedFileFormatValidation[type]} dengan maks. ukuran 5 MB`)
            }
        } 
    }

    useEffect(() => {
        $(document).on("change", `#${id}`, function () {
            readURL(this, id);
        });
    }, [])

    return <div className="upload-file-wrapper">
        <div className="upload-file-title">{title}</div>
        <div className="upload-file-subtitle">{subtitle}</div>
        <div style={{display: "flex", alignItems: "center"}}>
            <div className="upload-file-button">
                <label>
                    Unggah File
                    <input
                        id={id}
                        type="file"
                        accept={acceptedFileFormat[type]}
                        style={{ display: "none", width: "100%" }}
                    />
                </label>
            </div>
            {fileName && <p>{fileName} <span onClick={() => {
                setData({name: "", file: ""})
                $(`#${id}`).val('');
            }}>X</span></p>}
        </div>
    </div>
}

const UploadTacticalForm = () => {
    const [name, setName] = useState()
    const [idNumber, setIDNumber] = useState()
    const [companyName, setCompanyName] = useState()
    const [email, setEmail] = useState()
    const [waNumber, setWANumber] = useState("")

    const [idNumberFile, setIDNumberFile] = useState({name: "", file: ""})
    const [cardNumberFile, setCardNumberFile] = useState({name: "", file: ""})
    const [npwpFile, setNPWPFile] = useState({name: "", file: ""})
    const [taxFile, setTaxFile] = useState({name: "", file: ""})
    const [aktaPendirianFile, setAktaPendirianFile] = useState({name: "", file: ""})
    // const [aktaPerubahanFile, setAktaPerubahanFile] = useState({name: "", file: ""})
    // const [skKemenhumkanFile, setSKKemenhumkanFile] = useState({name: "", file: ""})
    const [nomorIndukFile, setNomorIndukFile] = useState({name: "", file: ""})
    const [tandaDaftarUsahaFile, setTandaDaftarUsahaFile] = useState({name: "", file: ""})
    const [tandaPemberitahuanPembuatanFilmFile, setTandaPemberitahuanPembuatanFilmFile] = useState({name: "", file: ""})
    const [keteranganDomisiliUsahaFile, setKeteranganDomisiliUsahaFile] = useState({name: "", file: ""})

    const [pernyataanRumahProduksiFile, setPernyataanRumahProduksiFile] = useState({name: "", file: ""})
    const [pernyataanTangguungJawabFile, setPernyataanTangguungJawabFile] = useState({name: "", file: ""})
    const [permohonanBantuanPemerintahFile, setPermohonanBantuanPemerintahFile] = useState({name: "", file: ""})
    // const [pernyataanFilmJadwalRilisFile, setPernyataanFilmJadwalRilisFile] = useState({name: "", file: ""})
    const [profilPengurusProposalFile, setprofilPengurusProposalFile] = useState({name: "", file: ""})
    const [proposalPermohonanFile, setProposalPermohonanFile] = useState({name: "", file: ""})
    const [portofolioProdukFilmFile, setPortofolioProdukFilmFile] = useState({name: "", file: ""})
    const [pengajuanRABProduksiFile, setPengajuanRABProduksiFile] = useState({name: "", file: ""})

    const [link, setLink] = useState("")
    const [secondLink, setSecondLink] = useState("")
    const [verifyCheck, setVerifyCheck] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const validations = () => {
        // if(idNumber && idNumber.length !== 16) return false;
        // return true;
        return name
            && idNumber
            && companyName
            && email
            && waNumber
            && idNumberFile.file
            && cardNumberFile.file
            && npwpFile.file
            && taxFile.file
            && aktaPendirianFile.file
            && nomorIndukFile.file
            && tandaDaftarUsahaFile.file
            && tandaPemberitahuanPembuatanFilmFile.file
            && keteranganDomisiliUsahaFile.file
            && pernyataanRumahProduksiFile.file
            && pernyataanTangguungJawabFile.file
            && permohonanBantuanPemerintahFile.file
            // && pernyataanFilmJadwalRilisFile.file
            && profilPengurusProposalFile.file
            && proposalPermohonanFile.file
            && portofolioProdukFilmFile.file
            && pengajuanRABProduksiFile.file
            && link
            && verifyCheck;
    }

    

    const submitData = () => {
        if(validations()) {
            setIsLoading(true)
            let data = {
                fullname: name,
                nik: idNumber,
                production_house: companyName,
                email: email,
                whatsapp: waNumber,
                ktp_dir_fname: idNumberFile.name,
                ktp_dir_file: idNumberFile.file,
                rekening_fname: cardNumberFile.name,
                rekening_file: cardNumberFile.file,
                npwp_fname: npwpFile.name,
                npwp_file: npwpFile.file,
                spt_fname: taxFile.name,
                spt_file: taxFile.file,
                ap_fname: aktaPendirianFile.name,
                ap_file: aktaPendirianFile.file,
                nib_fname: nomorIndukFile.name,
                nib_file: nomorIndukFile.file,
                tdup_fname: tandaDaftarUsahaFile.name,
                tdup_file: tandaDaftarUsahaFile.file,
                tppf_fname: tandaPemberitahuanPembuatanFilmFile.name,
                tppf_file: tandaPemberitahuanPembuatanFilmFile.file,
                l1_sp_production_house_fname: pernyataanRumahProduksiFile.name,
                l1_sp_production_house_file: pernyataanRumahProduksiFile.file,
                l2_sp_tgg_jwb_fname: pernyataanTangguungJawabFile.name,
                l2_sp_tgg_jwb_file: pernyataanTangguungJawabFile.file,
                l3_sp_bantuan_fname: permohonanBantuanPemerintahFile.name,
                l3_sp_bantuan_file: permohonanBantuanPemerintahFile.file,
                // l4_sp_sensor_fname: pernyataanFilmJadwalRilisFile.name,
                // l4_sp_sensor_file: pernyataanFilmJadwalRilisFile.file,
                l5_profile_fname: profilPengurusProposalFile.name,
                l5_profile_file: profilPengurusProposalFile.file,
                l6_proposal_fname: proposalPermohonanFile.name,
                l6_proposal_file: proposalPermohonanFile.file,
                portfolio_fname: portofolioProdukFilmFile.name,
                portfolio_file: portofolioProdukFilmFile.file,
                l7_anggaran_biaya_fname: pengajuanRABProduksiFile.name,
                l7_anggaran_biaya_file: pengajuanRABProduksiFile.file,
                skdu_fname: keteranganDomisiliUsahaFile.name,
                skdu_file: keteranganDomisiliUsahaFile.file,
                movie_link: link,
                document_link: secondLink
            }
            let formData = new FormData();
            for (let field in data) {
                formData.append(field, data[field]);
            }

            fetch('https://api-penfilm.kemenparekraf.go.id/v2/register',  {
                    method: 'POST',
                    // mode: 'no-cors',
                    body: formData
                })
            .then(response =>  response.json())
            .then(result => {
                // console.log('Success:', result);
                setIsLoading(false);
                if(result.field_code) {
                    alert(result.message);
                } else {
                    alert('Sukses mendaftar!');
                    window.location.href = "/"
                }
            })
            .catch(error => {
                // console.error('Error:', error);
                alert(error);
                setIsLoading(false);
            });
        } else {
            if(!verifyCheck) alert("Harap berikan tanda centang pada pernyataan.")
            else alert("Harap isi semua data.");
        }
    }

    return <Template>
        <Loading visibility={isLoading} />
        <div className="upload-form-wrapper upload-tactical-form-wrapper">
            <h2>Pendaftaran Program Bantuan Pemerintah Promosi Film Indonesia</h2>

            <ul className="upload-form-note">
                <li>
                    Seluruh dokumen asli legalitas, identitas dan stempel badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)    
                </li>
                <li>
                    Penjelasan poin 1 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan
                </li>
            </ul>

            <div className="upload-form-section">
                <div className="upload-form-title">
                    <div className="upload-form-label">DATA PENDAFTAR</div>
                    <span>*Wajib diisi</span>
                </div>

                <div className="upload-form-content-wrapper">
                    <div className="upload-form-field">
                        <label htmlFor="full-name">NAMA LENGKAP *</label>
                        <input 
                            name="full-name"
                            defaultValue={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="id-number">NOMOR IDENTITAS/NIK/PASPOR *</label>
                        <input 
                            name="id-number"
                            defaultValue={idNumber}
                            onChange={(e) => {
                                setIDNumber(e.target.value)
                            }}
                            
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="company-name">NAMA RUMAH PRODUKSI *</label>
                        <input 
                            name="company-name"
                            defaultValue={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="email">ALAMAT EMAIL *</label>
                        <input 
                            name="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="whatsapp-number">NOMOR WHATSAPP *</label>
                        <input 
                            type="text"
                            name="whatsapp-number"
                            value={waNumber}
                            onChange={(e) => {
                                var number = e.target.value;
                                number = new RegExp(/^[0-9]*$/).test(number)
                                    ? number
                                    : waNumber;
                                setWANumber(number);
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="upload-form-section">
                <div className="upload-form-title">
                    <div className="upload-form-label">DOKUMEN LEGALITAS</div>
                    <span>*Wajib diisi</span>
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH AKTA PENDIRIAN DAN MINIMAL SUDAH BERDIRI SEJAK 1 JANUARI 2019 *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-akta-pendirian-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={aktaPendirianFile.name}
                        setData = {(data) => setAktaPendirianFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SALINAN KTP PENANGGUNG JAWAB / DIREKTUR PH *"
                        subtitle="(File PDF, JPG, JPEG, atau PNG, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-id-number-file"
                        type={acceptedFileFormatString.all}
                        fileName={idNumberFile.name}
                        setData = {(data) => setIDNumberFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT KETERANGAN DOMISILI USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-keterangan-domisili-usaha-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={keteranganDomisiliUsahaFile.name}
                        setData = {(data) => setKeteranganDomisiliUsahaFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH NOMOR INDUK BERUSAHA (NIB) *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-nomor-induk-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={nomorIndukFile.name}
                        setData = {(data) => setNomorIndukFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH TANDA DAFTAR USAHA PERFILMAN (TDUP)*"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tanda-daftar-usaha-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={tandaDaftarUsahaFile.name}
                        setData = {(data) => setTandaDaftarUsahaFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH TANDA PEMBERITAHUAN PEMBUATAN FILM (TPPF)*"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tanda-pemberitahuan-pembuatan-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={tandaPemberitahuanPembuatanFilmFile.name}
                        setData = {(data) => setTandaPemberitahuanPembuatanFilmFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH DOKUMEN NOMOR POKOK WAJIB PAJAK ATAS NAMA BADAN USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-npwp-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={npwpFile.name}
                        setData = {(data) => setNPWPFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tax-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={taxFile.name}
                        setData = {(data) => setTaxFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH DOKUMEN REKENING ATAS NAMA BADAN USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-card-number-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={cardNumberFile.name}
                        setData = {(data) => setCardNumberFile({...data})}
                    />
                </div>

                {/* 

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH AKTA PERUBAHAN ATAS NAMA BADAN USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-akta-perubahan-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={aktaPerubahanFile.name}
                        setData = {(data) => setAktaPerubahanFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SK KEMENHUMKAM HAM ATAS AKTA PENDIRIAN DAN PERUBAHAN *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-sk-kemenhumkan-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={skKemenhumkanFile.name}
                        setData = {(data) => setSKKemenhumkanFile({...data})}
                    />
                </div> */}
            </div>

            <div className="upload-form-section">
                <div className="upload-form-title">
                    <div className="upload-form-label">BERKAS LAMPIRAN</div>
                    <span>*Wajib diisi</span>
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN 1) * "
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-rumah-produksi-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={pernyataanRumahProduksiFile.name}
                        setData = {(data) => setPernyataanRumahProduksiFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 2) * "
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-tanggung-jawab-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={pernyataanTangguungJawabFile.name}
                        setData = {(data) => setPernyataanTangguungJawabFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 3) *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-permohonan-bantuan-pemerintah-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={permohonanBantuanPemerintahFile.name}
                        setData = {(data) => setPermohonanBantuanPemerintahFile({...data})}
                    />
                </div>

                {/* <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN FILM YANG DIAJUKAN WAJIB TAYANG DI MEDIA PENAYANGAN MULTIPLATFORM LEGAL (LAMPIRAN 4) *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-film-jadwal-rilis-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={pernyataanFilmJadwalRilisFile.name}
                        setData = {(data) => setPernyataanFilmJadwalRilisFile({...data})}
                    />
                </div> */}

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 4) *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-profil-pengusul-proposal-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={profilPengurusProposalFile.name}
                        setData = {(data) => setprofilPengurusProposalFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH PROPOSAL BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 5)*"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-proposal-permohonan-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={proposalPermohonanFile.name}
                        setData = {(data) => setProposalPermohonanFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH RINCIAN ANGGARAN BIAYA (RAB) BANTUAN PEMERINTAH BAGI PROMOSI FILM INDONESIA (LAMPIRAN 6) *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-pengajuan-rab-produksi-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={pengajuanRABProduksiFile.name}
                        setData = {(data) => setPengajuanRABProduksiFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH PORTOFOLIO PRODUK FILM YANG TELAH DIHASILKAN *"
                        subtitle="(File PDF, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-portofolio-produk-film-file"
                        type={acceptedFileFormatString.pdf}
                        fileName={portofolioProdukFilmFile.name}
                        setData = {(data) => setPortofolioProdukFilmFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <div className="upload-form-field">
                        <label htmlFor="link">UNGGAH LINK DOKUMEN TRAILER FILM YANG DIAJUKAN *</label>
                        <p className="upload-file-subtitle">(Link Google Drive, Youtube,dsb. Link harus diawali dengan https:// atau http://)</p>
                        <input 
                            name="link"
                            defaultValue={link}
                            onChange={(e) => setLink(e.target.value)}
                        ></input>
                    </div>
                </div>

                <div className="upload-form-content-wrapper">
                    <div className="upload-form-field">
                        <label htmlFor="link">UNGGAH LINK DOKUMEN FILM YANG DIAJUKAN</label>
                        <p className="upload-file-subtitle">(Link Google Drive, Youtube,dsb. Link harus diawali dengan https:// atau http://)</p>
                        <input 
                            name="link"
                            defaultValue={secondLink}
                            onChange={(e) => setSecondLink(e.target.value)}
                        ></input>
                    </div>
                </div>
            </div>

            <Checkbox
                checked={verifyCheck}
                icon={
                <div
                    style={{
                    display: "flex",
                    flex: 1,
                    backgroundColor: "white",
                    alignSelf: "center"
                    }}
                >
                    <FaCheckSquare color="#3884C2" size={26} />
                </div>
                }
                borderColor="#3884C2"
                // borderWidth={0}
                // borderRadius={20}
                style={{ overflow: "hidden", backgroundColor: "white" }}
                size={22}
                label={<p style={{fontSize: 24}}>Saya menyatakan bahwa seluruh data yang saya isi adalah benar.</p>}
                labelStyle={{
                    color: "white",
                    marginLeft: 10,
                    fontSize: 18
                }}
                onChange={(checked) => setVerifyCheck(checked)}
                containerStyle={{
                    cursor: "pointer"
                }}
            />

            <div
                onClick={() => {if(validations()) submitData()}}
                className="submit-button"
                style={validations() ? {} : {
                    backgroundColor: "#e5e5e5",
                    color: "white",
                    cursor: "not-allowed"
                }}
            >
                Submit
            </div>
        </div>
    </Template>
}

export default UploadTacticalForm;
