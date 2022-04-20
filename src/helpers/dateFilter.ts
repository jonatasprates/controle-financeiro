import { Item } from '../types/Item';

// Pegar mes atual
export const getCurrentMonth = () => {
    let now = new Date();
    //return ano-mes ex: 2022-4
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

// Lista filtrado por mes
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let[year, month] = date.split('-'); // pegando o ano e o mes retirando o -

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    // retorno de nova lista com o mesmo ano e o mesmo mes
    return newList;
}

// Formatar data dia/mes/ano 04/05/2022
export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

// Adicionando zero na data
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

// Formatar data mes ano Abril 2022
export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} ${year}`;

}

// Ajustando nova data adicionada
export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }