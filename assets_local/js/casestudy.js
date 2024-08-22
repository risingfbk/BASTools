// Data for the radar 
const radar_data = [{
    label: 'Caldera',
    data: [54, 90, 69, 28, 31, 71, 40, 41],
    fill: true,
    backgroundColor: 'rgba(96, 294, 219, 0.2)',
    borderColor: '#60CCD2',
    pointBackgroundColor: '#60CCD2',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#60CCD2'
}];

// Data for the bar 
const bar_data = [{
    data: [54, 90, 69, 28, 31, 71, 40, 41],
    fill: true,
    backgroundColor: [
        'rgb(220, 224, 130)',
        'rgb(113, 191, 121)',
        'rgb(175, 212, 127)',
        'rgb(237, 104, 104)',
        'rgb(240, 134, 110)',
        'rgb(169, 209, 125)',
        'rgb(250, 205, 122)',
        'rgb(250, 214, 125)'

    ],
    borderColor: [
        'rgb(245, 231, 130)',
        'rgb(113, 191, 121)',
        'rgb(175, 212, 127)',
        'rgb(237, 104, 104)',
        'rgb(240, 134, 110)',
        'rgb(169, 209, 125)',
        'rgb(250, 205, 122)',
        'rgb(250, 214, 125)'

    ],
    pointBackgroundColor: '#60CCD2',
    pointBorderColor: '#FFFFFF',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#60CCD2',
}];

// function to call to return the data
function get_radar_data() {
    return radar_data;
}

// function to call to return the data
function get_bar_data() {
    return bar_data;
}

