export class DateConstants {
    static getCalendar() {
        return {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qa', 'Qi', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };
    }

    static getDropDownMesReferencia() {
        const items = [{ 'id': 1, 'descricao': 'Janeiro' },
        { 'id': 2, 'descricao': 'Fevereiro' },
        { 'id': 3, 'descricao': 'Março' },
        { 'id': 4, 'descricao': 'Abril' },
        { 'id': 5, 'descricao': 'Maio' },
        { 'id': 6, 'descricao': 'Junho' },
        { 'id': 7, 'descricao': 'Julho' },
        { 'id': 8, 'descricao': 'Agosto' },
        { 'id': 9, 'descricao': 'Setembro' },
        { 'id': 10, 'descricao': 'Outubro' },
        { 'id': 11, 'descricao': 'Novembro' },
        { 'id': 12, 'descricao': 'Dezembro' }];
        return items;
    }
}
