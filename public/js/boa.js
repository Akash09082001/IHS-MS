const boaData = [
    {
        id: 3,
        name: "MEHAMOOD MANSOORI",
        position: "MD & CEO",
        img: "https://media.itm.ac.in/MEHAMOOD_MANSOORI_fd9ddfb950.webp",
        logo: "https://media.itm.ac.in/MEHAMOOD_MANSOORI_1_77fa8cc2f3.webp"
    },
    {
        id: 18,
        name: "DEVVRAT ARYA",
        position: "VP of Technology",
        img: "https://media.itm.ac.in/DEVVRAT_ARYA_be1ac80263.webp",
        logo: "https://media.itm.ac.in/DEVVRAT_ARYA_1_d22e102537.webp"
    },
    {
        id: 2,
        name: "SUMON MAL",
        position: "Director of Engineering",
        img: "https://media.itm.ac.in/SUMON_MAL_0594a4b777.webp",
        logo: "https://media.itm.ac.in/SUMON_MAL_1_b7d366771b.webp"
    },
    {
        id: 8,
        name: "ABHIJIT PETKAR",
        position: "CTO",
        img: "https://media.itm.ac.in/ABHIJIT_PETKAR_1edc295696.webp",
        logo: "https://media.itm.ac.in/ABHIJIT_PETKAR_1_5b24ebd33d.webp"
    },
    {
        id: 19,
        name: "JAI DAGA",
        position: "VP of Technology",
        img: "https://media.itm.ac.in/JAI_DAGA_48c5a13eaa.webp",
        logo: "https://media.itm.ac.in/JAI_DAGA_1_4dc6e0f1f0.webp"
    },
    {
        id: 10,
        name: "PRASHANTH KUMAR",
        position: "Director IT",
        img: "https://media.itm.ac.in/PRASHANTH_KUMAR_089bf802d2.webp",
        logo: "https://media.itm.ac.in/PRASHANTH_KUMAR_1_bd41ece32f.webp"
    },
    {
        id: 1,
        name: "SHAILENDRA SAWANT",
        position: "CTO",
        img: "https://media.itm.ac.in/SHAILENDRA_SAWANT_4e546bf4e0.webp",
        logo: "https://media.itm.ac.in/SHAILENDRA_SAWANT_1_61196e100d.webp"
    },

    {
        id: 4,
        name: "VISHAL DUBEY",
        position: "Chief Technology Evangelist",
        img: "https://media.itm.ac.in/VISHAL_DUBEY_7fc4810048.webp",
        logo: "https://media.itm.ac.in/VISHAL_DUBEY_1_697537f31f.webp"
    },
    {
        id: 5,
        name: "FAIZ MALKHANI",
        position: "Founding Organizer",
        img: "https://media.itm.ac.in/FAIZ_MALKHANI_9de5f4f1c9.webp",
        logo: "https://media.itm.ac.in/FAIZ_MALKHANI_1_d282a86935.webp"
    },
    {
        id: 6,
        name: "VIVEK YADAV",
        position: "Google Developer Expert",
        img: "https://media.itm.ac.in/VIVEK_YADAV_436fc1c59b.webp",
        logo: "https://media.itm.ac.in/VIVEK_YADAV_1_efe68fdfa4.webp"
    },
    {
        id: 7,
        name: "VARUN RAJ",
        position: "Google Developer Expert",
        img: "https://media.itm.ac.in/VARUN_RAJ_83d54ab3fd.webp",
        logo: "https://media.itm.ac.in/VARUN_RAJ_1_56a821eb59.webp"
    },

    {
        id: 9,
        name: "AJAY MARU",
        position: "CTO",
        img: "https://media.itm.ac.in/AJAY_MARU_3c78234542.webp",
        logo: "https://media.itm.ac.in/AJAY_MARU_1_7e3227bc36.webp"
    },

    {
        id: 11,
        name: "ASIM MALIK",
        position: "The Board of Advisors",
        img: "https://media.itm.ac.in/ASIM_MALIK_78dd8ab548.webp",
        logo: "https://media.itm.ac.in/ASIM_MALIK_1_843ff99371.webp"
    },
    {
        id: 12,
        name: "AMIT A. BADIYANI",
        position: "Founder &Managing Director",
        img: "https://media.itm.ac.in/AMIT_A_BADIYANI_c6705c52b3.webp",
        logo: "https://media.itm.ac.in/AMIT_A_BADIYANI_1_e0d4704cbb.webp"
    },
    {
        id: 13,
        name: "SANJAY KUMAR",
        position: "Engineering Director",
        img: "https://media.itm.ac.in/SANJAY_KUMAR_52ae381993.webp",
        logo: "https://media.itm.ac.in/SANJAY_KUMAR_1_8dd336c92f.webp"
    },
    {
        id: 14,
        name: "KESHAV KARUNAKAR",
        position: "Co Founder & VP Engineering",
        img: "https://media.itm.ac.in/KESHAV_KARUNAKAR_c885335c5d.webp",
        logo: "https://media.itm.ac.in/KESHAV_KARUNAKAR_1_5e972b973a.webp"
    },
    {
        id: 15,
        name: "ANKUSH GORAV",
        position: "VP of Engineering",
        img: "https://media.itm.ac.in/ANKUSH_GORAV_c7d4d2b76a.webp",
        logo: "https://media.itm.ac.in/ANKUSH_GORAV_1_9fe806fd69.webp"
    },
    {
        id: 16,
        name: "SUNDEEP MEHTA",
        position: "Sr Vice President",
        img: "https://media.itm.ac.in/SUNDEEP_MEHTA_a12a01b426.webp",
        logo: "https://media.itm.ac.in/SUNDEEP_MEHTA_1_befac04ac9.webp"
    },
    {
        id: 17,
        name: "MUKESH MARFATIA",
        position: "EVP Corporate Strategy",
        img: "https://media.itm.ac.in/MUKESH_MARFATIA_63804e7397.webp",
        logo: "https://media.itm.ac.in/MUKESH_MARFATIA_1_3310a72f8a.webp"
    },



];

let output1 = boaData.map(showBoaData).join("");
let boaDataCards = document.getElementById("boa-container");
boaDataCards.innerHTML = output1;

function showBoaData(boaData) {
    let listCard = `
    <div class="flex flex-col w-40 md:w-52 rounded-2xl">
        <div class="flex w-full shadow-md bg-brand-yellow rounded-2xl">
            <img loading="lazy" src=${boaData.img} alt=${boaData.name}
                class="flex w-full h-full object-cover rounded-2xl grayscale">
        </div>
        <div class="flex flex-col items-center justify-center gap-1 py-3">
            <strong class="text-xs md:text-base text-center text-brand-red font-bold py-2">${boaData.name}</strong>
            <div class="flex h-8 md:h-auto w-fit mx-auto">
                <p class="text-xs text-center">${boaData.position}</p>
            </div>
            <div class="flex h-12 w-fit mx-auto">
                <img loading="lazy" src=${boaData.logo}
                    class="flex h-full w-fit object-center object-contain" alt=${boaData.name}>
            </div>
        </div>
    </div>                       
    `;
    return listCard;
}