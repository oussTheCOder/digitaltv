
    
// //     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     export const darkMode= function(){
//         if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             document.documentElement.classList.add('dark');

//         } else {
//             document.documentElement.classList.remove('dark')
//         }
        
//         let themeToggleDarkIcon = document.querySelector('.theme-toggle-dark-icon');
//         let themeToggleLightIcon = document.querySelector('.theme-toggle-light-icon');
// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// let themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
    
// });
//     }
export const darkMode = function () {
    if (localStorage.getItem('color-theme') === 'light' || (!('color-theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }

    let themeToggleDarkIcon = document.querySelector('.theme-toggle-dark-icon');
    let themeToggleLightIcon = document.querySelector('.theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'light' || (!('color-theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleDarkIcon.classList.remove('hidden');
    } else {
        themeToggleLightIcon.classList.remove('hidden');
    }

    let themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', function () {

        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}
