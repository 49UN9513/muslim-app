// export const fetchSurah = async () => {
//     try {
//         const response = await fetch('http://192.168.1.3:3000/api/quran/surah',{
//             method : 'GET'
//         })


//         const result = await response.json()

//         return result
//     } catch (error) {
    //         return error
    //     }
    // }
import { Surah, SurahType } from "@/types/quran";

export const fetchSurah = async () => {
    const dummySurahs: Surah[] = [
        {
          id: 1,
          title_ar: 'الفاتحة',
          title: 'Al-Fatihah',
          title_id: 'Al-Fatihah',
          total_verses: 7,
          type: SurahType.MECCAN,
        },
        {
          id: 2,
          title_ar: 'البقرة',
          title: 'Al-Baqarah',
          title_id: 'Al-Baqarah',
          total_verses: 286,
          type: SurahType.MEDINAN,
        },
        {
          id: 3,
          title_ar: 'آل عمران',
          title: 'Ali \'Imran',
          title_id: 'Ali Imran',
          total_verses: 200,
          type: SurahType.MEDINAN,
        },
        {
          id: 4,
          title_ar: 'النساء',
          title: 'An-Nisa\'',
          title_id: 'An-Nisa',
          total_verses: 176,
          type: SurahType.MEDINAN,
        },
        {
          id: 5,
          title_ar: 'الأنعام',
          title: 'Al-An\'am',
          title_id: 'Al-An\'am',
          total_verses: 165,
          type: SurahType.MECCAN,
        },
    ];

    return dummySurahs
}