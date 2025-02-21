import React from "react";
import "../styles/IndustryExpertise.css";
// import { FaShoppingCart, FaCocktail, FaPlayCircle, FaLaptop, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const expertiseData = [
  {
    icon:  <svg className="custom-icon" width="40" height="40" viewBox="0 0 40 40">
    <path fill="currentColor" d="M38.7068151,5.32784628 C38.1793527,4.6751999 37.3953784,4.3009535 36.556108,4.3009535 L6.58460145,4.3009535 L6.31695346,2.38279675 C6.12741106,1.02451198 4.95022069,0.000153599997 3.57864952,0.000153599997 L1.22879997,0.000153599997 C0.550195188,0.000153599997 -4.36557447e-15,0.550348788 -4.36557447e-15,1.22895357 C-4.36557447e-15,1.90755836 0.550195188,2.45775355 1.22879997,2.45775355 L3.57864952,2.45775355 C3.73102072,2.45775355 3.86188791,2.57157114 3.88285431,2.72248314 L7.19976944,26.4943098 C7.38931183,27.8526714 8.56650221,28.876953 9.93807338,28.876953 L11.2704765,28.876953 C11.1340798,29.2615673 11.059123,29.6749817 11.059123,30.1057529 C11.059123,32.1384185 12.7128573,33.7921528 14.7455229,33.7921528 C16.7781884,33.7921528 18.4319228,32.1384185 18.4319228,30.1057529 C18.4319228,29.6749817 18.356966,29.2615673 18.2205692,28.876953 L24.7872762,28.876953 C24.6508794,29.2615673 24.5759227,29.6749817 24.5759227,30.1057529 C24.5759227,32.1384185 26.229657,33.7921528 28.2623226,33.7921528 C30.2949881,33.7921528 31.9487225,32.1384185 31.9487225,30.1057529 C31.9487225,29.6749817 31.8737657,29.2615673 31.7373689,28.876953 L34.4063992,28.876953 C35.085004,28.876953 35.6351992,28.3267578 35.6351992,27.648153 C35.6351992,26.9695482 35.085004,26.419353 34.4063992,26.419353 L9.93815018,26.419353 C9.78577898,26.419353 9.65491178,26.3055354 9.63394538,26.1546234 L9.32797419,23.9617531 L33.5278073,23.9617531 C34.8225016,23.9617531 35.9595256,23.0428411 36.2315512,21.7761787 L39.2596983,7.64520943 C39.4356471,6.82490865 39.2341239,5.98026227 38.7068151,5.32784628 L38.7068151,5.32784628 Z M15.9743996,30.1057529 C15.9743996,30.7832825 15.4231293,31.3345529 14.7455997,31.3345529 C14.0680701,31.3345529 13.5167997,30.7832825 13.5167997,30.1057529 C13.5167997,29.4282233 14.0680701,28.876953 14.7455997,28.876953 C15.4231293,28.876953 15.9743996,29.4281465 15.9743996,30.1057529 Z M29.4911993,30.1057529 C29.4911993,30.7832825 28.939929,31.3345529 28.2623994,31.3345529 C27.5848698,31.3345529 27.0335994,30.7832825 27.0335994,30.1057529 C27.0335994,29.4282233 27.5848698,28.876953 28.2623994,28.876953 C28.939929,28.876953 29.4911993,29.4281465 29.4911993,30.1057529 Z M36.8567032,7.13003504 L33.8286328,21.2606971 C33.7983736,21.4017019 33.6718072,21.5040763 33.5278073,21.5040763 L8.9849854,21.5040763 L6.92751345,6.75847665 L36.5560312,6.75847665 C36.6776056,6.75847665 36.7533304,6.82053105 36.7954168,6.87260145 C36.8374264,6.92459505 36.882124,7.01145584 36.8567032,7.13003504 L36.8567032,7.13003504 Z" />
  </svg>,
    title: "E-commerce",
    description:
      "Ecommerce website translation is booming. With the demand for online shopping growing year after year, thousands of businesses are going digital. Once you’re selling online, localization is the quickest way to increase your customer share and reach.",
  },
  {
    icon:  <svg className="custom-icon" width="40" height="40" viewBox="0 0 40 40">
    <path fill="currentColor" d="M38.8117831,0.0107707311 L32.9402517,0.0107707311 C32.4928761,0.0107707311 32.084681,0.265678033 31.8883103,0.667707277 L26.3730716,11.9587895 L11.0104969,11.9587895 L8.54829217,7.7876288 L13.4049553,4.98364848 C13.8099504,4.74981435 14.0369943,4.29728755 13.9822821,3.83281928 C13.9275699,3.36827297 13.6016382,2.9809169 13.153326,2.84760959 L3.77771685,0.0593951184 C3.46942418,-0.0323121932 3.13717054,0.00686829227 2.85861446,0.16764877 C2.58013643,0.328429249 2.38001937,0.596682891 2.30532669,0.909424336 L0.0320780469,10.4230238 C-0.0766438979,10.8779701 0.0958438967,11.3538335 0.470790216,11.6334822 C0.677385325,11.7876286 0.923629213,11.8658334 1.17088774,11.8658334 C1.37225358,11.8658334 1.57432186,11.813931 1.75617551,11.7089554 L6.52042888,8.95828239 L8.2915117,11.9586334 L5.07855579,11.9586334 C4.65826314,11.9586334 4.27028267,12.1839602 4.06189244,12.5489163 C2.4896779,15.3027113 1.65861454,18.4429257 1.65861454,21.6302036 C1.65861454,26.5294033 3.56643881,31.1352957 7.03071178,34.5995687 C10.4949067,38.0638416 15.1008771,39.9716659 19.9999988,39.9716659 C24.8991205,39.9716659 29.5050909,38.0638416 32.9693639,34.5995687 C36.4336369,31.1352957 38.3414611,26.5294033 38.3414611,21.6302036 C38.3414611,18.4429257 37.5104758,15.3027113 35.9381832,12.5489163 C35.729793,12.1839602 35.3417345,11.9586334 34.9215199,11.9586334 L28.9789641,11.9586334 L33.6713346,2.35215596 L38.8117831,2.35215596 C39.4583391,2.35215596 39.9825147,1.82798038 39.9825147,1.18142432 C39.9825147,0.534868261 39.4583391,0.0107707311 38.8117831,0.0107707311 Z M4.29525828,2.65607789 L9.87777502,4.3162534 L2.94181446,8.32077999 L4.29525828,2.65607789 Z M19.9999988,37.6302807 C11.1775993,37.6302807 4.00007781,30.4527592 4.00007781,21.6302816 C4.00007781,20.7114914 4.08046805,19.7976183 4.23578511,18.8985745 L25.6394131,18.8985745 L27.6446423,22.4412084 C27.8529544,22.8092084 28.24273,23.0352377 28.6632568,23.0352377 C28.6777739,23.0352377 28.692369,23.0350035 28.7069641,23.0344572 C29.1441153,23.018223 29.535686,22.7596474 29.7223007,22.3639401 L31.3568762,18.8985745 L35.7642125,18.8985745 C35.9196076,19.7975403 35.9999198,20.7114914 35.9999198,21.6302816 C35.9999198,30.4527592 28.8223983,37.6302807 19.9999988,37.6302807 Z M35.1755686,16.5571112 L30.6147104,16.5571112 C30.1615592,16.5571112 29.7491494,16.8185746 29.5559007,17.2284087 L28.5688959,19.3208184 L27.3407984,17.1512185 C27.1330325,16.7841551 26.7438033,16.5571893 26.3219497,16.5571893 L4.82442898,16.5571893 C5.08277043,15.7824771 5.39964846,15.0273552 5.77467283,14.3001748 L34.2253248,14.3001748 C34.6004272,15.0273552 34.9172272,15.7824771 35.1755686,16.5571112 Z" />
  </svg>,
    title: "Hospitality & Leisure",
    description:
      "The hospitality industry requires localized content to connect with global customers. Whether in travel, accommodation, or tourism, our translators and content creators are ready to support you with precise and culturally relevant messaging.",
  },
  {
    icon:  <svg className="custom-icon" width="40px" height="30px" viewBox="0 0 40 30" >
    <path fill="currentColor" d="M25.7132983,13.1321992 L17.0261988,8.3789994 C16.5266989,8.10569948 15.9362989,8.11589944 15.4466989,8.40599944 C14.956799,8.69639942 14.664599,9.20939934 14.664599,9.77879934 L14.664599,19.2035987 C14.664599,19.7702987 14.954999,20.2823986 15.441599,20.5730986 C15.695699,20.7248986 15.9773989,20.8010986 16.2596989,20.8010986 C16.5182989,20.8010986 16.7774989,20.7371986 17.0159989,20.6087986 L25.7033983,15.9374989 C26.2190982,15.6599989 26.5409983,15.123899 26.5434086,14.537999 C26.5454982,13.9520991 26.2274982,13.4135991 25.7132983,13.1321992 L25.7132983,13.1321992 Z M16.9688989,18.0179988 L16.9688989,10.9739993 L23.4614984,14.5265991 L16.9688989,18.0179988 Z" />
    <path fill="currentColor" d="M39.0323974,7.02929955 L39.0305974,7.01129955 C38.9972974,6.69479955 38.6657974,3.87959974 37.2971975,2.44769986 C35.7152976,0.76349993 33.9218977,0.558899982 33.0593978,0.460799969 C32.9879978,0.45269995 32.9225978,0.44519997 32.8640978,0.437399932 L32.7953978,0.430199933 C27.5969982,0.0522000349 19.7462987,0.00059999996 19.6676987,0.00029999998 L19.6607987,0 L19.6538987,0.00029999998 C19.5752987,0.00059999996 11.7245992,0.0522000349 6.4793996,0.430199933 L6.41009959,0.437399932 C6.35429955,0.444899989 6.29279958,0.451799931 6.22589956,0.459599969 C5.37329966,0.557999963 3.59909974,0.762899968 2.01269985,2.50799983 C0.709199952,3.9245997 0.332399978,6.67949953 0.2937,6.98909951 L0.289199981,7.02929955 C0.277499962,7.16099956 -4.36557428e-15,10.2962993 -4.36557428e-15,13.4438991 L-4.36557428e-15,16.3862989 C-4.36557428e-15,19.5338987 0.277499962,22.6691985 0.289199981,22.8011985 L0.2913,22.8209985 C0.32459994,23.1323984 0.655799918,25.8959983 2.01809988,27.3284982 C3.50549975,28.956298 5.3861996,29.1716981 6.39779961,29.287498 C6.55769958,29.3057981 6.69539959,29.321398 6.78929956,29.337898 L6.88019958,29.3504981 C9.88169936,29.636098 19.2923987,29.776798 19.6913987,29.782498 L19.7033987,29.782798 L19.7153987,29.782498 C19.7939987,29.782198 27.6443981,29.730598 32.8427978,29.352598 L32.9114978,29.345398 C32.9771978,29.336698 33.0509977,29.3288981 33.1319978,29.3204981 C33.9797977,29.2304981 35.7443976,29.0435981 37.3088975,27.3221981 C38.6123974,25.9052983 38.9894974,23.1503984 39.0278974,22.8410984 L39.0323974,22.8008985 C39.0440974,22.6688985 39.3218973,19.5338987 39.3218973,16.3862989 L39.3218973,13.4438991 C39.3218973,10.2962993 39.0440974,7.16129954 39.0323974,7.02929955 L39.0323974,7.02929955 Z M37.0172975,16.3862989 C37.0172975,19.2995987 36.7628976,22.2998985 36.7388976,22.5752985 C36.6410975,23.3339984 36.2435976,25.0769984 35.6084976,25.7672983 C34.6292977,26.8445982 33.6233978,26.9513982 32.8889978,27.0290982 C32.8001978,27.0383982 32.7179978,27.0473982 32.6435978,27.0566982 C27.6155981,27.4202981 20.0612987,27.4760982 19.7132987,27.4781981 C19.3229987,27.4724982 10.0499993,27.3305982 7.13999952,27.0602982 C6.99089955,27.0359982 6.82979958,27.0173981 6.65999955,26.9981982 C5.79869959,26.8994982 4.61969971,26.7644982 3.71309973,25.7672983 L3.69179971,25.7444983 C3.06779976,25.0943983 2.68169984,23.4644984 2.58359983,22.5842985 C2.56529985,22.3760985 2.30429983,19.3403987 2.30429983,16.3862989 L2.30429983,13.4438991 C2.30429983,10.5338993 2.55809985,7.53689951 2.58269981,7.25579948 C2.69939986,6.36209959 3.10439979,4.72469966 3.71309973,4.06289975 C4.72229966,2.95289982 5.78639961,2.82989979 6.49019953,2.74859978 C6.55739952,2.74079982 6.62009958,2.73359982 6.67799955,2.72609984 C11.7791992,2.36069982 19.3877987,2.30639985 19.6607987,2.30429983 C19.9337987,2.30609986 27.5396982,2.36069982 32.5955978,2.72609984 C32.6576978,2.7338998 32.7254978,2.74169984 32.7983978,2.75009983 C33.5222977,2.83259977 34.6163977,2.95739976 35.6204976,4.02839973 L35.6297976,4.03829971 C36.2537976,4.68839969 36.6398975,6.34679957 36.7379975,7.2446995 C36.7553976,7.4411995 37.0172975,10.4834993 37.0172975,13.4438991 L37.0172975,16.3862989 Z" />
  </svg>,
    title: "Media & Entertainment",
    description:
      "In the digital era of instant news and streaming, media and entertainment brands must communicate their message effectively. We ensure your updates, marketing, and content reach audiences in their language with clarity and impact.",
  },
  {
    icon:  <svg className="custom-icon" width="49px" height="40px" viewBox="0 0 49 40">
    <path fill="currentColor" d="M47.376,31.2 L45.072,31.2 L45.072,11.088 C45.072,10.128 44.688,9.216 44.016,8.544 C43.392,7.872 42.48,7.488 41.472,7.488 L35.376,7.488 L35.376,2.832 C35.376,2.064 35.088,1.392 34.56,0.864 C34.08,0.384 33.36,0.048 32.592,0.048 L15.744,0.048 C14.976,0.048 14.304,0.336 13.776,0.864 C13.296,1.344 12.96,2.064 12.96,2.832 L12.96,7.536 L6.912,7.536 C5.952,7.536 5.04,7.92 4.368,8.592 C3.696,9.216 3.312,10.128 3.312,11.136 L3.312,31.248 L1.008,31.248 C0.432,31.248 0,31.68 0,32.208 C0,34.128 0.816,35.904 2.064,37.152 C3.36,38.448 5.088,39.216 7.008,39.216 L41.376,39.216 C43.296,39.216 45.072,38.4 46.32,37.152 C47.616,35.856 48.384,34.128 48.384,32.208 C48.384,31.632 47.904,31.2 47.376,31.2 Z M35.424,9.504 L41.472,9.504 C41.904,9.504 42.336,9.696 42.624,9.984 C42.912,10.272 43.104,10.704 43.104,11.136 L43.104,31.248 L41.664,31.248 L41.664,14.16 C41.664,13.248 41.28,12.432 40.704,11.856 C40.128,11.28 39.312,10.896 38.4,10.896 L35.424,10.896 L35.424,9.504 Z M14.928,11.856 L14.928,8.496 L14.976,8.496 L14.976,2.832 C14.976,2.592 15.072,2.4 15.216,2.256 C15.36,2.112 15.552,2.016 15.792,2.016 L32.64,2.016 C32.88,2.016 33.072,2.112 33.216,2.256 C33.36,2.4 33.456,2.592 33.456,2.832 L33.456,8.448 L33.456,11.808 L33.456,13.248 C33.456,13.488 33.36,13.68 33.216,13.824 C33.072,13.968 32.88,14.064 32.64,14.064 L31.008,14.064 C30.432,14.064 30,14.544 30,15.072 L30,16.32 L28.08,14.4 C27.888,14.208 27.6,14.112 27.36,14.112 L15.744,14.112 C15.504,14.112 15.312,14.016 15.168,13.872 C15.024,13.728 14.928,13.536 14.928,13.296 L14.928,11.856 Z M13.008,12.864 L13.008,13.296 C13.008,14.064 13.296,14.736 13.824,15.264 C14.304,15.744 15.024,16.08 15.792,16.08 L26.928,16.08 L29.28,18.432 C29.424,18.528 29.568,18.624 29.712,18.72 C29.76,18.72 29.76,18.768 29.808,18.768 C30,18.864 30.24,18.912 30.432,18.912 C30.864,18.912 31.248,18.72 31.536,18.432 C31.824,18.144 32.016,17.76 32.016,17.328 L32.016,16.08 L32.64,16.08 C33.408,16.08 34.08,15.792 34.608,15.264 C35.088,14.784 35.424,14.064 35.424,13.296 L35.424,12.864 L38.4,12.864 C38.784,12.864 39.072,13.008 39.312,13.248 C39.552,13.488 39.696,13.824 39.696,14.16 L39.696,31.248 L8.736,31.248 L8.736,14.16 C8.736,13.776 8.88,13.488 9.12,13.248 C9.36,13.008 9.696,12.864 10.032,12.864 L13.008,12.864 Z M5.28,11.136 C5.28,10.704 5.472,10.272 5.76,9.984 C6.048,9.696 6.48,9.504 6.912,9.504 L12.96,9.504 L12.96,10.896 L9.984,10.896 C9.072,10.896 8.256,11.28 7.68,11.856 C7.104,12.432 6.72,13.248 6.72,14.16 L6.72,31.248 L5.28,31.248 L5.28,11.136 Z M45.024,35.76 C44.112,36.672 42.864,37.248 41.472,37.248 L7.056,37.248 C5.664,37.248 4.416,36.672 3.504,35.76 C2.784,35.088 2.304,34.176 2.112,33.216 L4.32,33.216 L7.728,33.216 L40.704,33.216 L44.112,33.216 L46.32,33.216 C46.08,34.224 45.6,35.088 45.024,35.76 Z" />
    <path fill="currentColor" d="M27.072,34.272 L21.264,34.272 C20.736,34.272 20.304,34.704 20.304,35.232 C20.304,35.76 20.736,36.192 21.264,36.192 L27.072,36.192 C27.6,36.192 28.032,35.76 28.032,35.232 C28.032,34.704 27.6,34.272 27.072,34.272 Z" />

  </svg>,
    title: "Digital Technology",
    description:
      "With half the global population using smartphones, user experience is crucial. Our expertise ensures your content is optimized for the tech-savvy Arabic-speaking market, providing seamless communication across all platforms.",
  },
  {
    icon:  <svg className="custom-icon" width="39px" height="35px" viewBox="0 0 39 35">
    <path fill="currentColor" d="M37.8487154,4.56869707 C37.846336,4.56869707 37.8439566,4.56839967 37.8415773,4.56839967 L27.486538,4.56839967 L27.486538,3.42629975 C27.486538,1.53707614 25.9494619,0 24.0602383,0 L14.9234389,0 C13.0342153,0 11.4971392,1.53707614 11.4971392,3.42629975 L11.4971392,4.56839967 L1.14209992,4.56839967 C0.506212033,4.56839967 0,5.08948276 0,5.71049959 L0,30.8366978 C0,32.7259214 1.53707614,34.2629975 3.42629975,34.2629975 L35.5573774,34.2629975 C37.4466011,34.2629975 38.9836772,32.7259214 38.9836772,30.8366978 L38.9836772,5.73459074 C38.9836772,5.73310365 38.9836772,5.73161656 38.9836772,5.73012939 C38.9399562,4.98003152 38.4786549,4.57286102 37.8487154,4.56869707 Z M13.781339,3.42629975 C13.781339,2.79665771 14.2937969,2.28419984 14.9234389,2.28419984 L24.0602383,2.28419984 C24.6898803,2.28419984 25.2023382,2.79665771 25.2023382,3.42629975 L25.2023382,4.56839967 L13.781339,4.56839967 L13.781339,3.42629975 Z M36.2569136,6.85259951 L32.7101581,17.4925689 C32.5546064,17.9598186 32.1191808,18.2735987 31.6269476,18.2735987 L25.2023382,18.2735987 L25.2023382,17.1314988 C25.2023382,16.500667 24.69107,15.9893988 24.0602383,15.9893988 L14.9234389,15.9893988 C14.2926072,15.9893988 13.781339,16.500667 13.781339,17.1314988 L13.781339,18.2735987 L7.35672957,18.2735987 C6.86449638,18.2735987 6.42907079,17.9598186 6.27351914,17.4925689 L2.72676355,6.85259951 L36.2569136,6.85259951 Z M22.9181383,18.2735987 L22.9181383,20.5577985 L16.0655388,20.5577985 L16.0655388,18.2735987 L22.9181383,18.2735987 Z M36.6994774,30.8366978 C36.6994774,31.4663398 36.1870195,31.9787977 35.5573774,31.9787977 L3.42629975,31.9787977 C2.79665771,31.9787977 2.28419984,31.4663398 2.28419984,30.8366978 L2.28419984,12.7483929 L4.10650355,18.2150066 C4.57345582,19.6164584 5.8797326,20.5577985 7.35672957,20.5577985 L13.781339,20.5577985 L13.781339,21.6998984 C13.781339,22.3307302 14.2926072,22.8419984 14.9234389,22.8419984 L24.0602383,22.8419984 C24.69107,22.8419984 25.2023382,22.3307302 25.2023382,21.6998984 L25.2023382,20.5577985 L31.6269476,20.5577985 C33.1039446,20.5577985 34.4102214,19.6164584 34.8771736,18.2150066 L36.6994774,12.7483929 L36.6994774,30.8366978 Z" />

  </svg>,
    title: "Business & Finance",
    description:
      "Accuracy and attention to detail are critical in corporate translation. Our specialists focus on terminology, tone, and format to ensure your contracts, finance documents, and corporate communication maintain clarity and professionalism.",
  },
  {
    icon:  <svg className="custom-icon"  width="47px" height="41px" viewBox="0 0 47 41">
    <path fill="currentColor" d="M43.3800017,30.0456912 L43.3800017,11.3952605 L45.2023218,10.7147704 C45.7300818,10.5175804 46.0800018,10.0134004 46.0800018,9.45000038 C46.0800018,8.88660035 45.7300818,8.38242033 45.2023218,8.18532033 L23.5123209,0.0853200034 C23.2077609,-0.0284400011 22.8723309,-0.0284400011 22.5677709,0.0853200034 L0.877770035,8.18532033 C0.349920014,8.38242033 0,8.88660035 0,9.45000038 C0,10.0134004 0.349920014,10.5175804 0.877680035,10.7146804 L9.86580039,14.0712306 C7.73793031,20.0752208 8.27478033,23.2335009 8.19000033,24.300001 C8.19000033,24.747931 8.41221033,25.166791 8.78310035,25.417891 C9.15408036,25.669081 9.62532038,25.719751 10.0413004,25.553431 C10.0727104,25.540921 13.2106505,24.300001 16.2900006,24.300001 C19.1385908,24.300001 22.1680809,26.6814911 22.1966109,26.7041711 C22.6897209,27.0985511 23.3902809,27.0985511 23.8833009,26.7041711 C24.719221,26.035471 27.4098611,24.300001 29.7900012,24.300001 C32.8523413,24.300001 36.0082814,25.541371 36.0386114,25.553431 C36.4545014,25.719751 36.9259215,25.668991 37.2968115,25.417891 C37.6677915,25.166791 37.8900015,24.747931 37.8900015,24.300001 C37.8116115,23.3145009 38.3309115,20.0437208 36.2141114,14.0712306 L40.6800016,12.4035305 L40.6800016,30.0456912 C39.9859216,30.4207212 39.3804916,31.0934712 38.9133015,32.0278513 C38.3114715,33.2316013 37.9800015,34.8021014 37.9800015,36.4500014 L37.9800015,39.1500016 C37.9800015,39.8955616 38.5844415,40.5 39.3300016,40.5 L44.7300018,40.5 C45.4755618,40.5 46.0800018,39.8955616 46.0800018,39.1500016 L46.0800018,36.4500014 C46.0800018,34.8021014 45.7485318,33.2316013 45.1467018,32.0278513 C44.6795118,31.0934712 44.0740818,30.4207212 43.3800017,30.0456912 Z M23.0400009,2.79108011 L40.8711616,9.45000038 C39.0316516,10.1369704 24.820201,15.4441806 23.0400009,16.1089206 C21.2598008,15.4441806 7.04835028,10.1369704 5.20884021,9.45000038 L23.0400009,2.79108011 Z M35.1789314,22.4300709 C33.7944613,22.0364109 31.8053713,21.6000009 29.7900012,21.6000009 C27.0285311,21.6000009 24.356431,23.1135309 23.0400009,23.990401 C21.7235709,23.1135309 19.0513808,21.6000009 16.2900006,21.6000009 C14.2747206,21.6000009 12.2855405,22.0364109 10.9010704,22.4300709 C10.9787404,19.6854308 11.4661805,17.6412607 12.3953405,15.0158706 L22.5677709,18.8146807 C22.8722409,18.9284408 23.2077609,18.9284408 23.5123209,18.8146807 L33.6847513,15.0158706 C34.6138214,17.6412607 35.1011714,19.6855208 35.1789314,22.4300709 L35.1789314,22.4300709 Z M43.3800017,37.8000015 L40.6800016,37.8000015 L40.6800016,36.4500014 C40.6800016,35.2310414 40.9163416,34.0593314 41.3282716,33.2353813 C41.6733317,32.5452613 41.9832017,32.4000013 42.0300017,32.4000013 C42.0768017,32.4000013 42.3866717,32.5452613 42.7317317,33.2353813 C43.1436617,34.0593314 43.3800017,35.2310414 43.3800017,36.4500014 L43.3800017,37.8000015 Z" />
  </svg>,
    title: "Education",
    description:
      "Our expert legal translators handle sensitive educational documents with confidentiality. We ensure accurate, secure translations for institutions and businesses, maintaining trust and integrity in knowledge dissemination.",
  },
];

const IndustryExpertise = () => {
  return (
    <section className="expertise-section">
      <h2 className="expertise-title">Industry Expertise</h2>
      <div className="expertise-underline"></div>
      <div className="expertise-container">
        {expertiseData.map((item, index) => (
          <div key={index} className="expertise-card">
            {item.icon}
            <h3 className="expertise-card-title">{item.title}</h3>
            <p className="expertise-card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryExpertise;
