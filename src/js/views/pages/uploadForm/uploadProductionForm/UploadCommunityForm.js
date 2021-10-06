import React, { Fragment, useEffect, useState } from 'react';
import Checkbox from "react-custom-checkbox";
import { FaCheck, FaCheckCircle, FaCheckSquare } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import "../UploadForm.scss";
import "./UploadProductionForm.scss";
import $ from 'jquery';
import Loading from '../../../component/loading';
import Template from '../../../layout/template';
import RadioButton from '../../../component/radioButton';
import TextAreaWithCounter from '../../../component/textAreaWithCounter';
import PopupOneButton from '../../../component/popupOneButton';

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
        <div style={{display: "flex", alignItems: "baseline"}}>
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

const LEGAL_FORMAL_TYPES = {
    yayasan: {
        text: "Yayasan",
        val: "legal-formal-yayasan"
    },
    perkumpulan: {
        text: "Perkumpulan",
        val: "legal-formal-perkumpulan"
    },
    none: {
        text: "Belum Ada",
        val: "legal-formal-none"
    }
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

const LEGAL_FORMAL_NONE_OPTIONS = [
    {
        text: "Shortlist film pendek / film dokumenter pendek nominasi Festival Film Indonesia 2019-2021",
        val: "shortlistFFI"
    },
    {
        text: "Masuk dalam program pemutaran/kompetisi film dokumenter pendek Festival Film Dokumenter, Yogyakarta 2019-2021",
        val: "ffdYogya"
    },
    {
        text: "Masuk dalam kurasi Minikino Film Week, Denpasar 2019-2021",
        val: "minikino"
    },
    {
        text: "Masuk dalam program pemutaran Jogja-NETPAC Asian Film Festival, Yogyakarta 2019-2021",
        val: "netpac"
    },
    {
        text: "Masuk dalam kurasi Arkipel Jakarta International Documentary & Experimental Film Festival, Jakarta 2019-2021",
        val: "arkipel"
    },
    {
        text: "Masuk dalam kurasi kegiatan Film, Musik, Makan, Jakarta 2019-2021",
        val: "fmmJakarta"
    },
    {
        text: "Masuk dalam kurasi program pemutaran di Klub DIY Menonton, Yogyakarta 2019-2021",
        val: "diyMenonton"
    },
    {
        text: "Masuk dalam kurasi program pemutaran di Kinosaurus, Jakarta 2019-2021",
        val: "kinosaurus"
    },
    {
        text: "Masuk dalam kurasi program pemutaran di Kineforum, Jakarta 2019-2021",
        val: "kineforum"
    },
]

const UploadTacticalForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [idNumber, setIDNumber] = useState()
    const [companyName, setCompanyName] = useState()
    const [legalFormalType, setLegalFormalType] = useState("")
    const [legalFormalNoneOptions, setLegalFormalNoneOptions] = useState({
        shortlistFFI: false,
        ffdYogya: false,
        minikino: false,
        netpac: false,
        arkipel: false,
        fmmJakarta: false,
        diyMenonton: false,
        kinosaurus: false,
        kineforum: false
    })
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
    const [aktaPendirianFile, setAktaPendirianFile] = useState({name: "", file: ""})
    const [rekeningANBadanUsaha, setRekeningANBadanUsaha] = useState("")
    const [stakeholderResmi, setStakeholderResmi] = useState("")

    const [lampiranB1, setLampiranB1] = useState({name: "", file: ""})
    const [lampiran1, setLampiran1] = useState({name: "", file: ""})
    const [lampiran2, setLampiran2] = useState({name: "", file: ""})
    const [lampiran3, setLampiran3] = useState({name: "", file: ""})
    const [lampiran4, setLampiran4] = useState({name: "", file: ""})
    const [lampiran5, setLampiran5] = useState({name: "", file: ""})
    const [lampiran6, setLampiran6] = useState({name: "", file: ""})
    const [lampiran7, setLampiran7] = useState({name: "", file: ""})
    const [lampiranB2, setLampiranB2] = useState({name: "", file: ""})
    const [lampiranB3, setLampiranB3] = useState({name: "", file: ""})

    const [verifyCheck, setVerifyCheck] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [showDisclaimer, setShowDisclaimer] = useState(true)

    const validationsOne = () => {
        // return true;
        if(legalFormalType === LEGAL_FORMAL_TYPES.none.val) {
            return legalFormalNoneOptions.shortlistFFI ||
                legalFormalNoneOptions.ffdYogya ||
                legalFormalNoneOptions.minikino ||
                legalFormalNoneOptions.netpac ||
                legalFormalNoneOptions.arkipel ||
                legalFormalNoneOptions.fmmJakarta ||
                legalFormalNoneOptions.diyMenonton ||
                legalFormalNoneOptions.kinosaurus ||
                legalFormalNoneOptions.kineforum
        }
        return name
            && idNumber
            && companyName
            && waNumber
            && email
            && legalFormalType
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
        if(rekeningANBadanUsaha === 0) {
            return lampiranB3.file
        }
        if(stakeholderResmi === 0) {
            return lampiranB2.file
        }
        return aktaPendirianFile.file
            && idNumberFile.file
            && cardNumberFile.file
            && (rekeningANBadanUsaha === 1 || rekeningANBadanUsaha === 0)
            && (stakeholderResmi === 1 || stakeholderResmi === 0)
            && lampiranB1.file
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
                <h2>Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia Untuk Komunitas Perfilman</h2>

                <ul className="upload-form-note">
                    <li>
                        Seluruh dokumen asli legalitas, identitas dan stempel Komunitas Perfilman serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika Komunitas Perfilman terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)
                    </li>
                    <li>
                    Anggaran Bantuan Pemerintah Bagi Produksi Film Indonesia saat ini masih dalam tahap pengajuan ke Kementerian Keuangan, Komunitas Perfilman yang melakukan pendaftaran pada skema produksi dengan ini memahami dan bersedia untuk menerima dan tidak akan menuntut Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif apabila pengajuan anggaran dana bantuan pemerintah ini tidak disetujui atau tidak tersedia
                    </li>
                    <li>
                        Penjelasan poin 2 merupakan bahan verifikasi dan persyaratan wajib agar dana bantuan dapat diberikan
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
                            <label htmlFor="company-name">NAMA KOMUNITAS PERFILMAN *</label>
                            <input 
                                name="company-name"
                                defaultValue={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            ></input>
                        </div>

                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">BENTUK LEGAL FORMAL *</label>
                            <RadioButton
                                onChange={(val) => setLegalFormalType(val)}
                                radioButtons={Object.keys(LEGAL_FORMAL_TYPES).map(function(k){return LEGAL_FORMAL_TYPES[k]})}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />

                            {legalFormalType === LEGAL_FORMAL_TYPES.none.val &&
                             <div className="radio-button-dropdown">
                                 <p>PORTOFOLIO FILM YANG PERNAH BERPARTISIPASI DI *<br />(PILIH MINIMAL 1)</p>
                                 {
                                     LEGAL_FORMAL_NONE_OPTIONS.map((elem) =>
                                    <Checkbox
                                        checked={legalFormalNoneOptions[elem.val]}
                                        className="legal-formal-none-checkbox"
                                        icon={
                                        <div
                                            style={{
                                            display: "flex",
                                            flex: 1,
                                            backgroundColor: "white",
                                            alignSelf: "stretch",
                                            }}
                                        >
                                            <FiCheck color="var(--main-light-green)" size={18} />
                                        </div>
                                        }
                                        borderColor="var(--main-light-green)"
                                        // borderWidth={0}
                                        borderRadius={18}
                                        style={{ overflow: "hidden", justifyContent: "unset" }}
                                        size={18}
                                        label={<p style={{margin: 0}}>{elem.text}</p>}
                                        onChange={(checked) => {
                                            let temp = {...legalFormalNoneOptions};
                                            temp[elem.val] = checked;
                                            setLegalFormalNoneOptions(temp)
                                        }}
                                        containerStyle={{
                                            cursor: "pointer"
                                        }}
                                    />
                                     )
                                 }
                            </div>}
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
                            <label htmlFor="movie-producer-vision">PROFIL PRODUSER DAN KOMUNITAS PERFILMAN YANG TERLIBAT (200-400 Kata) *</label>
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
                            <label htmlFor="link">TAUTAN DARING DARI HASIL KARYA (PORTOFOLIO) KOMUNITAS PERFILMAN TAHUN 2019-2021 *</label>
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
                    onClick={() => setPage(2)}
                    className="submit-button"
                    // style={validationsOne() ? {} : {
                    //     backgroundColor: "#e5e5e5",
                    //     color: "white",
                    //     cursor: "not-allowed"
                    // }}
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
                            title="UNGGAH AD/ART KOMUNITAS PERFILMAN DAN MINIMAL SUDAH BERDIRI SEJAK 1 JANUARI 2019 *"
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.pdf}
                            fileName={aktaPendirianFile.name}
                            setData = {(data) => setAktaPendirianFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SALINAN KTP PENANGGUNG JAWAB / KETUA DARI KOMUNITAS PERFILMAN *"
                            subtitle="(File PDF, JPG, JPEG, atau PNG, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-id-number-file"
                            type={acceptedFileFormatString.all}
                            fileName={idNumberFile.name}
                            setData = {(data) => setIDNumberFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH DOKUMEN REKENING ATAS NAMA KOMUNITAS PERFILMAN ATAU ATAS NAMA PRIBADI YANG MERUPAKAN PERWAKILAN SAH SECARA HUKUM UNTUK MEWAKILI KOMUNITAS PERFILMAN *"
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-card-number-file"
                            type={acceptedFileFormatString.pdf}
                            fileName={cardNumberFile.name}
                            setData = {(data) => setCardNumberFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">APAKAH DOKUMEN REKENING ATAS NAMA KOMUNITAS? *</label>
                            <RadioButton
                                onChange={(val) => setRekeningANBadanUsaha(Number(val))}
                                radioButtons={[
                                    {
                                        val: "1",
                                        text: "Ya"
                                    },
                                    {
                                        val: "0",
                                        text: "Tidak"
                                    }
                                ]}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field radio-button">
                            <label htmlFor="company-name">APAKAH KOMUNITAS TERDAFTAR SEBAGAI STAKEHOLDER RESMI BADAN PERFILMAN INDONESIA?  *</label>
                            <RadioButton
                                onChange={(val) => setStakeholderResmi(Number(val))}
                                radioButtons={[
                                    {
                                        val: "1",
                                        text: "Ya"
                                    },
                                    {
                                        val: "0",
                                        text: "Tidak"
                                    }
                                ]}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                            />
                        </div>
                    </div>

                </div>

                <div className="upload-form-section">
                    <div className="upload-form-title">
                        <div className="upload-form-label">BERKAS LAMPIRAN</div>
                        <span>*Wajib diisi</span>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN KOMUNITAS PERFILMAN (LAMPIRAN B.1) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiranB1.name}
                            setData = {(data) => setLampiranB1({...data})}
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
                            title="UNGGAH SURAT PERNYATAAN TIDAK MENERIMA BANTUAN PEMERINTAH PROMOSI FILM INDONESIA DAN/ATAU BANTUAN K/L LAINNYA (LAMPIRAN 2) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran2.name}
                            setData = {(data) => setLampiran2({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERNYATAAN FILM MASIH DALAM TAHAP PERENCANAAN/PRODUKSI  (LAMPIRAN 3) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran3.name}
                            setData = {(data) => setLampiran3({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH SURAT PERMOHONAN BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 4) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran4.name}
                            setData = {(data) => setLampiran4({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH RINGKASAN PROFIL PENGUSUL PROPOSAL PERMOHONAN BANTUAN BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 5) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran5.name}
                            setData = {(data) => setLampiran5({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH DOKUMEN PENDUKUNG PROPOSAL BANTUAN PEMERINTAH BAGI PRODUKSI FILM INDONESIA (LAMPIRAN 6) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran6.name}
                            setData = {(data) => setLampiran6({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title="UNGGAH PENGAJUAN RINCIAN ANGGARAN BIAYA PRODUKSI FILM (LAMPIRAN 7) *"
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiran7.name}
                            setData = {(data) => setLampiran7({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={`UNGGAH SURAT REKOMENDASI STAKEHOLDER RESMI BPI UNTUK KOMUNITAS PERFILMAN (LAMPIRAN B.2) ${stakeholderResmi === 0 ? "*" : ""}`}
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiranB2.name}
                            setData = {(data) => setLampiranB2({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={`UNGGAH SURAT PERNYATAAN PENGGUNAAN REKENING ATAS NAMA PRIBADI UNTUK MEWAKILI KOMUNITAS PERFILMAN.(LAMPIRAN B.3) ${rekeningANBadanUsaha === 0 ? "*" : ""}`}
                            subtitle="(File docx, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id="upload-form-akta-pendirian-file"
                            type={acceptedFileFormatString.docx}
                            fileName={lampiranB3.name}
                            setData = {(data) => setLampiranB3({...data})}
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
                        onClick={() => setPage(1)}
                        className="submit-button"
                    >
                        Back
                    </div>
                </div>
            </Fragment>}

            
        </div>
        <PopupOneButton
            visibility = {showDisclaimer}
            title = "PERHATIAN!"
            buttonText = "OK, Saya Mengerti"
            onClickButton = {() => setShowDisclaimer(false)}
            className = "modal-disclaimer-production"
            backdrop="static"
            footerText={
                <Fragment>
                    <div style={{display: "flex", color: "var(--main-red)"}}>
                        <div style={{marginRight: "1.5em"}}>*</div>
                        <p style={{margin: 0}}>Wajib dilampirkan apabila Komunitas belum terdaftar sebagai stakeholder unsur 
	                    kegiatan perfilman dalam Badan Perfilman Indonesia (BPI)</p>
                    </div>
                    <div style={{display: "flex", color: "var(--main-red)"}}>
                        <div style={{marginRight: "1em"}}>**</div>
                        <p style={{margin: 0}}>Wajib dilampirkan apabila tidak memiliki rekening bank atas nama Komunitas Perfilman</p>
                    </div>
                </Fragment>
            }
        >
            <h4>
                Pastikan Anda telah menyiapkan dokumen-dokumen persyaratan khusus{" "} 
                <span style={{textDecoration: "underline"}}>Komunitas Perfilman</span> seperti:
            </h4>
            <div className="modal-disclaimer-content">
                <div className="modal-disclaimer-content-title">
                    A. Dokumen Legalitas :
                </div>
                <ul>
                    <li>AD/ART Komunitas Perfilman dan minimal sudah berdiri sejak 
                        1 Januari 2019</li>
                    <li>Salinan KTP Penanggung jawab / Ketua dari Komunitas 
                        Perfilman</li>
                    <li>Dokumen Rekening atas nama Komunitas Perfilman atau atas 
                        nama pribadi yang merupakan perwakilan sah secara hukum untuk mewakili Komunitas Perfilman</li>
                </ul>

                <div className="modal-disclaimer-content-title">
                    B. Berkas Lampiran :
                </div>
                <ul>
                    <li>Surat Pernyataan Komunitas Perfilman (Lampiran B.1)</li>
                    <li>Surat Pernyataan Tanggung Jawab Mutlak (Lampiran 1)</li> 
                    <li>Surat Pernyataan Tidak Menerima Bantuan Pemerintah 
                        Promosi Film Indonesia dan/atau Bantuan K/L Lainnya 
                        (Lampiran 2)</li>
                    <li>Surat Pernyataan Film Masih Dalam Tahap Perencanaan/ 
                        Produksi  (Lampiran 3)</li>
                    <li>Surat Permohonan Bantuan Pemerintah bagi Produksi Film 
                        Indonesia (Lampiran 4)</li>
                    <li>Ringkasan Profil Pengusul Proposal Permohonan Bantuan bagi 
                        Produksi Film Indonesia (Lampiran 5)</li>
                    <li>Dokumen Pendukung Proposal Bantuan Pemerintah bagi 
                        Produksi Film Indonesia (Lampiran 6)</li>
                    <li>Pengajuan Rincian Anggaran Biaya Produksi Film (Lampiran 7)</li>
                    <li>Surat Rekomendasi Stakeholder Resmi Badan Perfilman 
	                    Indonesia untuk Komunitas Perfilman (Lampiran B.2) *</li>
                    <li>Surat Pernyataan Penggunaan Rekening atas Nama Pribadi 
	                    untuk Mewakili Komunitas Perfilman.(Lampiran B.3) **</li>
                </ul>
            </div>
        </PopupOneButton>
    </Template>
}

export default UploadTacticalForm;
