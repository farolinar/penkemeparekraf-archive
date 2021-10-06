import React, { Fragment, useEffect, useState } from 'react';
import Checkbox from "react-custom-checkbox";
import { FaCheckSquare } from "react-icons/fa"
import "../UploadForm.scss";
import "./UploadProductionForm.scss";
import $ from 'jquery';
import Loading from '../../../component/loading';
import Template from '../../../layout/template';
import RadioButton from '../../../component/radioButton';
import TextAreaWithCounter from '../../../component/textAreaWithCounter';

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

const BADAN_USAHA_TYPES = {
    pt: {
        text: "Perseroan Terbatas (PT)",
        val: "badan-usaha-pt"
    },
    cv: {
        text: "Perseroan Komanditer (CV)",
        val: "badan-usaha-cv"
    },
}

const KRITERIA_FILM = {
    siap_produksi: {
        text: "Film Siap Produksi",
        val: "kriteria-siap-produksi"
    },
    dalam_penyelesaian: {
        text: "Film Dalam Tahap Penyelesaian",
        val: "kriteria-dalam-penyelesaian"
    }
}

const KATEGORI_FILM = {
    film_pendek: {
        text: "Film Pendek",
        val: "kategori-film-pendek"
    },
    film_dokumenter: {
        text: "Film Dokumenter Pendek",
        val: "kategori-film-dokumenter"
    }
}

const UploadTacticalForm = () => {
    const [name, setName] = useState()
    const [idNumber, setIDNumber] = useState()
    const [companyName, setCompanyName] = useState()
    const [badanUsahaType, setBadanUsahaType] = useState("")
    const [kriteriaFilm, setKriteriaFilm] = useState("")
    const [kategoriFilm, setKategoriFilm] = useState("")
    const [waNumber, setWANumber] = useState("")

    const [movieTitle, setMovieTitle] = useState("")
    const [movieDuration, setMovieDuration] = useState("")
    const [movieGenre, setMovieGenre] = useState("")
    const [movieWriter, setMovieWriter] = useState("")
    const [movieDirector, setMovieDirector] = useState("")
    const [movieProducer, setMovieProducer] = useState("")
    const [movieAnimator, setMovieAnimator] = useState("")
    const [movieCast, setMovieCast] = useState("")
    const [movieTarget, setMovieTarget] = useState("")
    const [movieLogline, setMovieLogline] = useState("")
    const [movieSynopsis, setMovieSynopsis] = useState("")
    const [movieStatement, setMovieStatement] = useState("")
    const [movieVision, setMovieVision] = useState("")
    const [movieOtherResource, setMovieOtherResource] = useState("")
    const [movieProdHouseDetail, setMovieProdHouseDetail] = useState("")
    const [movieDirectorDetail, setMovieDirectorDetail] = useState("")
    const [movieCrewMilestone, setMovieCrewMilestone] = useState("")
    const [movieDirectorExample, setMovieDirectorExample] = useState("")
    const [movieProducerExample, setMovieProducerExample] = useState("")
    const [movieProdHouseExample, setMovieProdHouseExample] = useState("")

    const [idNumberFile, setIDNumberFile] = useState({name: "", file: ""})
    const [cardNumberFile, setCardNumberFile] = useState({name: "", file: ""})
    const [npwpFile, setNPWPFile] = useState({name: "", file: ""})
    const [taxFile, setTaxFile] = useState({name: "", file: ""})
    const [aktaPendirianFile, setAktaPendirianFile] = useState({name: "", file: ""})
    const [nomorIndukFile, setNomorIndukFile] = useState({name: "", file: ""})
    const [tandaDaftarUsahaFile, setTandaDaftarUsahaFile] = useState({name: "", file: ""})
    const [keteranganDomisiliUsahaFile, setKeteranganDomisiliUsahaFile] = useState({name: "", file: ""})

    const [lampiranA1, setLampiranA1] = useState({name: "", file: ""})
    const [lampiran1, setLampiran1] = useState({name: "", file: ""})
    const [lampiran2, setLampiran2] = useState({name: "", file: ""})
    const [lampiran3, setLampiran3] = useState({name: "", file: ""})
    const [lampiran4, setLampiran4] = useState({name: "", file: ""})
    const [lampiran5, setLampiran5] = useState({name: "", file: ""})
    const [lampiran6, setLampiran6] = useState({name: "", file: ""})
    const [lampiran7, setLampiran7] = useState({name: "", file: ""})

    const [verifyCheck, setVerifyCheck] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)

    const validationsOne = () => {
        // return true;
        return name
            && idNumber
            && companyName
            && waNumber
            && badanUsahaType
            && kriteriaFilm
            && kategoriFilm
            && movieTitle
            && movieDuration
            && movieGenre
            && movieWriter
            && movieDirector
            && movieProducer
            && movieCast
            && movieTarget
            && movieLogline
            && movieSynopsis
            && movieStatement
            && movieVision
            && movieProdHouseDetail
            && movieDirectorDetail
            && movieDirectorExample
            && movieProducerExample
            && movieProdHouseExample;
    }

    const validationsTwo = () => {
        return aktaPendirianFile.file
        && idNumberFile.file
        && cardNumberFile.file
        && npwpFile.file
        && taxFile.file
        && nomorIndukFile.file
        && tandaDaftarUsahaFile.file
        && keteranganDomisiliUsahaFile.file
        && lampiranA1.file
        && lampiran1.file
        && lampiran2.file
        && lampiran3.file
        && lampiran4.file
        && lampiran5.file
        && lampiran6.file
        && lampiran7.file;
    }

    const validations = () => {
        return validationsOne() && validationsTwo() && verifyCheck;
    }

    const submitData = () => {
        if(validations()) {
            setIsLoading(true)
            let data = {
                fullname: name,
                nik: idNumber,
                production_house: companyName,
                whatsapp: waNumber,
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
        <div className="upload-form-wrapper upload-production-form-wrapper">
            {page === 1 ? <Fragment>
                <h2>Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia Untuk Rumah Produksi</h2>

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

                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">BENTUK BADAN USAHA *</label>
                            <RadioButton
                                onChange={(val) => setBadanUsahaType(val)}
                                radioButtons={Object.keys(BADAN_USAHA_TYPES).map(function(k){return BADAN_USAHA_TYPES[k]})}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />
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

                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">KRITERIA FILM (Pilih Salah 1) *</label>
                            <RadioButton
                                onChange={(val) => setKriteriaFilm(val)}
                                radioButtons={Object.keys(KRITERIA_FILM).map(function(k){return KRITERIA_FILM[k]})}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />
                        </div>

                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">KATEGORI FILM (Pilih Salah 1) *</label>
                            <RadioButton
                                onChange={(val) => setKategoriFilm(val)}
                                radioButtons={Object.keys(KATEGORI_FILM).map(function(k){return KATEGORI_FILM[k]})}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />
                        </div>
                    </div>
                </div>

                <div className="upload-form-section">
                    <div className="upload-form-title">
                        <div className="upload-form-label">PROPOSAL DATA FILM</div>
                        <span>*Wajib diisi</span>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-title">JUDUL FILM *</label>
                            <input 
                                name="movie-title"
                                defaultValue={movieTitle}
                                onChange={(e) => setMovieTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-duration">DURASI FILM *</label>
                            <input 
                                name="movie-duration"
                                defaultValue={movieDuration}
                                onChange={(e) => setMovieDuration(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-genre">GENRE *</label>
                            <input 
                                name="movie-genre"
                                defaultValue={movieGenre}
                                onChange={(e) => setMovieGenre(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-writer">NAMA PENULIS *</label>
                            <input 
                                name="movie-writer"
                                defaultValue={movieWriter}
                                onChange={(e) => setMovieWriter(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-director">NAMA SUTRADARA *</label>
                            <input 
                                name="movie-director"
                                defaultValue={movieDirector}
                                onChange={(e) => setMovieDirector(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-producer">NAMA PRODUSER *</label>
                            <input 
                                name="movie-producer"
                                defaultValue={movieProducer}
                                onChange={(e) => setMovieProducer(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-animator">NAMA ANIMATOR (JIKA ADA)</label>
                            <input 
                                name="movie-animator"
                                defaultValue={movieAnimator}
                                onChange={(e) => setMovieAnimator(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-cast">DAFTAR NAMA PEMAIN UTAMA DAN PENDUKUNG *</label>
                            <TextAreaWithCounter
                                name="movie-cast"
                                value={movieCast}
                                onChange={(e) => setMovieCast(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-target">TARGET PENONTON *</label>
                            <input 
                                name="movie-target"
                                defaultValue={movieTarget}
                                onChange={(e) => setMovieTarget(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-logline">LOGLINE (3 KALIMAT) *</label>
                            <input 
                                name="movie-logline"
                                defaultValue={movieLogline}
                                onChange={(e) => setMovieLogline(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-synopsis">SINOPSIS (200-400 KATA) *</label>
                            <TextAreaWithCounter
                                name="movie-synopsis"
                                value={movieSynopsis}
                                onChange={(e) => setMovieSynopsis(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-director-statement">DIRECTOR'S STATEMENT (200-400 KATA) *</label>
                            <TextAreaWithCounter
                                name="movie-director-statement"
                                value={movieStatement}
                                onChange={(e) => setMovieStatement(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-producer-vision">VISI PRODUSER (200-400 KATA) *</label>
                            <TextAreaWithCounter
                                name="movie-producer-vision"
                                value={movieVision}
                                onChange={(e) => setMovieVision(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-other-resource">DAFTAR PENDANAAN PRODUKSI DARI SUMBER LAIN / INVESTOR LAIN (JIKA ADA)</label>
                            <TextAreaWithCounter
                                name="movie-other-resource"
                                value={movieOtherResource}
                                onChange={(e) => setMovieOtherResource(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-producer-vision">PROFIL PRODUSER DAN RUMAH PRODUKSI YANG TERLIBAT (200-400 Kata) *</label>
                            <TextAreaWithCounter
                                name="movie-producer-vision"
                                value={movieProdHouseDetail}
                                onChange={(e) => setMovieProdHouseDetail(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-director-detail">PROFIL SUTRADARA (200-400 Kata) *</label>
                            <TextAreaWithCounter
                                name="movie-director-detail"
                                value={movieDirectorDetail}
                                onChange={(e) => setMovieDirectorDetail(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="movie-crew-milestone">PRESTASI DARI TENAGA KERJA (KRU DAN PEMAIN)</label>
                            <TextAreaWithCounter
                                name="movie-crew-milestone"
                                value={movieCrewMilestone}
                                onChange={(e) => setMovieCrewMilestone(e.target.value)}
                                maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="link">TAUTAN DARING DARI CONTOH HASIL KARYA SUTRADARA *</label>
                            <p className="upload-file-subtitle">(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)</p>
                            <input 
                                name="link"
                                defaultValue={movieDirectorExample}
                                onChange={(e) => setMovieDirectorExample(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="link">TAUTAN DARING DARI CONTOH HASIL KARYA PRODUSER *</label>
                            <p className="upload-file-subtitle">(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)</p>
                            <input 
                                name="link"
                                defaultValue={movieProducerExample}
                                onChange={(e) => setMovieProducerExample(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor="link">TAUTAN DARING DARI HASIL KARYA (PORTOFOLIO) RUMAH PRODUKSI TAHUN 2019-2021 *</label>
                            <p className="upload-file-subtitle">(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)</p>
                            <input 
                                name="link"
                                defaultValue={movieProdHouseExample}
                                onChange={(e) => setMovieProdHouseExample(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => {if(validationsOne()) setPage(2)}}
                    className="submit-button"
                    style={validationsOne() ? {} : {
                        backgroundColor: "#e5e5e5",
                        color: "white",
                        cursor: "not-allowed"
                    }}
                >
                    Next
                </div>
            </Fragment>
            : 
            <Fragment>
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
                </div>

                <div className="upload-form-section">
                    <div className="upload-form-title">
                        <div className="upload-form-label">BERKAS LAMPIRAN</div>
                        <span>*Wajib diisi</span>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN A.1) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiranA1.name}
                            setData = {(data) => setLampiranA1({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 1) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran1.name}
                            setData = {(data) => setLampiran1({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN TIDAK MENERIMA BANTUAN PEMERINTAH PROMOSI FILM\
                            INDONESIA DAN/ATAU BANTUAN K/L LAINNYA (LAMPIRAN 2) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran2.name}
                            setData = {(data) => setLampiran2({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN FILM MASIH DALAM TAHAP PERENCANAAN/\
                            PRODUKSI  (LAMPIRAN 3) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran3.name}
                            setData = {(data) => setLampiran3({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM\
                            INDONESIA (LAMPIRAN 4) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran4.name}
                            setData = {(data) => setLampiran4({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN\
                            BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 5) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran5.name}
                            setData = {(data) => setLampiran5({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH DOKUMEN PENDUKUNG PROPOSAL BANTUAN PEMERINTAH BAGI\
                            PRODUKSI FILM INDONESIA (LAMPIRAN 6) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran6.name}
                            setData = {(data) => setLampiran6({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="Unggah Pengajuan Rincian Anggaran Biaya Produksi Film (Lampiran 7) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran7.name}
                            setData = {(data) => setLampiran7({...data})}
                        />
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

                <div className="upload-submit-button-wrapper">
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

                    <div
                        onClick={() => {setPage(1)}}
                        className="submit-button"
                    >
                        Back
                    </div>
                </div>
            </Fragment>}

            
        </div>
    </Template>
}

export default UploadTacticalForm;
