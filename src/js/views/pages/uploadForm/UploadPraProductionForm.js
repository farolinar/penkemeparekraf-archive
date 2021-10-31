import React, { Fragment, useEffect, useState } from 'react';
import Checkbox from "react-custom-checkbox";
import { FaCheckSquare } from "react-icons/fa"
import "./UploadForm.scss";
import "./uploadProductionForm/UploadProductionForm.scss";
import $ from 'jquery';
import Loading from '../../component/loading';
import Template from '../../layout/template';
import TextAreaWithCounter from '../../component/textAreaWithCounter';
import PopupOneButton from '../../component/popupOneButton';
import { fieldIDs, fieldIDsName } from './praProductionFields';
import RadioButton from '../../component/radioButton';

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

const KATEGORI_FILM = {
    film_pendek: {
        text: "FILM PANJANG",
        val: "film_panjang"
    },
    film_dokumenter: {
        text: "FILM DOKUMENTER PANJANG",
        val: "dokumenter"
    }
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

const UploadPraProductionForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [idNumber, setIDNumber] = useState()
    const [companyName, setCompanyName] = useState()
    const [waNumber, setWANumber] = useState("")
    const [kategoriFilm, setKategoriFilm] = useState("")

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
    const [movieCrewMilestone, setMovieCrewMilestone] = useState("")
    const [movieCrew, setMovieCrew] = useState("")
    const [movieDirectorExample, setMovieDirectorExample] = useState("")
    const [movieProducerExample, setMovieProducerExample] = useState("")

    const [idNumberFile, setIDNumberFile] = useState({name: "", file: ""})
    const [aktaPerubahan, setAktaPerubahanFile] = useState({name: "", file: ""})
    const [profileAndPortfolioFile, setProfileAndPortfolioFile] = useState({name: "", file: ""})
    const [cardNumberFile, setCardNumberFile] = useState({name: "", file: ""})
    const [npwpFile, setNPWPFile] = useState({name: "", file: ""})
    const [taxFile, setTaxFile] = useState({name: "", file: ""})
    const [aktaPendirianFile, setAktaPendirianFile] = useState({name: "", file: ""})
    const [nomorIndukFile, setNomorIndukFile] = useState({name: "", file: ""})
    const [skKemenkumhamFile, setSKKemenkumhamFile] = useState({name: "", file: ""})
    const [skKemenkumhamPerubahanFile, setSKKemenkumhamPerubahanFile] = useState({name: "", file: ""})

    const [lampiran1, setLampiran1] = useState({name: "", file: ""})
    const [lampiran2, setLampiran2] = useState({name: "", file: ""})
    const [lampiran3, setLampiran3] = useState({name: "", file: ""})
    const [lampiran4, setLampiran4] = useState({name: "", file: ""})
    const [lampiran5, setLampiran5] = useState({name: "", file: ""})
    const [lampiran6, setLampiran6] = useState({name: "", file: ""})
    const [lampiran7, setLampiran7] = useState({name: "", file: ""})

    const [verifyCheck, setVerifyCheck] = useState(false)

    const [isLoading, setIsLoading] = useState(false)
    const [isSendingData, setIsSendingData] = useState(false)
    const [page, setPage] = useState(1)
    const [showDisclaimer, setShowDisclaimer] = useState(true)
    const [showValidationOnePopup, setShowValidationOnePopup] = useState(false)
    const [validationOne, setValidationOne] = useState([])
    const [showValidationTwoPopup, setShowValidationTwoPopup] = useState(false)
    const [validationTwo, setValidationTwo] = useState([])

    const [inputValidations, setInputValidations] = useState({
        movieSynopsis: "",
        movieStatement: "",
        movieVision: "",
        movieDirectorDetail: "",
        movieProdHouseDetail: ""
    })

    const pageOneValidations = () => {
        // return true;
        let temp = [];
        if(!name) temp.push(fieldIDsName[fieldIDs[32]])
        if(!email) temp.push(fieldIDsName[fieldIDs[33]])
        if(!idNumber) temp.push(fieldIDsName[fieldIDs[34]])
        if(!companyName) temp.push(fieldIDsName[fieldIDs[35]])
        if(!waNumber) temp.push(fieldIDsName[fieldIDs[36]])
        if(!movieTitle) temp.push(fieldIDsName[fieldIDs[0]])
        if(!movieDuration) temp.push(fieldIDsName[fieldIDs[1]])
        if(!movieGenre) temp.push(fieldIDsName[fieldIDs[2]])
        if(!movieWriter) temp.push(fieldIDsName[fieldIDs[3]])
        if(!movieDirector) temp.push(fieldIDsName[fieldIDs[4]])
        if(!movieProducer) temp.push(fieldIDsName[fieldIDs[5]])
        if(!movieCast) temp.push(fieldIDsName[fieldIDs[7]])
        if(!movieLogline) temp.push(fieldIDsName[fieldIDs[8]])
        if(!movieTarget) temp.push(fieldIDsName[fieldIDs[9]])
        if(!movieSynopsis) temp.push(fieldIDsName[fieldIDs[10]])
        if(!movieStatement) temp.push(fieldIDsName[fieldIDs[11]])
        if(!movieVision) temp.push(fieldIDsName[fieldIDs[12]])
        if(!movieOtherResource) temp.push(fieldIDsName[fieldIDs[13]])
        if(!movieCrewMilestone) temp.push(fieldIDsName[fieldIDs[14]])
        if(!movieDirectorExample) temp.push(fieldIDsName[fieldIDs[15]])
        if(!movieProducerExample) temp.push(fieldIDsName[fieldIDs[16]])
        if(!kategoriFilm) temp.push(fieldIDsName[fieldIDs[37]])
        if(!movieCrew) temp.push(fieldIDsName[fieldIDs[38]])

        return temp;
    }

    const pageTwoValidations = () => {
        let temp = [];
        if(!aktaPendirianFile.file) temp.push(fieldIDsName[fieldIDs[17]])
        // if(!aktaPerubahan.file) temp.push(fieldIDsName[fieldIDs[18]])
        if(!idNumberFile.file) temp.push(fieldIDsName[fieldIDs[19]])
        if(!nomorIndukFile.file) temp.push(fieldIDsName[fieldIDs[20]])
        if(!npwpFile.file) temp.push(fieldIDsName[fieldIDs[21]])
        if(!taxFile.file) temp.push(fieldIDsName[fieldIDs[22]])
        if(!cardNumberFile.file) temp.push(fieldIDsName[fieldIDs[23]])
        if(!profileAndPortfolioFile.file) temp.push(fieldIDsName[fieldIDs[24]])
        if(!skKemenkumhamFile.file) temp.push(fieldIDsName[fieldIDs[39]])

        if(!lampiran1.file) temp.push(fieldIDsName[fieldIDs[25]])
        if(!lampiran2.file) temp.push(fieldIDsName[fieldIDs[26]])
        if(!lampiran3.file) temp.push(fieldIDsName[fieldIDs[27]])
        if(!lampiran4.file) temp.push(fieldIDsName[fieldIDs[28]])
        if(!lampiran5.file) temp.push(fieldIDsName[fieldIDs[29]])
        if(!lampiran6.file) temp.push(fieldIDsName[fieldIDs[30]])
        if(!lampiran7.file) temp.push(fieldIDsName[fieldIDs[31]])

        return temp
    }

    const validations = () => {
        // for (let k in inputValidations) {
        //     if (inputValidations[k]) return false
        // }
        let validationsOne = pageOneValidations()
        setShowValidationOnePopup(validationsOne.length > 0)
        setValidationOne([...validationsOne])

        let validationsTwo = []
        setShowValidationTwoPopup(false)
        if(validationsOne.length === 0) {
            validationsTwo = pageTwoValidations()
            setValidationTwo([...validationsTwo])
            setShowValidationTwoPopup(validationsTwo.length > 0)
        }
        
        return (validationsOne.length === 0) && (validationsTwo.length === 0) && verifyCheck;
    }

    const submitData = () => {
        if(validations()) {
            setIsLoading(true)
            setIsSendingData(true)
            let data = {
                fullname: name,
                identity_id: idNumber,
                production_house_name: companyName,
                whatsapp: waNumber,
                email: email,
                kategori_film: kategoriFilm,
                proposal_film_title: movieTitle,
                proposal_film_duration: movieDuration,
                proposal_film_genre: movieGenre,
                proposal_film_author: movieWriter,
                proposal_film_director_name: movieDirector,
                proposal_film_producer_name: movieProducer,
                proposal_film_animator_name: movieAnimator,
                proposal_film_actors_name: movieCast,
                proposal_est_crews_number: movieCrew,
                proposal_target_audience: movieTarget,
                proposal_logline: movieLogline,
                proposal_synopsis: movieSynopsis,
                proposal_director_statement: movieStatement,
                proposal_producer_vision: movieVision,
                proposal_funding_plan: movieOtherResource,
                proposal_distribution_plan: movieCrewMilestone,
                proposal_director_portfolio_link: movieDirectorExample,
                proposal_producer_portfolio_link: movieProducerExample,
                dokumen_legalitas_akta_pendirian_fname: aktaPendirianFile.name,
                dokumen_legalitas_akta_pendirian_file: aktaPendirianFile.file,
                dokumen_legalitas_sk_kemenkumham_fname: skKemenkumhamFile.name,
                dokumen_legalitas_sk_kemenkumham_file: skKemenkumhamFile.file,
                dokumen_legalitas_akta_perubahan_fname: aktaPerubahan.name,
                dokumen_legalitas_akta_perubahan_file: aktaPerubahan.file,
                dokumen_legalitas_sk_akta_perubahan_fname: skKemenkumhamPerubahanFile.name,
                dokumen_legalitas_sk_akta_perubahan_file: skKemenkumhamPerubahanFile.file,
                dokumen_legalitas_ktp_penanggungjawab_fname: idNumberFile.name,
                dokumen_legalitas_ktp_penanggungjawab_file: idNumberFile.file,
                dokumen_legalitas_nib_fname: nomorIndukFile.name,
                dokumen_legalitas_nib_file: nomorIndukFile.file,
                dokumen_legalitas_npwp_fname: npwpFile.name,
                dokumen_legalitas_npwp_file: npwpFile.file,
                dokumen_legalitas_spt_fname: taxFile.name,
                dokumen_legalitas_spt_file: taxFile.file,
                dokumen_legalitas_rekening_fname: cardNumberFile.name,
                dokumen_legalitas_rekening_file: cardNumberFile.file,
                dokumen_legalitas_portfolio_badan_usaha_fname: nomorIndukFile.name,
                dokumen_legalitas_portfolio_badan_usaha_file: nomorIndukFile.file,
                berkas_lampiran_sprp_fname: lampiran1.name,
                berkas_lampiran_sprp_file: lampiran1.file,
                berkas_lampiran_sptjm_fname: lampiran2.name,
                berkas_lampiran_sptjm_file: lampiran2.file,
                berkas_lampiran_spfmdtp_fname: lampiran3.name,
                berkas_lampiran_spfmdtp_file: lampiran3.file,
                berkas_lampiran_spbp_fname: lampiran4.name,
                berkas_lampiran_spbp_file: lampiran4.file,
                berkas_lampiran_dokumen_pendukung_proposal_fname: lampiran5.name,
                berkas_lampiran_dokumen_pendukung_proposal_file: lampiran5.file,
                berkas_lampiran_dokumen_proposal_bantuan_fname: lampiran6.name,
                berkas_lampiran_dokumen_proposal_bantuan_file: lampiran6.file,
                berkas_lampiran_rincian_anggaran_fname: lampiran7.name,
                berkas_lampiran_rincian_anggaran_file: lampiran7.file
            }
            let formData = new FormData();
            for (let field in data) {
                formData.append(field, data[field]);
            }

            fetch('https://api-penfilm.kemenparekraf.go.id/v1/lisensi',  {
                    method: 'POST',
                    // mode: 'no-cors',
                    body: formData
                })
            .then(response =>  response.json())
            .then(result => {
                // console.log('Success:', result);
                // setIsLoading(false);
                if(result.field_code) {
                    setIsSendingData(false);
                    setIsLoading(false);
                    alert(result.message);
                } else {
                    setIsSendingData(false);
                    // alert('Sukses mendaftar!');
                    // setTimeout(() => {
                    //     setIsLoading(false);
                    //     window.location.href = "/"
                    // }, 3000);
                }
            })
            .catch(error => {
                // console.error('Error:', error);
                setIsSendingData(false);
                setIsLoading(false);
                alert(error);
            });
        } 
        // else {
        //     if(!verifyCheck) alert("Harap berikan tanda centang pada pernyataan.")
        //     else alert("Harap isi semua data.");
        // }
    }

    return <Template>
        <Loading 
            visibility={isLoading} 
            afterLoadingText="Sukses Mendaftar !" 
            isLoading={isSendingData}
            onButtonClick={() => {window.location.href = "/"}}
        />
        <div className="upload-form-wrapper upload-production-form-wrapper upload-pra-production-form-wrapper">
            {page === 1 ? <Fragment>
                <h2>Pendaftaran Program Bantuan Pemerintah Produksi Film Indonesia Untuk Rumah Produksi</h2>

                <ul className="upload-form-note">
                    <li>
                        Anggaran Bantuan Pemerintah Bagi Produksi Film Indonesia saat ini masih dalam tahap pengajuan ke Kementerian Keuangan, Rumah Produksi yang melakukan pendaftaran pada skema produksi dengan ini memahami dan bersedia untuk menerima dan tidak akan menuntut Kementerian Pariwisata dan Ekonomi Kreatif/Badan Pariwisata dan Ekonomi Kreatif apabila pengajuan anggaran dana bantuan pemerintah ini tidak disetujui atau tidak tersedia
                    </li>
                    <li>
                        Seluruh dokumen asli legalitas, identitas dan stempel badan usaha rumah produksi serta seluruh dokumen persyaratan pendukung asli tandatangan wajib dibawa saat Pelaksanaan Pengikatan Komitmen dan Tandatangan Perjanjian Kerjasama jika rumah produksi terpilih sebagai Penerima Bantuan (rencana lokasi di Jakarta)    
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
                            <label htmlFor={fieldIDs[32]}>NAMA LENGKAP <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[32]}
                                id={fieldIDs[32]}
                                defaultValue={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>

                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[33]}>NOMOR IDENTITAS/NIK/PASPOR <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[33]}
                                id={fieldIDs[33]}
                                defaultValue={idNumber}
                                onChange={(e) => {
                                    setIDNumber(e.target.value)
                                }}
                                
                            ></input>
                        </div>

                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[34]}>NAMA RUMAH PRODUKSI <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[34]}
                                defaultValue={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            ></input>
                        </div>

                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[35]}>ALAMAT EMAIL <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[35]}
                                id={fieldIDs[35]}
                                defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>

                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[36]}>NOMOR WHATSAPP <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                type="text"
                                name={fieldIDs[36]}
                                id={fieldIDs[36]}
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
                            <label htmlFor={fieldIDs[37]}>KATEGORI FILM (Pilih Salah 1) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <RadioButton
                                onChange={(val) => setKategoriFilm(val)}
                                radioButtons={Object.keys(KATEGORI_FILM).map(function(k){return KATEGORI_FILM[k]})}
                                unselectedColor="var(--main-light-green)"
                                selectedColor="var(--main-light-green)"
                                selected={kategoriFilm}
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
                            <label htmlFor={fieldIDs[0]}>JUDUL FILM <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[0]}
                                id={fieldIDs[0]}
                                defaultValue={movieTitle}
                                onChange={(e) => setMovieTitle(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[1]}>DURASI FILM <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[1]}
                                id={fieldIDs[1]}
                                defaultValue={movieDuration}
                                onChange={(e) => setMovieDuration(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[2]}>GENRE <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[2]}
                                id={fieldIDs[2]}
                                defaultValue={movieGenre}
                                onChange={(e) => setMovieGenre(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[3]}>NAMA PENULIS SKENARIO <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[3]}
                                id={fieldIDs[3]}
                                defaultValue={movieWriter}
                                onChange={(e) => setMovieWriter(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[4]}>NAMA SUTRADARA <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[4]}
                                id={fieldIDs[4]}
                                defaultValue={movieDirector}
                                onChange={(e) => setMovieDirector(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[5]}>NAMA PRODUSER <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[5]}
                                id={fieldIDs[5]}
                                defaultValue={movieProducer}
                                onChange={(e) => setMovieProducer(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[6]}>NAMA ANIMATOR (JIKA ADA)</label>
                            <input 
                                name={fieldIDs[6]}
                                id={fieldIDs[6]}
                                defaultValue={movieAnimator}
                                onChange={(e) => setMovieAnimator(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[7]}>DAFTAR NAMA PEMAIN (RENCANA) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[7]}
                                id={fieldIDs[7]}
                                value={movieCast}
                                onChange={(e) => setMovieCast(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[8]}>LOGLINE (3 KALIMAT) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <input 
                                name={fieldIDs[8]}
                                id={fieldIDs[8]}
                                defaultValue={movieLogline}
                                onChange={(e) => setMovieLogline(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[9]}>ULASAN TARGET PENONTON (MAKSIMAL 400 KATA) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[9]}
                                id={fieldIDs[9]}
                                value={movieTarget}
                                onChange={(e) => setMovieTarget(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[10]}>SINOPSIS (200-400 KATA) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[10]}
                                id={fieldIDs[10]}
                                value={movieSynopsis}
                                onChange={(e, validation) => {
                                    setMovieSynopsis(e.target.value)
                                    let temp = {...inputValidations}
                                    temp.movieSynopsis = validation
                                    setInputValidations(temp)
                                }}
                                // minLength="200"
                                // maxLength="400"
                                valida
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[11]}>DIRECTOR'S STATEMENT (200-400 KATA) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[11]}
                                id={fieldIDs[11]}
                                value={movieStatement}
                                onChange={(e, validation) => {
                                    setMovieStatement(e.target.value)
                                    let temp = {...inputValidations}
                                    temp.movieStatement = validation
                                    setInputValidations(temp)
                                }}
                                // minLength="200"
                                // maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[12]}>VISI PRODUSER (200-400 KATA) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[12]}
                                id={fieldIDs[12]}
                                value={movieVision}
                                onChange={(e, validation) => {
                                    setMovieVision(e.target.value)
                                    let temp = {...inputValidations}
                                    temp.movieVision = validation
                                    setInputValidations(temp)
                                }}
                                // minLength="200"
                                // maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[38]}>ESTIMASI TOTAL TENAGA KERJA YANG TERLIBAT (PEMERAN DAN KRU) <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[38]}
                                id={fieldIDs[38]}
                                value={movieCrew}
                                onChange={(e, validation) => {
                                    setMovieCrew(e.target.value)
                                }}
                                // minLength="200"
                                // maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[13]}>RENCANA PENDANAAN PRODUKSI FILM <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[13]}
                                id={fieldIDs[13]}
                                value={movieOtherResource}
                                onChange={(e) => setMovieOtherResource(e.target.value)}
                                // maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[14]}>RENCANA DISTRIBUSI ATAU PENAYANGAN FILM <span style={{color:"var(--main-red)"}}>*</span></label>
                            <TextAreaWithCounter
                                name={fieldIDs[14]}
                                id={fieldIDs[14]}
                                value={movieCrewMilestone}
                                onChange={(e) => setMovieCrewMilestone(e.target.value)}
                                // maxLength="400"
                            />
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[15]}>TAUTAN DARING DARI CONTOH HASIL KARYA (PORTOFOLIO) SUTRADARA <span style={{color:"var(--main-red)"}}>*</span></label>
                            <p className="upload-file-subtitle">(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)</p>
                            <input 
                                name={fieldIDs[15]}
                                id={fieldIDs[15]}
                                defaultValue={movieDirectorExample}
                                onChange={(e) => setMovieDirectorExample(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="upload-form-content-wrapper">
                        <div className="upload-form-field">
                            <label htmlFor={fieldIDs[16]}>TAUTAN DARING DARI CONTOH HASIL KARYA (PORTOFOLIO) PRODUSER <span style={{color:"var(--main-red)"}}>*</span></label>
                            <p className="upload-file-subtitle">(Link Google Drive, Youtube, dsb. Link harus diawali dengan https:// atau http://)</p>
                            <input 
                                name={fieldIDs[16]}
                                defaultValue={movieProducerExample}
                                onChange={(e) => setMovieProducerExample(e.target.value)}
                            ></input>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => {
                        setPage(2)
                        $("html, body").animate({ 
                            scrollTop: 0 
                        }, "fast");
                    }}
                    className="submit-button"
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
                            title={<Fragment>UNGGAH AKTA PENDIRIAN <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[17]}
                            type={acceptedFileFormatString.pdf}
                            fileName={aktaPendirianFile.name}
                            setData = {(data) => setAktaPendirianFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SK KEMENKUMHAM AKTA PENDIRIAN <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[39]}
                            type={acceptedFileFormatString.pdf}
                            fileName={skKemenkumhamFile.name}
                            setData = {(data) => setSKKemenkumhamFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH AKTA PERUBAHAN (TERKAIT SUSUNAN KEPENGURUSAN YANG BERLAKU
                                APABILA ADA PERUBAHAN DARI AKTA PENDIRIAN) </Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[18]}
                            type={acceptedFileFormatString.pdf}
                            fileName={aktaPerubahan.name}
                            setData = {(data) => setAktaPerubahanFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SK KEMENKUMHAM (TERKAIT SUSUNAN KEPENGURUSAN YANG BERLAKU
                                APABILA ADA PERUBAHAN DARI AKTA PENDIRIAN) </Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[40]}
                            type={acceptedFileFormatString.pdf}
                            fileName={skKemenkumhamPerubahanFile.name}
                            setData = {(data) => setSKKemenkumhamPerubahanFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SALINAN KTP PENANGGUNG JAWAB / DIREKTUR PH <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, JPG, JPEG, atau PNG, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[19]}
                            type={acceptedFileFormatString.all}
                            fileName={idNumberFile.name}
                            setData = {(data) => setIDNumberFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH NOMOR INDUK BERUSAHA (NIB) DENGAN NOMOR KBLI 74141
                                (AKTIVITAS DESAIN KHUSUS YAKNI FILM, VIDEO, PROGRAM TV, ANIMASI DAN KOMIK) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[20]}
                            type={acceptedFileFormatString.pdf}
                            fileName={nomorIndukFile.name}
                            setData = {(data) => setNomorIndukFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH DOKUMEN NOMOR POKOK WAJIB PAJAK ATAS NAMA BADAN USAHA <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[21]}
                            type={acceptedFileFormatString.pdf}
                            fileName={npwpFile.name}
                            setData = {(data) => setNPWPFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SURAT PEMBERITAHUAN TAHUNAN (SPT) PAJAK 1 TAHUN TERAKHIR <span style={{color: "var(--main-red)"}}>*</span>
                                <br /><span style={{textTransform: "none"}}>(Jika keterangan kurang bayar harap melampirkan bukti setor atas kekurangan pembayaran tersebut)</span>
                            </Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[22]}
                            type={acceptedFileFormatString.pdf}
                            fileName={taxFile.name}
                            setData = {(data) => setTaxFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH DOKUMEN REKENING ATAS NAMA BADAN USAHA <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[23]}
                            type={acceptedFileFormatString.pdf}
                            fileName={cardNumberFile.name}
                            setData = {(data) => setCardNumberFile({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGAH PROFIL DAN PORTOFOLIO BADAN USAHA RUMAH PRODUKSI <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[24]}
                            type={acceptedFileFormatString.pdf}
                            fileName={profileAndPortfolioFile.name}
                            setData = {(data) => setProfileAndPortfolioFile({...data})}
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
                            title={<Fragment>UNGGAH SURAT PERNYATAAN RUMAH PRODUKSI (LAMPIRAN 1) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[25]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran1.name}
                            setData = {(data) => setLampiran1({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (LAMPIRAN 2) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[26]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran2.name}
                            setData = {(data) => setLampiran2({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>UNGGAH SURAT PERNYATAAN TIDAK MENERIMA BANTUAN PEMERINTAH PEN-FILM 
                                SKEMA LAINNYA DAN/ATAU BANTUAN K/L LAINNYA (LAMPIRAN 3) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[27]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran3.name}
                            setData = {(data) => setLampiran3({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>Unggah Surat Permohonan Bantuan Pemerintah Pra-Produksi
                                Film Indonesia (Lampiran 4) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[28]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran4.name}
                            setData = {(data) => setLampiran4({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>Unggah Ringkasan Profil Pengusul Proposal Permohonan Bantuan 
                                Pemerintah Pra-Produksi Film Indonesia (Lampiran 5)<span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[29]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran5.name}
                            setData = {(data) => setLampiran5({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>Unggah Dokumen Pendukung Proposal Bantuan Pemerintah Pra-Produksi
                                Film Indonesia (Lampiran 6) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[30]}
                            type={acceptedFileFormatString.pdf}
                            fileName={lampiran6.name}
                            setData = {(data) => setLampiran6({...data})}
                        />
                    </div>

                    <div className="upload-form-content-wrapper">
                        <UploadFileField
                            title={<Fragment>Unggah Rincian Anggaran Biaya (RAB) Bantuan Pemerintah Pra-Produksi
                                Film Indonesia (Lampiran 7) <span style={{color: "var(--main-red)"}}>*</span></Fragment>}
                            subtitle="(File PDF, max 5MB, Lengkapi dengan Nama Pendaftar)"
                            id={fieldIDs[31]}
                            type={acceptedFileFormatString.pdf}
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
                        onClick={() => {if(verifyCheck) submitData()}}
                        className="submit-button"
                        style={verifyCheck ? {} : {
                            backgroundColor: "#e5e5e5",
                            color: "white",
                            cursor: "not-allowed"
                        }}
                    >
                        Submit
                    </div>

                    <div
                        onClick={() => {
                            setPage(1)
                            // document.body.scrollTop = 0;
                            // document.documentElement.scrollTop = 0;
                            $("html, body").animate({ 
                                scrollTop: 0 
                            }, "fast");
                        }}
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
            className = "modal-disclaimer-production modal-disclaimer-pra-production"
            backdrop="static"
        >
            <h4>
                Pastikan Anda telah menyiapkan dokumen-dokumen
                persyaratan khusus seperti :
            </h4>
            <div className="modal-disclaimer-content">
                <div className="modal-disclaimer-content-title">
                    A. Dokumen Legalitas :
                </div>
                <ul>
                    <li>Akta Pendirian dan SK Kemenkumham</li>
                    <li>Akta Perubahan dan SK Kemenkumham (terkait susunan kepengurusan yang berlaku apabila ada perubahan dari akta pendirian)</li>
                    <li>Salinan KTP Penanggung jawab / Direktur PH</li>
                    <li>Nomor Induk Berusaha (NIB)</li>
                    <li>Dokumen Nomor Pokok Wajib Pajak atas nama Badan Usaha</li>
                    <li>Surat Pemberitahuan Tahunan (SPT) Pajak 1 tahun terakhir</li>
                    <li>Dokumen Rekening atas nama Badan Usaha</li>
                    <li>Profil dan Potofolio Badan Usaha Rumah Produksi</li>
                </ul>

                <div className="modal-disclaimer-content-title">
                    B. Berkas Lampiran :
                </div>
                <ul>
                    <li>Surat Pernyataan Rumah Produksi (Lampiran 1)</li>
                    <li>Surat Pernyataan Tanggung Jawab Mutlak (Lampiran 2)</li> 
                    <li>Surat Pernyataan Tidak Menerima Bantuan Pemerintah 
                        PEN-Film Skema Lainnya dan/atau Bantuan K/L Lainnya 
                        (Lampiran 3)</li>
                    <li>Surat Permohonan Bantuan Pemerintah Pra-Produksi 
	                    Film Indonesia (Lampiran 4)</li>
                    <li>Ringkasan Profil Pengusul Proposal Permohonan 
	                    Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 5)</li>
                    <li>Proposal Bantuan Pemerintah Pra-Produksi Film Indonesia (Lampiran 6)</li>
                    <li>Rincian Anggaran (RAB) Bantuan Pemerintah 
                        Pra-Produksi Film Indonesia (Lampiran 7)</li>
                </ul>
            </div>
        </PopupOneButton>

        <PopupOneButton
            visibility = {showValidationOnePopup}
            title = "PERHATIAN!"
            buttonText = "OK"
            onClickButton = {() => setShowValidationOnePopup(false)}
            className = "modal-disclaimer-production modal-disclaimer-pra-production"
            backdrop="static"
        >
            <h4>Harap isi data wajib di halaman pertama berikut ini:</h4>
            <ul>
                {
                    validationOne.map((item, idx) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </PopupOneButton>

        <PopupOneButton
            visibility = {showValidationTwoPopup}
            title = "PERHATIAN!"
            buttonText = "OK"
            onClickButton = {() => setShowValidationTwoPopup(false)}
            className = "modal-disclaimer-production modal-disclaimer-pra-production"
            backdrop="static"
        >
            <h4>Harap isi data wajib di halaman kedua berikut ini:</h4>
            <ul>
                {
                    validationTwo.map((item, idx) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </PopupOneButton>
    </Template>
}

export default UploadPraProductionForm;
