import React, { useEffect, useState } from 'react';
import Template from '../../layout/template';
import "./UploadForm.scss";
import $ from 'jquery';

const UploadProductionForm = () => {
    const [name, setName] = useState()
    const [idNumber, setIDNumber] = useState()
    const [companyName, setCompanyName] = useState()
    const [email, setEmail] = useState()
    const [waNumber, setWANumber] = useState()

    const [idNumberFile, setIDNumberFile] = useState({name: "", file: ""})
    const [cardNumberFile, setCardNumberFile] = useState({name: "", file: ""})
    const [npwpFile, setNPWPFile] = useState({name: "", file: ""})
    const [taxFile, setTaxFile] = useState({name: "", file: ""})
    const [aktaPendirianFile, setAktaPendirianFile] = useState({name: "", file: ""})
    const [aktaPerubahanFile, setAktaPerubahanFile] = useState({name: "", file: ""})
    const [skKemenhumkanFile, setSKKemenhumkanFile] = useState({name: "", file: ""})
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

    const [link, setLink] = useState()

    const acceptedFileFormat = {
        image: ["image/jpeg"],
        pdf: ["application/pdf"],
        docx: [".doc", ".docx"]
    }

    const UploadFileField = ({
        title="",
        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)",
        id="",
        type="image",
        fileName="",
        setData = () => {}
    }) => {
        function readURL(input) {
            // let validImageTypes = (type === "image" ? "image/jpeg" : "application/pdf");
            if (acceptedFileFormat[type].includes(input.files[0]["type"])) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        setData({name: input.files[0]["name"], file: input.files[0]});
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            } else if (!fileName) {
                setData({name: "", file: ""})
                alert(`Harap masukkan file tipe ${type}`)
            }
        }

        useEffect(() => {
            $(document).on("change", `#${id}`, function () {
                readURL(this);
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
                }}>X</span></p>}
            </div>
        </div>
    }

    return <Template>
        <div className="upload-form-wrapper upload-production-form-wrapper">
            <h2>Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia</h2>

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
                        <label htmlFor="id-number">Nomor Identitas/nik/paspor *</label>
                        <input 
                            name="id-number"
                            defaultValue={idNumber}
                            onChange={(e) => setIDNumber(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="company-name">Nama Rumah Produksi *</label>
                        <input 
                            name="company-name"
                            defaultValue={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="email">Alamat Email *</label>
                        <input 
                            name="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>

                    <div className="upload-form-field">
                        <label htmlFor="whatsapp-number">Nomor Whatsapp *</label>
                        <input 
                            name="whatsapp-number"
                            defaultValue={waNumber}
                            onChange={(e) => setWANumber(e.target.value)}
                        ></input>
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
                        title="UNGGAH KTP PENANGGUNG JAWAB *"
                        subtitle="(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-id-number-file"
                        type="image"
                        fileName={idNumberFile.name}
                        setData = {(data) => setIDNumberFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH REKENING ATAS NAMA BADAN USAHA *"
                        subtitle="(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-card-number-file"
                        type="image"
                        fileName={cardNumberFile.name}
                        setData = {(data) => setCardNumberFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH NPWP ATAS NAMA BADAN USAHA *"
                        subtitle="(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-npwp-file"
                        type="image"
                        fileName={npwpFile.name}
                        setData = {(data) => setNPWPFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SALINAN SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR *"
                        subtitle="(File JPEG, 300 dpi, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tax-file"
                        type="image"
                        fileName={taxFile.name}
                        setData = {(data) => setTaxFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH AKTA PENDIRIAN ATAS NAMA BADAN USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-akta-pendirian-file"
                        type="pdf"
                        fileName={aktaPendirianFile.name}
                        setData = {(data) => setAktaPendirianFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH AKTA PERUBAHAN ATAS NAMA BADAN USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-akta-perubahan-file"
                        type="pdf"
                        fileName={aktaPerubahanFile.name}
                        setData = {(data) => setAktaPerubahanFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SK KEMENHUMKAM HAM ATAS AKTA PENDIRIAN DAN PERUBAHAN *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-sk-kemenhumkan-file"
                        type="pdf"
                        fileName={skKemenhumkanFile.name}
                        setData = {(data) => setSKKemenhumkanFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH NOMOR INDUK BERUSAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-nomor-induk-file"
                        type="pdf"
                        fileName={nomorIndukFile.name}
                        setData = {(data) => setNomorIndukFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH TANDA DAFTAR USAHA PERFILMAN *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tanda-daftar-usaha-file"
                        type="pdf"
                        fileName={tandaDaftarUsahaFile.name}
                        setData = {(data) => setTandaDaftarUsahaFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH TANDA PEMBERITAHUAN PEMBUATAN FILM *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-tanda-pemberitahuan-pembuatan-file"
                        type="pdf"
                        fileName={tandaPemberitahuanPembuatanFilmFile.name}
                        setData = {(data) => setTandaPemberitahuanPembuatanFilmFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT KETERANGAN DOMISILI USAHA *"
                        subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-keterangan-domisili-usaha-file"
                        type="pdf"
                        fileName={keteranganDomisiliUsahaFile.name}
                        setData = {(data) => setKeteranganDomisiliUsahaFile({...data})}
                    />
                </div>
            </div>

            <div className="upload-form-section">
                <div className="upload-form-title">
                    <div className="upload-form-label">KELENGKAPAN BERKAS</div>
                    <span>*Wajib diisi</span>
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI * "
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-rumah-produksi-file"
                        type="docx"
                        fileName={pernyataanRumahProduksiFile.name}
                        setData = {(data) => setPernyataanRumahProduksiFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK * "
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-tanggung-jawab-file"
                        type="docx"
                        fileName={pernyataanTangguungJawabFile.name}
                        setData = {(data) => setPernyataanTangguungJawabFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *"
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-permohonan-bantuan-pemerintah-file"
                        type="docx"
                        fileName={permohonanBantuanPemerintahFile.name}
                        setData = {(data) => setPermohonanBantuanPemerintahFile({...data})}
                    />
                </div>

                {/* <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH SURAT PERNYATAAN FILM YANG DIAJUKAN TELAH MEMILIKI JADWAL TAYANG RILIS DAN MEDIA PENAYANGAN *"
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-form-pernyataan-film-jadwal-rilis-file"
                        type="docx"
                        fileName={pernyataanFilmJadwalRilisFile.name}
                        setData = {(data) => setPernyataanFilmJadwalRilisFile({...data})}
                    />
                </div> */}

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *"
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-profil-pengusul-proposal-file"
                        type="docx"
                        fileName={profilPengurusProposalFile.name}
                        setData = {(data) => setprofilPengurusProposalFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <UploadFileField
                        title="UNGGAH PROPOSAL PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA *"
                        subtitle="(File docx, max. 5MB, Lengkapi dengan Nama Pendaftar)"
                        id="upload-proposal-permohonan-file"
                        type="docx"
                        fileName={proposalPermohonanFile.name}
                        setData = {(data) => setProposalPermohonanFile({...data})}
                    />
                </div>

                <div className="upload-form-content-wrapper">
                    <div className="upload-form-field">
                        <label htmlFor="link">UNGGAH LINK DOKUMEN FILM YANG DIAJUKAN *</label>
                        <p>(Link Google Drive, Youtube,dsb)</p>
                        <input 
                            name="link"
                            defaultValue={link}
                            onChange={(e) => setLink(e.target.value)}
                        ></input>
                    </div>
                </div>
            </div>

            <div
                onClick={() => {}}
                className="submit-button"
            >
                Submit
            </div>
        </div>
    </Template>
}

export default UploadProductionForm;
