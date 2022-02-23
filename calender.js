
//calender
let dpMin, dpMax;

dpMin = new AirDatepicker('#el1', {
    autoClose: true,
    minDate: new Date(),
    view: 'days',
    minView: 'months',
    dateFormat: 'E, MMM d',
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    },
})

dpMax = new AirDatepicker('#el2', {
    autoClose: true,
    minDate: new Date(),
    view: 'days',
    minView: 'months',
    dateFormat: 'E, MMM d',
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    }
});



