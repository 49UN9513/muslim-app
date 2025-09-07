export enum SurahType{
    MECCAN = 'meccan',
    MEDINAN = 'medinan'
}

export interface Surah{
    id : number,
    title_ar : string
    title : string
    title_id : string
    total_verses : number
    type : SurahType
}