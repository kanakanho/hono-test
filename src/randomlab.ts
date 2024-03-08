import Lab from "./types/Lab";
import LabType from "./types/LabType";

const kaji: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "梶研究室",
        location: "4号別館",
        roomNum: "108",
    },
};

const ito: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "伊藤伸研究室",
        location: "4号別館",
        roomNum: "204",
    },
};

const naito: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "内藤研究室",
        location: "4号別館",
        roomNum: "311",
    },
};

const rohei: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "老平研究室",
        location: "4号別館",
        roomNum: "300",
    },
};

const sawano: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "澤野研究室",
        location: "4号別館",
        roomNum: "402",
    },
};

const matsukawa: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "松河研究室",
        location: "4号別館",
        roomNum: "304",
    },
};

const mizuno: Lab = {
    university: {
        name: "愛知工業大学",
        undergraduate: "情報科学部",
        department: "情報科学科",
        major: "コンピュータシステム",
    },
    lab: {
        name: "水野研究室",
        location: "4号別館",
        roomNum: "408",
    },
};

const randomLab = (): LabType => {
    const names = [kaji, ito, naito, rohei, sawano, matsukawa, mizuno];
    // ランダムな研究室をランダムな数返す
    const labs: Lab[] = [];
    for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
        labs.push(names[Math.floor(Math.random() * names.length)]);
    }
    return { objects: labs };
};

export default randomLab;
